const Itinerary = require('../src/Itinerary');
const Port = require('../src/Port');

describe('Itinerary', () => {
    describe('with Itinerary', () => {
        let dover;
        let calais;

        beforeEach(() => {
            dover = jest.fn();
            calais = jest.fn();
            itinerary = new Itinerary(dover, calais);
        
    });

    it('can be instantiated', () => {
        expect(new Itinerary).toBeInstanceOf(Object);
    });

    it('can have ports', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');

        const itinerary = new Itinerary([dover, calais]);

        expect(itinerary.ports).toEqual([dover, calais]);
    });
});
});