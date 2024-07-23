import emailjs from 'emailjs-com'

export const sendEmail = async (templateParams) => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const userId = import.meta.env.VITE_EMAILJS_USER_ID

    await emailjs.send(serviceId, templateId, templateParams, userId)
  } catch (error) {
    console.error('Error sending email:', error)
  }
}
