import {Request, Response} from 'express';
import {studentsProvider} from '../providers/studentsProvider'
export async function allStudents(req: Request, res: Response): Promise<void> {
    try {
        await studentsProvider(req, res)
    } catch (err) {
        throw err;
    }
}
