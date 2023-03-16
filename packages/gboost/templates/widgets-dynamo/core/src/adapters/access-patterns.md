# DynamoDB Table Key Schema

## Indexes
| Index Name | Partition Key | Sort Key |
| --- | --- | --- |
| default | pk | sk |
| gsi1 | sk | gsi1sk |

## Entities
| Entity Name | pk | sk | gsi1sk |
| --- | --- | --- | --- |
| Widget | widget#id | widget | updatedDate |
| Component | component#id | component | updatedDate |
| Widget-Component | widget#id | component#id | updatedDate |
| Component-Widget | component#id | widget#id | updatedDate |

## Access Patterns
| Description | Index | Parameters | Notes |
| --- | --- | --- | --- |
| Get widget by id | default | pk=widget#id,sk=widget | |
| Get component by id | default | pk=component#id,sk=component | |
| List all widgets sorted by update date | gsi1 | pk=widget,ScanIndexForward=boolean | |
| List all components sorted by update date | gsi1 | pk=component,ScanIndexForward=boolean | |
| List all widgets made up of a component | default | pk=component#id | |
| List all components included in a widget | default | pk=widget#id | |

## Learn
New to DDB Access Pattners? Checkout these resources.
- [Infinite Scaling DynamoDB Modeling Tips](https://medium.com/@jvroig.cascadeo/infinite-scaling-dynamodb-modeling-tips-part-1-14b96a239f23)
- [Advanced Design Patterns for Amazon DynamoDB](https://d1.awsstatic.com/events/reinvent/2019/REPEAT1_Advanced_design_patterns_for_Amazon_DynamoDB_DAT334-R1.pdf)
- [Notes From Data Modeling with DynamoDB](https://cloudash.dev/blog/notes-from-data-modeling-with-dynamodb-part-2)