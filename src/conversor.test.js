import romanize from './conversor'

it('El conversor funciona correctamente pasando el número 454 y esperando CDLIV', () => {
  let converted = romanize(454)
  expect(converted).toEqual('CDLIV')
})

it('El conversor funciona correctamente pasando el número 2 y esperando II', () => {
  let converted = romanize(2)
  expect(converted).toEqual('II')
})

it('El conversor funciona correctamente pasando el número 350 y esperando CCCL', () => {
  let converted = romanize(350)
  expect(converted).toEqual('CCCL')
})

it('El conversor funciona correctamente pasando el número 1000 y esperando M', () => {
  let converted = romanize(1000)
  expect(converted).toEqual('M')
})

it('El conversor devuelve un mensaje de error si se le entrega un número negativo, se pasa -5', () => {
  let converted = romanize(-5)
  expect(converted).toEqual('Solo se permiten números positivos')
})

it('El conversor devuelve un mensaje de error si se le pasa un cero', () => {
  let converted = romanize(0)
  expect(converted).toEqual('Solo se permiten números positivos')
})

it('El conversor devuelve un mensaje de error si se le pasan caracteres especiales, se pasa 5.6', () => {
  let converted = romanize(5.6)
  expect(converted).toEqual('Solo se permite el ingreso de números enteros')
})

it('El conversor devuleve un mensaje de error si se le pasa una cadena, se pasa "cadena"', () => {
  let converted = romanize('cadena')
  expect(converted).toEqual('Solo se permite el ingreso de números enteros')
})

it('El conversor devuelve un mensaje de error si se le pasa una cadena vacía', () => {
  let converted = romanize('')
  expect(converted).toEqual('Solo se permiten números positivos')
})