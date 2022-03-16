// REGEXP CONSTRUCTOR
// Toda regexp é criada com o constructor RegExp() e herda as suas propriedades e métodos. Existem diferenças na sintaxe de uma Regexp criada diretamente em uma variável e de uma passada como argumento de RegExp.
const regexp = /\w+/gi;

// Se passarmos uma string, não precisamos dos //
// e devemos utilizar \\ para meta characters, pois é necessário
// escapar a \ especial. As Flags são o segundo argumento
const regexpObj1 = new RegExp('\\w+', 'gi');
const regexpObj2 = new RegExp(/\w+/, 'gi');

'JavaScript Linguagem 101'.replace(regexpObj1, 'X');
// X X X

// Exemplo complexo:
const regexpTELEFONE1 = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
const regexpTELEFONE2 = new RegExp('(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}', 'g');


// PROPRIEDADES
// Uma regexp possui propriedades com informações sobre as flags e o conteúdo da mesma.
const regexp1 = /\w+/gi;

regexp1.flags; // 'gi'
regexp1.global; // true
regexp1.ignoreCase; // true
regexp1.multiline; // false
regexp1.source; // '\w+'


// REGEXP.TEST()
// O método test() verifica se existe ou não uma ocorrência da busca. Se existir ele retorna true. A próxima vez que chamarmos o mesmo, ele irá começar do index em que parou no último true.
const regexp2 = /Java/g;
const frase = 'JavaScript e Java';

regexp2.lastIndex; // 0
regexp2.test(frase); // true
regexp2.lastIndex; // 4
regexp2.test(frase); // true
regexp2.lastIndex; // 17
regexp2.test(frase); // false
regexp2.lastIndex; // 0
regexp2.test(frase); // true (Reinicia
regexp2.lastIndex;  // 4


// TEST() EM LOOP
// Podemos utilizar o while loop, para mostrar enquanto a condição for verdadeira. Assim retornamos a quantidade de match's.
const regexp3 = /Script/g;
const frase1 = 'JavaScript, TypeScript e CoffeeScript';

let i = 1;
while(regexp3.test(frase1)) {
  console.log(i++, regexp3.lastIndex);
}
// 1 10
// 2 22
// 3 37


// REGEXP.EXEC()
// O exec() diferente do test(), irá retornar uma Array com mais informações do que apenas um valor booleano.
const regexp4 = /\w{2,}/g;
const frase2 = 'JavaScript, TypeScript e CoffeeScript';

regexp4.exec(frase2);
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined] 
regexp4.exec(frase2);
// ["TypeScript", index: 12, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined] 
regexp4.exec(frase2);
// ["CoffeeScript", index: 25, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined] 
regexp4.exec(frase2);
// null
regexp4.exec(frase2); // Reinicia
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined] 


// LOOP COM EXEC()
// Podemos fazer um loop com exec e parar o mesmo no momento que encontre o null.
const regexp5 = /\w{2,}/g;
const frase3 = 'JavaScript, TypeScript e CoffeeScript';
let regexpResult;

while((regexpResult = regexp5.exec(frase3)) !== null) {
  console.log(regexpResult[0]);
}
