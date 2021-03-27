export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null
  // token: 'BQBIPR6h3u_NDfnaqyFCxZ71jWu31euHJ5ZnzRYSl7Ah-ZHpIP14p8YLjELLrwNTdRRFd4wm1C4vCrgmDlDCkk0QnRljxH4-2zaxHOLleS9RaDSC7cykXuG5bSw5BW76JMo_6lFw35QYqMNPrPmpUyIIE5qpzDp4ft-hCbDMv6CK2LFMXklm'
}

const reducer = (state, action) => {
  console.log(action)

  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }
    
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }

    default:
      return state
  }
}

export default reducer