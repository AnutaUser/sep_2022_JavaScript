// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

const arrOfClassList = [];

const allClasses = (arg) => {

    for (const child of document.body.children) {
        // console.log(child);

        const classes = child.children;
        // console.log(classes);

        if (classes) {
            for (const classLi of classes) {
                const split = classLi.className.split(' ');
                for (let i = 0; i < split.length; i++) {
                    if (arrOfClassList[i] !== split[i]) {

                        arrOfClassList.push(split[i]);
                    }
                }
            }
        }

    }
};

allClasses(document.body);

console.log(arrOfClassList);

