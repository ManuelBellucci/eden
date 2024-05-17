import dayjs from 'dayjs'
import 'dayjs/locale/it'

dayjs.locale('it')

export const generateNextNDays = (n) => {
  const dates = []
  let day = dayjs().add(1, 'day') // Start from tomorrow
  while (dates.length < n) {
    if (day.day() !== 0) { // Exclude Sundays (day() returns 0 for Sunday)
      dates.push({
        label: day.format('ddd DD MMM'),
        value: day.format('YYYY-MM-DD')
      })
    }
    day = day.add(1, 'day')
  }
  return dates
}
