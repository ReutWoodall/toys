const indexR = require("./index");
const usersR = require("./users");
const toyR = require("./toys");


exports.corsAccessControl = (app) => {
  app.all('*', (req, res, next) => {
    if (!req.get('Origin')) return next();
    res.set('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,auth-token');
    return next();
  });
}


exports.routesInit = (app) => {
  app.use("/", indexR);
  app.use("/users", usersR);
  app.use("/toys",toyR);
  
  app.use((req,res) => {
    res.status(404).json({msg:"404 url page not found"})
  })
}