// tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Danilo";
let idade: number = 43;
let altura: number = 1.75;

// tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

// objeto sem previsibilidade
let produto: object = {
    name: "Danilo",
    cidade: "Osasco",
    idade: 43,
};

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

// objeto tipado - com previsibilidade
let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};

/**
 * Arrays
 */

// arrays
let dados: string[] = ["danilo", "isabeli", "sirlene"]
let dados2: Array<string> = ["danilo", "isabeli", "sirlene"]

// arrays multitypes
let infos: (string | number)[] = ["danilo", 43]

/**
 * Tuplas
 */
let boleto: [string, number, number] = ["conta de agua", 199.9, 32342342]

/**
 * Arrays Métodos
 */
dados.pop();

/**
 * Datas
 */
let aniversario: Date = new Date("2023-01-03 21:26");
console.log(aniversario.toString());