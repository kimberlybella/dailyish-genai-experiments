import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { adjective, previousSuggestions } = await request.json();

    const previousContext = previousSuggestions && previousSuggestions.length > 0
      ? `Previously suggested: ${previousSuggestions.join(', ')}.`
      : '';

    const refreshContext = previousSuggestions && previousSuggestions.length > 0
      ? '- Be different from previous suggestions'
      : '';

    const prompt = `A second grade student wants to make their writing more interesting. They used the word "${adjective}" in their story.

${previousContext}

Suggest ONE juicy word that is more interesting than "${adjective}". The juicy word should:
- Be a single word that a second grader can understand and use
- Be more exciting and descriptive than "${adjective}"
- Be appropriate for elementary school writing
- Be easy to pronounce and spell for a 7-8 year old
${refreshContext}

Examples of juicy words for common words:
- "big" → "enormous" (means really, really big)
- "happy" → "cheerful" (means feeling happy and showing it with a smile)
- "sad" → "gloomy" (means feeling sad like it's a dark, cloudy day)

Also provide a simple, kid-friendly definition that a second grader can understand. Keep it to one sentence.

Respond with a JSON object in this exact format:
{
  "suggestion": "word",
  "definition": "A simple one-sentence definition that a 7-8 year old can understand"
}`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [
          { role: "user", content: prompt }
        ],
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    const textContent = data.content.find((item: any) => item.type === "text")?.text || "";
    const cleanText = textContent.replace(/```json|```/g, "").trim();
    const result = JSON.parse(cleanText);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in juicy-word API:', error);
    return NextResponse.json(
      { error: 'Failed to get suggestion' },
      { status: 500 }
    );
  }
}
