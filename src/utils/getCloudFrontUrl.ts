const getCloudFrontUrl = (key: string) => {
  return `${import.meta.env.VITE_CLOUDFRONT_URL}${key}`;
};

export default getCloudFrontUrl;
