# File Upload

## Permissons

### Content Security Policy (CSP)

* "*.s3.[REGION].amazonaws.com/" must be a source for connect-src

### Bucket CORS Policy

* Bucket's CORS policy must include exposedHeaders: ["ETag"] and allowedMethods: ["PUT"]

``` 
const exampleBucket = new Bucket(this, "example-bucket", {
    cors:[{
    allowedHeaders: ["*"],
    allowedMethods: ["PUT"],
    allowedOrigins: ["*"],
    exposedHeaders: ["ETag"],
    }],
});
```

## UI Component

### Props

1. bucket: string

    * Key corresponding to s3 bucket passed into the infra component

2. buttonRef: React.MutavleRefObject<{ handleClick: Function }>

    * Optional
    * When passed in the upload button does not appear in the component
    * calling ref.current.handleClick() from outside the component will cause the files in the component to upload

3. deactivated: boolean (Default: false)

    * Optional
    * If deactivated is true, the component will not accept any files

4. fileKey: string

    * Optional
    * Key appended to the beginning of all files
    * Key must end with a '/' for the key to be interpretted as a file

5. fileType: string[] | string
    
    * Represented as lowercase file extensions (pdf, txt, png)

6. maxFiles: number (Default: 0)

    * Optional
    * Maximum number of files allowed per upload
    * maxFiles of 0 is interpretted as no limit

7. maxFileSize: number

    * Optional
    * Maximum size of a file repesented in bytes

8. region: string

    * AWS region the bucket is hosted in ('us-east-1')

9. text: string

    * Optional
    * String displayed in center of component when no files have been added

## Backend Construct

### Props

1. api: GraphqlApi

    * API for calling lambda functions

2. buckets: Record<string, {bucket: string, key: string}>

    * Map mapping key to bucket
    * bucket is the bucket's name
    * key is the key to be appended to the beginning of each file
        * Must end in '/' for key to be interpretted as a file

3. partition: string (Default: "aws")

    * Optional
    * Partition the S3 buckets exist in
