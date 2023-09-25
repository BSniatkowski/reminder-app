export const addItem = <T extends { id: string }>(array: Array<T>, item: T): Array<T> => [
  ...array,
  item
]

export const removeItem = <T extends { id: string }>(array: Array<T>, itemId: string): Array<T> =>
  array.filter((item) => item.id !== itemId)

export const updateItem = <T extends { id: string }>(array: Array<T>, updatedItem: T): Array<T> => [
  ...array.slice(
    0,
    array.findIndex((item) => item.id === updatedItem.id)
  ),
  updatedItem,
  ...array.slice(array.findIndex((item) => item.id === updatedItem.id) + 1)
]
