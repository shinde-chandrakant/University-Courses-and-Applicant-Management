import 'ignore-styles';
import DataSource from '../../common/DataSource.mjs';

describe('courseRepositoryCheck', () => {
    const BASE_URL = "http://localhost:9090/course";

    const dataSource = new DataSource();

    it('getCourses', async () => {
        const result = await dataSource.get(BASE_URL);
        expect(result.isSuccess).toBe(true);
    });

    it('addCourse', async () => {
        const data = {

        };
        const result = await dataSource.add(BASE_URL, data);

        expect(result.isSuccess).toBe(false);
    });

    it('deleteCourse', async () => {
        const id = 1;
        const url = `${BASE_URL}/${id}`;

        const result = await dataSource.delete(url);

        expect(result.isSuccess).toBe(false);
    });
});

