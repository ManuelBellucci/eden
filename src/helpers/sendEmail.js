import emailjs from 'emailjs-com'

// Funzione per inviare email utilizzando EmailJS
export const sendEmail = async (templateParams) => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID // ID del servizio EmailJS
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID // ID del template EmailJS
    const userId = import.meta.env.VITE_EMAILJS_USER_ID // ID dell'utente EmailJS

    // Invia l'email
    await emailjs.send(serviceId, templateId, templateParams, userId)
  } catch (error) {
    console.error('Error sending email:', error) // Logga eventuali errori
  }
}
