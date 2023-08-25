import DataSource from '../../../common/data/dataSource/DataSource';

const BASE_URL = "http://localhost:9090/course";

class Repository {
    _dataSource;

    constructor() {
        this._dataSource = new DataSource();
    }

    addCourse(course) {
        return this._dataSource.add(BASE_URL, course);
    }

    updateCourse(course) {
        const url = `${BASE_URL}/updateCourse`;
        return this._dataSource.update(url, course);
    }

    deleteCourse(courseId) {
        const url = `${BASE_URL}/${courseId}`;
        return this._dataSource.delete(url);
    }

    getAllCourse() {
        return this._dataSource.get(BASE_URL);
    }
}

export default Repository;