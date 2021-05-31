export const tmpl =  `
<div class="profile">
    <div class="profile__content-field">
        <a data-navigation data-name="goback" href="/">Назад</a>
    </div>
    <ul class="profile__content">
        <li class="profile__content-avatar">
        </li>
        <div data-name="fields-container"></div>
        <li class="profile__content-field">
            <span>Почта</span>
            <span>{{email}}</span>
        </li>
        <li class="profile__content-field">
            <span>Логин</span>
            <span>{{login}}</span>
        </li>
        <li class="profile__content-field">
            <span>Имя</span>
            <span>{{first_name}}</span>
        </li>
        <li class="profile__content-field">
            <span>Фамилия</span>
            <span>{{second_name}}</span>
        </li>
        <li class="profile__content-field">
            <span>Имя в чате</span>
            <span>{{display_name}}</span>
        </li>
        <li class="profile__content-field">
            <span>Телефон</span>
            <span>{{phone}}</span>
        </li>
        <div class="profile__content-field profile__content-field__center">
            <a data-navigation data-name="change-data" href="profile-user-data">Изменить данные</a>
        </div>
        <div class="profile__content-field profile__content-field__center">
            <a data-navigation data-name="change-password" href="profile-password">Изменить пароль</a>
        </div>
        <div  class="profile__content-field profile__content-field__center">
            <a data-navigation data-name="logout" href="/">Выйти</a>
        </div>
    </ul>
</div>
`;
