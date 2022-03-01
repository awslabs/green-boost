---
id: "index"
title: "gboost-infra"
slug: "/api-infra/"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Enumerations

- [Stage](enums/Stage.md)

## Classes

- [Bucket](classes/Bucket.md)
- [Function](classes/Function.md)
- [StaticSite](classes/StaticSite.md)
- [Table](classes/Table.md)
- [UserBase](classes/UserBase.md)
- [UserManagement](classes/UserManagement.md)

## Functions

### suppressAwsManagedConstructs

▸ **suppressAwsManagedConstructs**(`stack`): `void`

Suppresses cdk-nag errors for AWS managed constructs regarding log
retention, bucket deployments, and bucket notifications

#### Parameters

| Name | Type |
| :------ | :------ |
| `stack` | `Stack` |

#### Returns

`void`

#### Defined in

[suppressAwsConstructs.ts:8](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-infra/src/suppressAwsConstructs.ts#L8)
