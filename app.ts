//types
var myString:string = 'hello world';
myString = 22 + '';

var myNumber: number = 22;
var myBool: boolean = true;

var myVar:any = "hello";
myVar = false;

//strings
console.log(myNumber.toString());

//arrays
var stringArray:string[] = ["", "", ""];
var numberArray:number[] = [1, 2, 3]
var anyArray: any[] = [true, 1, "hi"];

//tuple
var strNumTuple: [string, number] = ["hello", 22];

//void, undefined, null
const myVoid: void = undefined;
const myNull: null = null;
const myUndefained: undefined = undefined;
console.log(typeof (myVoid));

let sum = (p1:number|string, p2:number|string):string => { 
    return "";
}

const getPerson = (nombre: string, apellido?: string): string => { 
    return (!!apellido) ? `${nombre} ${apellido}` : `${nombre}`;
}
console.log(getPerson("angel"));
console.log(getPerson("angel", "napoles napoles"));

//interface
interface ITodo {
    title: string;
    text: string;
}
const logTodo = (todo:ITodo): void => {
    console.log(`${todo.title}: ${todo.text}`);
}
logTodo({ title: "Angel", text: "Esto es un texto" });

//classes

abstract class Persona { 
    constructor(
        protected nombre_completo: string,
        protected edad: number,
        protected sexo: string
    ){}    
}

abstract class Usuario extends Persona{
    constructor(
        protected usuario: string,
        protected contraseña: string,
        protected nombre_completo: string,
        protected edad: number,
        protected sexo: string
    ) { 
        super(nombre_completo, edad, sexo);
    }
}

class Trabajador extends Usuario{ 
    constructor(
        private salario: number,
        private cargo: string,
        protected usuario: string,
        protected contraseña: string,
        protected nombre_completo: string,
        protected edad: number,
        protected sexo: string
    ) {
        super(usuario, contraseña, nombre_completo, edad, sexo);
    }
    get getSalario():number {
        return this.salario
    }
    get getCargo(): string {
        return this.cargo;
    }
    set setCargo(value:string) {
        this.cargo = value;
    }
    set setSalario(value: number) {
        this.salario = value;
    }
}

const t1 = new Trabajador(15000, 'Administrador', 'anapoles', '311510*pass', 'Angel Napoles Napoles', 32, 'masculino');

console.log(t1);
t1.setSalario = 30000;
console.log(t1);
