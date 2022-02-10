export interface ITodo {
  date: {
    seconds: number
    nanoseconds: number
  } | any
  status: boolean
  text: string
  uid: string | undefined
  id?: string
}

export interface IError {
  error: string
  res: boolean
}
