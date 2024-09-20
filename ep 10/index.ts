console.log("1")
console.log("2")
console.log("3")

setTimeout(() => {
    console.log("4")
})

console.log("5")


// zane.com -> No
// tan@ -> No
// safe@utk.ac.th -> yes
// poppy2gmail.com -> Yes
const database = [
    {
        email: 'user@gmail.com',
        password: 'loveYoo3000'
    }
]
function register(email: string, password: string) {
    if (email.includes('@') && email.lastIndexOf('@') !== email.length - 1) {
         if (password.length > 8 && password.length < 16) {
             const userObject = {
                email: email,
                password: password
             }
             database.push(userObject)
             alert('สมัครสมาชิกแล้ว ยยยินดีต้อนรับคุณ' + email)
         }else{
            alert('รหัสผ่านต้องมากกว่า 8 ตัว และไม่เกิน 16')
         }
    }else {
      alert('Emailไม่ถูกต้อง')
    }
}

register('pony@gmail.com', '25559999777')



const database = [
    {
        email: 'user@gmail.com',
        password: 'loveYou3000'
    },
    {
        email: 'pony@gmail.com',
        password: '25559999777'
    }
]

function login(email: string, password: string) {
    const user = database.filter(function(element, index) {
        return element.email === email
    })
    if (user.length > 0) {
        if (user[0]. password === password) {
        alert('เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ')
    } else {
        alert('รหัสผ่า่นไม่ถูกต้อง โปรดตรวจสอบ')
    }  
    } else {
        alert('ไม่พบผู้ใช้งานในระบบ')
    }
}

login('pony@gmail.com', '25559999777')




// กฎการเข้ารหัส
// เปลี่ยน u เป็น +
//เปลี่ยน 9 เป็น *
// เปลี่ยน 0 เป็น ^
const database = [
    {
        email: 'user@gmail.com',
        password: 'loveYo+3^^^'
    },
    {
        email: 'pony@gmail.com',
        password: '2555****777'
    }
]

function decryptPassword(password: string) {
    return password.replaceAll('+','u').replaceAll('*','9').replaceAll('^','0')
}

function login(email: string, password: string) {
    const user = database.filter(function(element, index) {
        return element.email === email
    })
    if (user.length > 0) {
        const realPassword = decryptPassword(user[0].password)

        if (user[0]. password === password) {
        alert('เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ')
    } else {
        alert('รหัสผ่า่นไม่ถูกต้อง โปรดตรวจสอบ')
    }  
    } else {
        alert('ไม่พบผู้ใช้งานในระบบ')
    }
}

login('pony@gmail.com', '2555****777')