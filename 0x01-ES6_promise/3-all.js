/* eslint-disable */
import { uploadPhoto, createUser } from "./utils";
export default function handleProfileSignup() {
    const pr1 = uploadPhoto();
    const pr2 = createUser();
    return (Promise
	    .all([pr1, pr2])
	    .then((output) => {
		console.log(`${ output[0].body } ${ output[1].firstName } ${ output[1].lastName }`);
	    })
	    .catch(() => { console.log('Signup system offline'); })
	    .finally(() => {}));
}
