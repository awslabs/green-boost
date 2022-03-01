---
id: "StaticSite"
title: "Class: StaticSite"
sidebar_label: "StaticSite"
sidebar_position: 0
custom_edit_url: null
---

StaticSite Construct
Creates an S3 Bucket, Origin Access Identity, CloudFront Web Distribution,
and builds Static Site with optional environment variables

## Hierarchy

- `Construct`

  ↳ **`StaticSite`**

## Constructors

### constructor

• **new StaticSite**(`scope`, `id`, `props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | `Construct` |
| `id` | `string` |
| `props` | `StaticSiteProps` |

#### Overrides

Construct.constructor

#### Defined in

[static-site/index.ts:104](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-infra/src/static-site/index.ts#L104)

## Properties

### bucket

• **bucket**: [`Bucket`](Bucket.md)

#### Defined in

[static-site/index.ts:99](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-infra/src/static-site/index.ts#L99)

___

### distribution

• **distribution**: `Distribution`

#### Defined in

[static-site/index.ts:100](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-infra/src/static-site/index.ts#L100)

___

### fullDomainName

• `Optional` **fullDomainName**: `string`

#### Defined in

[static-site/index.ts:102](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-infra/src/static-site/index.ts#L102)

___

### zone

• `Optional` **zone**: `IHostedZone`

#### Defined in

[static-site/index.ts:101](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-infra/src/static-site/index.ts#L101)
