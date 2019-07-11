const ProductCatalog = require('..')

describe('ProductCatalog', () => {

  describe('represents a persistent store of product information', () => {

    describe('catalogEntries', () => {
      it('is an array of zero or more CatalogEntry objects', () => {
        const catalog = new ProductCatalog()
        expect(catalog.catalogEntries).toBeInstanceOf(Array)
      })
    })
  })

})
