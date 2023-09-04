import { Decoration } from '../Decoration/Decoration'
import * as S from './Tile.style'
import { ITileProps } from './Tile.types'

export const Tile: React.FC<ITileProps> = ({
  size,
  transparent,
  contentDirection,
  justifyContent,
  alignItems,
  nowrap,
  children
}) => {
  return (
    <S.TileWrapper
      $transparent={transparent}
      $size={size}
      $contentDirection={contentDirection}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $nowrap={nowrap}
    >
      {!transparent && <Decoration />}
      {children}
    </S.TileWrapper>
  )
}
