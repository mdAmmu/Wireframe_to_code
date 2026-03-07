import OpenAI from 'openai';
import { NextRequest } from "next/server";
import { Constants } from '@/data/Constants';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {

  const { model, description, imageUrl } = await req.json();
  const ModelObj = Constants.AiModelList.find(item => item.name==model)
  const modelName = ModelObj?.modelName;
  console.log(modelName);
 const response = await openai.chat.completions.create({
   model: modelName ?? "gpt-4o",
   stream:true,
    messages: [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": description
          },
          {
            "type": "image_url",
            "image_url": {
              "url":imageUrl
            }
          }
        ]
      }
    ],
    
 });
  
  const stream = new ReadableStream({
    async start(controller) {
      for await (const chunk of response) {
        const text = chunk.choices?.[0]?.delta?.content || "";
        controller.enqueue(new TextEncoder().encode(text));
      }
      controller.close();
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}





// import OpenAI from 'openai';
// import { NextRequest } from "next/server";
// import { Constants } from '@/data/Constants';

// const openai = new OpenAI({
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: process.env.OPENROUTER_AI_API_KEY,
// });

// export async function POST(req: NextRequest) {
//   try {
//     const { model, description, imageUrl } = await req.json();

//     const ModelObj = Constants.AiModelList.find(item => item.name === model);
//     const modelName = ModelObj?.modelName ?? "google/gemini-2.0-flash-exp:free";

//     const response = await openai.chat.completions.create({
//       model: modelName,
//       stream: true,
//       messages: [
//         {
//           role: "user",
//           content: [
//             { type: "text", text: description },
//             { type: "image_url", image_url: { url: imageUrl } }
//           ]
//         }
//       ],
//     });

//     const stream = new ReadableStream({
//       async start(controller) {
//         const encoder = new TextEncoder();
//         for await (const chunk of response) {
//           const text = chunk.choices?.[0]?.delta?.content || "";
//           controller.enqueue(encoder.encode(text));
//         }
//         controller.close();
//       }
//     });

//     return new Response(stream, {
//       headers: {
//         "Content-Type": "text/plain; charset=utf-8",
//       },
//     });

//   } catch (error) {
//     console.error("API /api/ai-model error:", error);
//     return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
//       status: 500,
//     });
//   }
// }

// export async function POST(req: NextRequest) {
//   try {
//     const { model, description, imageUrl } = await req.json();

//     const ModelObj = Constants.AiModelList.find(item => item.name === model);
//     const modelName = ModelObj?.modelName;

//     if (!modelName) {
//       return new Response(JSON.stringify({ error: "Invalid model name" }), { status: 400 });
//     }
    

//     const response = await openai.chat.completions.create({
//       model: modelName,
//       stream: true,
//       messages: [
//         {
//           role: "user",
//           content: [
//             { type: "text", text: description },
//             { type: "image_url", image_url: { url: imageUrl } }
//           ]
//         }
//       ],
//     });

//     const stream = new ReadableStream({
//       async start(controller) {
//         for await (const chunk of response) {
//           const text = chunk.choices?.[0]?.delta?.content || "";
//           controller.enqueue(new TextEncoder().encode(text));
//         }
//         controller.close();
//       }
//     });

//     return new Response(stream, {
//       headers: {
//         "Content-Type": "text/plain; charset=utf-8",
//       },
//     });
//   } catch (err: any) {
//     console.error("AI API error:", err);
//     return new Response(JSON.stringify({ error: "Internal Server Error", details: err.message }), {
//       status: 500,
//     });
//   }
// }
