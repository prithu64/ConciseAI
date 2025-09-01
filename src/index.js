import dotenv from "dotenv";
dotenv.config();
 
import { app } from "./app.js";

app.listen(3000,()=>{
    console.log("Server running at 3000");
})

