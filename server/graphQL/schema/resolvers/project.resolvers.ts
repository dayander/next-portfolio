interface ProjectInput {
  input: {
    projectName?: string;
    address?: string;
    getter?: string;
  }
}

export default {
  Query: {
    project: (_: any, {input}: ProjectInput, ctx: any) => {
      if(input.address){
        return ctx.models.Project.findOne({'address': input.address });
      }
      if(input.getter){
        return ctx.models.Project.findOne({'getter': input.getter });
      }
      const p = ctx.models.Project.findOne({'projectName': input.projectName });
      console.log(p)
      return p
    }
  }
};