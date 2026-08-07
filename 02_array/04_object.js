// const tinderuser = new Object()

const tinderuser = {}

tinderuser.id = "1234abc"
tinderuser.name = "sammy"
tinderuser.isloggedIn = false


// console.log(tinderuser);


const regularUser = {
        email: "some@gmail.com",
        fullname: {
        firstname: "Hitesh",
        lastname: "choudhary"
        }
    }        


    // console.log(regularUser.fullname.firstname);

    const obj1 = {1: "a", 2: "b"}
    const obj2 = {3: "a", 4: "b"}
    const obj4 = {5: "a", 6: "b"}


    // const obj3 = {obj1, obj2}
    

    // const obj3 = Object.assign({}, obj1, obj2,obj4)

    const obj3 = {...obj1, ...obj2}
    // console.log(obj3);

    const users = [
        {
            id: 1,
            email: "h@gmail.com"
        },
        {
            id: 1,
            email: "h@gmail.com"
        },
        {
            id: 1,
            email: "h@gmail.com"
        },
        {
            id: 1,
            email: "h@gmail.com"
        },
    ]

    users[1].email
    console.log(tinderuser);


    console.log(Object.keys(tinderuser));
    console.log(Object.values(tinderuser));
    console.log(Object.entries(tinderuser));

    console.log(tinderuser.hasOwnProperty('isloggedIn'));
    
    
    