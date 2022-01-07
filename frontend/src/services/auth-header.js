export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    //return { Authorization: 'Bearer ' + user.accessToken }; // Option P6
    return { 'x-access-token': user.accessToken};    // Option 2  
  } else {
    return {};
  }
}