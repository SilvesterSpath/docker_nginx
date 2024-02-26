const json = require('json-server');
const cors = require('cors');

const server = json.create();

// Specify db location
const router = json.router('db.json');

const middleware = json.defaults({
  static: './build',
});

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

server.use(cors(corsOptions));
server.use(middleware);
server.use(router); // <-- Mount router

server.listen(5000, () => {
  console.log('JSON Server is running on port 5000');
});
