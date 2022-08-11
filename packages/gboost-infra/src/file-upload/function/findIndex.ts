export function findIndex(
  bucketMap: { bucket: string; baseKey: string }[],
  bucket: string
) {
  let i = 0;
  let notFound = true;
  while (notFound && i < bucketMap.length) {
    if (bucketMap[i].bucket === bucket) {
      notFound = false;
    } else {
      i++;
    }
  }
  if (notFound) {
    i = -1;
  }
  return i;
}
