const database = [
    {
        email: 'max@utk.ac.th',
        password: 'bWF4aUB1dGsxMjM0'
    }
]

function login(email: string, password: string) {
    const user = database.filter(function (element, index) {
        return element.email === email
    }) // b [{
    // email: 'max@utk.ac.th
    // password: 'max@utk1234
    // }] || []

    if (user.length > 0) {
        if (user[0].password === password) {
            console.log('เข้าสู๋ระบบแล้ว')
        } else {
            console.log('รหัสผ่านไม่ถูกต้อง')
        }
    } else {
        console.log('ไม่มีผู้ใช้งานในระบบ')
    }
}

login('max@utk.ac.th','maxi@utk1234')