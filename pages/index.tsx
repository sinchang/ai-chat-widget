import { Inter } from 'next/font/google'
import { Chat } from '@/components/chat'
import { Header } from '@/components/header'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`min-h-screen ${inter.className}`}>
      <Head>
        <title>AI Chat Widget</title>
      </Head>
      <Header />
      <Chat />
    </main>
  )
}
