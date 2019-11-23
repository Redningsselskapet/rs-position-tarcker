module.exports = ({ fetchAisData, interval }) => {
  let id = null
  return {
    start: () => {
      id = setInterval(() => {
        fetchAisData()
      }, interval)
    },
    stop: () => {
      clearInterval(id)
    }
  }
}
