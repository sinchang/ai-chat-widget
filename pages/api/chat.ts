import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { NextRequest, NextResponse } from 'next/server'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

export const runtime = 'edge'

export default async function handler(req: NextRequest, res: NextResponse) {
  if (req.method === 'POST') {
    const { messages } = await req.json()
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages
    })
    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)
  } else {
    // res.json({ error: 'Please use POST' })
  }
}
