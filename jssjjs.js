// Завдання 1 :)
// 1.1
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let it = arr.length-1
// function pronto(arr, index = 0, sum=0) {
//     sum = sum + arr[index]
//     console.log (sum)
//     if(index <it){
//     pronto(arr,++index,sum)}
//     else if(index> it){
// return console.log('done')}
// }
// pronto(arr)
// 1.2
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let it = arr.length-1
// function pronto(arr, index = 0, sum=0) {
//     sum = sum + arr[index]
//     console.log(sum)
//     return index<it ? pronto(arr,++index,sum):console.log('done')}
//     pronto(arr)

// // // Завдання 2  :(( не заходить в дочірній об'єкт в теренарному

// function deepCount(arg) {
//     let it = arg.length
//     for (let key in arg) {
//         if (Array.isArray(arg[key])) {
//                 it += deepCount(arg[key])
//             }
//         }
//         return it;
//  }
// або теренарний
// function deepCountTER(arg) {
//     let count = arg.length
//     for (const key in arg) {
//         count += Array.isArray(arg[key]) ? deepCountTER(arg[key]) : 0;
//       }
//       return count;
  
//  }


// let user= [1,2,[3,4,[5]]]
// console.log(deepCount(user))

// const fake = [1,2,[3]]
// console.log (deepCount(fake))

// console.log (deepCountTER(user))
// console.log (deepCountTER(fake))

    // console.log(deepCount([]))
//     // 0
    // console.log(deepCount[1, 2, 3]);
//     // 3
//      console.log(deepCount([x, y, [z]]));
//     // 4
//     console.log(deepCount([1, 2[3, 4[5]]]));
//     //  7
//     console.log(deepCount([
//         [
//             [
//                 []
//             ]
//         ]
//     ]));
//     //3


    // Завдання 3 
    // const employees = {
    //     development: {
    //         backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
    //         frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
    //     },
    //     sales: {
    //         marketing: {
    //             internet_marketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
    //             promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
    //         },
    //         sellers:  [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
    //     },
    //     designer: [{name: 'Kate', salary: 1800}]
    // }
    // function countSalary (){
    //     let sum = 0;
    //     return function sumSallary(obj){
    //         for(let key in obj){
    //             if (Array.isArray(obj[key])){
    //                 obj[key].forEach(employee => sum += employee.salary);
    //             } else {
    //                 sumSallary(obj[key]);
    //             }
    //         }
    //         return sum;
    //     }
    //  }
    //  let paySalary = countSalary();
    //  console.log(paySalary(employees))

    // sum = 4
    // console.log(sum);

    // Завдання 4:)
    // function mx(arg){
    // return  Math.max(...arg)
    // }
    // let arr1 = [2, 15 ,7, 3 ];
    // console.log(mx(arr1))
    // let arr2 = [9, 3, 17, 12, 4, 8 ];
    // console.log(mx(arr2))
    // let arr3 = [6, 11, 16, 1,5, 11];
    // console.log(mx(arr3))