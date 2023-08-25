import DataSource from '../../../common/data/dataSource/DataSource';

const BASE_URL = "http://localhost:9090/admission"

class Repository {
    _dataSource;

    constructor() {
        this._dataSource = new DataSource();
    }

    addAdmission(admissionDetails) {
        return this._dataSource.add(BASE_URL, admissionDetails);
    }

    deleteAdmission(admissionId) {
        const url = `${BASE_URL}/${admissionId}`;
        return this._dataSource.delete(url);
    }

    updateAdmission(admissionUpdate) {
        return this._dataSource.update(BASE_URL, admissionUpdate);
    }

    getAdmissionsByCourseId(courseId) {
        const url = `${BASE_URL}/${courseId}`;
        return this._dataSource.get(url);
    }

    getAdmissiosnByDate(date) {
        const url = `${BASE_URL}/showAllAdmissionsByDate/${date}`;
        return this._dataSource.get(url);
    }
}

export default Repository;