const axiosInstance = axios.create({
    baseURL: 'https://some-domain.com/api/',    
    headers: {'X-Custom-Header': 'foobar'}    
  });
  axiosInstance.defaults.headers.common['Authorization'] = AUTH_TOKEN;