'use client'

import { Box, Button, Heading, Input, useToast, VStack } from '@chakra-ui/react'
import React from 'react'
import { saveFormData } from './actions'

export default function Form() {
  const toast = useToast()

  const handleAction = async (formData: FormData) => {
    try {
      const result = await saveFormData(formData)
      toast({
        title: '成功',
        status: 'success',
        duration: 3000,
      })
      console.info('Result from server action:', result)
    } catch (_error) {
      toast({
        title: 'エラーが発生しました',
        status: 'error',
        duration: 3000,
      })
    }
  }

  return (
    <Box>
      <Heading as="h2" size="3xl">
        Form
      </Heading>
      <form action={handleAction}>
        <VStack spacing={2}>
          <Input placeholder="name" name="name" />
          {/* <Input placeholder="email" name="email" type="email" /> */}
          {/* <Input placeholder="password" name="password" type="password" /> */}
          <Button type="submit">Save</Button>
        </VStack>
      </form>
    </Box>
  )
}
