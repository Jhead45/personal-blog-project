import * as baseService from './base';

function all() {
    return baseService.get('/api/blog');
}

function one(id) {
    return baseService.get(`/api/blog/${id}`);
}

function insert(data) {
    return baseService.post('/api/blog', data);
}

function update(id, data) {
    return baseService.put(`/api/blog/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/blog/${id}`);
}

export { all, one, insert, update, destroy };