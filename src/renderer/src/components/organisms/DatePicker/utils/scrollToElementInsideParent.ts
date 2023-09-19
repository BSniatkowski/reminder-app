type TScrollToElementInsideParent = ({
  elementId,
  refsMap
}: {
  elementId: string
  refsMap: Map<string, HTMLElement>
}) => void

export const scrollToElementInsideParent: TScrollToElementInsideParent = ({
  elementId,
  refsMap
}) => {
  const element = refsMap.get(elementId)
  const parentelement = element?.parentElement

  const elementY = element?.getBoundingClientRect()?.y
  const parentY = parentelement?.getBoundingClientRect()?.y

  if (!elementY || !parentY) return

  const scrollY = Math.round(elementY - parentY)

  if (!scrollY) return

  element?.parentElement?.scrollBy(0, scrollY)
}
