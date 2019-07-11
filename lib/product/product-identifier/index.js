const ow = require('ow')

class ProductIdentifier {
  constructor (name, value) {
    ow(name, ow.string)
    ow(value, ow.string)

    this.name = name
    this.value = value
  }
}

module.exports = ProductIdentifier
