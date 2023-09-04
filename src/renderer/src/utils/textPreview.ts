export type TTextPreview = ({ text, maxLength }: { text: string; maxLength: number }) => string

export const textPreview: TTextPreview = ({ text, maxLength }) =>
  text.length > maxLength ? `${text.slice(0, maxLength).trim()}...` : text
