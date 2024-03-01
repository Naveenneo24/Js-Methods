
const data = require("./data1");
//import doesn't work outside a module but require works in terminal

//1.List all the food items
//console.log(data)


//2.list all the food items with result category VEGETABLES

// const listbycategory = data.filter((item)=>item.category === "Vegetable")
//     console.log(listbycategory)

//    //another way 
// const filterbycategory = (category) =>{
//     return data.filter((item) => item.category === category);
// };  

// console.log(filterbycategory("Vegetables"))

//3. list all the food items with category fruit

// const filterbycategory =(category) =>{
//     return data.filter((item) => item.category == category);
// }
// console.log(filterbycategory("Fruit"))

//OR

// const filterbycategory1 = data.filter((item) => item.category === "Fruit")
// console.log(filterbycategory1)

//4. list all the food item with category Protein

//  const filterbucategory2 = ((category) => {
//     return data.filter((item) => item.category === category)
//  })

// console.log(filterbucategory2("Protein"))

// OR

// const filterbycategory2 = data.filter((item) =>item.category === "Protein")
// console.log(filterbycategory2)

//5. list all the food items with category == nuts

// const filterbycategory3 = ((category) => {
//     return data.filter((item) => item.category === category)
//    })

// console.log(filterbycategory3("Nuts"))

//OR

// const filterbycategory3 = data.filter((item) => item.category === "Nuts")
// console.log(filterbycategory3)

//6. list all the food items with category grains

// const filterbycategory4 = ((category) =>{
//     return data.filter((item) => item.category === category)
// })

// console.log(filterbycategory4("Grain"))

//OR

// const filterbycategory4 = data.filter((item) => item.category === "Grain")
// console.log(filterbycategory4)

//7. list all the food items with category diary

// const filterbycategory5 = ((category) => {
//     return data.filter((item) => item.category === category)
// })

// console.log(filterbycategory5("Dairy"))

//OR

// const filterbycategory5 = data.filter((item)=> item.category === "Dairy")
// console.log(filterbycategory5)

//8.list all the food items with calorie above 100

// const filterbyvalue = data.filter((item) => item.calorie >= 100)
// console.log(filterbyvalue)

//OR

// const filterbyvalue = (key, value, comparison) =>{
//     return data.filter((item) => {
//         if(comparison === "equals"){
//             return item[key] === value;
//         }
//         if(comparison === "greater"){
//             return item[key] > value;
//         }
//         if(comparison === "less"){
//             return item[key] < value;
//         }
//     });
// };

// console.log(filterbyvalue("calorie", 100,"greater" ))

//9. list all the food items with calorie below 100

// const filterbyvalue = (key, value, comparison) =>{
//     return data.filter((item) => {
//         if(comparison === "equals"){
//             return item[key] === value;
//         }
//         if(comparison === "greater"){
//             return item[key] > value;
//         }
//         if(comparison === "less"){
//             return item[key] <value;
//         }
//     })
// }
// console.log(filterbyvalue("calorie",100,"less"))

//10.list all the food items with highest protein content to lowest

// const sortbyvalue =(key, order) =>{

//     if(order === "asc") {
//         console.log(data.sort((a,b) => a[key]-b[key]));
//     }
//     if(order === "desc") {
//         console.log(data.sort((a,b)=> b[key]-a[key]))
//     }
// }

// sortbyvalue("protiens","desc")

//11. list all the food items with lowest cab content to highest

const sortbyvalue = (key, order) => {

    if(order === "asc"){
        console.log(data.sort((a,b) => a[key] - b[key]));
    }
    if(order === "desc"){
        console.log(data.sort((a,b) => b[key] - a[key]));
    }
}

sortbyvalue("cab","asc")
