//types
var myString = 'hello world';
myString = 22 + '';
var myNumber = 22;
var myBool = true;
var myVar = "hello";
myVar = false;
//strings
console.log(myNumber.toString());
//arrays
var stringArray = ["", "", ""];
var numberArray = [1, 2, 3];
var anyArray = [true, 1, "hi"];
//tuple
var strNumTuple = ["hello", 22];
//void, undefined, null
const myVoid = undefined;
const myNull = null;
const myUndefained = undefined;
console.log(typeof (myVoid));
let sum = (p1, p2) => {
    return "";
};
const getPerson = (nombre, apellido) => {
    return (!!apellido) ? `${nombre} ${apellido}` : `${nombre}`;
};
console.log(getPerson("angel"));
console.log(getPerson("angel", "napoles napoles"));
const logTodo = (todo) => {
    console.log(`${todo.title}: ${todo.text}`);
};
logTodo({ title: "Angel", text: "Esto es un texto" });
//classes
class Persona {
    constructor(nombre_completo, edad, sexo) {
        this.nombre_completo = nombre_completo;
        this.edad = edad;
        this.sexo = sexo;
    }
}
class Usuario extends Persona {
    constructor(usuario, contraseña, nombre_completo, edad, sexo) {
        super(nombre_completo, edad, sexo);
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.nombre_completo = nombre_completo;
        this.edad = edad;
        this.sexo = sexo;
    }
}
class Trabajador extends Usuario {
    constructor(salario, cargo, usuario, contraseña, nombre_completo, edad, sexo) {
        super(usuario, contraseña, nombre_completo, edad, sexo);
        this.salario = salario;
        this.cargo = cargo;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.nombre_completo = nombre_completo;
        this.edad = edad;
        this.sexo = sexo;
    }
    get getSalario() {
        return this.salario;
    }
    get getCargo() {
        return this.cargo;
    }
    set setCargo(value) {
        this.cargo = value;
    }
    set setSalario(value) {
        this.salario = value;
    }
}
const t1 = new Trabajador(15000, 'Administrador', 'anapoles', '311510*pass', 'Angel Napoles Napoles', 32, 'masculino');
console.log(t1);
t1.setSalario = 30000;
console.log(t1);
