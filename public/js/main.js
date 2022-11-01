// importing modules
import express from "express"
import exphbs from "express-handlebars"
  
// Express server's instance
const app = express();
  
const PORT = process.env.PORT || 3001;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("images"));


  
// listening
app.listen(PORT, () => console.log(`Server started running on PORT ${PORT}`));