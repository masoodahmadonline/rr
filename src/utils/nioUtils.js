let timeout= (ms, promise) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({status:504, message:"time out"});
    }, ms);
    promise.then(resolve, reject);
  });
};
export const api = (url, params) => {
  return timeout(20000, fetch(url, params)).then((response) => {
    return response.json().then((body) => ({body, response}));
  }).catch((error) => {
    throw error;
  });
};
let securityObject = window.securityObject;
// window.securityObject = securityInfo;
let headers = {
  "Authorization" : "Bearer "+ `${securityObject.token}`
};

export const get = (url, params={}) => {
  if (params.headers) {
    Object.assign(headers, params.headers);
  }
  let finalParams = Object.assign({}, params || {}, {
    method: "GET",
    headers: headers,
    timeout:1000
  });

  return api(url, finalParams);
};


export const post = (url, body, params={}) => {
  Object.assign(headers, {
    "Content-Type": "application/json"
  });
  if (params.headers) {
    Object.assign(headers, params.headers);
  }

  let finalParams = Object.assign({}, params, {
    method: "POST",
    body: JSON.stringify(body),
    headers,
  });

  return api(url, finalParams);
};