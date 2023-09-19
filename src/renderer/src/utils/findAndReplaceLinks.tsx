import { Link } from '@renderer/components/atoms/Link/Link'
import { textPreview } from './textPreview'
import { Text } from '@renderer/components/atoms/Text/Text'
import { ETextTags } from '@renderer/components/atoms/Text/Text.types'
import { Fragment } from 'react'

export type TFindAndReplaceLinks = ({
  text,
  previewMaxLength
}: {
  text: string
  previewMaxLength?: number
}) => React.ReactNode

export const findAndReplaceLinks: TFindAndReplaceLinks = ({ text, previewMaxLength }) => {
  const formattedText = previewMaxLength ? textPreview({ text, maxLength: previewMaxLength }) : text

  const linksRegex =
    // eslint-disable-next-line no-useless-escape
    /(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+(?!. $)?/gm

  const linksToReplace = [...formattedText.matchAll(linksRegex)].map(
    (iteratorObject) => iteratorObject[0]
  )

  let startIndex = 0

  const slicedTextStructure: Array<React.ReactNode> = []

  for (const link of linksToReplace) {
    const linkStartIndex = formattedText.indexOf(link, startIndex)

    const newTextPart = formattedText.slice(startIndex, linkStartIndex)

    slicedTextStructure.push(newTextPart)

    const linkComponent = <Link text={link} linkRef={link} />
    slicedTextStructure.push(linkComponent)

    startIndex = linkStartIndex + link.length
  }

  if (!formattedText.endsWith(linksToReplace[linksToReplace.length - 1]))
    slicedTextStructure.push(formattedText.slice(startIndex))

  return (
    <Text as={ETextTags.p}>
      {slicedTextStructure.map((item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
    </Text>
  )
}
