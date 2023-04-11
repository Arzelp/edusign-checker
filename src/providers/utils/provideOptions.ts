import {tOptions} from '../../types/utilsInterface';

export function provideOptions(url: string): tOptions {
    return {
        rejectUnauthorized: false,
        url: url,
        json: true,
        headers: {
            Authorization: `Bearer ${process.env.token}`
        }
    }
}
