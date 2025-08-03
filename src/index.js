import './style.css';
import logo from './assets/logo.svg';

const API_BASE_URL = 'https://portal.dnrtko.ru/api';

// Глобальное состояние приложения
const appState = {
  currentUser: null,
  currentCaptchaUrl: null,
  registrationData: {
    inn: '',
    organization: '',
    kpp: '',
    number: '',
    email: '',
    captcha: ''
  },
  isCodeVerified: false
};

// Утилиты для работы с DOM
const DOM = {
  get: (id) => document.getElementById(id),
  show: (element) => {
    if (element) element.style.display = 'block';
    else console.warn('Attempt to show null element');
  },
  hide: (element) => {
    if (element) element.style.display = 'none';
    else console.warn('Attempt to hide null element');
  },
  addClass: (element, className) => element.classList.add(className),
  removeClass: (element, className) => element.classList.remove(className),
  disable: (element) => {
    if (element) {
      element.disabled = true;
      element.style.opacity = '0.6';
      element.style.cursor = 'not-allowed';
    }
  },
  enable: (element) => {
    if (element) {
      element.disabled = false;
      element.style.opacity = '1';
      element.style.cursor = 'pointer';
    }
  }
};

// Функции для работы с API
const API = {
async fetch(endpoint, method = 'GET', body = null) {
  const options = {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  const token = Cookies.get('userToken');
  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  if (body) options.body = JSON.stringify(body);

  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  let data;
  try {
    data = await response.json();
  } catch (e) {
    data = { status: 5, message: await response.text() }; // критическая ошибка
  }

  if (data.status !== 0) {
    let errorText = 'Неизвестная ошибка';
console.log(response)
console.log(data.das)
console.log('Sending status to /users/status:', data.status);
try {
  const statusRes = await fetch(`${API_BASE_URL}/users/status`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ status: data.status })
  });

  const statusData = await statusRes.json();
  errorText = statusData.message || errorText;
} catch (e) {
  console.warn('Не удалось получить расшифровку ошибки');
}

    const error = new Error(errorText);
    error.status = data.status;
    throw error;
  }

  return data;
},

  async searchByInn(inn) {
    try {
      const endpoint = inn.length === 12 ? '/users/search_ip' : '/utils/search_fns';
      return await this.fetch(endpoint, 'POST', { inn });
    } catch (error) {
      console.error('Search by INN error:', error);
      throw error;
    }
  },

  async getCaptcha() {
    try {
      const response = await fetch(`${API_BASE_URL}/users/captcha`, {
        credentials: 'include'
      });
      const captchaBlob = await response.blob();
      return URL.createObjectURL(captchaBlob);
    } catch (error) {
      console.error('Ошибка загрузки капчи:', error);
      throw error;
    }
  },

  async getVerificationCode() {
    try {
      const response = await fetch(`${API_BASE_URL}/users/_debug/get_code`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          number: appState.registrationData.number 
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Ошибка отправки SMS');
      }

      return true;
    } catch (error) {
      console.error('SMS sending error:', error);
      throw error;
    }
  },

  async register(userData) {
    try {
      const response = await this.fetch('/users/register', 'POST', userData);
      return response;
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      throw error;
    }
  },

  async sendVerificationCode(phoneNumber, code) {
    try {
      const response = await fetch(`${API_BASE_URL}/users/registerf`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          number: phoneNumber,
          code: code
        })
      });

      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.detail || 'Ошибка проверки кода');
      }

      return responseData;
    } catch (error) {
      console.error('Verification error:', error);
      throw error;
    }
  },

  async login(credentials) {
    try {
      const response = await fetch(`${API_BASE_URL}/users/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Ошибка входа');
      }
      
      return data; // сервер возвращает access_token здесь
    } catch (error) {
      console.error('Ошибка входа:', error);
      throw error;
    }
  }
};

// Функции для работы с cookies
const Cookies = {
  set(name, value, days = 7) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  },

  get(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  },

  remove(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
};

const UI = {
  elements: {},

  init() {
    this.cacheElements();
    this.bindEvents();
    this.showLogin(); // Показываем форму входа по умолчанию
    this.disableRegisterButton();
    const message = localStorage.getItem('registrationSuccessMessage');
    if (message) {
      this.showSuccess(message);
      localStorage.removeItem('registrationSuccessMessage');
    }
  },

  cacheElements() {

    const btn = document.getElementById('searchBtn');
    console.log('Search button:', btn);
    if (!btn) {
      console.error('Search button not found in DOM!');
      console.log('All buttons:', document.querySelectorAll('button'));
    }
    
    // Основные элементы форм
    this.elements = {
      captchaContainer: document.querySelector('.captcha-container'),

      loginForm: document.getElementById('loginForm'),
      registrationForm: document.getElementById('registrationForm'),
      serviceSelection: document.getElementById('serviceSelection'),
      
      // Элементы формы входа
      loginInput: document.getElementById('loginInput'),
      passwordInput: document.getElementById('passwordInput'),
      
      // Элементы формы регистрации
      innInput: document.getElementById('innInput'),
      orgNameInput: document.getElementById('orgNameInput'),
      kppInput: document.getElementById('kppInput'),
      emailInput: document.getElementById('emailInput'),
      phoneInput: document.getElementById('phoneInput'),
      regPasswordInput: document.getElementById('regPasswordInput'),
      regConfirmPasswordInput: document.getElementById('regConfirmPasswordInput'),
      registerBtn: document.getElementById('registerBtn'),
      searchBtn: document.getElementById('searchBtn'),
      captchaImage: document.getElementById('captchaImage'),
      captchaInput: document.getElementById('captchaInput'),
      loginMessagesContainer: document.getElementById('loginMessagesContainer'),
      registerMessagesContainer: document.getElementById('registerMessagesContainer'),
      passwordError: document.getElementById('passwordError')
    };
    
    console.log('Cached elements:', this.elements);
  },

  bindEvents() {
    // Кнопка поиска по ИНН
    if (this.elements.searchBtn) {
      this.elements.searchBtn.addEventListener('click', () => this.handleSearchByInn());
    }
 else {
    console.error('Search button not found');
  }


    // Кнопка входа
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
      loginBtn.addEventListener('click', () => this.handleLogin());
    }

    // Кнопка регистрации
    if (this.elements.registerBtn) {
      this.elements.registerBtn.addEventListener('click', () => this.handleRegister());
    }

    // Ссылка "Регистрация"
    // const registerLink = document.querySelector('.link[onclick="showRegistration()"]');
    // if (registerLink) {
    //   registerLink.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     this.showRegistration();
    //   });
    // }
    const registerLink = document.querySelector('.register-link');
    if (registerLink) {
      registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        UI.showRegistration();
      });
    }

    // Ссылка "Забыли пароль"
    // const forgotPasswordLink = document.querySelector('.link[onclick="forgotPassword()"]');
    // if (forgotPasswordLink) {
    //   forgotPasswordLink.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     this.forgotPassword();
    //   });
    // }

    const forgotPasswordLink = document.querySelector('.forgot-link');
    if (forgotPasswordLink) {
      forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        UI.forgotPassword();
      });
    }

    // Кнопка "Назад"
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => this.showLogin());
    }

    // Кнопка обновления капчи
    const refreshCaptchaBtn = document.querySelector('.refresh-btn');
    if (refreshCaptchaBtn) {
      refreshCaptchaBtn.addEventListener('click', () => this.refreshCaptcha());
    }

    // Валидация паролей
    if (this.elements.regPasswordInput && this.elements.regConfirmPasswordInput) {
      this.elements.regConfirmPasswordInput.addEventListener('input', () => this.validatePasswords());
    }
  },

  async checkAuthStatus() {
    const token = Cookies.get('userToken');
    if (token) {
      try {
        const userData = await API.validateSession();
        if (userData) {
          appState.currentUser = {
            token: token,
            name_org: userData.name_org || ''
          };
          this.showServiceSelection();
        } else {
          this.showLogin();
          Cookies.remove('userToken');
        }
      } catch (error) {
        console.error('Session validation error:', error);
        this.showLogin();
      }
    } else {
      this.showLogin();
    }
  },

  // Методы отображения экранов
  showLogin() {
    // Скрываем другие формы
    if (this.elements.registrationForm) {
      this.elements.registrationForm.style.display = 'none';
    }
    if (this.elements.serviceSelection) {
      this.elements.serviceSelection.style.display = 'none';
    }
    
    // Показываем форму входа
    if (this.elements.loginForm) {
      this.elements.loginForm.style.display = 'block';
    }
  },

  showRegistration() {
    console.log('>> showRegistration вызван');
    // Скрываем другие формы
    if (this.elements.loginForm) {
      this.elements.loginForm.style.display = 'none';
    }
    if (this.elements.serviceSelection) {
      this.elements.serviceSelection.style.display = 'none';
    }
    
    // Показываем форму регистрации
    if (this.elements.registrationForm) {
      this.elements.registrationForm.style.display = 'block';
      this.refreshCaptcha();
    }
  },

  showServiceSelection() {
      // Скрываем форму входа
      if (this.elements.loginForm) {
          this.elements.loginForm.style.display = 'none';
      }
      // Скрываем форму регистрации
      if (this.elements.registrationForm) {
          this.elements.registrationForm.style.display = 'none';
      }
      
      // Показываем основное приложение
      if (this.elements.serviceSelection) {
          this.elements.serviceSelection.style.display = 'block';
          this.updateCompanyName();
      }
  },


  hideAllScreens() {
    Object.values(this.elements).forEach(el => {
      if (el && el.style) el.style.display = 'none'; // Это скрывает ВСЕ элементы, включая поля ввода
    });
  },

  updateCompanyName() {
    if (appState.currentUser && appState.currentUser.name_org) {
      const companyName = document.querySelector('.service-header .company-name');
      if (companyName) {
        companyName.textContent = appState.currentUser.name_org;
      }
    }
  },

  // Обработчики действий
async handleSearchByInn() {
  if (!this.elements.innInput) return;

  const inn = this.elements.innInput.value.trim();
  if (!inn || (inn.length !== 10 && inn.length !== 12)) {
    this.showError('ИНН должен содержать 10 или 12 цифр', 'innInput', "register");
    return;
  }

  try {
    DOM.disable(this.elements.searchBtn);
    this.elements.searchBtn.textContent = 'Поиск...';

    const orgData = await API.searchByInn(inn);

    if (orgData) {
      if (this.elements.orgNameInput) {
        this.elements.orgNameInput.value = orgData.name || orgData.name_org || '';
      }
      if (this.elements.kppInput && orgData.kpp) {
        this.elements.kppInput.value = orgData.kpp;
      }
      this.showSuccess('Организация найдена');
    }

  } catch (error) {
    this.showError(error.message, null, "register");
  } finally {
    DOM.enable(this.elements.searchBtn);
    this.elements.searchBtn.textContent = 'Найти';
  }
},

async handleLogin() {
  try {
    const response = await API.login({
      login: this.elements.loginInput.value.trim(),
      password: this.elements.passwordInput.value.trim()
    });

    // Исправлено: берем токен из access_token, а не из token
    const token = response.access_token.replace('Bearer ', '');
    
    // Сохраняем токен в куки
    Cookies.set('userToken', token);
    console.log('Token saved to cookies:', token); // Для отладки
    
    // Перенаправляем или показываем основной интерфейс
    this.showServiceSelection();
  } catch (error) {
    this.showError(error.message, null, "login");
  }
},

async handleRegister() {
  if (!this.validateRegistrationForm()) return;

  try {
    const userData = {
      password: this.elements.regPasswordInput.value.trim(),
      email: this.elements.emailInput.value.trim(),
      number: this.elements.phoneInput.value.trim(),
      inn: this.elements.innInput.value.trim(),
      kpp: this.elements.kppInput.value.trim(),
      name_org: this.elements.orgNameInput.value.trim(),
      captcha_answer: this.elements.captchaInput.value.trim()
    };

    appState.registrationData = userData;

    const originalBtnText = this.elements.registerBtn.textContent;
    this.elements.registerBtn.disabled = true;
    this.elements.registerBtn.textContent = 'Отправка...';

    await API.register(userData);
    await API.getVerificationCode();
    this.showSmsCodeInput(userData.number);

  } catch (error) {
    this.showError(error.message, null, "register");
    this.refreshCaptcha();
  } finally {
    this.elements.registerBtn.disabled = false;
    this.elements.registerBtn.textContent = 'Зарегистрировать';
  }
},

  showSmsCodeInput(phoneNumber) {
    const captchaContainer = this.elements.captchaContainer;
    if (!captchaContainer) return;
    
    // Очищаем контейнер
    captchaContainer.innerHTML = '';

    // Создаем поле для ввода кода
    const codeInput = document.createElement('input');
    codeInput.type = 'text';
    codeInput.id = 'verifyCodeInput';
    codeInput.placeholder = 'Введите 6-значный код из SMS';
    codeInput.className = 'form-input';
    captchaContainer.appendChild(codeInput);

    // Создаем кнопку подтверждения
    const verifyBtn = document.createElement('button');
    verifyBtn.className = 'verify-btn';
    verifyBtn.textContent = 'Подтвердить код';
    verifyBtn.style.marginLeft = '10px';
    verifyBtn.style.padding = '12px 24px';
    verifyBtn.style.backgroundColor = '#01AA2C';
    verifyBtn.style.color = 'white';
    verifyBtn.style.border = 'none';
    verifyBtn.style.borderRadius = '8px';
    verifyBtn.style.cursor = 'pointer';

    // verifyBtn.onclick = async () => {
    //   const code = codeInput.value.trim();
    //   if (!code || code.length !== 6) {
    //     this.showError('Введите 6-значный код');
    //     return;
    //   }

    //   verifyBtn.disabled = true;
    //   verifyBtn.textContent = 'Проверка...';

    //   try {
    //     const response = await API.sendVerificationCode(phoneNumber, code);
        
    //     appState.currentUser = {
    //       token: response.access_token,
    //       email: response.email,
    //       id: response.id
    //     };
        
    //     this.showSuccess('Регистрация завершена успешно!');
        
    //     setTimeout(() => {
    //       this.showLogin();
    //       this.showSuccess('Вы успешно зарегистрированы! Теперь можете войти в систему.');
    //     }, 2000);
        
    //   } catch (error) {
    //     this.showError(error.message || 'Неверный код подтверждения');
    //   } finally {
    //     verifyBtn.disabled = false;
    //     verifyBtn.textContent = 'Подтвердить код';
    //   }
    // };
verifyBtn.onclick = async () => {
  const code = codeInput.value.trim();
  if (!code || code.length !== 6) {
    this.showError('Введите 6-значный код', null, "register");
    return;
  }

  verifyBtn.disabled = true;
  verifyBtn.textContent = 'Проверка...';

  try {
    const response = await API.sendVerificationCode(phoneNumber, code);

    appState.currentUser = {
      token: response.access_token,
      email: response.email,
      id: response.id
    };

    localStorage.setItem('registrationSuccessMessage', 'Вы успешно зарегистрированы!');
    window.location.href = '/';

  } catch (error) {
    this.showError(error.message || 'Ошибка подтверждения', null, "register");
  } finally {
    verifyBtn.disabled = false;
    verifyBtn.textContent = 'Подтвердить код';
  }
};


    captchaContainer.appendChild(verifyBtn);
    
    // Скрываем основную кнопку регистрации
    DOM.hide(this.elements.registerBtn);
    
    this.showSuccess('Код подтверждения отправлен на ваш номер. Введите его ниже.');
  },

  validatePasswords() {
    if (!this.elements.regPasswordInput || !this.elements.regConfirmPasswordInput || !this.elements.passwordError) {
      return false;
    }

    const password = this.elements.regPasswordInput.value;
    const confirm = this.elements.regConfirmPasswordInput.value;
    
    if (password !== confirm) {
      this.elements.passwordError.style.display = 'block';
      return false;
    }
    
    this.elements.passwordError.style.display = 'none';
    return true;
  },

  validateRegistrationForm() {
    let isValid = true;
    
    // Проверка ИНН
    const inn = this.elements.innInput?.value.trim();
    if (!inn || (inn.length !== 10 && inn.length !== 12) || !/^\d+$/.test(inn)) {
      this.showError('ИНН должен содержать 10 или 12 цифр', 'innInput', "register");
      isValid = false;
    }
    
    // Проверка названия организации
    const orgName = this.elements.orgNameInput?.value.trim();
    if (!orgName) {
      this.showError('Укажите название организации', 'orgNameInput', "register");
      isValid = false;
    }
    
    // Проверка email
    const email = this.elements.emailInput?.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.showError('Введите корректный email', 'emailInput', "register");
      isValid = false;
    }
    
    // Проверка телефона
    const phone = this.elements.phoneInput?.value.trim();
    if (!phone || phone.replace(/\D/g, '').length < 10) {
      this.showError('Введите корректный номер телефона', 'phoneInput', "register");
      isValid = false;
    }
    
    // Проверка паролей
    if (!this.validatePasswords()) {
      isValid = false;
    }
    
    // Проверка капчи
    const captcha = this.elements.captchaInput?.value.trim();
    if (!captcha) {
      this.showError('Введите текст с картинки', 'captchaInput', "register");
      isValid = false;
    }
    
    return isValid;
  },

  async refreshCaptcha() {
    try {
      if (appState.currentCaptchaUrl) {
        URL.revokeObjectURL(appState.currentCaptchaUrl);
      }
      
      appState.currentCaptchaUrl = await API.getCaptcha();
      if (this.elements.captchaImage) {
        this.elements.captchaImage.src = appState.currentCaptchaUrl;
      }
    } catch (error) {
      console.error('Failed to refresh captcha:', error);
      this.showError('Не удалось загрузить капчу', null, "register");
    }
  },

  logout() {
    Cookies.remove('userToken');
    Cookies.remove('userLogin');
    Cookies.remove('userOrgName');
    appState.currentUser = null;
    this.showLogin();
  },

  showError(message, fieldId = null, context = 'login') {
    const container = context === 'register'
      ? this.elements.registerMessagesContainer
      : this.elements.loginMessagesContainer;
    if (!container) return;
    // if (!this.elements.registerMessagesContainer) return;

    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.cssText = `
      color: #DC2626;
      background: #FEE2E2;
      padding: 12px;
      border-radius: 8px;
      margin-bottom: 10px;
      border: 1px solid #FCA5A5;
      font-size: 14px;
    `;
    errorElement.textContent = message;
    
    // this.elements.messagesContainer.appendChild(errorElement);
    container.appendChild(errorElement);

    if (fieldId) {
      const fieldContainer = document.getElementById(fieldId)?.parentNode;
      if (fieldContainer) {
        const existingError = fieldContainer.querySelector('.field-error');
        if (existingError) existingError.remove();

        const field = document.getElementById(fieldId);
        if (field) {
          field.style.borderColor = '#DC2626';
          setTimeout(() => {
            field.style.borderColor = '';
          }, 5000);
        }
      }
    }
    
    setTimeout(() => {
      if (errorElement.parentNode) {
        errorElement.parentNode.removeChild(errorElement);
      }
    }, 5000);
  },

  showSuccess(message, duration = 3000) {
    if (!this.elements.messagesContainer) return;

    const successElement = document.createElement('div');
    successElement.className = 'success-message';
    successElement.style.cssText = `
      color: #166534;
      background: #DCFCE7;
      padding: 12px;
      border-radius: 8px;
      margin-bottom: 10px;
      border: 1px solid #86EFAC;
      font-size: 14px;
    `;
    successElement.textContent = message;
    
    this.elements.messagesContainer.appendChild(successElement);
    
    setTimeout(() => {
      if (successElement.parentNode) {
        successElement.parentNode.removeChild(successElement);
      }
    }, duration);
  },

  disableRegisterButton() {
    if (this.elements.registerBtn) {
      DOM.disable(this.elements.registerBtn);
    }
  },

  enableRegisterButton() {
    if (this.elements.registerBtn) {
      DOM.enable(this.elements.registerBtn);
    }
  },

  forgotPassword() {
    this.showError('Функция восстановления пароля временно недоступна');
  }
};

// Инициализация приложения
document.addEventListener('DOMContentLoaded', async () => {
  try {
    UI.init();
    await UI.checkAuthStatus(); // Добавьте эту строку
    
    // Экспорт функций в глобальную область видимости
    window.login = () => UI.handleLogin();
    window.logout = () => UI.logout();
    window.searchByInn = () => UI.handleSearchByInn();
    window.showRegistration = () => UI.showRegistration();
    window.showServiceSelection = () => UI.showServiceSelection();
    window.forgotPassword = () => UI.forgotPassword();
    window.refreshCaptcha = () => UI.refreshCaptcha();
    window.showLogin = () => UI.showLogin();
    window.register = () => UI.handleRegister();
    
    console.log('Application initialized successfully');
  } catch (error) {
    console.error('Initialization error:', error);
  }
}); 