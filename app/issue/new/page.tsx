'use client'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import { TextArea, TextField , Button } from '@radix-ui/themes'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder='Title'/>
        </TextField.Root>
        <SimpleMDE placeholder='Discription'/>
        <Button>Submit new issue</Button>
      
    </div>
  )
}

export default NewIssuePage
