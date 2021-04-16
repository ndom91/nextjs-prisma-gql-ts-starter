import { objectType } from "nexus"

export const VerificationRequest = objectType({
  name: "VerificationRequest",
  definition(t) {
    t.model.id()
    t.model.identifier()
    t.model.token()
    t.model.expires()
    t.model.createdAt()
    t.model.updatedAt()
  },
})
