import DataSource from '../../../common/data/dataSource/DataSource';

const BASE_URL = "http://localhost:9090/staff";

class Repository {

    static _INSTANCE = null;
    static _dataSource;

    constructor() {
        this._dataSource = new DataSource();
    }

    static getInstance() {
        let instance = this._INSTANCE;
        if (instance === null) {
            instance = new Repository();
            this._INSTANCE = instance;
        }

        return instance;
    }

    getAllStaffMember() {
        return this._dataSource.get(BASE_URL);
    }

    addStaffMember(values) {
        return this._dataSource.add(BASE_URL, {
            password: values.password,
            role: values.role
        });
    }

    async deleteStaffMember(staffId) {
        return this._dataSource.delete(`${BASE_URL}/${staffId}`);
    }

    async updateStaffMember(value) {
        return this._dataSource.update(BASE_URL, value);
    }

}

export default Repository;