let student = ["karam", "mohammad", "ahmed", ["samer", "amer", "salam"], ["abdullah", "naser", "kareem"]];



// console.log("___________________________")
// for (let i = 0; i < student.length; i++) {
//     if (typeof student[i] == "string") {
//         student[i] = student[i].toUpperCase()
//     }
//     else {
//         for (let h = 0; h < student[i].length; h++) {
//             student[i][h] = student[i][h].toUpperCase()
//         }
//     }

// }



// let upperCaseStudent = student
//     .flat()
//     .map(name => name.toUpperCase())

// console.log(upperCaseStudent);






// let upperCaseStudent = student.map((i) => {
//     if (Array.isArray(i)) {
//         return i.map(name => name.toUpperCase());
//     }
//     return i.toUpperCase();
// });

// console.log(upperCaseStudent);




let array=["karam","mohammad","ahmed","alomari"];

//تحذف اخر عنصر في الاريه وتحوي على 
// returen يعيد قيمته 
// let newarray=array.pop()
// console.log(array)



//تقوم بحذف اول عنصر وتعيده وان كانت االاريه فارغه تقوم ب ارجاع undefined
// console.log(array.shift())



//تضيف قيمه على اخر الاريه وتحوي 
// retren تعيد طول الاريه الجديده
// console.log(array.push("a"))


//تقوم ب ضافه العنصر على اول الاريه وتعيد طول الاريه الجديده
// console.log(array.unshift(3))
// console.log(array)



// undefined تستقبل رقم وتعيد العنصر الموجود في هاذ الاندكس والديفيلت هو 0 واذا كان الاندكس اكبر من طول الاريه تعيد 
// console.log(array.at(7))


//تقوم ب فصل الاريه وتحويلها الى string تستقبل سترنج الذي يريد الفصل به والديفيلت فاصله 
// console.log(typeof array.join()) 
// console.log(array.join()) 


// تستقبل اندكس وتقوم ب افراغ هاذ الاندكس من العنصر الموجود  تعيد قيمه ترو او فولس حسب نجاح العمليه وتنجح العمليه حتى لو المكان empty
// delete array[0]
// console.log(array)


// تقوم ب دمج 2 اريه في اريه وحده وتاخذ المكان الاول الاريه التي تم استدعاء الميثود عليها وتعيد الاريه الجديده
// newarray=["computer engineering"];
// let all =newarray.concat(array)
// console.log(all)


// تقوم ب دمج ال 
//sub array الى اريه وحدخه
// let myArr = [[1,2],[3,4],[5,6]];
// let newArr = myArr.flat();
// console.log(newArr)

//نسخ جزء من الاريه ووضعها في مكان اخر تستقبل 3 وتعيد الاريه الجيده
// الاول اجباري هو المكان الذي سوف يتم النسخ اليه اذا كان بطول الاريه او اكبر لن يحدث شيء واذا كان سالب ببلش العد بالعكس من اخر الاريه 
// الثاني بدايه مقطع النسخ والديفيلت له 0
// الثالث نهايه المقطع المراد نسخه والديفيلت هو طول الاريه 
// console.log(array)
// console.log(array.copyWithin(2))



// update