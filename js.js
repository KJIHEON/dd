/* 
16진수를 10진수정수로 표현되게 하기 50팩토리얼 
5   120
4   24
3   6
2   2
1   1
*/
// 나누기 반복문 스트링

const { string } = require("joi")




// e+21 = 10^21
// 22 = 1.1240007277776077e+21
// 22 = 1124000727777607680000
// 5의 배수마다 0증가
// 1.1240007277776077e+21
// 1124000727777607680000
// 길이 만큼 역순으로 배치해서 
// function factorial2(x){
//     let result = 1
//     for(let i = 1; i <= x; i++){
//         // if(i % 5 == 0){
//         //     result = (result*i)/10      
//         //     count++
//         // } else {
//            result = `${result *= i}`
//         // }
//         console.log(`${result} * ${i+1} = ${result * (i+1)}`)

//     }
//     console.log(typeof result)
//     // for(let i = 0; i < count; i++){
//     //     result = result + "0" 
//     // }
//     // console.log(result1)
//     return result
// }  
// // const count = 2
// // const result = factorial2(count)
// // console.log(result)
// // console.log(`${count}! 결과=> ${result}`)

function fac(x){
    let result = 1
   for(let i = 1; i <= x; i++){
    // console.log(`${BigInt(result)} * ${BigInt(i)} = ${BigInt(result) * (BigInt(i))}`)
    result = BigInt(result) * BigInt(i)
    // console.log(BigInt(i),"<=반복횟수")
}
    return result
} 
function fac2(x){
    if (x == 1)      
    return 1    
return x * fac2(x - 1)
}

function fac3(x){
    let result = 1
    for (let i = 1; i <= x; i++){
        result *= i
    }

    return `${result},\n=>${result}`
}
function fac4(x){
    let result = 1
    let count = 0
    for (let i = 1; i <= x; i++){
        if(i % 5 == 0){
            result = result * i
            count ++
        }else if(i % 25 == 0){
            result = result * i
            count = count + 2
        }else if(i %  125 == 0) {
            result = result * i
            count = count + 3
        }else{
            result = result * i
        }
    }
    for (let i = 1; i <= count; i++){
        result *= 10
    }
    return `-------------\n${result}`
}
const x = 50
// 10888869450418352160768000000 27
// 155112100433309860000
// 15511210043330985984000000
// 15511210043330986000000000
// 30414093201713378043612608166064768844377641568960512000000000000
// console.log(factorial(count))
// console.log(15511210043330986000/10)
console.log(fac2(x))
