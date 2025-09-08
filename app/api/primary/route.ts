import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // not NEXT_PUBLIC
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // or gpt-4
        messages: [
          { role: 'system', content: 'You are CareerAI, an expert career counselor specializing in the Ghanaian schools, programmes and job market. Always respond with valid JSON format.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    return NextResponse.json(data);

    
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
