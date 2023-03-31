import {Request, Response} from 'express';
import {coursesProvider} from '../providers/coursesProvider'
export async function allCourses(req: Request, res: Response): Promise<any> {
    try {
        await coursesProvider(req, res);
        return;
    } catch (err) {
        throw err;
    }
}
