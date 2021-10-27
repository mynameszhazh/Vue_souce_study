export interface Feature {
  id: number;
  hobby?: string;
  name: string;
}

export interface RootState {
  counter: number
}

export interface UserState {
  name: string
  token: string
}