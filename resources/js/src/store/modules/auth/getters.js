export default {
  loggedIn: state => !!state.token,
  tempToken: state => state.tempToken,
  securityIsEnabled: state => !!state.security.google2fa_enable,
  qrCode: state => state.security.google2fa_url
}
