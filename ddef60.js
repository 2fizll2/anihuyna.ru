// Управление модальными окнами
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const closeButtons = document.querySelectorAll('.close-btn');

// Открыть модальное окно входа
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    registerModal.style.display = 'none';
});

// Открыть модальное окно регистрации
registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'flex';
    loginModal.style.display = 'none';
});

// Переключение между формами
showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.style.display = 'flex';
    loginModal.style.display = 'none';
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'flex';
    registerModal.style.display = 'none';
});

// Закрытие модальных окон
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    });
});

// Закрытие при клике вне модального окна
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === registerModal) {
        registerModal.style.display = 'none';
    }
});

// Обработка формы входа
document.getElementById('loginFormElement').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // В реальном приложении здесь будет AJAX-запрос
    console.log('Вход:', email, password);
    
    // Закрываем модальное окно
    loginModal.style.display = 'none';
    
    // Обновляем интерфейс для авторизованного пользователя
    updateUIAfterLogin(email);
});

// Обработка формы регистрации
document.getElementById('registerFormElement').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Пароли не совпадают!');
        return;
    }
    
    // В реальном приложении здесь будет AJAX-запрос
    console.log('Регистрация:', email, password);
    
    // Закрываем модальное окно
    registerModal.style.display = 'none';
    
    // Обновляем интерфейс для авторизованного пользователя
    updateUIAfterLogin(email);
});

// Обновление UI после входа
function updateUIAfterLogin(email) {
    const userActions = document.querySelector('.user-actions');
    userActions.innerHTML = `
        <div class="user-info">
            <div class="user-avatar">${email.charAt(0).toUpperCase()}</div>
            <span>${email}</span>
        </div>
        <button class="btn btn-logout" id="logoutBtn">Выйти</button>
    `;
    
    // Активируем форму комментариев
    const commentForm = document.getElementById('commentForm');
    commentForm.querySelector('textarea').removeAttribute('disabled');
    commentForm.querySelector('button').removeAttribute('disabled');
    
    // Добавляем обработчик выхода
    document.getElementById('logoutBtn').addEventListener('click', logout);
}

// Выход из системы
function logout() {
    const userActions = document.querySelector('.user-actions');
    userActions.innerHTML = `
        <button class="btn btn-login" id="loginBtn">Войти</button>
        <button class="btn btn-register" id="registerBtn">Регистрация</button>
    `;
    
    // Деактивируем форму комментариев
    const commentForm = document.getElementById('commentForm');
    commentForm.querySelector('textarea').setAttribute('disabled', 'true');
    commentForm.querySelector('button').setAttribute('disabled', 'true');
    
    // Перепривязываем обработчики
    document.getElementById('loginBtn').addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });
    document.getElementById('registerBtn').addEventListener('click', () => {
        registerModal.style.display = 'flex';
    });
}