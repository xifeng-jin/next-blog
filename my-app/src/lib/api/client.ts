// API基础配置
const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function fetchAPI<T>(
    endpoint:string,
    options?: any
): Promise<T> {
    const url = `${BASE_URL}${endpoint}`;

    const response = await fetch(url, {
        ...options,
        headers:{
            'Content-type': 'application/json',
            ...options?.headers,
        }
    })

    if(!response.ok){
        throw new Error(`api request fail: ${response.status} ${response.statusText}`)
    };

    return response.json();
};

export const apiClient = {
    // GET请求
  get: <T>(endpoint: string) => 
    fetchAPI<T>(endpoint, { method: 'GET' }),
    
  // POST请求
  post: <T>(endpoint: string, data: any) =>
    fetchAPI<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
    
  // PUT请求
  put: <T>(endpoint: string, data: any) =>
    fetchAPI<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
    
  // PATCH请求
  patch: <T>(endpoint: string, data: any) =>
    fetchAPI<T>(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
    
  // DELETE请求
  delete: <T>(endpoint: string) =>
    fetchAPI<T>(endpoint, { method: 'DELETE' }),
}
