/* eslint-disabled */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const lst = [];
  lst.push(signUpUser(fileName, lastName));
  lst.push(uploadPhoto(fileName));
  return lst;
}
