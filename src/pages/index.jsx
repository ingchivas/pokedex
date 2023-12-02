import Image from 'next/image'
import Navbar from '@/components/NavBar';
import PokeElement from '@/components/PokeElement'

import { useSession } from "next-auth/react";

export default function Home() {

  const { data: session } = useSession();


  return (
    <div className=''>
      <Navbar user={session?.user} />
      <h1 className='text-xl'>Home</h1>
      <PokeElement> </PokeElement>
    </div>

  )
}
