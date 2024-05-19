const getContentTypeJsonRequestConfig = (token: string) => {
  return {
    headers: { Authorization: `JWT ${token}`, 'Content-Type': 'application/json' },
  };
};

const getRequestConfig = {
  contentTypeJson: getContentTypeJsonRequestConfig,
};

export default getRequestConfig;
