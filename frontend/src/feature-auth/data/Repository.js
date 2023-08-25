import DataSource from '../../common/data/dataSource/DataSource';

const BASE_URL = "http://localhost:9090/login"

class AuthRepository {

    _dataSource;

    constructor() {
        this._dataSource = new DataSource();
    }

    loginAsApplicant(id, password) {
        const url = `${BASE_URL}/validateApplicant`;
        const params = {
            applicantId: id,
            password: password
        }

        return this._dataSource.get(url, params);
    }

    loginAsCommitteeMember(id, password) {
        const url = `${BASE_URL}/validateCommiteeMember`;

        const params = {
            adminId: id,
            password
        };

        return this._dataSource.get(url, params);
    }

    loginAsStaffMember(id, password) {
        const url = `${BASE_URL}/validateStaffMember`;

        const params = {
            staffId: id,
            password
        }

        return this._dataSource.get(url, params);
    }
}

export default AuthRepository;