const ow = require('ow')
const Price = require('./price')

class ProductType {
  constructor () {
    // This.possiblePrices = []

    Object.defineProperty(this, 'possiblePrices', {
      enumerable: true,
      get () {
        return this.possiblePrices
      },
      set (prices) {
        ow(prices, ow.array.ofType(Price))
        this.possiblePrices = [...prices]
      }
    })
  }
}

module.exports = ProductType
