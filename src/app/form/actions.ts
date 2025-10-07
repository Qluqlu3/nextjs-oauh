'use server'

// import { PrismaClient } from '@prisma/client'

export const saveFormData = async (formData: FormData) => {
  console.log('name', formData.get('name'))
  console.log('email', formData.get('email'))
  return formData.get('name')
}
