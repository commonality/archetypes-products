const ow = require('ow')

const mixinEffectiveDates = (object) => {
  /* eslint-disable accessor-pairs */
  Object.defineProperties(object, {
    validFrom: {
      enumerable: true,
      get () {
        return this.validFromValue
      },
      set (val = null) {
        ow(val, ow.any(ow.date, ow.null))
        this.validFromValue = val
      }
    },
    validFromValue: {
      value: null
    },
    validTo: {
      enumerable: true,
      get () {
        return this.validToValue
      },
      set (val = null) {
        ow(val, ow.any(ow.date, ow.null))
        this.validToValue = val
      }
    },
    validToValue: {
      value: null
    }
  })
  /* eslint-enable accessor-pairs */
}

module.exports = mixinEffectiveDates
