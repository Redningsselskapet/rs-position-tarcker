module.exports = ({ fetchAisData, aisRepository, interval }) => {
  let id = null
  return {
    start: () => {
      id = setInterval(() => {
        fetchAisData().then(data => {
          // console.log(data)
          aisRepository.addAisPositions(data).then(()=>{
            console.log('data added')
          }).catch(err => console.log(err.message))
        }).catch(err => {
          console.log(err.message) // replace with logger
          throw(err)
        })
      }, interval)
    },
    stop: () => {
      clearInterval(id)
    } 
  }
}
