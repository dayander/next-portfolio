import { GraphQLLocalStrategy } from 'graphql-passport';
import User from '../models/User';

// @ts-ignore
const localStrategy = new GraphQLLocalStrategy((email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false);
    }

    // @ts-ignore
    user.comparePassword(password, (comparePasswordError, isMatch) => {
      if (comparePasswordError) {
        return done(comparePasswordError);
      }

      if (!isMatch) {
        return done(null, false);
      }

      if (isMatch) {
        return done(null, user);
      }
    });
  });
});

export default localStrategy;
