'use strict'
const socket = io();


const nickname = document.querySelector('#nickname');
const chatList = document.querySelector('.chatting-list');
const chatInput = document.querySelector('.chatting-input');
const sendButton = document.querySelector('.send-button');



// 메세지 보내기
sendButton.addEventListener('click', () => {
    const param = {
        name : nickname.value,
        msg : chatInput.value
    };
    socket.emit("chatting", param);
});

// 메세지 받기
socket.on('chatting', (data) => {
    const li = document.createElement("li");
    li.innerText = `${data.name} 님이 - ${data.msg}`;
    chatList.appendChild(li);
});

// console.log(socket);