export default  `
    <div class="login">
        <p class="login__title">Вход</p>
        <div class="input-field-container">
            <label for="login__login-input">Логин</label>
            <input id="login__login-input" placeholder="ivanivanov"/>
        </div>
        <div class="input-field-container">
            <label for="login__password-input">Пароль</label>
            <input type="password" id="login__password-input" placeholder="password"/>
        </div>
        <button onclick="location.href='index.html';" class="login__auth-btn">Авторизоваться</button>
        <a href="signin.html" class="login__auth-btn">Нет аккаунта?</a>
    </div>
`;
