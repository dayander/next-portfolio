import { USER_ERRORS } from '../../constants/errors';

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
      return ctx.models.User.findOne({ email: input.email })
        .then((existingUser: any) => {
          if (existingUser) {
            throw new Error(USER_ERRORS.EXISITING_USER);
          }

          const user = ctx.models.User.create({
            name: input.name,
            email: input.email,
            password: input.password,
          });

          const token = ctx.createToken(user._id, user.email);

          return { token, user };
        })
        .catch((error: Error) => {
          throw new Error(error.message);
        });
    },

    login(_: any, { input }: any, ctx: any) {
      return ctx.localAuth
        .authenticate('graphql-local', {
          email: input.email,
          password: input.password,
        })
        .then(({ user }: any) => {
          if (!user) {
            throw new Error('nope');
          }

          const token = ctx.createToken(user._id, user.email);

          return { token, user };
        })
        .catch((error: Error) => {
          throw new Error(error.message);
        });
    },
  },
};
