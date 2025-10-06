import { Box, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export const Sidebar: React.FC = () => {
  return (
    <VStack w={300} h="100vh" spacing={1} align="start" justifyContent="start" bg={'gray.200'} color="black">
      <Box fontSize={27} p={2} w="full" display="flex" alignItems="center" cursor="pointer" _hover={{ bg: 'gray.300' }}>
        <Link href="/">Home</Link>
      </Box>
      <Box fontSize={27} p={2} w="full" display="flex" alignItems="center" cursor="pointer" _hover={{ bg: 'gray.300' }}>
        <Link href="/upload">Upload</Link>
      </Box>
      <Box fontSize={27} p={2} w="full" display="flex" alignItems="center" cursor="pointer" _hover={{ bg: 'gray.300' }}>
        <Link href="/form">Form</Link>
      </Box>
    </VStack>
  )
}
