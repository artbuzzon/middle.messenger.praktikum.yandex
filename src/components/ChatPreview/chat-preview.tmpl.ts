const tmpl = `
  <div data-name="chat-preview" data-chat-id="{{id}}" class="sidebar__chat" @click="openChat(chatId)">
      <div class="sidebar__chat-avatar">
          <img src="{{imgSrc}}"/>
      </div>
      <div class="sidebar__chat-content">
          <div class="sidebar__chat-content-name">
              {{title}}
          </div>
          <div class="sidebar__chat-content-message">
              {{last_message.content}}
          </div>
      </div>
      <div class="sidebar__chat-info">
          <div class="sidebar__chat-info-date">{{time}}</div>
          <div class="sidebar__chat-info-messages-count">{{unread_count}}</div>
      </div>
  </div>
`;

export {tmpl};
