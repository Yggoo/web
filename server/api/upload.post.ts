import { blob } from 'hub:blob'

export default defineEventHandler(async (event) => {
  const result = await blob.handleUpload(event, {
    formKey: 'files',
    multiple: false,
    ensure: {
      maxSize: '10MB',
      types: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
    },
    put: {
      addRandomSuffix: true,
      prefix: 'products',
    },
  })
  return result
})
