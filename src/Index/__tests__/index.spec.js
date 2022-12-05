/** * @jest-environment jsdom */


import { inicioPokedex } from '../../Main/main';
import '../index';

jest.mock('../../Main/main', () => ({
  inicioPokedex: jest.fn(),
})
);

test('inicializa pokedex', () => {
  expect(inicioPokedex)
    .toHaveBeenCalledTimes(1);
});





// jest.mock('../../Main/main', () => jest.fn());