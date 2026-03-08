import { db } from "@/configs/db";
import { WireframeToCodeTable } from "@/configs/schema";
import { eq } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  const { description, imageUrl, model, uid, email } = await req.json();

  const result = await db.insert(WireframeToCodeTable).values({
    uid: uid,
    description: description,
    imageUrl: imageUrl,
    model: model,
    createBy: email,
  }).returning({ id: WireframeToCodeTable.id });

  return NextResponse.json(result)
}

export async function GET(req: NextRequest) {
  const reqUrl = req.url;
  const { searchParams } = new URL(reqUrl);
  const uid = searchParams?.get('uid');
  if (uid) {
    const result = await db.select()
      .from(WireframeToCodeTable)
      .where(eq(WireframeToCodeTable.uid, uid));
    return NextResponse.json(result[0]);
  }

  return NextResponse.json({ error: 'No Record Found' });
}

export async function PUT(req: NextRequest) {
  const { uid, codeResp } = await req.json();

  const result = await db.update(WireframeToCodeTable)
    .set({
    code: codeResp
    }).where(eq(WireframeToCodeTable.uid, uid))
    .returning({uid: WireframeToCodeTable.uid})

  return NextResponse.json(result);
}

// *******************************

// import OpenAI from 'openai';
// import { db } from "@/configs/db";
// import { WireframeToCodeTable } from "@/configs/schema";
// import { eq } from "drizzle-orm";
// import { NextRequest, NextResponse } from "next/server";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// // Create wireframe record (initial)
// export async function POST(req: NextRequest) {
//   const { description, imageUrl, model, uid, email } = await req.json();

//   const result = await db.insert(WireframeToCodeTable).values({
//     uid,
//     description,
//     imageUrl,
//     model,
//     createBy: email,
//   }).returning({ id: WireframeToCodeTable.id });

//   return NextResponse.json(result);
// }

// // Get wireframe record by UID
// export async function GET(req: NextResponse) {
//   const reqUrl = req.url;
//   const { searchParams } = new URL(reqUrl);
//   const uid = searchParams?.get('uid');

//   if (uid) {
//       console.error("Missing UID, cannot update code");

//     const result = await db
//       .select()
//       .from(WireframeToCodeTable)
//       .where(eq(WireframeToCodeTable.uid, uid));
//     return NextResponse.json(result[0]);
//   }

//   return NextResponse.json({ error: 'No Record Found' });
// }

// // Update only the generated code (by UID)
// export async function PUT(req: NextRequest) {
//   const { uid, codeResp } = await req.json();

//   if (!uid || !codeResp) {
//     return NextResponse.json({ error: 'UID and codeResp are required' }, { status: 400 });
//   }

//   const result = await db.update(WireframeToCodeTable)
//     .set({ code: codeResp })
//     .where(eq(WireframeToCodeTable.uid, uid))
//     .returning({ uid: WireframeToCodeTable.uid });

//   return NextResponse.json(result);
// }


// ******************************

// import OpenAI from 'openai';
// import { NextRequest } from "next/server";
// import { Constants } from '@/data/Constants';
// import { db } from '@/configs/db';
// import { WireframeToCodeTable } from '@/configs/schema';
// import { eq } from 'drizzle-orm';

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(req: NextRequest) {
//   const { model, description, imageUrl, uid } = await req.json();
//   const ModelObj = Constants.AiModelList.find(item => item.name === model);
//   const modelName = ModelObj?.modelName ?? "gpt-4o";

//   const response = await openai.chat.completions.create({
//     model: modelName,
//     stream: true,
//     messages: [
//       {
//         role: "user",
//         content: [
//           { type: "text", text: description },
//           { type: "image_url", image_url: { url: imageUrl } },
//         ],
//       },
//     ],
//   });

//   let fullCode = "";
//   const encoder = new TextEncoder();

//   const stream = new ReadableStream({
//     async start(controller) {
//       for await (const chunk of response) {
//         const text = chunk.choices?.[0]?.delta?.content || "";
//         fullCode += text;
//         controller.enqueue(encoder.encode(text));
//       }

//       // ✅ Directly update code in DB via Drizzle
//       await db
//         .update(WireframeToCodeTable)
//         .set({ code: fullCode })
//         .where(eq(WireframeToCodeTable.uid, uid));

//       controller.close();
//     },
//   });

//   return new Response(stream, {
//     headers: {
//       "Content-Type": "text/plain; charset=utf-8",
//     },
//   });
// }
