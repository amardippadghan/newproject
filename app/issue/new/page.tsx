'use client'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm , Controller} from 'react-hook-form'
import { useState } from "react";

import { TextArea, TextField , Button, Callout } from '@radix-ui/themes'
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface issueForm {
    title: string,
    description: string
}

const NewIssuePage = () => {
   const route =  useRouter();
   const [error , seterror] = useState('');
   const {register , control , handleSubmit} = useForm<issueForm>();
   
  return (
    <div className='max-w-xl'>
        {error && (
            <Callout.Root color='red' className='mb-5'>
                <Callout.Text>
                    {error}
                </Callout.Text>
            </Callout.Root>
        )}



            <form className=' space-y-3' onSubmit={handleSubmit( async(data)=>{

try {
  await axios.post('/api/issue' , data)
  route.push('/issue')
  
} catch (error) {
  seterror('unexpected error occured ')
  
}

 
})} >
  <TextField.Root>
      <TextField.Input placeholder='Title' {...register('title')}/>
  </TextField.Root>

  <Controller
  name='description'
  control={control}
  render={({field})=> 
      <SimpleMDE placeholder='Discription' {...field}/>
     
   
  }
  
  />
  
  <Button>Submit new issue</Button>

</form>
    </div>
  )
}

export default NewIssuePage
