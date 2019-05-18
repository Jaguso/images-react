import payload from './payload';

export default () => {
  let token = localStorage.getItem('Token');
  return (token == null) ? false : payload(token).iat < new Date() ? true : false;
}