//import {describe, expect, tests} from '@jest/globals';

import {provideOptions} from "../../src/providers/utils/provideOptions";
import {tOptions} from '../../src/types/utilsInterface';

const originalEnv = process.env;
describe('Utility tests', () => {
    beforeEach(() => {
        process.env = {
            ...originalEnv,
            'token': 'tests token'
        }
    })
    it('should provide options', async () => {
        // Expectations
        const expected = {
            rejectUnauthorized: false,
            url: 'testing route',
            json: true,
            headers: {
                Authorization: `Bearer ${process.env.token}`
            }
        }
        // Reality
        const res = await provideOptions('testing route');
        // Comparison
        expect(res).toEqual(expected);
    })
})