import { factory, primaryKey } from '@mswjs/data'
import { ModelDictionary } from '@mswjs/data/lib/glossary'

import Env from 'config/Env'
import initialMockedDb from 'test/msw/db.initial.data.json'

const models: ModelDictionary = {
  posts: {
    id: primaryKey(String),
    title: String,
    body: String,
  },
}

export const db = factory(models)

export type Model = keyof typeof db

export const restoreDb = () => {
  const dbFromLocalStorage = window.localStorage.getItem('demo-app-db')

  if (dbFromLocalStorage) {
    return Object.assign(JSON.parse(dbFromLocalStorage))
  }

  return initialMockedDb
}

export const clearDb = () => {
  window.localStorage.clear()
}

export const persistDb = (model: Model) => {
  if (Env.isTest()) return
  const data = restoreDb()
  data[model] = db[model].getAll()
  window.localStorage.setItem('demo-app-db', JSON.stringify(data))
}

export const initializeDb = () => {
  const database = restoreDb()

  Object.entries(db).forEach(([key, model]) => {
    const dataEntries = database[key]
    if (dataEntries) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dataEntries?.forEach((entry: Record<string, any>) => {
        model.create(entry)
      })
    }
  })
}

initializeDb()
