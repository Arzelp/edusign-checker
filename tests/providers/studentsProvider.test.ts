import {studentsProvider} from '../../src/providers/studentsProvider';

const httpMocks = require('node-mocks-http');
const req = httpMocks.createRequest();
const res = httpMocks.createResponse({
    eventEmitter: require('events').EventEmitter
});
import axios from 'axios';
import mocked = jest.mocked;

jest.mock('axios');
jest.mock('../../src/controllers/coursesController');
let mockedAxios = axios as jest.Mocked<typeof axios>;
describe('Courses provider test', () => {
    describe('Provider test', () => {
        afterEach(() => {
        })
        beforeEach(() => {
            mockedAxios = axios as jest.Mocked<typeof axios>
        })
        it('should get courses from edusign', async () => {
            mockedAxios.get.mockResolvedValue({
                status: 200,
                data: "toto"
            })
            await studentsProvider(req, res);
            expect(mockedAxios.get).toHaveBeenCalled();
        })
        it('should throw error on bad status code', async () => {
            mockedAxios.get.mockResolvedValue({
                status: 404,
                data: null
            })
            await expect(() => {return (studentsProvider(req, res))}).rejects.toThrow('404 : null')
        })
    })

})