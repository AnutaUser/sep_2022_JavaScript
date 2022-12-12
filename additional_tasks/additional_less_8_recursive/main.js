// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

const div = document.body.getElementsByTagName('div');

const arrOfClassList = [];

const allClasses = () => {

    for (const divEl of div) {
        const value = divEl.classList.value;
        if (value) {
            const array = value.split(' ');
            console.log(array);
            for (let i = 0, j = 0; i < array.length; i++, j++) {
                console.log(array[i]);
                // console.log(indexOf(array[i]));
                // console.log(array[j+1]);
                if(array[i] !== array[j+1]){
                    arrOfClassList.push(array[i])
                }
                else {
                    // allClasses()
                }
            }

        } else {

        }


    }
    console.log(arrOfClassList);


};
allClasses();
