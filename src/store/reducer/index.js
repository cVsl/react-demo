const initData = {
  count: 0,
  userName: 'admin',
  passWord: '11111'
}
export default(state = initData, action) => {
  const count = state.count
  switch (action.type) {
    case 'increase':
      console.log('action:', action)
      return { count: count + 1 }
    case 'LOGINUSER':
      return {...state, ...{userName: action.userName}}
      // return initData.userName = action.userName
    case 'LOGINPASS':
      return {...state, ...{passWord: action.passWord}}
      // return initData.passWord = action.passWord
    default:
      return state
  }
}