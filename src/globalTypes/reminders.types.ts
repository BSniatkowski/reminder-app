export interface IReminderItemBody {
  title: string
  description: string
  link: string
  autoOpenLink: boolean
  date: string
}

export interface IReminderItem extends IReminderItemBody {
  id: string
}

export interface IUpdatedReminderItem {
  id: string
  title?: string
  description?: string
  link?: string
  autoOpenLink?: boolean
  date?: string
}
