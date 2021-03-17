import auth0 from 'auth0-js'
import { access } from 'fs';
import history from './history';
export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'heartade.us.auth0.com',
    clientID: '9hxGwVMp9neT5OSsecLBtZhPv3qZqptv',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid profile email'
    })

  login = ()=>{
    this.auth0.authorize();
  }

  userProfile = {}

  handleAuth = () => {
    this.auth0.parseHash((err, authResult) => {
      // parseHash takes a callback function as parameter.
      if(authResult) { // on success authResult is a truthy value
        console.log(authResult);
        localStorage.setItem('access_token', authResult.accessToken)
        localStorage.setItem('id_token', authResult.idToken)

        // expire time is quite short (7200ms), so we multiply it by 1000 and add the current time
        // to get the session expiration time.
        // we then stringify it into json in order to store the result in localStorage.
        let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
        localStorage.setItem('expiresAt', expiresAt);

        this.getProfile();
        setTimeout(()=>{history.replace('/authcheck')}, 2000);
      } else { // on failure
        console.log(err);
      }
    })
  }

  getAccessToken = ()=>{
    if(localStorage.getItem('access_token')) {
      const accessToken = localStorage.getItem('access_token');
      return accessToken;
    } else {
      return null;
    }
  }

  getProfile = ()=>{
    let accessToken = this.getAccessToken();
    if(accessToken) {
      this.auth0.client.userInfo(accessToken, (err, profile)=>{
        if(profile) {
          this.userProfile = {profile};
        }
      })
    }
  }

  logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expiresAt');
  }

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem("expiresAt"));
    return new Date().getTime() < expiresAt;
  }
}
