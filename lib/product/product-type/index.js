const { RuleContext } = require('archetypes-rules')
const mixinProductTypeProperties = require('./mixin-product-type-properties')
const ow = require('ow')
const ProductFeatureType = require('../product-feature-type')
const ProductIdentifier = require('../product-identifier')
const remove = require('lodash.remove')

/**
 *
 *
 * @class ProductType
 *
 * @property {string} description - Description.
 * @property {string} name - Name.
 * @property {Array.<ProductFeatureType>} mandatoryProductFeatureTypes -
 * Mandatory features.
 * @property {Array.<ProductFeatureType>} optionalProductFeatureTypes -
 * Optional features.
 * @property {ProductIdentifier} productIdentifier - ProductIdentifier.
 * @property {Array.<Price>} possiblePrices - Possible Prices.
 */

class ProductType {
  constructor (
    name,
    productIdentifier,
    options = {
      description: null,
      mandatoryProductFeatureTypes: [],
      optionalProductFeatureTypes: [],
      possiblePrices: []
    }
  ) {
    ow(name, ow.string)
    ow(productIdentifier, ow.object.instanceOf(ProductIdentifier))

    this.description = options.description
    this.name = name
    Object.defineProperty(this, 'productIdentifier', {
      enumerable: true,
      readable: true,
      value: productIdentifier,
      writable: false
    })
    mixinProductTypeProperties(this, options)
  }

  addProductFeatureType (productFeatureType, isMandatory) {
    ow(productFeatureType, ow.object.instanceOf(ProductFeatureType))
    if (isMandatory) {
      this.mandatoryProductFeatureTypes.push(productFeatureType)
    } else {
      this.optionalProductFeatureTypes.push(productFeatureType)
    }
    return this
  }

  /* eslint-disable class-methods-use-this */
  getPricesByRuleContext (ruleContext) {
    ow(ruleContext, ow.object.instanceOf(RuleContext))
    return []
  }
  /* eslint-enable class-methods-use-this */

  getPricesByEffectiveDates (validFromDate, validToDate) {
    return this.possiblePrices.find(
      ({ validFrom, validTo }) =>
        validFrom >= validFromDate && validTo <= validToDate
    )
  }

  removeProductFeatureType (name) {
    return [
      ...remove(this.mandatoryProductFeatureTypes, {
        name
      }),
      ...remove(this.optionalProductFeatureTypes, {
        name
      })
    ]
  }
}

module.exports = ProductType
