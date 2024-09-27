const database = [
    {
        email: 'max@utk.ac.th',
        password: 'bWF4aUB1dGsxMjM0'
    }
]

//function login(email: string, password: string) {
   // const user = database.filter(function (element, index) {
   //     return element.email === email
    // }) // b [{
    // email: 'max@utk.ac.th
    // password: 'max@utk1234
    // }] || []
   // if (email.includes('@') && email.lastIndexOf('@') !== email.length) {
      //  if (user.length > 0) {
       // if (user[0].password === password) {
      //      alert('เข้าสู๋ระบบแล้ว')
       // } else {
          //  alert('รหัสผ่านไม่ถูกต้อง')
       // }
  //  } else {
     //   alert('ไม่มีผู้ใช้งานในระบบ')
   // }
//} else {
   // alert('Mailไม่ถูกต้อง')
//}
//}

login('max@utk.ac.th','maxi@utk1234')

function login(email: string, password: string) {
    const user = database.filter(function (element, index) {
        return element.email === email
    })

    if (!(email.includes('@') && email.lastIndexOf('@') !== email.length - 1)) {
        alert('Mailไม่ถูกต้อง')
        return 
    }

    if (user.length === 0) {
        alert('ไม่มีผู้ใช้งานในระบบ')
        return
    }

    if (!(atob(user[0].password) === password)) {

    }
}
alert('เข้าสู่ระบบแล้ว')

