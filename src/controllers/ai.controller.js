import { generate } from "../ai.js";

const getReply = async(req,res)=>{
 const query = req.body.query;
 if(!query){
   return res.status(401).json({
      message : "No input",
      success : false
    })
 }
 const reply = await generate({query : query});
 
 res.status(200).json({
    message : "Successfull relpy",
    success : true,
    reply
 })

}

export {getReply}