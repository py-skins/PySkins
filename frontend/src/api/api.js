const requester = async (url, method, body) => {
  // The server's url
  const hostUrl = "http://localhost:8000/api";
  let options = {};
  options.method = method;
  options.headers = {};

  //   Checking if the request has a body to apply a content type to it and to stringify the body to a JSON so it can be sent
  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(hostUrl + url, options);
    // Checking if the status is 204 (NO CONTENT) to return the response without parsing if to an object
    if (response.status == 204) {
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
export const post = async (url, body) => {
  try {
    const data = await requester(url, "POST", body);
    return data;
  } catch (e) {
    throw e;
  }
};

// A get fn using the requester
export const get = async (url) => {
  try {
    const data = await requester(url, "GET");
    return data;
  } catch (e) {
    throw e;
  }
};

export const patch = async (url, body) => {
  try {
    const data = await requester(url, "PATCH", body);
    return data;
  } catch (e) {
    throw e;
  }
};
export const del = async (url, body) => {
  try {
    const data = await requester("DELETE", url, body);
    return data;
  } catch (e) {
    throw e;
  }
};
