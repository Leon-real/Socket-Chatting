'use strict'
const socket = io();

// 메세지 보내기
socket.emit('chatting', "from front");

// 메세지 받기
socket.on('chatting', (data) => {
    console.log(data);
});

console.log(socket);