import { Box, Button, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'

export default function form() {
  return (
    <Box>
      <Heading as="h2" size="3xl">
        form
      </Heading>
      <form action={''}>
        <VStack spacing={2}>
          <Input placeholder="name" name="name" />
          <Input placeholder="email" name="email" type="email" />
          <Input placeholder="password" name="password" type="password" />
          <Button type="submit">Save</Button>
        </VStack>
      </form>
    </Box>
  )
}
