import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const usr = await createUser();
    const phot = await uploadPhoto();
    return ({ photo: phot, user: usr });
  } catch (err) {
    return ({ photo: null, user: null });
  }
}
