import React, { PropsWithChildren, ReactNode } from 'react'
import { Text } from '@radix-ui/themes'

const errorMessage = ({children} : PropsWithChildren) => {
    if(!children){
        return null
    }
  return (
    <div>
        <Text color='red' as='p'>
            {children}

        </Text>
      
    </div>
  )
}

export default errorMessage
