import { objectType } from 'nexus'

export const Membership = objectType({
  name: 'Membership',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.tenantId()
    t.model.userId()
  },
})
