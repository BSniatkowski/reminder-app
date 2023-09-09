export enum EListDirections {
  row,
  column
}

export interface IList {
  as?: 'nav'
  direction?: EListDirections
  wrap?: boolean
  children: React.ReactNode
}

export interface IListWrapper {
  $direction?: EListDirections
  $wrap?: boolean
}
