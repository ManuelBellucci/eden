// Funzione per validare un indirizzo email
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Espressione regolare per la validazione dell'email
  return re.test(String(email).toLowerCase()) // Testa l'email e ritorna il risultato
}

export default validateEmail
