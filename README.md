# @archetypes/product

![banner](docs/img/logos/logo.png)

[![The MIT License][license-image]][license-url]
[![NPM version][npm-image]][npm-url] [![FOSSA Status][fossa-image]][fossa-url]
[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]<br>
[![Dependency Status][daviddm-image]][daviddm-url]<br>
[![MacOS and Ubuntu build statuses][travis-image]][travis-url]
[![Windows build status][appveyor-image]][appveyor-url]
[![Coveralls test coverage][coveralls-image]][coveralls-url]
[![Codacy code quality][codacy-image]][codacy-url]

> Models for value-based goods and services, which are exchanged for Money or
> other goods and services.

## Table of Contents

<!-- toc -->

- [1. Overview](#1-overview)
  * [1.1. Standards](#11-standards)
  * [1.2. **@archetypes/product** Specification](#12-archetypesproduct-specification)
- [2. Installation](#2-installation)
- [3. Usage](#3-usage)
- [4. API](#4-api)
  * [4.1. `Product`](#41-product)
  * [4.2. `ProductType`](#42-producttype)
  * [4.3. `ProductIdentifier`](#43-productidentifier)
  * [4.4. `ProductInstance`](#44-productinstance)
  * [4.5. `SerialNumber`](#45-serialnumber)
  * [4.6. `Batch`](#46-batch)
  * [4.7. `ProductFeatureType`](#47-productfeaturetype)
  * [4.8. `ProductFeatureInstance`](#48-productfeatureinstance)
  * [4.9. `ProductCatalog`](#49-productcatalog)
  * [4.10. `CatalogEntry`](#410-catalogentry)
  * [4.11. `Package`](#411-package)
  * [4.12. `PackageType`](#412-packagetype)
  * [4.13. `PackageInstance`](#413-packageinstance)
  * [4.14. `ProductSet`](#414-productset)
  * [4.15. `PropositionOfInclusion`](#415-propositionofinclusion)
  * [4.16. `ProductRelationship`](#416-productrelationship)
  * [4.17. `Price`](#417-price)
  * [4.18. `ArbitraryPrice`](#418-arbitraryprice)
  * [4.19. `PricingStrategy`](#419-pricingstrategy)
  * [4.20. `MeasuredProductType`](#420-measuredproducttype)
  * [4.21. `MeasuredProductInstance`](#421-measuredproductinstance)
  * [4.22. `Service`](#422-service)
  * [4.23. `ServiceType`](#423-servicetype)
  * [4.24. `ServiceInstance`](#424-serviceinstance)
  * [4.25. `ServiceDeliveryStatus`](#425-servicedeliverystatus)
- [5. Maintainers](#5-maintainers)
- [6. Contributions](#6-contributions)
- [7. License](#7-license)
- [8. Citations and References](#8-citations-and-references)

<!-- tocstop -->

<!-- tocend -->

## 1. Overview

Businesses and people make money by selling either goods or services. We call these goods and services "products."

**@archetypes/product** focuses on selling products, rather than manufacturing them. A clear and explicit model of Products enables flexible applications that can adapt to new business opportunities.

### 1.1. Standards

**@archetypes/product** comply with the standards in Table 1.1.

_Table 1.1_

| Standard                      | Description                                |
| ----------------------------- | ------------------------------------------ |
| [EAN.UCC System](http://www.ibcaweb.org/guide/guide_mfr/ch4.htm) | Product identification standards.          |
| [ISO 2108](https://www.iso.org/standard/65483.html)              | International Standard Book Number (ISBN)  |
| [ISO 10957](https://www.iso.org/standard/43173.html)             | International Standard Music Number (ISMN) |

### 1.2. **@archetypes/product** Specification

_Figure 1: **@archetypes/product** module UML class diagram._ [^1]

![@archetypes/product module UML class diagram][archetypes-products-specification]

## 2. Installation

```sh
npm install @archetypes/product
```

<small>[![Back to Table of contents][octicon-triangle-up]
\[toc\]][toc-anchor]</small>

## 3. Usage

## 4. API

### 4.1. `Product`

A `Product` is a generalized model for representing goods and services.

### 4.2. `ProductType`

Represents types of `Products` (e.g., a type of LCD monitor).

### 4.3. `ProductIdentifier`

Uniquely identifies `ProductTypes`.

### 4.4. `ProductInstance`

Represents specific instances of a product type (e.g., a particular LCD monitor).

### 4.5. `SerialNumber`

Uniquely identifies a `ProductInstance`.

### 4.6. `Batch`

Uniquely identifies a set or `ProductInstances` of the same `ProductType` that are
tracked together.

### 4.7. `ProductFeatureType`

Represents a type of feature associated with a `ProductType`.

### 4.8. `ProductFeatureInstance`

Represents a specific feature of a `ProductInstance`.

### 4.9. `ProductCatalog`

Represents a persistent store of product information.

### 4.10. `CatalogEntry`

Represents the information about a particular type of product in a `ProductCatalog`.

### 4.11. `Package`

Represents how to sell selections of products grouped together as a unit.

### 4.12. `PackageType`

Represents how to specify the possible contents of a particular type of package.

### 4.13. `PackageInstance`

Represents a particular instance of a `PackageType`.

### 4.14. `ProductSet`

Represents how to represent a set of ProductTypes from which selections may be made.

### 4.15. `PropositionOfInclusion`

Represents how to describe the possible contents of a package in a rule of the form:

```text
– P: isSubsetOf( T, S, min, max )
```

### 4.16. `ProductRelationship`

Represents fixed relationships between `ProductTypes`.

-   `UpgradableTo` represents an upgrade relationship.

-   `SubstitutedBy` represents a substitution relationship.

-   `ReplacedBy` represents a replacement relationship.

-   `ComplementedBy` represents a relationship where one `ProductType` complements or enhances another.

-   `CompatibleWith` represents a relationship that shows that one `ProductType` is compatible with another.

-   `IncompatibleWith` represents a relationship that shows that one `ProductType` is incompatible with another.

### 4.17. `Price`

Represents the amount of money that must be paid in order to purchase a good or service.

• Pricing approaches

• Price reductions: how to represent different types of price reduction

### 4.18. `ArbitraryPrice`

Represents an ad hoc Price applied to a specific `ProductInstance`.

• Rules-based pricing: a walk-through of a pricing process that is driven by business rules

• Package pricing: how to represent the `Price` of a package

### 4.19. `PricingStrategy`

Represents pricing algorithm for a package, such as products sold by units of measure.

### 4.20. `MeasuredProductType`

Represents how to represent a `ProductType`, such as gasoline, that is sold by measure.

### 4.21. `MeasuredProductInstance`

Represents how to represent the amount of a `MeasuredProductType` (e.g., 10 gallons of gasoline) involved in a specific sale.

### 4.22. `Service`

Represents how to represent processes or activities that are offered for sale.

### 4.23. `ServiceType`

Represents how to represent a type of service.

### 4.24. `ServiceInstance`

Represents an instance or execution of a type of service.

### 4.25. `ServiceDeliveryStatus`

Records the status of the delivery process for a particular `ServiceInstance`.

## 5. Maintainers

[@gregswindle](https://github.com/gregswindle)

> ![Information for Maintainers][octicon-book] The
> [Maintainer Guide](./docs/maintainer-guide/README.md) describes how we develop
> and release **archetype-rules** (and has useful information for Maintainers
> and Trusted Committers).

<small>[![Back to Table of contents][octicon-triangle-up]
\[toc\]][toc-anchor]</small>

## 6. Contributions

[![GitHub Contributors](https://img.shields.io/github/contributors/commonality/archetypes-products.svg?style=social)](https://github.com/commonaliarchetypes-productsoducts/graphs/contributors)
[![GitHub](https://img.shields.io/github/stars/commonality/archetypes-products.svg?style=social)](https://github.com/commonaliarchetypes-productsoducts)
[![GitHub](https://img.shields.io/github/forks/commonality/archetypes-products.svg?style=social)](https://github.com/commonaliarchetypes-productsoducts/network)
[![Greenkeeper badge](https://badges.greenkeeper.io/commonality/archetypes-products.svg?style=flat-square)](https://greenkeeper.io/)

![Gratitude][octicon-heart] We gratefully accept Pull Requests. Here's what you
need to know to get started.

Before submitting a Pull Request, please read our:

-   [Code of Conduct](code-of-conduct.md)
-   [Contributing Aggreement](CONTRIBUTING.md)
-   [Developer Guide](docs/developer-guide#README.md)
-   [Maintainer/Trusted Committer Guide](docs/maintainer-guide#readme)
-   [Architecture Decision Records](docs/adr#readme)

<small>[![Back to Table of contents][octicon-triangle-up]
\[toc\]][toc-anchor]</small>

## 7. License

[MIT](LICENSE) © 2019 Greg Swindle

> [![Open Source Licenses][octicon-law] View the latest **detailed legal
> NOTICE** report
> ![This link will take you to another Web site][octicon-link-external]][fossa-legal-notice-url].

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B804%2Fgithub.com%2Fcommonality%2Farchetypes-products.svg?type=large)](https://app.fossa.com/projects/custom%2B804%2Fgithub.com%2Fcommonalityarchetypes-productsoducts?ref=badge_large)

<small>[![Back to Table of contents][octicon-triangle-up]
\[toc\]][toc-anchor]</small>

## 8. Citations and References

[^1]: Arlow, J., & Neustadt, I. (2004). _Enterprise Patterns and MDA_ (p. 205). Boston: Addison-Wesley.

<!-- ⛔️ Do not remove this line or anything under it. ⛔️  -->

<!-- Link and image refs -->

[appveyor-image]: https://img.shields.io/appveyor/ci/gregswindle/archetypes-products.svg?style=flat-square&logo=appveyor&label=windows%20build

[appveyor-url]: https://ci.appveyor.com/project/gregswindle/archetypes-products

[archetypes-products-specification]: ./docs/assets/archetypes-product-module-specification.png

[codacy-coverage-image]: https://img.shields.

[codacy-image]: https://api.codacy.com/project/badge/Grade/bc3fdfbea2d84079b5d785b6de0886ab

[codacy-url]: https://www.codacy.com/app/commonality/archetypes-products?utm_source=github.com&utm_medium=referral&utm_content=commonaliarchetypes-productsoducts&utm_campaign=Badge_Grade

[coveralls-image]: https://coveralls.io/repos/github/commonality/archetypes-products/badge.svg?style=flat-square

[coveralls-url]: https://coveralls.io/github/commonality/archetypes-products

[daviddm-image]: https://david-dm.org/commonality/archetypes-products.svg?theme=shields.io&style=flat-square

[daviddm-url]: https://david-dm.org/commonality/archetypes-products

[fossa-image]: https://app.fossa.com/api/projects/custom%2B804%2Fgithub.com%2Fcommonality%2Farchetypes-products.svg?type=shield

[fossa-legal-notice-url]: https://app.fossa.com/attribution/5895d784-6a99-4c46-961c-6aecd9414623

[fossa-url]: https://app.fossa.com/projects/custom%2B804%2Fgithub.com%2Fcommonality%2Farchetypes-products?ref=badge_shield

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square

[license-url]: http://opensource.org/licenses/MIT

[npm-image]: https://img.shields.io/npm/v/archetypes-products.svg?style=flat-square

[npm-url]: https://npmjs.org/package/archetypes-products

[toc-anchor]: #table-of-contents

[travis-image]: https://img.shields.io/travis/com/commonality/archetypes-products.svg?branch=master&style=flat-square&label=macOS%20%7C%20ubuntu%20builds&logo=travis

[travis-url]: https://travis-ci.com/commonality/archetypes-products

[vulnerabilities-image]: https://snyk.io/test/github/commonality/archetypes-products/badge.svg?style=flat-square&targetFile=package.json

[vulnerabilities-url]: https://snyk.io/test/github/commonality/archetypes-products?targetFile=package.json

[daviddm-dev-image]: https://david-dm.org/commonality/archetypes-products/dev-status.svg?theme=shields.io&style=flat-square

<!-- Octicon img references  -->

[octicon-alert]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/alert.svg

[octicon-arrow-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/arrow-down.svg

[octicon-arrow-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/arrow-left.svg

[octicon-arrow-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/arrow-right.svg

[octicon-arrow-small-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/arrow-small-down.svg

[octicon-arrow-small-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/arrow-small-left.svg

[octicon-arrow-small-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/arrow-small-right.svg

[octicon-arrow-small-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/arrow-small-up.svg

[octicon-arrow-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/arrow-up.svg

[octicon-beaker]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/beaker.svg

[octicon-bell]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/bell.svg

[octicon-bold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/bold.svg

[octicon-book]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/book.svg

[octicon-bookmark]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/bookmark.svg

[octicon-briefcase]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/briefcase.svg

[octicon-broadcast]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/broadcast.svg

[octicon-browser]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/browser.svg

[octicon-bug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/bug.svg

[octicon-calendar]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/calendar.svg

[octicon-check]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/check.svg

[octicon-checklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/checklist.svg

[octicon-chevron-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/chevron-down.svg

[octicon-chevron-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/chevron-left.svg

[octicon-chevron-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/chevron-right.svg

[octicon-chevron-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/chevron-up.svg

[octicon-circle-slash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/circle-slash.svg

[octicon-circuit-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/circuit-board.svg

[octicon-clippy]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/clippy.svg

[octicon-clock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/clock.svg

[octicon-cloud-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/cloud-download.svg

[octicon-cloud-upload]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/cloud-upload.svg

[octicon-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/code.svg

[octicon-comment-discussion]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/comment-discussion.svg

[octicon-comment]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/comment.svg

[octicon-credit-card]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/credit-card.svg

[octicon-dash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/dash.svg

[octicon-dashboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/dashboard.svg

[octicon-database]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/database.svg

[octicon-desktop-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/desktop-download.svg

[octicon-device-camera-video]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/device-camera-video.svg

[octicon-device-camera]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/device-camera.svg

[octicon-device-desktop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/device-desktop.svg

[octicon-device-mobile]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/device-mobile.svg

[octicon-diff-added]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/diff-added.svg

[octicon-diff-ignored]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/diff-ignored.svg

[octicon-diff-modified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/diff-modified.svg

[octicon-diff-removed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/diff-removed.svg

[octicon-diff-renamed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/diff-renamed.svg

[octicon-diff]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/diff.svg

[octicon-ellipses]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/ellipses.svg

[octicon-ellipsis]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/ellipsis.svg

[octicon-eye]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/eye.svg

[octicon-file-binary]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-binary.svg

[octicon-file-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-code.svg

[octicon-file-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-directory.svg

[octicon-file-media]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-media.svg

[octicon-file-pdf]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-pdf.svg

[octicon-file-submodule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-submodule.svg

[octicon-file-symlink-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-symlink-directory.svg

[octicon-file-symlink-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-symlink-file.svg

[octicon-file-text]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-text.svg

[octicon-file-zip]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file-zip.svg

[octicon-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/file.svg

[octicon-flame]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/flame.svg

[octicon-fold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/fold.svg

[octicon-gear]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/gear.svg

[octicon-gift]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/gift.svg

[octicon-gist-secret]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/gist-secret.svg

[octicon-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/gist.svg

[octicon-git-branch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/git-branch.svg

[octicon-git-commit]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/git-commit.svg

[octicon-git-compare]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/git-compare.svg

[octicon-git-merge]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/git-merge.svg

[octicon-git-pull-request]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/git-pull-request.svg

[octicon-globe]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/globe.svg

[octicon-grabber]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/grabber.svg

[octicon-graph]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/graph.svg

[octicon-heart]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/heart.svg

[octicon-history]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/history.svg

[octicon-home]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/home.svg

[octicon-horizontal-rule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/horizontal-rule.svg

[octicon-hubot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/hubot.svg

[octicon-inbox]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/inbox.svg

[octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/info.svg

[octicon-issue-closed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/issue-closed.svg

[octicon-issue-opened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/issue-opened.svg

[octicon-issue-reopened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/issue-reopened.svg

[octicon-italic]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/italic.svg

[octicon-jersey]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/jersey.svg

[octicon-key]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/key.svg

[octicon-keyboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/keyboard.svg

[octicon-law]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/law.svg

[octicon-light-bulb]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/light-bulb.svg

[octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/link-external.svg

[octicon-link]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/link.svg

[octicon-list-ordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/list-ordered.svg

[octicon-list-unordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/list-unordered.svg

[octicon-location]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/location.svg

[octicon-lock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/lock.svg

[octicon-logo-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/logo-gist.svg

[octicon-logo-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/logo-github.svg

[octicon-mail-read]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mail-read.svg

[octicon-mail-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mail-reply.svg

[octicon-mail]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mail.svg

[octicon-mark-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg

[octicon-markdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/markdown.svg

[octicon-megaphone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/megaphone.svg

[octicon-mention]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mention.svg

[octicon-milestone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/milestone.svg

[octicon-mirror]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mirror.svg

[octicon-mortar-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mortar-board.svg

[octicon-mute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mute.svg

[octicon-no-newline]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/no-newline.svg

[octicon-octoface]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/octoface.svg

[octicon-organization]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/organization.svg

[octicon-package]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/package.svg

[octicon-paintcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/paintcan.svg

[octicon-pencil]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/pencil.svg

[octicon-person]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/person.svg

[octicon-pin]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/pin.svg

[octicon-plug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/plug.svg

[octicon-plus-small]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/plus-small.svg

[octicon-plus]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/plus.svg

[octicon-primitive-dot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/primitive-dot.svg

[octicon-primitive-square]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/primitive-square.svg

[octicon-pulse]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/pulse.svg

[octicon-question]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/question.svg

[octicon-quote]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/quote.svg

[octicon-radio-tower]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/radio-tower.svg

[octicon-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/reply.svg

[octicon-repo-clone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/repo-clone.svg

[octicon-repo-force-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/repo-force-push.svg

[octicon-repo-forked]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/repo-forked.svg

[octicon-repo-pull]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/repo-pull.svg

[octicon-repo-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/repo-push.svg

[octicon-repo]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/repo.svg

[octicon-rocket]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/rocket.svg

[octicon-rss]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/rss.svg

[octicon-ruby]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/ruby.svg

[octicon-search]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/search.svg

[octicon-server]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/server.svg

[octicon-settings]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/settings.svg

[octicon-shield]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/shield.svg

[octicon-sign-in]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/sign-in.svg

[octicon-sign-out]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/sign-out.svg

[octicon-smiley]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/smiley.svg

[octicon-squirrel]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/squirrel.svg

[octicon-star]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/star.svg

[octicon-stop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/stop.svg

[octicon-sync]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/sync.svg

[octicon-tag]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/tag.svg

[octicon-tasklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/tasklist.svg

[octicon-telescope]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/telescope.svg

[octicon-terminal]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/terminal.svg

[octicon-text-size]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/text-size.svg

[octicon-three-bars]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/three-bars.svg

[octicon-thumbsdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/thumbsdown.svg

[octicon-thumbsup]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/thumbsup.svg

[octicon-tools]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/tools.svg

[octicon-trashcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/trashcan.svg

[octicon-triangle-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/triangle-down.svg

[octicon-triangle-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/triangle-left.svg

[octicon-triangle-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/triangle-right.svg

[octicon-triangle-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/triangle-up.svg

[octicon-unfold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/unfold.svg

[octicon-unmute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/unmute.svg

[octicon-unverified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/unverified.svg

[octicon-verified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/verified.svg

[octicon-versions]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/versions.svg

[octicon-watch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/watch.svg

[octicon-x]: https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/x.svg
