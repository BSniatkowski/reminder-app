import * as S from './Popup.styles'

export const Popup: React.FC<{ title?: string }> = ({ title }) => {
  return <S.PopupWrapper>Popup content {title}</S.PopupWrapper>
}
