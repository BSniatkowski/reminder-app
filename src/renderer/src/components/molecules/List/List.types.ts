export enum EListDirections {
  row,
  column
}

export interface IList {
  direction?: EListDirections
  wrap?: boolean
  children: React.ReactNode
}

export interface IListWrapper {
  $direction?: EListDirections
  $wrap?: boolean
}
