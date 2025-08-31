import { GoogleGenerativeAI } from "@google/generative-ai";

const generate = async({query})=>{
    const genAI = new GoogleGenerativeAI( process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({model : "gemini-1.5-flash"});
    try {
        const result = await model.generateContent(query);
        console.log("result : ",result.response.text())
        const reply = result.response.text();
        return reply;
    } catch (error) {
        console.log("error :",error)
    }
}

export {generate}