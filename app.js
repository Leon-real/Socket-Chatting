const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const server = http.createServer(app);
const socketIO = require('socket.io');

const io = socketIO(server);


// index 읽기
app.use(express.static(path.join(__dirname, "src")))

//포트는 프로세스 환경에서 포 설정된 값으로 할당, 없을 경우 5001번
const PORT = process.env.PORT || 5500; 
server.listen(PORT, () => console.log(`server is running ${PORT}`));



io.on('connection', (socekt) => {
    // console.log("연결")
    socekt.on("chatting", (data) => {
        console.log(data);
        io.emit('chatting', `Hi ${data}`);
    });
});