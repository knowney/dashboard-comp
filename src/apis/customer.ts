import client from './client';

export async function get(id: any) {
  return client({
    method: 'GET',
    url: `/api/crud/customers/${id}`,
  });
}

export async function paginate(params?: any) {
  return client({
    method: 'GET',
    url: '/api/crud/customers',
    params,
  });
}

export async function create(params?: any) {
  return client({
    method: 'POST',
    url: 'api/crud/customers',
    params,
  });
}

export async function update(id: any) {
  return client({
    method: 'PUT',
    url: `/api/crud/customers/${id}`,
  });
}

export async function remove(id: any) {
  return client({
    method: 'DELETE',
    url: `/api/crud/customers/${id}`,
  });
}
