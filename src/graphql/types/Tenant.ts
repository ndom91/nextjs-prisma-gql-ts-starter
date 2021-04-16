import { objectType } from 'nexus'

export const Tenant = objectType({
  name: 'Tenant',
  definition(t) {
    t.model.id()
    t.model.name()
  },
})
