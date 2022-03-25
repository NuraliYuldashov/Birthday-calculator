

//? Yana bir g'oya Day Calculator bu kun minut sekundlarni hissoblaydi


const check = document.querySelector('.check'),
consWeek = document.querySelector('#week'),
consMonth = document.querySelector('#month'),
age = document.querySelector('#age'),
next = document.querySelector('.next_birthday'),
yourAge = document.querySelector('.age')
var fullage = {}


// * Calculate birth day button click

var calculateBirthday = ()=>{
    

    getCurrentDate()
    getBirthDate()

    calcAge()
    summary()
}

// * Get birthday from User

const getBirthDate = ()=>{
    let inDate = document.querySelector('.date').value
    if(inDate==null || inDate==''){
        yourAge.innerHTML = "Choose a date please!";  
        return false; 
      }
    date = new Date(inDate)
    let birthDate = {}

    birthDate.year = date.getYear()
    birthDate.mon = date.getMonth() + 1
    birthDate.day = date.getDate()
    birthDate.full = date
    return birthDate
}

// * Get current date from system

function getCurrentDate() {
    let d = new Date(),
        cY = d.getYear(),
        cD = d.getDate(),
        cM = d.getMonth() + 1
        D = { year: cY, date: cD, month: cM }
    return D
}

// * Calculate User Age

const calcAge = ()=>{
    let birthday = getBirthDate()
    let current = getCurrentDate()
    

    //  Calculate Age
    let ageUser = current.year - birthday.year
    
    // Calculate Month
    if (current.month >= birthday.mon) {
    var monthAge = current.month - birthday.mon
    }
    else {
        ageUser-- 
        var monthAge = 12 + current.month - birthday.mon
    }
    
    //  Calculate Day
    if (current.month == birthday.mon && current.date == birthday.day) {     // Buni boshqacha yozish mumkin 
        next.textContent = 'Happy Birthday 🥳🥳'
        return
    }

    if (current.date >= birthday.day) {
        var ageday = current.date - birthday.day
    }

    else{
        if (monthAge == 0) {
            monthAge = 12;
            ageUser--;
          }
        if(birthday.mon == 1 || birthday.mon == 3 || birthday.mon == 5 || birthday.mon == 7 || birthday.mon == 8 || birthday.mon == 10 || birthday.mon == 12) {
            monthAge--
            var ageday = 31 - birthday.day + current.date
        }
        if(birthday.mon == 2) {
            monthAge--
            var ageday = 28 - birthday.day + current.date                   // ! Shu yerda bir xatolik bor yana if yozish kerak
        }
        if(birthday.mon == 4 || birthday.mon == 6 || birthday.mon == 9 || birthday.mon == 11) {
            monthAge--
        var ageday = 30 - birthday.day + current.date
        }
    }

    // * Group User Age
        fullage = {
            years: ageUser,
            months: monthAge,
            days: ageday
        }
    
    yourAge.textContent = yourAge.textContent + fullage.years + " Year " + fullage.months + ' Month ' + fullage.days + ' Day'
}



// * Calculate Summary Month, Week, Day, Hour, Minut

const summary = ()=>{
    let birthday = getBirthDate().full
    let current = new Date()
     
    //calculate the difference of dates
    let totalMillisecond = current.valueOf() - birthday.valueOf();

    let totalYear = Math.floor(totalMillisecond / 31557600000)
    let totalMonths = Math.floor(totalMillisecond / 2629746000)
    let totalWeeks = Math.floor(totalMillisecond / 604800000)
    let totalDays = Math.floor(totalMillisecond / 86400000)
    let totalHours = Math.floor(totalDays * 24)                 //! 100% chiqarish uchun totalmilisecundni 3600000 ga bo'lish kerak
    let totalMinutes = Math.floor(totalHours * 60) 
    
    age.textContent = totalYear
    consMonth.textContent = totalMonths
    consWeek.textContent = totalWeeks
    document.getElementById('day').textContent = totalDays
    document.getElementById('hour').textContent = totalHours
    document.getElementById('minute').textContent = totalMinutes

}





  /*  check.onclick = () => {
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
    
    
    
 }  */



        
        



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

