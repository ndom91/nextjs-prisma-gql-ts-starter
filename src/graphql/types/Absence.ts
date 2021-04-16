import { objectType } from "nexus"

export const Absence = objectType({
  name: "Absence",
  definition(t) {
    t.model.id()
    t.model.userId()
    t.model.managerId()
    t.model.createdBy()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.fromDate()
    t.model.toDate()
    t.model.note()
    t.model.files()
    t.model.approveHash()
    t.model.approved()
    t.model.approvedAt()
    t.model.disabled()
    t.model.typeId()
    t.model.daysRemainingLastYear()
    t.model.daysEarnedThisYear()
    t.model.daysSpentThisYear()
    t.model.daysAvailable()
    t.model.daysRequested()
    t.model.daysRemainingThisYear()
  },
})
