import { objectType } from 'nexus'

export const LeaveType = objectType({
  name: 'LeaveType',
  definition(t) {
    t.model.id()
    t.model.name()
  },
})
