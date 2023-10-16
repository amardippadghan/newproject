'use client'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm , Controller} from 'react-hook-form'
import { useState } from "react";
import {zodResolver} from '@hookform/resolvers/zod'

import { TextArea, TextField , Button, Callout , Text} from '@radix-ui/themes'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { createIssueSchema } from '@/app/validationSchema';
import {z} from 'zod'
import ErrorMessage from '@/app/components/errorMessage';
import Spinner from '@/app/components/Spinner';


type issueForm = z.infer<typeof createIssueSchema>

const NewIssuePage = () => {
   const route =  useRouter();
   const [error , seterror] = useState('');
   const [isSubmitting , setsubmitting] = useState(false)
   const {register , control , handleSubmit , formState:{
    errors
   }} = useForm<issueForm>({
    resolver: zodResolver(createIssueSchema)
   });
   
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
    setsubmitting(true)
  await axios.post('/api/issue' , data)
  route.push('/issue')
  
} catch (error) {
  seterror('unexpected error occured ')
  setsubmitting(false)
  
}

 
})} >
  <TextField.Root>
      <TextField.Input placeholder='Title' {...register('title')}/>
  </TextField.Root>

    <ErrorMessage>
        {errors.title?.message}
    
    </ErrorMessage>


  <Controller
  name='description'
  control={control}
  render={({field})=> 
      <SimpleMDE placeholder='Discription' {...field}/>
     
   
  }
  
  />
  
   <ErrorMessage>
       {errors.description?.message}
   
   
   </ErrorMessage>
 
    

  <Button
  disabled={isSubmitting}
  >Submit new issue {isSubmitting && <Spinner/>}</Button>

</form>
    </div>
  )
}

export default NewIssuePage
