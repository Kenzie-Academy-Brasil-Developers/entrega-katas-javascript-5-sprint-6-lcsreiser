//KATA 1

function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseString1()

function testeReverseString2(){
    let result = reverseString("Kenzie Academy Brasil 2021");
    let expected = "1202 lisarB ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseString2()

function reverseString(str){
    return str.split('').reverse().join('')
}


// KATA 2

function testReverseSentence1(){
    let result = reverseSentence("Kenzie Academy");
    let expected = "Academy Kenzie";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testReverseSentence1()

function testReverseSentence2(){
    let result = reverseSentence("Kenzie Academy Brasil 2021");
    let expected = "2021 Brasil Academy Kenzie";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testReverseSentence2()

function reverseSentence(str){
    return str.split(' ').reverse().join(' ')
}


// KATA 3

function testMinimumValue1(){
    let result = minimumValue([2,5,6,0,10,20,17,16,18]);
    let expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMinimumValue1()

function testMinimumValue2(){
    let result = minimumValue([15,22,30,1,40,158]);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMinimumValue2()

function minimumValue(arr){
    let result = arr[0]

    arr.forEach(number =>{
        if(number < result){
            result = number
        }
    })
    
    return result
}


// KATA 4

function testMaximumValue1(){
    let result = maximumValue([2,5,6,0,10,20,17,16,18]);
    let expected = 20;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMaximumValue1()

function testMaximumValue2(){
    let result = maximumValue([15,22,30,1,40,158]);
    let expected = 158;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testMaximumValue2()

function maximumValue(arr){
    let result = arr[0]

    arr.forEach(number =>{
        if(number > result){
            result = number
        }
    })
    
    return result
}


//KATA 5

function testCalculateRemainder1(){
    let result = calculateRemainder(5,2);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCalculateRemainder1()

function testCalculateRemainder2(){
    let result = calculateRemainder(4,2);
    let expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCalculateRemainder2()

function calculateRemainder(a,b){
    return a%b
}

// KATA 6

function testDistinctValues1(){
    let result = distinctValues("1 3 5 3 7 3 1 1 5");
    let expected = "  1 3 5 7";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testDistinctValues1()

function testDistinctValues2(){
    let result = distinctValues("4 2 5 1 3");
    let expected = "  1 2 3 4 5";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}
testDistinctValues2()

function distinctValues(str){
    
    let result = [...new Set(str)].sort().join(" ");

    return result
}


// KATA 7

function testCountValues1(){
    let result = countValues("1 3 5 3 7 3 1 1 5");
    let expected = '1(3) 3(3) 5(2) 7(1)';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCountValues1()

function testCountValues2(){
    let result = countValues('4 2 5 1 3 1 2 3');
    let expected = '1(2) 2(2) 3(2) 4(1) 5(1)';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCountValues2()

function countValues (str){
    let array = str.split(' ');
    let count = [];

    for(let i = 0; i < array.length; i++){
        if(count[array[i]] === undefined){
            count[array[i]] = 1;
        } else {
            count[array[i]]++;
        }
    }

    let result = [];
    for(let number in count){
        result.push(`${number}(${count[number]})`);
    }
    
    return result.join(' ');
}