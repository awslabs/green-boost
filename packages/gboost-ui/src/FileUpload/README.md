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

3. Buttons: (props: CustomActionButtonProps) => ReactElement

    * Function returning buttons to be displayed in place of deafult buttons

4. deactivated: boolean (Default: false)

    * Optional
    * If deactivated is true, the component will not accept any files

5. fileKey: string

    * Optional
    * Key appended to the beginning of all files
    * Key must end with a '/' for the key to be interpretted as a file

6. fileType: string[] | string
    
    * Represented as lowercase file extensions (pdf, txt, png)

7. maxFiles: number (Default: 0)

    * Optional
    * Maximum number of files allowed per upload
    * maxFiles of 0 is interpretted as no limit

8. maxFileSize: number

    * Optional
    * Maximum size of a file repesented in bytes

9. onClear: (setPendingFilesData: React.Dispatch<React.SetStateAction<FileData[]>>) => void;

    * Overrides the default clear function

10. onSubmit: (params: HandleClickParams) => void

    * Overrides the default Uploading function

11. region: string

    * AWS region the bucket is hosted in ('us-east-1')

12. text: string

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

##

### onSubmit

#### Example Code


```
export function handleClick(params: HandleClickParams) {
  const {
    maxFiles,
    pendingFilesData,
    uploadProps,
    setUploading,
    updateCursor,
    notify,
    setPendingFilesData,
    handleUpload,
  } = params;
  // maxFiles<=0 is treated as no file limit
  if (maxFiles <= 0 || pendingFilesData.length <= maxFiles) {
    pendingFilesData.forEach((fileData) => {
      if (fileData.setPercent) {
        handleUpload({
          file: fileData.file,
          setPercent: fileData.setPercent,
          fileName: fileData.fileName,
          uploadProps: uploadProps,
          setUploading: setUploading,
          updateCursor: updateCursor,
          notify: notify,
          setPendingFilesData: setPendingFilesData,
        });
      }
    });
  } else {
    notify({
      body: `Too many files selected. Max files is ${maxFiles}`,
      variation: `error`,
    });
  }
}
```

### onClear

#### Example Code

```
setPendingFilesData([]);
```

### Buttons

#### Example Code

```
<Box>
    <Button
        onClick={handleClick}
        style={{
            float: "left",
            margin: "5px",
        }}
        columnStart={"2"}
        columnEnd={"-1"}
        isDisabled={
            pendingFilesData.length > 0
            ? !uploading
                ? allFilesComplete()
                ? true
                : false
                : true
            : true
        }
    >
    Upload
    </Button>
    <Button
        onClick={handleClear}
        style={{
            float: "left",
            margin: "5px",
        }}
        isDisabled={
            pendingFilesData.length > 0
            ? uploading
                ? allFilesComplete()
                ? false
                : true
                : false
            : true
        }
    >
    Clear
    </Button>
</Box>
```
# CHANGES

remove partition from construct
remove region from component
added region to construct