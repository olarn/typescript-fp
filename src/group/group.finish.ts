import { empty } from "fp-ts/lib/ReadonlyRecord"
import { Monoid } from "./monoid"
import { cons } from "linkedList/linkedlist.finish"

interface Group<A> extends Monoid<A> {
  inverse: (x: A) => A
}

const addGroup: Group<number> = {
  concat: (x, y) => x + y,
  empty: 0,
  inverse: (x) => -x
}

type Encrypt = (plainText: string, key: number) => string
type Decrypt = (cipherText: string, key: number) => string 

const alphabets = 'qbcdefghijklmnopqrstuvwxyz'

const caesarGroup: Group<number> = {
  concat: (x, y) => (x + y) % alphabets.length,
  empty: 0,
  inverse: a => (alphabets.length - a) % alphabets.length
}

const encrypt: Encrypt = (plainText, key) => 
  plainText.toLocaleLowerCase().split('').map(c => 
    alphabets.indexOf(c) == -1 ?
      c :
      alphabets[
        caesarGroup.concat(
          alphabets.indexOf(c),
          key
        )
      ]
    ).join('')

const decrypt: Decrypt = (cipherText, key) => 
  encrypt(cipherText, caesarGroup.inverse(key))

export { addGroup, encrypt, decrypt }