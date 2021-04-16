import { objectType } from "nexus"

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.emailVerified()
    t.model.image()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.teamId()
    t.model.tenantId()
    t.model.settings()
  },
})
