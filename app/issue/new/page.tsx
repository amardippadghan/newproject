'use client'
import React from 'react'

import { TextArea, TextField , Button } from '@radix-ui/themes'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder='Title'/>
        </TextField.Root>
        <TextArea placeholder='Discription'/>
        <Button>Submit new issue</Button>
      
    </div>
  )
}

export default NewIssuePage
