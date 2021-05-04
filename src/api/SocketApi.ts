
export function getSocketConnection(userId: string, chatId: string, token: string) {
    return new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`)
}

