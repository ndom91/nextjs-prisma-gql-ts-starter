import { objectType, queryType, mutationType } from 'nexus'

export const Account = objectType({
  name: 'Account',
  definition(t) {
    t.model.id()
    t.model.compoundId()
    t.model.userId()
    t.model.providerType()
    t.model.providerId()
    t.model.providerAccountId()
    t.model.refreshToken()
    t.model.accessToken()
    t.model.accessTokenExpires()
    t.model.createdAt()
    t.model.updatedAt()
  },
})

export const Query = queryType({
  definition(t) {
    t.list.field('allAccounts', {
      type: 'Account',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.account.findMany({})
      },
    })
    t.crud.account()
    t.crud.accounts()
    t.crud.session()
    t.crud.sessions()
    t.crud.user()
    t.crud.users()
    t.list.field('allAbsences', {
      type: 'Absence',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.absence.findMany({})
      },
    })
    t.crud.absence()
    t.crud.absences()
    t.crud.leaveType()
    t.crud.leaveTypes()
    t.crud.manager()
    t.crud.managers()
    t.crud.team()
    t.crud.teams()
    t.crud.tenant()
    t.crud.tenants()
    t.crud.membership()
    t.crud.memberships()
    t.crud.setting()
    t.crud.settings()
  },
})

export const Mutation = mutationType({
  definition(t) {
    // t.field('bigRedButton', {
    //   type: 'String',
    //   async resolve(_parent, _args, ctx) {
    //     const { count } = await ctx.prisma.user.deleteMany({});
    //     return `${count} user(s) destroyed. Thanos will be proud.`;
    //   }
    // });
    t.crud.createOneAbsence()
    t.crud.deleteOneAbsence()
    t.crud.deleteManyAbsence()
    t.crud.updateOneAbsence()
    t.crud.updateManyAbsence()

    t.crud.createOneLeaveType()
    t.crud.deleteOneLeaveType()
    t.crud.deleteManyLeaveType()
    t.crud.updateOneLeaveType()
    t.crud.updateManyLeaveType()

    t.crud.createOneManager()
    t.crud.deleteOneManager()
    t.crud.deleteManyManager()
    t.crud.updateOneManager()
    t.crud.updateManyManager()

    t.crud.createOneTeam()
    t.crud.deleteOneTeam()
    t.crud.deleteManyTeam()
    t.crud.updateOneTeam()
    t.crud.updateManyTeam()

    t.crud.createOneTenant()
    t.crud.deleteOneTenant()
    t.crud.deleteManyTenant()
    t.crud.updateOneTenant()
    t.crud.updateManyTenant()

    t.crud.createOneMembership()
    t.crud.deleteOneMembership()
    t.crud.deleteManyMembership()
    t.crud.updateOneMembership()
    t.crud.updateManyMembership()

    t.crud.createOneSetting()
    t.crud.deleteOneSetting()
    t.crud.deleteManySetting()
    t.crud.updateOneSetting()
    t.crud.updateManySetting()
  },
})
