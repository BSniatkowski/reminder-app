export interface IReminderItemBody {
  title: string
  description: string
  date: string
}

export interface IReminderItem extends IReminderItemBody {
  id: string
}
