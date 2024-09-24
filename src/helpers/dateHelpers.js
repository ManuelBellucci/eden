import dayjs from 'dayjs'
import 'dayjs/locale/it'

// Imposta la lingua di dayjs su italiano
dayjs.locale('it')

// Array di fasce orarie disponibili
export const times = [
  { label: '9-11', value: '9-11' },
  { label: '11-13', value: '11-13' },
  { label: '15-17', value: '15-17' },
  { label: '17-20', value: '17-20' }
]

// Funzione per generare i prossimi N giorni escludendo la domenica
export const generateNextNDays = (n) => {
  const dates = [] // Array per memorizzare le date
  let day = dayjs().add(1, 'day') // Inizia da domani
  while (dates.length < n) {
    if (day.day() !== 0) { // Escludi le domeniche (day() restituisce 0 per domenica)
      dates.push({
        label: day.format('ddd DD MMM'), // Formato della data
        value: day.format('YYYY-MM-DD') // Valore della data in formato ISO
      })
    }
    day = day.add(1, 'day') // Aggiungi un giorno
  }
  return dates // Ritorna l'array delle date generate
}
