export default {
  Query: {
    ResumeJobEntryList: (__: any, ___: any, ctx: any) => ctx.models.Resume.find(),
  },
};
