# DynamoDB Table Key Schema

## Indexes
| Index Name | Partition Key | Sort Key |
| --- | --- | --- |
| default | pk | sk |
| gsi1 | sk | gsi1sk |

## Entities
| Entity Name | pk | sk | gsi1sk |
| --- | --- | --- | --- |
| Item | item#id | item | updatedDate |

## Access Patterns
| Description | Index | Parameters | Notes |
| --- | --- | --- | --- |
| Get item by id | default | pk=item#id,sk=item | |
| List all items sorted by update date | gsi1 | pk=item,ScanIndexForward=boolean | |

## Learn
New to DDB Access Pattners? Checkout these resources.
- [Infinite Scaling DynamoDB Modeling Tips](https://medium.com/@jvroig.cascadeo/infinite-scaling-dynamodb-modeling-tips-part-1-14b96a239f23)
- [Advanced Design Patterns for Amazon DynamoDB](https://d1.awsstatic.com/events/reinvent/2019/REPEAT1_Advanced_design_patterns_for_Amazon_DynamoDB_DAT334-R1.pdf)
- [Notes From Data Modeling with DynamoDB](https://cloudash.dev/blog/notes-from-data-modeling-with-dynamodb-part-2)