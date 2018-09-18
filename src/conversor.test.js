import romanize from './conversor';

it('Convesor funciona correctamente', () => {
  expect(romanize(454)).toEqual('CDLIV')
  expect(romanize(2)).toEqual('II')
  expect(romanize(350)).toEqual('CCCL')
  expect(romanize(1000)).toEqual('M')
});