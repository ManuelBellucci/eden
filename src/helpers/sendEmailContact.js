import emailjs from 'emailjs-com'

// Funzione per inviare email utilizzando EmailJS, con ID template specifico per contatto
export const sendEmail = async (templateParams) => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID // ID del servizio EmailJS
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT // ID del template EmailJS per contatti
    const userId = import.meta.env.VITE_EMAILJS_USER_ID // ID dell'utente EmailJS

    // Invia l'email e ritorna la risposta
    const response = await emailjs.send(serviceId, templateId, templateParams, userId)
    return response
  } catch (error) {
    console.error('Error sending email:', error) // Logga eventuali errori
    throw error // Rilancia l'errore per la gestione a monte
  }
}
