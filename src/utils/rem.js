/* eslint-disable */
(function () {
  const setRem = () => {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px'
  }
  setRem()
  window.onresize = setRem
}())

/* eslint-enable */
