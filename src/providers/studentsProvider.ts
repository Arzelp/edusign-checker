import axios from 'axios';

import {Request, Response} from 'express';
import {AllStudents} from '../types/providerInterface';
import {provideOptions} from './utils/provideOptions';
import {tOptions} from '../types/utilsInterface';

export async function studentsProvider(req: Request, res: Response): Promise<void> {
    const url: string = "https://ext.edusign.fr/v1/student?page=0";
    const options: tOptions = await provideOptions(url);

    const edusignRes = await axios.get(url, options);
    if (edusignRes.status === 200) {
        const test: AllStudents = {...edusignRes.data.result};
        res.status(200).send({data: test});
    } else {
        throw new Error(edusignRes.status + ' : ' + edusignRes.data);
    }
}