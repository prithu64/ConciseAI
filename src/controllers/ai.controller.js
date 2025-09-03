import { generate } from "../ai.js";

const getReply = async(req,res)=>{
 const query = req.body.query;
 const mode = req.body.mode;
 console.log("mode : ",mode)
 if(!query || !mode){
   return res.status(401).json({
      message : "No input",
      success : false
    })
 }
 const reply = await generate({query,mode});
 
 res.status(200).json({
    message : "Successfull relpy",
    success : true,
    reply
 })

}

export {getReply}