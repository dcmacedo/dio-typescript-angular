// funcoes
function addNumber(x: number, y: number): number {
    return x + y;
}

function addToHello(name: string): string {
    return `Hello ${name}`;
}

function CallToPhone(phone: number | string) {
    return phone;
}

async function getDatabase(id: number): Promise<string> {
    return "Danilo";
}

let soma: number = addNumber(4, 7);

console.log();