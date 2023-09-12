import { textPreview } from './textPreview'

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
    /(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+(?!. $)?/gm

  const linksToReplace = [...formattedText.matchAll(linksRegex)]

  console.log(linksToReplace)

  return <>{formattedText}</>
}
