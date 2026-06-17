
import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

const DB_FILE = path.join(process.cwd(), 'db.json');

function getLocalData() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ wireframes: [], users: [] }, null, 2));
  }
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
  } catch (e) {
    return { wireframes: [], users: [] };
  }
}

function saveLocalData(data: any) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

export async function POST(req: NextRequest) {
    const { userEmail, userName } = await req.json();

    const data = getLocalData();
    let user = data.users.find((u: any) => u.email === userEmail);
    if (!user) {
        user = {
            id: data.users.length + 1,
            name: userName,
            email: userEmail,
            credits: 100 // Give initial presentation credits
        };
        data.users.push(user);
        saveLocalData(data);
    }
    return NextResponse.json(user);
}