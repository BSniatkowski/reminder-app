type TGetActualVisibleListElement = ({
  refsMap,
  mandatoryId
}: {
  refsMap: Map<string, HTMLElement>
  mandatoryId: string
}) => string | undefined

export const getActualVisibleListElement: TGetActualVisibleListElement = ({
  refsMap,
  mandatoryId
}) => {
  const elements = Array.from(refsMap.entries(), (mapItem) => ({
    id: mapItem[0],
    node: mapItem[1]
  })).filter(({ id }) => id.includes(mandatoryId))

  if (!elements.length) return

  const parentElement = elements[0]?.node?.parentElement

  const parentYPosition = parentElement?.getBoundingClientRect()?.y

  if (!parentYPosition) return

  const elementsWithYDistancesToParent = elements.map(({ id, node }) => ({
    id,
    elementYDistance: Math.abs(Math.round(node?.getBoundingClientRect()?.y - parentYPosition))
  }))

  const elementsSortedByDistance = elementsWithYDistancesToParent.sort(
    ({ elementYDistance: elementYDistanceA }, { elementYDistance }) =>
      elementYDistanceA - elementYDistance
  )

  return elementsSortedByDistance[0].id
}
