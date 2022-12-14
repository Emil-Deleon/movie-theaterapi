const express = require("express")
const app = express()
const usersRouter = require("./routes/users");
const showsRouter = require("./routes/shows");
const {db} = requqire("./db");

app.get("/", (req, res) => {
    res.send("Movie Theater: Successful GET request made.");
});

app.use("/users", usersRouter);
app.use("/shows", showsRouter);

const port = 3000;
app.listen(port, () => {
    db.sync();
    console.log(`Movie Teatre API is live at https://localhost${port}`);
})