export default  `
<form data-name="profile-password-form" class="profile">
    <div class="profile__content-field">
        <a href="profile.html">Назад</a>
    </div>
    <div class="profile__content">
        <div class="profile__content-avatar">
        </div>
        <div class="profile__content-field">
            <label for="old-pass">Старый пароль</label>
            <input type="password" id="old-pass"/>
        </div>
        <div class="profile__content-field">
            <label for="new-pass">Новый пароль</label>
            <input type="password" id="new-pass"/>
        </div>
        <div class="profile__content-field">
            <label for="repeat-pass">Повторите новый пароль</label>
            <input type="password" id="repeat-pass"/>
        </div>
        <button type="submit">Сохранить</button>
    </div>
</form>
`;
