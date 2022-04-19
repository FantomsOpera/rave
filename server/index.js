const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const fns = require('fns-helper');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.get('/api/nameOwner', async (req, res) => {
  const name = req.query.name || 'z.ftm';
  await fns.functions.getOwnerOfName(name).then((resp) => { owner = resp[0] });
  console.log(owner)
  await fns.functions.isOwnedByMapping(name.toUpperCase()).then((resp) => { isOwned = resp[0] });
  console.log(isOwned)
  if (!isOwned) {
    owner = 'No one!';
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ owner: owner, name: name }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
