import http from './http.common';

class GuardiansApiService {
    getAll() {
        return http.get('/guardians');
    }
    get(id) {
        return http.get(`/guardians/${id}`);
    }
}

export default new GuardiansApiService();