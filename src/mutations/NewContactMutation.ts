import gql from 'graphql-tag';

const NewContactMutation = gql`
  mutation ContactCreate($input: ContactInput!) {
    contactPost(input: $input) {
      _id
    }
  }
`;

export default NewContactMutation;
