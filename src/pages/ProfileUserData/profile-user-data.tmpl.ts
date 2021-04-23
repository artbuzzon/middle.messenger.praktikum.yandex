export const tmpl = `
<form class="profile" data-name="profile-form" method="POST">
    <div class="profile__content-field">
        <a href="profile.html">Назад</a>
    </div>
    <ul class="profile__content">
        <li class="profile__content-avatar">
        </li>
        <li class="profile__content-field">
            <label for="profile_pic">Выберите изображение</label>
            <input id="profile_pic" type="file" accept=".jpg, .jpeg, .png">
        </li>
        <div data-name="fields-container"></div>
  
        <button data-uuid="{{btnUuid}}" type="submit">Сохранить</button>
    </ul>
</form>
`;
