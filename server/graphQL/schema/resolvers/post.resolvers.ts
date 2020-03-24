interface PostCreateResolversInput {
  input: {
    name: string;
    title: string;
    content?: string;
    slug?: string;
    date?: Date
    type?: PostType,
  }
}

interface PostResolvers {
  input: {
  name: string
  title: string
  date: Date
  type: PostType
  }
}

enum PostType {
  ACCESSIBILITY = 'ACCESSIBILITY',
  SOFTWARE = 'SOFTWARE',
  USER_EXPERIENCE = 'USER_EXPERIENCE'
}


export default {
  Query: {
    post: (_: any, {input}: PostResolvers, ctx: any) => ctx.models.Post.find(input),
    postList: (__: any, ___: any, ctx: any) => ctx.models.Post.find(),
  },
  Mutation: {
    createPost:(_: any, {input}: PostCreateResolversInput, ctx: any) => {
      return ctx.models.Post.create(input);

    }
  }
};
