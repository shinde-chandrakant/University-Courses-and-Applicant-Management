import DataSource from '../../../common/data/dataSource/DataSource';

const BASE_URL = "http://localhost:9090/commitee";

class Repository {

    _dataSource;

    constructor() {
        this._dataSource = new DataSource();
    }

    addMember(committeeMember) {
        return this._dataSource.add(BASE_URL, committeeMember);
    }

    updateMember(committeeMember) {
        return this._dataSource.update(BASE_URL, committeeMember);
    }

    deleteMember(memberId) {
        const url = `${BASE_URL}/${memberId}`;
        return this._dataSource.delete(url);
    }

    getAllMember() {
        return this._dataSource.get(BASE_URL);
    }
}

export default Repository;