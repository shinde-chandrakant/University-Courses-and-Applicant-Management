import axios from 'axios';

class DataSource {

    async get(url, params) {
        try {
            const result = await axios.get(url, { params: params });

            return {
                isSuccess: true,
                value: result.data
            }
        } catch (e) {
            return {
                isSuccess: false,
                errorMessage: e.message
            }
        }
    }

    async add(url, data) {
        try {
            const result = await axios.post(url, data);

            return {
                isSuccess: true,
                value: result.data
            }
        } catch (e) {
            return {
                isSuccess: false,
                errorMessage: e.message
            }
        }
    }

    async delete(url) {
        try {
            const result = await axios.delete(url);

            return {
                isSuccess: true,
                value: result.data
            }
        } catch (e) {
            return {
                isSuccess: false,
                errorMessage: e.message
            }
        }
    }

    async update(url, data) {
        try {
            const result = await axios.put(url, data);

            return {
                isSuccess: true,
                value: result.data
            }
        } catch (e) {
            return {
                isSuccess: false,
                errorMessage: e.message
            }
        }
    }

}

export default DataSource;