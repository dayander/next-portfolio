interface ContactResolversInput {
  input: {
    name: string;
    email: string;
    message: string;
    date: Date;
  };
}

export default {
  Query: {
    contact: (_: any, __: any, ctx: any) => ctx.models.Contact.find(),
  },
  Mutation: {
    contactPost: (_: any, { input }: ContactResolversInput, ctx: any) => {
      input.date = new Date();
      return ctx.models.Contact.create(input);
    },
  },
};
