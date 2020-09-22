import { Document } from 'mongoose';

export interface CatsInterface extends Document {
  readonly  title: string
  readonly  avatar: string // https://www.peppercarrot.com/extras/html/2016_cat-generator/avatar.php?seed=1
  readonly  sounds: string
}

export interface CatTalkInterface {
  id: string
  title: string
  avatar: string
  message: string
  createdAt: Date | string | number
}
