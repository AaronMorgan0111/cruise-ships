const Port = require('../src/Port');

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('name of port', () => {
        const port = new Port('Dover');

        expect(port.name).toEqual('Dover');
    });
});