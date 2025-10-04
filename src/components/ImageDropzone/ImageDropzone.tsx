'use client'

import React, { useCallback } from 'react'
import { Box, Icon, Text, VStack } from '@chakra-ui/react'
import { FaFileUpload } from 'react-icons/fa'

import { useDropzone, FileRejection } from 'react-dropzone'

type Props = {
  onFileAccepted: (file: File) => void
}

export const ImageDropzone: React.FC<Props> = ({ onFileAccepted }: Props) => {
  const handleOnDrop = useCallback(
    (acceptedFiles: File[]) => {
      console.log(acceptedFiles)
      onFileAccepted(acceptedFiles[0])
    },
    [onFileAccepted]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    multiple: false,
    onDrop: handleOnDrop,
  })

  return (
    <Box {...getRootProps()} cursor="pointer" w={600} h={300} bg="gray.500" borderRadius="md">
      <input {...getInputProps()} />
      <VStack justifyContent="center" h="full" transition="all 0.2s ease-in-out" _hover={{ opacity: 0.7 }}>
        <Icon as={FaFileUpload} boxSize={50} color="white" />
        <Text size="md">画像を選択またドラッグ＆ドロップ</Text>
      </VStack>
    </Box>
  )
}
