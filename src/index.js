const app = require('./app').app
const port = require('./app').port
require('./database/mongoConnect')

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})