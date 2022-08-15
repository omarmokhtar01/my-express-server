const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("<h1>Hello</h1>");});

  app.get('/about', (req, res) => {
    res.send("iam programmer");
  });

  app.get('/re', (req, res) => {
    res.send("iam programmer re re");
  });


app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
});



/*video num 3
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send("<h1>Hello</h1>");})
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
});


*/
