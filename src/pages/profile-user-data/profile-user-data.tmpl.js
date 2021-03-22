export default `
<form class="profile" data-name="profile-form" method="POST">
    <div class="profile__content-field">
        <a href="profile.html">Назад</a>
    </div>
    <div class="profile__content">
        <div class="profile__content-avatar">
        </div>
        <div class="profile__content-field">
            <label for="profile_pic">Выберите изображение</label>
            <input id="profile_pic" type="file" accept=".jpg, .jpeg, .png">
        </div>
        <div class="profile__content-field">
            <label for="email">Почта</label>
            <input type="email" id="email" placeholder="pochta@yandex.ru"/>
        </div>
        <div class="profile__content-field">
            <label for="login">Логин</label>
            <input type="text" id="login" placeholder="ivanivanov"/>
        </div>
        <div class="profile__content-field">
            <label for="name">Имя</label>
            <input type="text"  id="name" placeholder="ivan"/>
        </div>
        <div class="profile__content-field">
            <label for="second-name">Фамилия</label>
            <input type="text"  id="second-name" placeholder="ivanov"/>
        </div>
        <div class="profile__content-field">
            <label for="nick-name">Имя в чате</label>
            <input  type="text" id="nick-name" placeholder="ivan"/>
        </div>
        <div class="profile__content-field">
            <label for="phone">Телефон</label>
            <input id="phone" placeholder="+7 (909) 967 30 30"/>
        </div>
        <button type="submit">Сохранить</button>
    </div>
</form>
`;
