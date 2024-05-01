import axiosInstance from './axios-instance';

export class Request {
  static async get(url, params) {
    console.log('params', params);
    return await this.request({
      url,
      method: 'GET',
      params,
    });
  }

  static async create(url, data) {
    return await this.request({
      url,
      method: 'POST',
      data,
    });
  }

  static async update(url, data) {
    return await this.request({
      url,
      method: 'PUT',
      data,
    });
  }

  static async delete(url, params) {
    return await this.request({
      url,
      method: 'DELETE',
      params,
    });
  }

  static async request({
    url,
    method,
    data,
    params,
  }) {
    const response = await axiosInstance({
      url,
      method,
      data,
      params,
    });
    return response;
  }
}
