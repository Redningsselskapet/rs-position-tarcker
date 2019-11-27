module.exports = ({ fetchDataFunc, interval, name = '', workerFunc }) => {
  let id = null
  return {
    start: () => {
      id = setInterval(() => {
        fetchDataFunc()
          .then(data => {
            workerFunc(data)
          })
      }, interval)
    },
    stop: () => {
      clearInterval(id)
      id = null
    },
    isRunning: () => {
      return id === true
    },
    name: () => {
      return `${name}-${id}`
    }
  }
}
