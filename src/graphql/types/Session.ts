import { objectType } from "nexus"

export const Session = objectType({
  name: "Session",
  definition(t) {
    t.model.id()
    t.model.userId()
    t.model.expires()
    t.model.sessionToken()
    t.model.accessToken()
    t.model.createdAt()
    t.model.updatedAt()
  },
})
