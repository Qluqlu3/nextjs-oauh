'use client'

import React, { useCallback, useState, useMemo } from 'react'

import { Box, Heading, Image, useToast } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

import { ImageDropzone } from '@/app/_components/ImageDropzone'

export default function Upload() {
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null)
  const toast = useToast()

  const previewUrl = useMemo(() => {
    return selectedImageFile ? URL.createObjectURL(selectedImageFile) : undefined
  }, [selectedImageFile])

  const handleOnFileAccepted = useCallback((file: File) => {
    setSelectedImageFile(file)
  }, [])

  const removeImageFile = useCallback(() => {
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setSelectedImageFile(null)
    toast({
      position: 'bottom-left',
      title: '画像を削除しました',
      status: 'info',
      duration: 3000,
      isClosable: true,
    })
  }, [previewUrl, toast])

  return (
    <Box p={4}>
      <Heading as="h2" size="3xl">
        Upload Page
      </Heading>
      <Box pt={3}>
        <ImageDropzone onFileAccepted={handleOnFileAccepted} />
      </Box>
      {selectedImageFile != null && (
        <Box pt={3} position="relative">
          <CloseIcon
            position="absolute"
            top={5}
            left={2}
            boxSize={7}
            color="white"
            cursor="pointer"
            _hover={{ opacity: 0.6 }}
            onClick={removeImageFile}
          />
          <Image src={previewUrl} alt="Selected file" maxH={500} />
        </Box>
      )}
    </Box>
  )
}
