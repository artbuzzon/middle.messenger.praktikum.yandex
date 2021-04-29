export const tmpl = `
<div class="chat">
    <div class="sidebar">
        <div class="sidebar__head">
            <a href="profile" class="sidebar__profile-btn">
                Профиль
            </a>
            <div class="sidebar__search-container">
                <input placeholder="Поиск"/><span class="icon">🔎</span>
            </div>
        </div>
        <div class="sidebar__chats" data-component="chat-preview">
        </div>
    </div>
    <div class="dialog">
        <div class="dialog__header">
            <div class="dialog__header-mediabox">
                <div class="dialog__header-avatar"></div>
                <span class="dialog__header-username">Михаил</span>
            </div>
            <div class="dialog__header-dropdown icon" data-name="chat-actions">
                ➕
            </div>
        </div>
        <div class="dialog__body">
            <div class="dialog__body-date">19 июня</div>
            <div data-component="message"></div>
        </div>
        <div class="dialog__footer">
            <div class="dialog__footer-attach-btn icon" data-name="chat-attach-actions">
                📎
            </div>
            <input placeholder="Сообщение" class="dialog__footer-input">
            <div class="dialog__footer-send-btn icon">
            ⏎
            </div>
        </div>
    </div>
</div>

`;
