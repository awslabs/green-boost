---
id: "index"
title: "gboost-common"
slug: "/api-common/"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Enumerations

- [CognitoUserStatus](enums/CognitoUserStatus.md)

## Classes

- [CreateCognitoUser](classes/CreateCognitoUser.md)

## Interfaces

- [CognitoGroup](interfaces/CognitoGroup.md)
- [CognitoUser](interfaces/CognitoUser.md)
- [Filter](interfaces/Filter.md)
- [ListUsersArgs](interfaces/ListUsersArgs.md)

## Functions

### camelToKebab

▸ **camelToKebab**(`s`): `string`

camelCase to kebab-case

**`link`** https://gist.github.com/nblackburn/875e6ff75bc8ce171c758bf75f304707

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

[convertCase.ts:5](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-common/src/convertCase.ts#L5)

___

### camelToSnake

▸ **camelToSnake**(`s`): `string`

camelCase to snake_case

**`link`** https://stackoverflow.com/questions/54246477/how-to-convert-camelcase-to-snake-case-in-javascript

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

[convertCase.ts:13](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-common/src/convertCase.ts#L13)

___

### lowerToPascal

▸ **lowerToPascal**(`s`): `string`

lowercase to Pascalcase

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

[convertCase.ts:20](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-common/src/convertCase.ts#L20)
