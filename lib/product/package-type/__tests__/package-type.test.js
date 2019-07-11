const PackageType = require('..')

describe('PackageType', () => {

  describe('specify the possible contents of a particular type of package', () => {

    describe('components', () => {
      it('are the ProductType objects in a Package', () => {
        const packageType = new PackageType()
        expect(packageType.components).toBeInstanceOf(Array)

        packageType.components = []
        expect(packageType.components).toBeInstanceOf(Array)
      })
    })
    describe('possiblePrices', () => {
      it('is a array of Price objects', () => {
        const packageType = new PackageType()
        expect(packageType.possiblePrices).toBeInstanceOf(Array)

        packageType.possiblePrices = []
        expect(packageType.possiblePrices).toBeInstanceOf(Array)
      })
    })
  })

});
