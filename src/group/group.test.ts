import { addGroup, decrypt, encrypt } from "./group"

describe('Group', () => {
  it('should beable to add and withdraw balance', () => {
    expect(
      addGroup.concat(addGroup.empty,
        addGroup.concat(80,
          addGroup.concat(20, addGroup.inverse(10))
        )
      )
    ).toEqual(90)
  })
  
  it('should be able to encrypt and decrypt with Caesar', () => {
    expect(
      encrypt('hello world', 3)
    ).toEqual('khoor zruog')

    expect(
      decrypt('khoor zruog', 3)
    ).toEqual('hello world')
  })
})