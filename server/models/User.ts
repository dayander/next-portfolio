import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

// eslint-disable-next-line func-names
userSchema.pre('save', function(next) {
  let user = this;

  bcrypt.genSalt(10, (error: Error, salt: string) => {
    if (error) {
      return next(error);
    }
    // @ts-ignore
    bcrypt.hash(user.password, salt, (hashError: Error, hash: string) => {
      if (hashError) {
        return next(hashError);
      }
      // @ts-ignore
      user.password = hash;

      next();
    });
  });
});

//comparePassword
userSchema.methods.comparePassword = function(candidatePassword: string, callback: any) {
  // @ts-ignore
  bcrypt.compare(candidatePassword, this.password, (compareError: Error, isMatch: boolean) => {
    if (compareError) {
      return callback(compareError);
    }

    callback(null, isMatch);
  });
};

export default model('User', userSchema);
