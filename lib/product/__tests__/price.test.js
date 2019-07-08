const Price = require('../price.js');

describe('Price', () => {
  let price = null

  afterEach(() => {
    price = null
  })

  describe('represents the amount of money that must be paid in order to purchase a good or service', () => {

    describe('amount', () => {
      it('is monetary value', () => {
        price = new Price(9.98)
        expect(price.amount).toBe(9.98)

        const DEFAULT_AMOUNT = 0
        price = new Price()
        expect(price.amount).toBe(DEFAULT_AMOUNT)
      })

      describe('when assigned a value other than a number', () => {
        it('throws an ArgumentError', () => {
          expect(() => {
            price = new Price('free!')
          }).toThrow()

          expect(() => {
            price = new Price(null)
          }).toThrow()
        })
      })

    })

  })

});
