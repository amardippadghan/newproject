'use client'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm , Controller} from 'react-hook-form'

import { TextArea, TextField , Button } from '@radix-ui/themes'
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface issueForm {
    title: string,
    description: string
}

const NewIssuePage = () => {
   const route =  useRouter();
   const {register , control , handleSubmit} = useForm<issueForm>();
   
  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit( async(data)=>{

        await axios.post('/api/issue' , data)
        route.push('/issue')

       
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
  )
}

export default NewIssuePage
