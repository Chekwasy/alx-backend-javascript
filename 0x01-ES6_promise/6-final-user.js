import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const pr1 = signUpUser(fileName, lastName);
  const pr2 = uploadPhoto(fileName);
  return Promise.allSettled([pr1, pr2]).then((response) => {
    const lst = [];
    response.forEach((item) => {
      if (item.status === 'fulfilled') {
        lst.push({ status: item.status, value: item.value });
      } else {
        lst.push({ status: item.status, value: `${item.reason}` });
      }
    });
    return lst;
  });
}
