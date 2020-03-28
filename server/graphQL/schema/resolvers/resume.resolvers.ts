export default {
  Query: {
    resume: (__: any, ___: any, ctx: any) => {
      return ctx.models.Resume.findOne({ _id: '5e7fc49ed6ab9fbde0f88446' });
    },
  },
};
