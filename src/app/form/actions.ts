'use server'

// import { PrismaClient } from '@prisma/client'

export async function saveFormData(formData: { name: string; email: string }) {
  const { name, email } = formData
  console.log('name', name)
  console.log('email', email)
}
