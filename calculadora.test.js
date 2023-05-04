const calculo = require('./calculadora')
describe('Funçoes matematicas', ()=>{
    test('Soma de dois numeros', ()=>{
        expect(calculo.soma(20, 30)).toBe(50)
    })
})