export default `
<div class="signin">
    <p class="signin__title">Регистрация</p>
    <div class="input-field-container">
        <label for="signin__email-input">Почта</label>
        <input id="signin__email-input" placeholder="@ivanivanov"/>
    </div>
    <div class="input-field-container">
        <label for="signin__login-input">Логин</label>
        <input id="signin__login-input" placeholder="ivanivanov"/>
    </div>
    <div class="input-field-container">
        <label for="signin__name-input">Имя</label>
        <input id="signin__name-input" placeholder="ivanivanov"/>
    </div>
    <div class="input-field-container">

        <label for="signin__secname-input">Фамилия</label>
        <input id="signin__secname-input" placeholder="ivanivanov"/>
    </div>
    <div class="input-field-container">

        <label for="signin__phone-input">Телефон</label>
        <input  id="signin__phone-input" placeholder="ivanivanov"/>
    </div>
    <div class="input-field-container">

        <label for="signin__password-input">Пароль</label>
        <input type="password" id="signin__password-input" placeholder="password"/>
    </div>
    <div class="input-field-container">

        <label for="signin__password-2-input">Пароль (еще раз)</label>
        <input type="password" id="signin__password-2-input" placeholder="password"/>
    </div>

    <button onclick="location.href='index.html';" class="signin__auth-btn">Авторизоваться</button>
</div>
`;
