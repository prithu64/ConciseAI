import dotenv from "dotenv";
dotenv.config();
 

import { generate } from "./ai.js";
import { app } from "./app.js";

app.listen(3000,()=>{
    console.log("Server running at 3000");
    generate({query : "hi gemini"});
})

