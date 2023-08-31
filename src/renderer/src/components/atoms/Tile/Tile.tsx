import * as S from './Tile.style'
import { ITileProps } from './Tile.types'

export const Tile: React.FC<ITileProps> = ({ size, contentDirection, children }) => {
  return (
    <S.TileWrapper $size={size} $contentDirection={contentDirection}>
      {children}
    </S.TileWrapper>
  )
}
