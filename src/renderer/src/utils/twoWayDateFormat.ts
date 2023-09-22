import { EDateFormats } from '@renderer/enums/date.enums'
import { format, parse } from 'date-fns'

type TTwoWayDateFormatReturn<T> = T extends string ? Date : T extends number | Date ? string : never

export const twoWayDateFormat = <T>(date: T): TTwoWayDateFormatReturn<T> => {
  if (typeof date === 'string')
    return parse(date, EDateFormats.fullDate, new Date()) as TTwoWayDateFormatReturn<T>
  if (typeof date === 'number' || date instanceof Date)
    return format(date, EDateFormats.fullDate) as TTwoWayDateFormatReturn<T>

  throw new Error('Incorrect date type!')
}
