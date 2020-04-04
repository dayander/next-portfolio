import jwt, { Secret } from 'jsonwebtoken';
import { models } from '../models';

const secret = 'this is my secret...Shhhh' as Secret;

export const createToken = (id: string, email: string) => jwt.sign({ id, email }, secret);

export const getUserFromToken = (token: string) => {
  try {
    const user = jwt.verify(token, secret);
    console.log(user);
    return models.User.findOne({ id: user });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const authenticated = (next: Function) => (
  root: any,
  args: any,
  context: any,
  info: any
) => {
  if (!context.user) {
    throw new Error('Not Auth');
  }
  return next(root, args, context, info);
};

// /**
//  * checks if the user on the context has the specified role.
//  * continues to the next resolver if true
//  * @param {String} role enum role to check for
//  * @param {Function} next next resolver function to run
//  */
// const authorized = ( next) => (root, args, context, info) => {
//   if(context.user.role !== role){
//     throw new Error(`not authorized: must be a ${role}`)
//   }
//
//   return next(root, args, context, info)
//
// }
