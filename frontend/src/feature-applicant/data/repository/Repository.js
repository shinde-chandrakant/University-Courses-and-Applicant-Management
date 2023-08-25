import DataSource from "../../../common/data/dataSource/DataSource";

const BASE_URL = "http://localhost:9090/applicant";

class Repository {

    _dataSource;

    constructor() {
        this._dataSource = new DataSource();
    }

    addApplicant(applicant) {

        const applicantId = parseInt(applicant.applicantId);
        const courseId = parseInt(applicant.courseId);
        const percent = parseInt(applicant.applicantGraduationPercent);

        const data = {
            admission: {
                admissionDate: applicant.admissionDate.toISOString(),
                applicantId: applicantId,
                courseId: courseId,
                status: applicant.admissionStatus
            },
            applicantDegree: applicant.applicantDegree,
            applicantGraduationPercent: percent,
            applicantName: applicant.applicantName,
            mobileNumber: applicant.mobileNumber,
            password: applicant.password,
            status: applicant.status
        };

        console.log(data);
        return this._dataSource.add(BASE_URL, data);
    }

    deleteApplicant(applicant) {
        return this._dataSource.delete(BASE_URL, applicant);
    }

    getApplicantByStatus(status) {
        const url = `${BASE_URL}/viewAllApplicantsByStatus/${status}`
        return this._dataSource.get(url);
    }

    updateApplicant(applicant) {
        const applicantId = parseInt(applicant.applicantId);
        const courseId = parseInt(applicant.courseId);
        const percent = parseInt(applicant.applicantGraduationPercent);

        const data = {
            admission: {
                admissionDate: applicant.admissionDate.toISOString(),
                applicantId: applicantId,
                courseId: courseId,
                status: applicant.admissionStatus
            },
            applicantDegree: applicant.applicantDegree,
            applicantGraduationPercent: percent,
            applicantName: applicant.applicantName,
            mobileNumber: applicant.mobileNumber,
            password: applicant.password,
            status: applicant.status,
            applicantId: applicantId
        };

        return this._dataSource.update(BASE_URL, data);
    }
}

export default Repository;