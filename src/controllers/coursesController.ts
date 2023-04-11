import {Request, Response} from 'express';
import {coursesProvider} from '../providers/coursesProvider'
export async function allCourses(req: Request, res: Response): Promise<void> {
    try {
        await coursesProvider(req, res)
    } catch (err) {
        throw err;
    }
}
