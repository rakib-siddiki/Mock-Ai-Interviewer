export const users = {
    create: '/users',
    find: '/users',
    findOne: (id: string) => `/users/${id}`,
    update: (id: string) => `/users/${id}`,
    delete: (id: string) => `/users/${id}`
};
