export interface IReminderTimeout {
  id: string
  timeoutId: ReturnType<typeof setTimeout>
}

export interface IState {
  remindersTimeouts: Array<IReminderTimeout>
}
