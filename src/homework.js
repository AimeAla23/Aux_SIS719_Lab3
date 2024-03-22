(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];
  
  /* Multiplique los numeros del arreglo por 5 */

  /*Resultado esperado: [5, 10, 15, 20, 25] */
  let multiplication = [];
  for(let i = 0; i < numbers.length; i++){
    multiplication.push(numbers[i] * 5);
  }
  console.log(multiplication);

  /* First excercise */

  /* Second excercise */

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];

  /* Ordernar los nombres alfabeticamente */

  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */
  names.sort();
  console.log(names);

  /* Second excercise */

  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];

  /* Dado un arreglo, crear otro sin letras repetidas */
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */
  let repetition = {};
  let exclusive = data.filter( letter => {
    if (!repetition[letter]) {
      repetition[letter] = true;
      return true;
    }
    return false;
  });
  console.log(exclusive);

  /* Thrid excercise */

  /* Fourth excercise */

  const largeWord = "abcdabcdABCD";

  /* Dado un string mostrar cuantas veces se repite cada letra*/
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */
  let record = {};
  for (let i = 0; i < largeWord.length; i++){
    let letter = largeWord[i];

    if (record[letter]){
      record[letter]++;
    } else {
      record[letter] = 1;
    }
  }
  let output = "";
  for (let letter in record) {
    /*console.log(`${letter}: ${record[letter]},`)  }*/
    output +=  `${letter}: ${record[letter]},\n`;
  }
  output = output.slice(0, -2); //REMUEVE LA ULTIMA COMA
  console.log(output);
  /* Fourth excercise */

})();
