// const explorer = (htmlElement) => {
//     // console.log(htmlElement);
//
//     const children = htmlElement.children;
//     // console.log(children);
//     if (children.length !== 0) {
//         for (const child of children) {
//             explorer(child);
//             console.log(child);
//         }
//     }
// }
//
// explorer(document.body);

let tree = {
    name: 'Ivan',
    age: 31,
    status: true,
    wife: {
        wifeName: 'Ira',
        wage: 34,
        father: {
            fatherName: 'Stepan',
            fatherAge: 58

        }

    }
}

const treeBuilder = (obj) => {
    for (const key in obj) {
        if (typeof obj[key] !== 'object'){
            console.log(key + ':', obj[key]);
        } if (typeof obj[key] === 'object') {
            treeBuilder(obj[key]);
        }
    }

}

treeBuilder(tree);

const array = [11, 22, 33, 44, 55, 66, 77, 66, 45, 96, 5, 22];

const iterArr = (index = 0, arr) => {
    console.log(arr[index]);
    index++;
    if (index < arr.length) {
        iterArr(index, arr);
    }
}
iterArr(0, array);
