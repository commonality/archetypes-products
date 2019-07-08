const mixinEffectiveDates = require('../mixin-effective-dates')
const ow = require('ow')
const priceOptions = require('./price-options')

const DEFAULT_AMOUNT = 0

/**
 * @classdesc
 * Represents the amount of money that must be paid in order to purchase a
 * good or service.
 *
 * • Pricing approaches
 * • Price reductions: how to represent different types of price reduction
 *
 * @class Price
 */

class Price {
  /**
   * Creates an instance of Price.
   * @param {Money} amount - The amount of Money in a currency.
   * @param {Object} [options=priceOptions]
   * @param {RuleSet} [options.preconditions = null] - A RuleSet that determines
   * or constrains pricing.
   * @param {Date|null} [options.validFrom = Date.now()] - The date on which
   * this price became effective.
   * @param {Date|null} [options.validTo = null] - The date on which this price
   * is no longer in-effect.
   * @memberof Price
   */

  constructor (amount = DEFAULT_AMOUNT, options = priceOptions) {
    ow(amount, ow.number)
    this.amount = amount
    this.preconditions = options.preconditions
    mixinEffectiveDates(this)
    this.validFrom = options.validFrom
    this.validTo = options.validTo
  }

  /**
   *
   *
   * @param {RuleContext} ruleContext - The facts applied to a RuleSet.
   * @param {Array.<RuleOverride>} ruleOverrides - Zero or more exceptions
   * applied to the RuleSet that determines the amount.
   * @returns {Boolean} - Whether or not a Price instance is valid for
   * a given customer's context.
   * @memberof Price
   */

  isValid (ruleContext, ruleOverrides) {
    if (this.preconditions) {
      return this.preconditions.evaluate(ruleContext, ruleOverrides)
    }
    return true
  }
}

module.exports = Price
