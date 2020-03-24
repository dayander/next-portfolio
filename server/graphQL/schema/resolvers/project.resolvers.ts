export default {
  Query: {
    project: (_: any, {input}: any, ctx: any) => {
      if(input.address){
        return ctx.models.Project.findOne({'address': input.address });
      }

      return ctx.models.Project.findOne({'projectName': input.projectName });
    }
  }
};