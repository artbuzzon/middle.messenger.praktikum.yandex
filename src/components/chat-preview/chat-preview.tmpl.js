export default `
              <div class="sidebar__chat" @click="openChat(chatId)">
                  <div class="sidebar__chat-avatar">
                      <img src="{{imgSrc}}"/>
                  </div>
                  <div class="sidebar__chat-content">
                      <div class="sidebar__chat-content-name">
                          {{userName}}
                      </div>
                      <div class="sidebar__chat-content-message">
                          {{lastMessage}}
                      </div>
                  </div>
                  <div class="sidebar__chat-info">
                      <div class="sidebar__chat-info-date">{{time}}</div>
                      <div class="sidebar__chat-info-messages-count">{{messagesCount}}</div>
                  </div>
              </div>
`;
