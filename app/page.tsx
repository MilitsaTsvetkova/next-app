'use client'
import Sandstone from '@/public/images/Sandstone.jpg'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState } from 'react'
import ProductCard from './components/ProductCard/ProductCard'
//lazy loading only large, heavy components
const HeavyComponent = dynamic(() => import('./components/HeavyComponent'), {
  loading: () => <p>Loading</p>,
  //disable pre-loading on server
  ssr: false,
})

export default function Home() {
  const [showHeavy, setShowHeavy] = useState(false)
  // const session = await getServerSession(authOptions)
  return (
    <main className='relative h-screen'>
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1> */}
      <ProductCard />
      <Image src={Sandstone} width={200} height={200} alt='Sandstone plateau' />
      {/* <Image
        src='https://images.unsplash.com/photo-1682687220067-dced9a881b56?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        fill
        sizes='(max-width: 480px) 100vw, (max-width:768px) 50vw, 33vw'
        className='object-cover'
        alt='Sandstone plateau'
        quality={75}
        priority
      /> */}
      <button onClick={() => setShowHeavy(true)}>Show</button>
      <button
        onClick={async () => {
          //lazy load external libraries
          const _ = (await import('lodash')).default
          const users = [{ name: 'c' }, { name: 'b' }, { name: 'a' }]
          const sorted = _.orderBy(users, ['name'])
          console.log(sorted)
        }}
      >
        Sort
      </button>
      {showHeavy && <HeavyComponent />}
    </main>
  )
}

// export async function generateMetadata(): Promise<Metadata> {
//   const post: any = await fetch('https://jsonplaceholder.typicode.com/posts')
//   return {
//     title: post.title,
//     description: post.body,
//   }
// }
