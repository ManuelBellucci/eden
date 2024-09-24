// Funzione per convertire un oggetto in una stringa di query
export const objectToQueryString = (params) => {
  return Object.entries(params) // Converti l'oggetto in un array di coppie chiave/valore
    .filter(([_, value]) => value !== null && value !== '' && value !== false) // Filtra valori nulli, vuoti o falsi
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`) // Codifica le chiavi e i valori
    .join('&') // Unisci le coppie con '&'
}

// Funzione per convertire una stringa di query in un oggetto
export const queryStringToObject = (queryString) => {
  return Object.fromEntries(new URLSearchParams(queryString)) // Usa URLSearchParams per analizzare la stringa di query
}
