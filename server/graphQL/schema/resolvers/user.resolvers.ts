interface SignUpInput {
  input: {
    name: string;
    email: string;
    password: string;
  };
}

export default {
  Query: {
    user: (_: any, input: any, ctx: any) => ctx.models.User.findOne({ email: input.email }),
  },
  Mutation: {
    signUp: (_: any, { input }: SignUpInput, ctx: any) => {
      // if (existing) {
      //   throw new Error('nope');
      // }

      const user = ctx.models.User.create({
        name: input.name,
        email: input.email,
        password: input.password,
      });
      console.log(user);
      const token = ctx.createToken(user._id, user.email);
      console.log(token);
      return { token, user };
    },
    login(_: any, { input }: any, ctx: any) {
      console.log(input);
      const user = ctx.models.User.findOne({ ...input });

      if (!user) {
        throw new Error('nope');
      }

      const token = ctx.createToken(user._id, user.email);
      return { token, user };
    },
  },
};
