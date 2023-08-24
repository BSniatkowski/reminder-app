import * as S from './Popup.styles'

export const Popup: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <S.PopupWrapper>
      Popup content {title}
      <span
        onClick={() => {
          window.api.closeWindow()
        }}
      >
        Click here to close window!
      </span>
    </S.PopupWrapper>
  )
}
