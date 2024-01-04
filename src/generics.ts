// generics
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3])
const stgArray = concatArray<string[]>(["danilo", "goku"], ["vegeta"])

// numArray.push("saitama")

console.log(numArray)
console.log(stgArray)