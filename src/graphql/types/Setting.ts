import { objectType } from 'nexus'

export const Setting = objectType({
  name: 'Setting',
  definition(t) {
    t.model.id()
    t.model.tenantId()
    t.model.userId()
    t.model.key()
    t.model.value()
  },
})
