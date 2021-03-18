// Verificar https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

// Fará autenticação de usuário por meio da api do spotify
export const authEndpoint = 'https://accounts.spotify.com/authorize'

const redirectUri = 'http://localhost:3000/'

const clientId = process.env.REACT_APP_SPOTIFY_ID

const scopes = [
  'user-read-currently-playing', 
  'user-read-recently-played', 
  'user-read-playback-state', 
  'user-top-read', 
  'user-modify-playback-state', 
]

export const getTokenFromUrl = () => {
  // retorna hash da url (string após #)
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      // #acessToken=secretkey&name=Al
      let parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1]) // decodeUriComponent de accessToken

      return initial // busca o token de acesso
    }, {})
}

// %20 será colocado no lugar de cada espaço
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true` 