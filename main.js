const loginForm = document.querySelector('.login-form')
const inp_username = document.querySelector('#username')
const inp_password = document.querySelector('#password')

const hdlLogin = e => {
    e.preventDefault()
    let isValid = true // สร้างตัวแปรเพื่อตรวจสอบความถูกต้องของข้อมูล
    const inputs = [inp_username, inp_password]

    inputs.forEach(input => {
        if (!input.value.trim()) { // ตรวจสอบว่ามีค่าว่างหรือไม่
            isValid = false
            input.style.borderColor = 'red' // เปลี่ยนสีกรอบของ input เป็นสีแดง
        } else {
            input.style.borderColor = '' // กำหนดสีกรอบเป็นค่าว่างหากไม่มีข้อผิดพลาด
        }
    })

    if (inp_username.value.length <= 3 || inp_password.value.length <= 4) {
        isValid = false
        inp_username.style.borderColor = 'red'
        inp_password.style.borderColor = 'red'
    }

    if (isValid) {
        window.location.href = 'https://www.example.com' // ส่งไปยัง URL ที่กำหนด
    }
}

loginForm.addEventListener('submit', hdlLogin)
