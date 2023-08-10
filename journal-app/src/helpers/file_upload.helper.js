export const fileUpload = async (file) => {
  if (!file) throw new Error(`doesn't exist: ${file}`)

  const cloudURL = 'https://api.cloudinary.com/v1_1/ddoueyill/upload'
  const formData = new FormData()
  formData.append('upload_preset', 'react-journal')
  formData.append('file', file)

  try {
    const res = await fetch(cloudURL, {
      method: 'POST', 
      body: formData, 
    })
    if (!res.ok) throw new Error(`can't upload image`)

    const data = await res.json()
    return data.secure_url
  } catch (error) {
    throw new Error(error.message)
  }
}
