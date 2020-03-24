export default {
  Query: {
    project: (_: any, __: any, ctx: any) => ({
      projectName: 'graphql',
      companyName: 'andersonday.com',
      projectHeading: 'learning new stuff',
      challengeHeading: 'Not sure how to connect to mongo db yet',
      challenge: 'were gonna do it',
      approachHeading: 'by learning',
      approach: 'trying and reading',
      outcomeHeading: 'working graphql server ',
      outcome: 'winning',
      tags: ['String', 'trying'],
      headingImg: {
        imgPath: 'String',
        altText: 'String',
      },
      address: ctx.models.Project
      })
  }
};
