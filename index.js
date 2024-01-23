import { server } from "./server.js";

const port = 8000;

server.listen(port, () => {
  console.log(`Server running on http://localhost:8000`);
});
