const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const userRouter = require("./Router/useRoutes");
const mainRoutes = require("./Router/mainRoute");

app.use("/user", userRouter);

app.use("/main", mainRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "main", "index.html"));
});

app.get("/mainPage", (req, res) => {
  res.sendFile(path.join(__dirname, "main", "main.html"));
});

app.get("/*", (req, res) => {
  // Add a forward slash before "/*"
  res.status(404).sendFile(path.join(__dirname, "main", "404.html"));
});

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
