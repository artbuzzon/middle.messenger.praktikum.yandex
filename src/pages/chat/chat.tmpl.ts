export default `
<div class="chat">
    <div class="sidebar">
        <div class="sidebar__head">
            <a href="profile.html" class="sidebar__profile-btn">
                Профиль
            </a>
            <div class="sidebar__search-container">
                <input placeholder="Поиск"/><span class="icon">🔎</span>
            </div>
        </div>
        <div class="sidebar__chats" data-name="chats-container">
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
            <div class="dialog__body-msg-container">
              <div class="dialog__body-msg dialog__body-msg-incoming">
                  <p class="dialog__body-msg-content">Lorem ipsum</p>
                  <p class="dialog__body-msg-time">12:45</p>
              </div>
            </div>
            <div class="dialog__body-msg-container">
              <div class="dialog__body-msg">
                  <p class="dialog__body-msg-content">doler sit amet</p>
                  <p class="dialog__body-msg-time">12:45</p>
              </div> 
            </div>
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
