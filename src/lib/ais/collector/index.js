module.exports = ({ fetchAisData, interval }) => {
  return {
    start: () => {
      setInterval(() => {
        fetchAisData()
      }, interval)
    }
  }
}
