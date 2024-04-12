const requester = async (url, config) => {
  const hostUrl = "http://localhost:8000/";

  config.headers = {
    "Content-Type": "application/json",
    ...config.headers,
  };

  if (config.body) {
    config.body = JSON.stringify(config.body);
  }

  try {
    const response = await fetch(hostUrl + url, config);
    // Checking if the status is 204 (NO CONTENT) to return the response without parsing if to an object
    if (response.status === 204) {
      return response;
    }
    if (!response.ok) {
      // If the response is not OK (e.g has an error) to throw the error response
      const data = await response.json();
      throw data;
    }
    // If everything goes as expected returning the response as an object
    return response.json();
  } catch (e) {
    throw e;
  }
};

// A post function using the requester that expects url and a body
export const post = async (url, config) => {
  try {
    const data = await requester(url, { method: "POST", ...config });
    return data;
  } catch (e) {
    throw e;
  }
};

export const get = async (url, config) => {
  try {
    const data = await requester(url, { method: "GET", ...config });
    return data;
  } catch (e) {
    throw e;
  }
};

export const patch = async (url, config) => {
  try {
    const data = await requester(url, { method: "PATCH", ...config });
    return data;
  } catch (e) {
    throw e;
  }
};

export const del = async (url, config) => {
  try {
    const data = await requester(url, { method: "DELETE", ...config });
    return data;
  } catch (e) {
    throw e;
  }
};
