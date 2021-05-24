export const tmpl = `
<div class="chat">
    <div class="sidebar">
        <div class="sidebar__head">
            <button data-name="create-chat-btn">Создать чат</button>
            <a href="profile" class="sidebar__profile-btn">
                Профиль
            </a>
            <div class="sidebar__search-container">
                <input placeholder="Поиск"/><span class="icon">🔎</span>
            </div>
        </div>
        <div class="sidebar__chats">
        <div data-component="chat-preview"></div>
        </div>
    </div>
    <div class="dialog">
        <div class="dialog__header">
            <div class="dialog__header-mediabox">
                <div class="dialog__header-avatar"></div>
                <span class="dialog__header-username">Михаил</span>
            </div>
            <div>
                <button data-name="add-user">Добавить пользователя</button>
                <button data-name="delete-user">Удалить пользователя</button>
            </div>
        </div>
        <div class="dialog__body">
        </div>
        <div class="dialog__footer">
            <div class="dialog__footer-attach-btn icon" data-name="chat-attach-actions">
                📎
            </div>
            <input placeholder="Сообщение" data-name="message-input" class="dialog__footer-input">
            <div data-name="send-msg-btn" class="dialog__footer-send-btn icon">
            ⏎
            </div>
        </div>
    </div>
</div>

`;
