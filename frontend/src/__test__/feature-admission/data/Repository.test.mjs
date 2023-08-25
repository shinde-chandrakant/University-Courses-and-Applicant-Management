import DataSource from '../../common/DataSource.mjs';

describe('admissionRepositoryCheck', () => {
    const BASE_URL = "http://localhost:9090/admission";

    const dataSource = new DataSource();

    it('addAdmissions', async () => {
        const data = {

        };
        const result = await dataSource.add(BASE_URL, data);

        expect(result.isSuccess).toBe(true);
    });

    it('deleteAdmission', async () => {
        const id = -1;

        const result = await dataSource.delete(`${BASE_URL}/${id}`);

        expect(result.isSuccess).toBe(false);
    })
});

