const express = require("express");
const app = express();
const User = require("./database");


app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}))

app.get("/",async(req,res)=>{
    const users = await User.find({});
    res.render("index",{
        title:"this is homepage",
        users:users
    })
  
})

app.get("/register", (req, res) => {
  res.render("register");
})

app.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      res.redirect("/");
    } else {
      res.render("edit", { user });
    }
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
})

app.post("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, { name, email, password }, { new: true });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
})

app.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
})

app.listen(5000, () => {
  console.log("Server is running on port 5000");
})