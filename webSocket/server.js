const { createServer } = require('http');
const { Server } = require('socket.io');

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000", "http://192.168.0.115:3000"],
    methods: ["GET", "POST"]
  }
});

let userCount = 0;

io.on('connection', (socket) => {
  userCount++;
  io.emit('userCount', userCount);

  socket.on('disconnect', () => {
    userCount--;
    io.emit('userCount', userCount);
  });
});

httpServer.listen(3001, () => {
  console.log('Socket.IO server listening on *:3001');
});
