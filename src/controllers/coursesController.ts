import {Request, Response} from 'express';
import {allCoursesProvider} from '../providers/coursesProvider'

export async function allCourses(req: Request, res: Response): Promise<void> {
    try {
        await allCoursesProvider(req, res);
    } catch(err) {
        throw err;
    }
}