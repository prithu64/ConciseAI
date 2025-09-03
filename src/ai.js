// helpers/openrouter.js
const generate = async ({query,mode}) => {
  let personality = "professional assistant";
  if(mode === "Chill Dude"){
    personality = "chill dude"
  }
  if(mode === "Girly Girl"){
    personality = "girly girl"
  }
  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.OPENROUTER_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat-v3.1:free", 
        messages: [
          {
            role: "user",
            content: ` always give the answers in TL;DR form,try to keep it as  concise as possible, answer should not exceed 50 words ,better if it is less than 50 words and you dont have to specify the reply as TLDR, and remember you are a ${personality} and answer like a ${personality} : ${query} `,
          },
        ],
      }),
    });

    const data = await res.json();
    return data.choices?.[0]?.message?.content || "No reply from model";
  } catch (error) {
    console.error("OpenRouter Error:", error);
    return "Something went wrong with OpenRouter";
  }
};

export { generate };
