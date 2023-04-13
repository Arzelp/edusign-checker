export interface AllStudents {
    courses: [Student]
}

export interface Student {
    id: string,
    email: string,
    username: string,
    training_name: string,
    date_created: Date,
    date_updated: Date,
    school_id: string
}