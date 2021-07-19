const { Blockchain } = require('./src/blockchain')
const { Block } = require('./src/block')

let blockchain =  new Blockchain()
let block = new Block('test data')
blockchain.initializeChain().then(() => {
  blockchain._addBlock(block).then(() => console.log(blockchain.chain)).catch(console.log)
})

