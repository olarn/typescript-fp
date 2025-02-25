import { Queue } from './generic'

describe('Generic Queue', () => {
  it('should accept string queue', () => { 
    const q = new Queue<string>()
    q.add('first')
    q.add('second')
    q.add('third')
    
    expect(q.remove()).toEqual('first')
    expect(q.allElements()).toEqual(['second', 'third'])
  })

  it('should work with number queue', () => {
    const q = new Queue<number>()
    q.add(1)
    q.add(2)
    q.add(3)
    
    expect(q.remove()).toEqual(1)
    expect(q.allElements()).toEqual([2, 3])
  })
})