declare const API_URL: string;
const RequestException = function (this: {message: string, name: string}, message: string) {
  this.message = message;
  this.name = 'RequestException'
  this.toString = () => String(message);
} as unknown as { new (message: string): typeof RequestException; }

// Request superclass for all API requests

export default class Request {
  endpoint: string;
  calls: string[];
  auth: boolean;
  constructor(endpoint: string, auth = false, calls = ['list', 'getById', 'create', 'update', 'destroy']) {
    this.endpoint = endpoint;
    this.calls = calls;
    this.auth = auth;
  }
  static request: ((method: string, endpoint: string, data?: Record<string, unknown>) => Promise<[]>) = async (method: string, endpoint: string, data = {}) => {
    try {
        const options: RequestInit = {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
        };
        if (Object.keys(data).length) {
          options.body = JSON.stringify(data);
        }
        const resp = await fetch(`${API_URL}${endpoint}?t=${Date.now()}`, options);
        const json = await resp.json();
        if (resp.status >= 400) {
          throw json;
        }
        return json;
      } catch (e) {
        const err = <Error> e;
        throw new RequestException(err.message);
      }
  }

  list: (data?: Record<string, unknown>) => Promise<any> = (data = {}) => {
      if (this.calls.includes('list')) {
        return Request.request('POST', `${this.endpoint}/view`, data);
      }
      throw new RequestException('Invalid parameters for list');
    }

  get: (id: string,data?: Record<string, unknown>) => Promise<[]> = (id: string, data = {}) => {
      if (this.calls.includes('getById')) {
        return Request.request('GET', `${this.endpoint}/${id}`, data);
      }
      throw new RequestException('Invalid parameters for getById');
    }

  create: (data?: Record<string, unknown>) => Promise<[]> = (data: Record<string, unknown> | undefined) => {
      if (this.calls.includes('create')) {
        return Request.request('POST', this.endpoint, data);
      }
      throw new RequestException('Invalid parameters for create');
    }

  destroy: (id: string) => Promise<[]> = (id: string) => {
      if (this.calls.includes('destroy')) {
        return Request.request('DELETE', `${this.endpoint}/${id}`, {});
      }
      throw new RequestException('Invalid parameters for destroy');
    }

  update: (id: string, data?: Record<string, unknown>) => Promise<[]> = (id: string, data: Record<string, unknown> | undefined) => {
      if (this.calls.includes('update')) {
        return Request.request('PUT', `${this.endpoint}/${id}`, data);
      }
      throw new RequestException('Invalid parameters for update');
    }
}
