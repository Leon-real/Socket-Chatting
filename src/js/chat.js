'use strict'
const socket = io();
const nickname = document.querySelector('#nickname');
const chatList = document.querySelector('.chatting-list');
const chatInput = document.querySelector('.chatting-input');
const sendButton = document.querySelector('.send-button');
const displayContainer = document.querySelector('.display-container');

// chatting-input클래스 안에서 엔터 키를 누를 경우
chatInput.addEventListener('keypress', (event)=>{
    if (event.keyCode === 13) {
        sendmessage()
    }
})

// 메세지 보내기
sendButton.addEventListener('click', sendmessage);
//메세지 보내기 함수
function sendmessage() {
    const param = {
        name : nickname.value,
        msg : chatInput.value
    };
    socket.emit("chatting", param);
};

// 메세지 받기
socket.on('chatting', (data) => {
    console.log(data)
    const { name, msg, time }= data;
    const item = new LiModel(name, msg, time);
    item.makeLi();
    displayContainer.scrollTo(0, displayContainer.scrollHeight);

});

function LiModel(name, msg, time) {
    this.name = name;
    this.msg = msg;
    this.time = time;

    this.makeLi = () => {
        const li = document.createElement("li");
        li.classList.add(nickname.value === this.name ? "sent" : "received");
        const dom = `<span class="profile">
                        <span class="user">${this.name}</span>
                        <img class="profile_image" src="https://placeimg.com/50/50/any" alt="any">
                    </span>
                    <span class="message">${this.msg}</span>
                    <span class="message-time">${this.time}</span>`;
        li.innerHTML = dom;
        chatList.appendChild(li)
    };

};

// c;onsole.log(socket);