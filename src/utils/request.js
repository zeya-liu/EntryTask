import 'whatwg-fetch'; // 解决fetch兼容性问题

export const request = ({ url, method = 'GET', params }) => {
  let opt = {
    method,
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhZG1pbiIsImV4cCI6MTYzOTYyMDgzMiwianRpIjoiM2E2ZWYxZjYtZGE3NS00ODczLTlmZGQtMGZiNjBlNWJmOGQwIiwiaWF0IjoxNjM3MDI4ODMyLCJpc3MiOiJzbSIsIm5iZiI6MTYzNzAyODgzMiwic3ViIjoicGxhdGZvcm0ifQ.cVRm_ZdQ9NenNjnWJcINTokhnHhNXDriMXI2TLm1XXs',
    }
  };
  if (params) {
    opt = {
      ...opt,
      headers: {
        ...opt.headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    };
  }

  return fetch(url, opt).then((response) => {
    if (!response.ok) {
      return Promise.reject(response.status);
    }
    return response.json();
  });
};
