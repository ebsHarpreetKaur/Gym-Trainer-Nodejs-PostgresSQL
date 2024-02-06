const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(process.env.PORT || 2000, () => console.log(`Server started on port : ${process.env.PORT}`));


