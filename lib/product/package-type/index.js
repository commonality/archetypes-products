const ow = require('ow')
const ProductFeatureType = require('../product-feature-type')
const ProductType = require('../product-type')

class PackageType extends ProductType {
  constructor () {
    super()
    Object.defineProperties(this, {
      components: {
        enumerable: true,
        get () {
          return this.valueMap.get('components')
        },
        set (productTypes) {
          ow(productTypes, ow.any(ow.array.empty, ow.array.ofType(ProductType)))
          this.valueMap.set('components', [...productTypes])
        }
      },
      mandatoryFeatures: {
        enumerable: true,
        get () {
          return this.valueMap.get('mandatoryFeatures')
        },
        set (productFeatureTypes) {
          ow(
            productFeatureTypes,
            ow.any(ow.array.empty, ow.array.ofType(ProductFeatureType))
          )
          this.valueMap.set('mandatoryFeatures', [...productFeatureTypes])
        }
      },
      optionalFeatures: {
        enumerable: true,
        get () {
          return this.valueMap.get('optionalFeatures')
        },
        set (productFeatureTypes) {
          ow(
            productFeatureTypes,
            ow.any(ow.array.empty, ow.array.ofType(ProductFeatureType))
          )
          this.valueMap.set('optionalFeatures', [...productFeatureTypes])
        }
      },
      valueMap: {
        value: new Map([
          ['components', []],
          ['mandatoryFeatures', []],
          ['optionalFeatures', []]
        ])
      }
    })
  }
}

module.exports = PackageType
