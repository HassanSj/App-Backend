const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const port = 5001;
app.use(cors());
app.use(express.json());

const datas = [{ email: "hassan@gmail.com", password: 123 }];

app.post("/api/login", jwtguardtoken, (request, response) => {
  console.log(request.body);
  jwt.sign({ data: request.body }, "abc123", (err, token) => {
    response.json({
      data: request.body,
      token,
    });
    console.log(token, mydata);
  });
});

app.post("/home", jwtguardtoken, async (request, response) => {
  jwt.verify(request.token, "abc123", (err, data) => {
    if (err) {
      response.send({ message: "Token Not Found" });
    } else {
      response.json({
        message: "Access Granted",
        data,
      });
    }
  });
});
function jwtguardtoken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  req.token = token;
  next();
}

// app.post("/token", (req, res) => {
//   const username = { name: req.body.username };
//   const tokendata = jwt.sign(
//     username,
//     "abc123" //, (err, token) => {
//     //     response.json(data, { auth: token });
//     //   }
//   );
//   console.log(tokendata);
//   res.json(tokendata);
// });
// app.get("/verifytoken", (req, res) => {
//   const authHeader = req.headers["Authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   const decode = jwt.verify(token, "abc123", (err, username) => {
//     console.log(err);
//     if (err) return res.sendStatus(403);
//     username = req.body.username;
//   });
//   res.json({
//     username: username,
//     data: decode,
//   });
// });

// app.get("/verifytoken2", (req, res) => {
//   const token = req.body.token;
//   if (token == null) return res.sendStatus(401);

//   const decode = jwt.verify(token, "abc123");
//   res.json({
//     login: true,
//     data: decode,
//   });

//   // jwt.verify(token, "abc123", (err, username) => {
//   //   console.log(err);
//   //   if (err) return res.sendStatus(403);
//   //   req.username = username;
//   // });
// });

app.listen(port);
console.log(`Server is running on port: ${port}`);
