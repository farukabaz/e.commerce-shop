// Go to commercejs.com
// Make new profil for the site and make .env file for the REACT_APP_CHEC_PUBLIC_KEY

import Commerce from '@chec/commerce.js';

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);