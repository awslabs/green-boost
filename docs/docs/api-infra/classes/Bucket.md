---
id: "Bucket"
title: "Class: Bucket"
sidebar_label: "Bucket"
sidebar_position: 0
custom_edit_url: null
---

S3 Bucket with default managed encryption, enforced SSL and blocked public
access
Also adds a server access logs bucket following AWS best practices

## Hierarchy

- `Bucket`

  ↳ **`Bucket`**

## Constructors

### constructor

• **new Bucket**(`scope`, `id`, `props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope` | `Construct` |
| `id` | `string` |
| `props` | `BucketProps` |

#### Overrides

CdkBucket.constructor

#### Defined in

[bucket.ts:23](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-infra/src/bucket.ts#L23)
