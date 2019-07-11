const ow = require('ow')
const Price = require('../price')
const ProductFeatureType = require('../product-feature-type')

/* eslint-disable max-lines-per-function */
const mixinProductTypeProperties = (
  object,
  values = {
    mandatoryProductFeatureTypes: [],
    optionalProductFeatureTypes: [],
    possiblePrices: []
  }
) =>
  Object.defineProperties(object, {
    mandatoryProductFeatureTypes: {
      enumerable: true,
      get () {
        return this.valueMap.get('mandatoryProductFeatureTypes')
      },
      set (productFeatureTypes) {
        ow(
          productFeatureTypes,
          ow.any(ow.array.empty, ow.array.ofType(ProductFeatureType))
        )

        this.valueMap.set('mandatoryProductFeatureTypes', [
          ...productFeatureTypes
        ])
      }
    },
    optionalProductFeatureTypes: {
      enumerable: true,
      get () {
        return this.valueMap.get('optionalProductFeatureTypes')
      },
      set (productFeatureTypes) {
        ow(
          productFeatureTypes,
          ow.any(ow.array.empty, ow.array.ofType(ProductFeatureType))
        )
        this.valueMap.set('optionalProductFeatureTypes', [
          ...productFeatureTypes
        ])
      }
    },
    possiblePrices: {
      enumerable: true,
      get () {
        return this.valueMap.get('possiblePrices')
      },
      set (prices) {
        ow(prices, ow.any(ow.array.empty, ow.array.ofType(Price)))
        this.valueMap.set('possiblePrices', [...prices])
      }
    },
    valueMap: {
      value: new Map(Object.entries(values))
    }
  })
/* eslint-enable max-lines-per-function */

module.exports = mixinProductTypeProperties
