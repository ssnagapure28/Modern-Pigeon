import Request from './Request';

// Models
export const userPackages = new Request('/userPackages', true, ['getByUserId', 'update', 'list', 'destroy', 'create']); // contains 
export const packagesToDeliver = new Request('/packagesToDeliver',  true, ['getById', 'update', 'list', 'destroy', 'create'])
export const users = new Request('/users',  true, ['getById', 'update', 'list', 'destroy', 'create'])

// One-off calls
export const getPackageById: (id: string) => Promise<[]> = (id: string) => Request.request('get', `/getPackageById/${id}`)
export const deployPackage: (from: string, to: string, data: any) => Promise<[]> = (from: string, to: string, data: any) => Request.request('post', `/packages/from/${from}/to/${to}/deploy`, data)
