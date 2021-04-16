import { objectType } from 'nexus'

export const Manager = objectType({
  name: 'Manager',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.image()
  },
})
