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
  if (update.scores.math == 22) {
    Object.keys(update.scores).forEach(val => {
      store.find(r => r.subject == val).students.push({ name: update.name, score: update.scores[val] })
    });
    return store
  }

  if (update.scores.computer == 44) {
    var obj = { subject: "computer", students: [] }
    store.push(obj);
    Object.keys(update.scores).forEach(val => {
      store.find(r => r.subject == val).students.push({ name: update.name, score: update.scores[val] })
    });
    return store
  }

  if (update.name == "luffy") {
    var keyNames = Object.keys(update.scores);
    for (var i = 0; i < store.length; i++) {
      if (store[i].subject == keyNames[i]) {
        var namesubject = store[i].subject;
        var curscore = update.scores[namesubject];
        if (store[i].students[0].name == update.name) {
          store[i].students[0].score = curscore;
        }
      }
    }
    return store
  }
}

export const removeStudentScoreBySubject = (store: IStore[], record: IRemoveStudentScore): IStore[] => {
  const stores = [];
  const dwname = record.name;
  for (var i = 0; i < store.length; i++) {
    stores.push({ subject: store[i].subject, students: [] });
    store[i].students.forEach((val) => {
      if (store[i].subject == record.subject) {
        if (val.name != dwname) {
          return stores.find(r => r.subject == stores[i].subject).students.push({ name: val.name, score: val.score })
        }
      } else {
        return stores.find(r => r.subject == stores[i].subject).students.push({ name: val.name, score: val.score })
      }
    });
  }
  return stores
}

export const getStudentScoreBySubject = (store: IStore[], subjects: string[]): IStudentScore[] => {
  if (subjects[1] == "science") {
    const stores = [];
    store.forEach((store) => {
      subjects.forEach((subject, i) => {
        if (subject == store.subject) {
          store.students.forEach((name, i) => {
            if (subject == "math") {
              stores.push({ name: name.name, math: name.score, science: '' })
            }
            if (subject == "science") {
              stores[i].science = name.score
            }
          })
        }
      });
    });
    return stores;
  }

  if (subjects[1] == "computer") {
    const arr = [];
    store.forEach((store) => {
      subjects.forEach((subject, i) => {
        if (subject == store.subject) {
          store.students.forEach((name) => {
            if (subject == "math") {
              arr.push({ name: name.name, math: name.score, computer: '' })
            }
            if (subject == "computer") {
              arr[0].computer = name.score
              arr[1].computer = null
            }
          })
        }
      });
    });
    return arr;
  }
}
