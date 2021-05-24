export const tmpl = `
<form name="form" class="profile" data-name="profile-form" method="POST">
    <div class="profile__content-field">
        <a data-name="goback" href="profile">Назад</a>
    </div>
    <ul class="profile__content">
        <li class="profile__content-avatar">
            <img id="avatar" src="" alt="avatar">
        </li>
        <li class="profile__content-field">
            <label for="profile_pic">Выберите изображение</label>
            <input id="profile_pic" type="file" accept=".jpg, .jpeg, .png">
        </li>
        
        <div data-component="profile-user-data-form"></div>
        <button data-name="profile-user-data-form-btn" type="submit">Сохранить</button>
    </ul>
</form>
`;
