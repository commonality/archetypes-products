const ProductFeatureType = require('..')
const ProductIdentifier = require('..')
const ProductType = require('..')

describe('ProductType', () => {
  describe('represents types of Products', () => {
    let productType = null

    beforeEach(() => {
      productType = new ProductType(
        'mock-product-type',
        new ProductIdentifier(
          'mock-product-identifier',
          'mock-product-identifier'
        )
      )
    })

    afterEach(() => {
      productType = null
    })

    describe('name', () => {
      it('is the name of the ProductType', () => {
        expect(productType.name).toBe('mock-product-type')
      })
    })

    describe('description', () => {
      it('provides details about the ProductType', () => {
        expect(productType.description).toBeNull()
      })
    })

    describe('productIdentifier', () => {
      it('uniquely identifies the ProductType', () => {
        expect(productType.productIdentifier).toBeDefined()
        expect(productType.productIdentifier.name).toBe(
          'mock-product-identifier'
        )
        expect(productType.productIdentifier.value).toBe(
          'mock-product-identifier'
        )
      })
      it('cannot be overwritten', () => {
        expect(() => {
          'use strict'
          productType.productIdentifier = new ProductIdentifier(
            'erroneous-product-identifier',
            'erroneous-product-identifier'
          )
        }).toThrow()
      })
    })


    describe('possiblePrices', () => {
      it('is a array of Price objects', () => {
        expect(productType.possiblePrices).toBeInstanceOf(Array)

        productType.possiblePrices = []
        expect(productType.possiblePrices).toBeInstanceOf(Array)
      })
    })

    describe('addProductFeatureType', () => {
      let expectedLength = 0
      let productFeatureType = null

      afterEach(() => {
        expectedLength = 0
        productFeatureType = null
      })

      it('adds a mandatory ProductFeatureType', () => {
        productFeatureType = new ProductFeatureType(
          'mock-mandatory-product-feature-type',
          {
            description: 'A mock product feature type',
            possibleValues: ['awesome', 'uplifting', 'enviable']
          }
        )
        productType.addProductFeatureType(productFeatureType, true)

        expect(productType.optionalProductFeatureTypes.length).toBe(
          expectedLength
        )
        expectedLength = 1
        expect(productType.mandatoryProductFeatureTypes.length).toBe(
          expectedLength
        )
      })
      it('adds an optional ProductFeatureType', () => {
        productFeatureType = new ProductFeatureType(
          'mock-optional-product-feature-type',
          {
            description: 'A mock product feature type',
            possibleValues: ['awesome', 'uplifting', 'enviable']
          }
        )
        productType.addProductFeatureType(productFeatureType, false)

        expect(productType.mandatoryProductFeatureTypes.length).toBe(
          expectedLength
        )
        expectedLength = 1
        expect(productType.optionalProductFeatureTypes.length).toBe(
          expectedLength
        )
      })
    })

    describe('removeProductFeatureType', () => {
      beforeEach(() => {
        productType
          .addProductFeatureType(
            new ProductFeatureType('mock-mandatory-product-feature-type', {
              description: 'A mock product feature type',
              possibleValues: ['awesome', 'uplifting', 'enviable']
            })
          )
          .addProductFeatureType(
            new ProductFeatureType('mock-optional-product-feature-type', {
              description: 'A mock product feature type',
              possibleValues: ['awesome', 'uplifting', 'enviable']
            })
          )
      })

      it('removes product feature types by name', () => {
        const EMPTY = 0
        let removedProductFeatureTypes = productType.removeProductFeatureType(
          'mock-mandatory-product-feature-type'
        )
        expect(productType.mandatoryProductFeatureTypes.length).toBe(EMPTY)
        removedProductFeatureTypes = [
          ...removedProductFeatureTypes,
          ...productType.removeProductFeatureType(
            'mock-optional-product-feature-type'
          )
        ]
        expect(productType.optionalProductFeatureTypes.length).toBe(EMPTY)
        const REMOVED_PRODUCT_FEATURE_TYPE_COUNT = 2
        expect(removedProductFeatureTypes.length).toBe(
          REMOVED_PRODUCT_FEATURE_TYPE_COUNT
        )
      })
    })

  })
})
