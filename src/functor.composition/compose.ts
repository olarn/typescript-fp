import { map as mapList } from "fp-ts/lib/Array"

const double = (x: number) => x * 2
export const doubleList = mapList(double)