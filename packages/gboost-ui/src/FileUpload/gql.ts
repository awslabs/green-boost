import gql from "graphql-tag";

export const getUploadURL = gql`
  query getUploadURL($input: getUploadURLInput) {
    getUploadURL(input: $input) {
      url
    }
  }
`;
export const getUploadId = gql`
  query getUploadId($input: getUploadIdInput) {
    getUploadId(input: $input) {
      uploadId
    }
  }
`;
export const getUploadPartURL = gql`
  query getUploadPartURL($input: getUploadPartURLInput) {
    getUploadPartURL(input: $input) {
      urls
    }
  }
`;

export const completeUpload = gql`
  query completeUpload($input: completeUploadInput) {
    completeUpload(input: $input) {
      statusCode
    }
  }
`;

export const abortUpload = gql`
  query abortUpload($input: abortUploadInput) {
    abortUpload(input: $input) {
      statusCode
    }
  }
`;
