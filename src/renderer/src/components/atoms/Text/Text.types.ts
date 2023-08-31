export enum ETextTags {
  span = 'span',
  p = 'p',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4'
}

export interface IText {
  as?: ETextTags
  children: React.ReactNode
}
