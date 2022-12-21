import { StormGlass } from '@src/clients/stormGlass';

describe('StormGlass client', () => {
    it('should return normalized forecast from StormGlass service', async () => {
        const lat = -33.792726;
        const long = 151.289824;
        const stormGlass = new StormGlass();
        const response = await stormGlass.fetchPoints(lat, long);
        expect(response).toEqual({

        });
    });
});