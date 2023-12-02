import Image from 'next/image'
import Navbar from '@/components/NavBar';

import { useSession } from "next-auth/react";

export default function Home() {

  const { data: session } = useSession();


  return (
    <div>
      <Navbar user={session?.user} />
      <h1 className='text-xl'>Home</h1>
    </div>

  )
}
