import { flow } from 'fp-ts/function'
import { findLength, isGreaterThan5, convertToShortOrLong } from './composition'

describe('Category Theory', () => {
  it('proof composition definition law', () => { 
    const gThenF = isGreaterThan5(findLength('tiny'))
    const k = flow(findLength, isGreaterThan5)('tiny')

    expect(k).toEqual(gThenF)
  })

  it('proof composition association', () => {
    // ( h .  g ) . f 
    const h_and_g_then_f = flow(findLength, flow(isGreaterThan5, toString))
    // h . ( g . f )
    const h_after_g_and_f = flow(flow(findLength, isGreaterThan5), toString)

    expect(
      h_and_g_then_f('tiny')
    ).toEqual(
      h_after_g_and_f('tiny')
    )
  })
  
  it('proof composition identity', () => {
    const ida = (x: string): string => x
    const id_f = flow(ida, findLength)
    expect(id_f('tiny')).toEqual(findLength('tiny'))
    
    const idb = (x: number): number => x
    const f_id = flow(findLength, idb)
    expect(f_id('tiny')).toEqual(findLength('tiny'))
  })
})