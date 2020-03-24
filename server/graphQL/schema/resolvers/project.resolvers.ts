interface ProjectInput {
  input: {
    projectName?: string;
    address?: string;
  }
}

export default {
  Query: {
    project: (_: any, {input}: ProjectInput, ctx: any) => {
      if(input.address){
        return ctx.models.Project.findOne({'address': input.address });
      }

      return ctx.models.Project.findOne({'projectName': input.projectName });
    }
  }
};