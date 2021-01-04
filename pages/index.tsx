import Head from 'next/head'
import { Form } from '../stories/form'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form />
    </div>
  )
}
