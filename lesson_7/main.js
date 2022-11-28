const bildUser = (name, age, skils=[]) => {
    let user = {name, age, skils};

    return {
        setAge: function (age) {
            if (typeof age === 'string' || age < 18) {
                throw new Error('Something went wrong ...');
            }else {
                return user.age = age;
            }
        },
        userInfo: function () {
            return {...user};
        },
    };
}

const bildUser1 = bildUser('Ivan', '25', ['html', 'css', 'js', 'ts', 'react', 'angular']);
console.log(bildUser1.setAge(18));
console.log(bildUser1.userInfo());
