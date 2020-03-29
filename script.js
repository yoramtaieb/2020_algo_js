//ex02
var unNombre = 8
console.log(typeof unNombre)


let isLogin = true;
if (isLogin == true) {
    console.log("Connected");
} else {
    console.log("Not Authorized")
};

//ex03
let a = 8;
let b = a + 1;
a += 1;
a *= 2;
b -= 5;
b *= b;
a += 3;

if (a == 1) {
    console.log(a += 2);
} else {
    console.log(a += 3);
};
console.log("result :", a);

//ex04 //ex05
//Boucle
let variable = 0;

while (variable <= 10) {
    console.log(variable);
    variable++
};


let hello = "         Hello , world           ";
console.log(hello);
console.log(hello.trim());

hello = hello.split(",");
console.log(hello);

//ex06
// Fonction 

//ES6
const helloEs6 = () => {
    return true;
}

resultat = helloEs6();
console.log(resultat);


const stringReturn = (str) => {
    return str;
}
stringReturn("hello");

const concatenation = (str, nb, str2) => {
    return str + nb + str2;
}

let conca = concatenation("j'ai ", 28, " ans");
console.log(conca);


const number = (nb, nb2) => {


    if (nb > nb2) {
        return ("Le premier nombre est plus grand");
    } else if (nb < nb2) {
        return ("Le premier nombre est plus petit");
    } else if (nb == nb2) {
        return ("Les deux nombres sont identiques");
    } else {
        return ("ERROR");
    };

}
let coucou = number(10, 5);
console.log(coucou);

//ex07

const prenoms = ["Thomas", "Sarah", "Alexandre", "Alexandre", "Mélodie", "Jonathan", "Laure"];

const uniqueSet = new Set(prenoms);

const newPrenoms = Array.from(uniqueSet);

console.log(newPrenoms.join(", "));