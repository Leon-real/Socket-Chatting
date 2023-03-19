const express = require('express');
const app = express();
const path = require('path');



app.use(express.static(path.join(__dirname, "src")))

//포트는 프로세스 환경에서 포 설정된 값으로 할당, 없을 경우 5000번
const PORT = process.env.PORT || 5001; 

app.listen(PORT, () => console.log(`server is running ${PORT}`));