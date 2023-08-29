import * as S from './Tile.style'
import { ITile } from './Tile.types'

export const Tile: React.FC<ITile> = ({ size, contentDirection, children }) => {
  return (
    <S.TileWrapper $size={size} $contentDirection={contentDirection}>
      {children}
    </S.TileWrapper>
  )
}
