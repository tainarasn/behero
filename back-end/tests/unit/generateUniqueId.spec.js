const generateUniqueId = require('../../src/utils/generateUniqueId');
describe('Generate Unique ID', () => {
    it('should generate an unic Id', () =>{
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
} );