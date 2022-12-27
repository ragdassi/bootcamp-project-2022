import express, { Express } from "express";
import recipeRouter from "./routes/recipe"

const app: Express = express(); // 2. initializes Express
app.use(express.json());

const mongoose = require('mongoose')
const connection_url = "mongodb+srv://ryan:newPassword@cluster0.hzbf3h2.mongodb.net/RecipesDB?retryWrites=true&w=majority"

mongoose.connect(connection_url)
.then(() => console.log("Successful Connection"))
.catch((error: any) => console.log(`Could not connect due to ${error}`))

app.get('/', (req, res) => {
  res.send('Hello world!!')
});

app.use('/', recipeRouter)

app.listen(3001);
export default app;

