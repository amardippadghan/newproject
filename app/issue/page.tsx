import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const page = () => {
  return (
    <div className='ml-10'>

     <Button><Link href='/issue/new'>New Issue</Link></Button>
    </div>
  )
}

export default page
