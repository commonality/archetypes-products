const Price = require('./price')

/**
 * @classdesc
 * Represents an ad hoc Price applied to a specific ProductInstance.
 *
 * • Rules-based pricing: a walk-through of a pricing process that is driven
 *   by business rules
 * • Package pricing: how to represent the Price of a package
 *
 * @class ArbitraryPrice
 * @extends {Price}
 */

class ArbitraryPrice extends Price {}

module.exports = ArbitraryPrice
