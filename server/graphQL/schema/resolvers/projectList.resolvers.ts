export default {
  Query: {
    projectList: (_: any, __: any, ctx: any) => ctx.models.Project.find()
  }
};
