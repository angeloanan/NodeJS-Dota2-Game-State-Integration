const DotaGSI = require('../src/index')
const client = new DotaGSI.Client()

client.on('READY', () => {
  console.log(`Listening on port ${client.options.port}`)
})
