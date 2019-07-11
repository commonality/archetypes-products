const ow = require('ow')

class ProductFeatureType {
  constructor (name, options = {
    description: null,
    possibleValues: []
  }) {
    ow(name, ow.string)

    this.description = options.description
    this.name = name
    this.possibleValues = options.possibleValues
  }
}

module.exports = ProductFeatureType
