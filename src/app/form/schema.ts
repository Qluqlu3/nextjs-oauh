import { z } from 'zod'

export const userSchema = z.object({
  name: z.string().min(1, '名前は必須です'),
})

export type UserFormData = z.infer<typeof userSchema>
