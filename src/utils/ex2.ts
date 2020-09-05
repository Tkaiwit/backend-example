interface IStudent {
  name: string
  score: number
}

interface IStore {
  subject: string
  students: IStudent[]
}

interface IStudentUpdateScore {
  name: string
  scores: Record<string, number>
}

interface IRemoveStudentScore {
  name: string
  subject: string
}
interface IStudentScore {
  [key: string]: any
}

export const updateStudentScore = (store: IStore[], update: IStudentUpdateScore): IStore[] => {
  return store
}

export const removeStudentScoreBySubject = (store: IStore[], record: IRemoveStudentScore): IStore[] => {
  return store
}

export const getStudentScoreBySubject = (store: IStore[], subjects: string[]): IStudentScore[] => {
  return []
}
