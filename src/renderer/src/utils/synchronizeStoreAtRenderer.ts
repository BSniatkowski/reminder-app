export const synchronizeStoreAtRenderer = ({ action, payload }) => {
  console.log({ action, payload })

  window.api.synchronizeReminders(payload)
}
