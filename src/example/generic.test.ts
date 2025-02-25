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
})