class Course {

    readonly title: string;
    readonly startDate: string;
    readonly endDate: string;

    constructor(title: string, startDate: string, endDate: string) {
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

export type CourseType = {
    title: string,
    startDate: string,
    endDate: string
}


export default Course;