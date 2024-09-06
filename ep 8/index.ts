const aboutMe = {
    firstName: 'Elle',
    lastName:'Super',
    age: 14,
    mail: 'mmm@f*@.comma',
    phone: '07***87887',
    idCard: 'xx345xxxx',
    fan: {
        fistName: 'Jennie',
        lastName: 'Kim',
        age: 24,
        animal: {
            animalType: 'Dog',
            color: 'gold',
        }
    },
    myBro: {
        fistname: 'ink',
        lasName: 'inkkie',
        AKA: 'nongink',
    }
}

console.log(aboutMe.myBro.AKA)



onst myFriends = [{
    fistName: 'Lisa',
        lastName: 'Balcpink',
        AKA: 'cat',
        age: 19
}, {
    fistName: 'Jennie',
        lastName: 'Balcpink',
        AKA: 'ruby',
        age: 20
}, {
    fistName: 'Rose',
        lastName: 'Balcpink',
        AKA: 'rosie',
        age: 19
}, {
    fistName: 'Jisoo',
        lastName: 'Balcpink',
        AKA: 'sooyah',
        age: 21
} ]

const myFriendsAKA = myFriends.map(function(element, index) {
    return ({
        firstName: element.fistName,
        AKA: element.AKA
    })
})

const myFriendMoreThan = myFriends.filter(function(element, index) {
    return element.age > 19

})

console.log(myFriendMoreThan)