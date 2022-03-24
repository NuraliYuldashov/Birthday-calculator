// Yana bir g'oya Day Calculator bu kun minut sekundlarni hissoblaydi


const check = document.querySelector('.check'),
next = document.querySelector('.next_birthday'),
consWeek = document.querySelector('#week'),
consMonth = document.querySelector('#month'),
age = document.querySelector('#age'),
yourAge = document.querySelector('.age')


console.log(next)

function getDate() {
    let d = new Date,
        cY = d.getFullYear(),
        cD = d.getDate(),
        cM = d.getMonth() + 1,
        D = { year: cY, date: cD, month: cM }
    return D
    }

check.onclick = () => {
    let cDate = getDate(),
    birthDate = document.querySelector('.date'),
        dateB = birthDate.value.split('-'),
        year = dateB[0],
        mon = dateB[1],
        day = dateB[2]

    function ageYear() {
        var ageYear = cDate.year - year, // Yoshi
            month = mon - cDate.month,
            ageMonth = 12 - month,       // oylik
            ageDay = cDate.date - day    // kunlik

        if (cDate.month <= mon) {
            ageYear = ageYear - 1
        }
        if ((ageMonth == 0) && (ageDay == 0)) {
            next.textContent = next.textContent + ageYear + " Years old. Happy Birthday!!"
            return
        }

       
        let months = ageYear * 12 + ageMonth,
            totalDay = (ageYear * 365.25) + (ageMonth * 30.43) + ageDay,   // Umumiy kuni taxminan chiqdi
            week = totalDay / 7,
            totalWeek = Math.floor(week)

            console.log(totalDay)
        if(cDate.month == mon && cDate.date == day) {     // Buni boshqacha yozish mumkin 
            next.textContent = next.textContent + month + ' shuncha oy va ' + nextBirthday + ' kun qoldi'
            return
        }
        if(cDate.month == 1 || cDate.month == 3 || cDate.month == 5 || cDate.month == 7 || cDate.month == 8 || cDate.month == 10 || cDate.month == 12) {
            month = month - 1
            var nextBirthday = 31 - ageDay
            
            // return( month, nextBirthday)
        }
        if(cDate.month == 2) {
            month - 1
        var nextBirthday = 28 - ageDay
        // return( month, nextBirthday)
        }
        if(cDate.month == 4 || cDate.month == 6 ||cDate.month == 9 || cDate.month == 11) {
            month - 1
        var nextBirthday = 30 - ageDay
        // return( month, nextBirthday)     // return qo'ymaslik kerak ekan
        }
        yourAge.textContent = yourAge.textContent + ageYear + ' Yosh ' + ageMonth + ' oy ' + ageDay + ' kunlik'
        age.textContent = age.textContent + ageYear
        consMonth.textContent = consMonth.textContent + months
        consWeek.textContent = consWeek.textContent + totalWeek
        next.textContent = next.textContent + month + ' Oy ' + nextBirthday + ' kun qoldi'
        

    }
    ageYear()
    
    
    
}



        
        



// check.onkeypress = (event) => {
//     if (event.code === 'Enter') {
//         ageyear()
//         return
//     }
//     input.focus()
// }

// var dateNow = new Date
// var currentDay = dateNow.getDate()
// var currentMon = dateNow.getMonth() + 1
// var currentYear = dateNow.getFullYear()

// var today = `${currentMon}-${currentDay}-${currentYear}`



















// document.querySelector('.check').onclick = ()=>{
//     let dateB = document.querySelector('.date')
//     let dates = dateB.value.split('-')
//     let year = dates[0]
//     let day = dates[2]
//     let mon = dates[1]
//     function ageyear () {
//       let age = currentYear - year
//       let month = +mon - currentMon
//       let mo = 12
//       mo = mo - month
//       console.log(mo)
//         if (currentMon <= mon) {
//             age = age - 1
//         }
//         console.log(age + ' Yosh ' + mo +  ' Oylik ')
//     }
//     ageyear()
// }


// var dateNow = new Date
// var currentDay = dateNow.getDate()
// var currentMon = dateNow.getMonth() + 1
// var currentYear = dateNow.getFullYear()

// var today = `${currentMon}-${currentDay}-${currentYear}`


