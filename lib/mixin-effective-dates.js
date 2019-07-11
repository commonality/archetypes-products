const ow = require('ow')

const mixinEffectiveDates = (object, validFrom = null, validTo = null) => {
  /* eslint-disable accessor-pairs */
  Object.defineProperties(object, {
    validFrom: {
      enumerable: true,
      get () {
        // Return this.validFromValue

        return this.valueMap.get('validFrom')
      },
      set (val = null) {
        ow(val, ow.any(ow.date, ow.null))
        this.valueMap.set('validFrom', val)
      }
    },
    validTo: {
      enumerable: true,
      get () {
        // Return this.validToValue

        return this.valueMap.get('validTo')
      },
      set (val = null) {
        ow(val, ow.any(ow.date, ow.null))
        this.valueMap.set('validTo', val)
      }
    },
    valueMap: {
      value: new Map([['validFrom', validTo], ['validTo', validTo]])
    }
  })
  /* eslint-enable accessor-pairs */
}

module.exports = mixinEffectiveDates
