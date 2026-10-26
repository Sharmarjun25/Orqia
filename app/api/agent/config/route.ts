import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from '@google/genai';
import { AgentConfigSystemPrompt } from "@/data/prompt";

export async function POST(req: NextRequest) {
    const { prompt } = await req.json();

    if (!prompt.trim()) {
        return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }

    const apiKey = process.env.GOOGLE_CLOUD_GEMINI_API_KEY;

    try {

        const ai = new GoogleGenAI({ apiKey });

        const response = await ai.models.generateContent({
            model: 'gemini-3.8-flash',
            contents: AgentConfigSystemPrompt.replace('{USER_PROMPT}', prompt)

        })

    } catch (e) {

    }
}