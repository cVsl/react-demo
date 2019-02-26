const initData = {
  userName: 'admin',
  passWord: 'aaaaa'
}
export default(state = initData, action) => {
  switch (action.type) {
    case 'LOGINUSER':
      return {...state, userName: action.userName}
      // return initData.userName = action.userName
    case 'LOGINPASS':
      return {...state, passWord: action.passWord}
      // return initData.passWord = action.passWord
    default:
      return state
  }
}