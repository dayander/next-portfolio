import gql from 'graphql-tag';

const SingleProjectQuery = gql`
  query SingleProject($getter: String) {
    project(input: { getter: $getter }) {
      getter
      companyName
      projectHeading
      challengeHeading

      challenge
      challenge01 {
        imgPath
        altText
      }
      challenge02 {
        imgPath
        altText
      }
      approachHeading
      approach
      outcomeHeading
      outcome
      headingImg {
        imgPath
        altText
      }
      address
      bgImage
      process01 {
        imgPath
        altText
      }
      process02 {
        imgPath
        altText
      }
      outcome01 {
        imgPath
        altText
      }
      largeImage
      _id
    }
  }
`;

export default SingleProjectQuery;
