const express = require("express")
const app = express();
const userRouter = require("./routes/user");
const showRouter = require("./routes/show");
const {db} = require("./db");
const seed = require("./seed");

app.get("/", (req, res) => {
    res.send("Movie Theater: Successful GET request made.");
});

app.use("/user", userRouter); // "/user", USES the userRouter
app.use("/show", showRouter);

const port = 3000;
app.listen(port, () => {
    db.sync();
    console.log(`Movie Theatre API is live at https://localhost${port}`);
});
