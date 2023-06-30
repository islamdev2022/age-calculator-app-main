var btn = document.querySelector(".bt");

var par0=document.getElementsByClassName("er")[0];
var par1=document.getElementsByClassName("er")[1]; 
var par2=document.getElementsByClassName("er")[2]; 

var date=document.getElementById('dt');

var dayInput = document.querySelector("#day")
var monthInput = document.querySelector("#month")
var yearInput = document.querySelector("#year")

var validday= document.getElementById('vd')
var validmonth= document.getElementById('vm')
var validyear= document.getElementById('vy')

var reqday=document.getElementById('reqd')
var reqmonth=document.getElementById('reqm')
var reqyear=document.getElementById('reqy')

var calcy=document.getElementById('y');
var calcm=document.getElementById('m');
var calcd=document.getElementById('d');



function emptyorno(){
   reqday.style.display="none"
   par0.style.color="black";
   dayInput.style.borderColor="hsl(0, 0%, 86%)";

    if (dayInput.value==""){
        reqday.style.display="block";
        par0.style.color="hsl(0, 100%, 67%)";
        dayInput.style.borderColor="hsl(0, 100%, 67%)";
    }

    reqmonth.style.display="none";
    par1.style.color="black";
    monthInput.style.borderColor="hsl(0, 0%, 86%)";

    if(monthInput.value==""){
        reqmonth.style.display="block";
        par1.style.color="hsl(0, 100%, 67%)";
        monthInput.style.borderColor="hsl(0, 100%, 67%)";

    }
    reqyear.style.display="none"
    yearInput.style.borderColor="hsl(0, 0%, 86%)";
    par2.style.color="black";

    if (yearInput.value==""){
        reqyear.style.display="block";
        par2.style.color="hsl(0, 100%, 67%)";
        yearInput.style.borderColor="hsl(0, 100%, 67%)";

    }
}


function isValidDate(day, month, year) {
    // Convert input values to integers
    day = parseInt(day, 10);
    month = parseInt(month, 10);
    year = parseInt(year, 10);

    // Check the year
    validyear.style.display="none";
    yearInput.style.borderColor="hsl(0, 0%, 86%)";
    if (year < 1923 || year > 2023) {
       
        validyear.style.display="block";
        par2.style.color="hsl(0, 100%, 67%)";
        yearInput.style.borderColor="red";
        
         return false;
    }

    // Check the month
    validmonth.style.display="none";

    if (month < 1 || month > 12) {
        validmonth.style.display="block";  
        monthInput.style.borderColor="red";
        par1.style.color="hsl(0, 100%, 67%)";
        return false;
    }

    // Check the day
    validday.style.display="none";
    dayInput.style.borderColor="hsl(0, 0%, 86%)";

    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) {
        validday.style.display="block";
        dayInput.style.borderColor="red";
        par0.style.color="hsl(0, 100%, 67%)";
        return false;
    }

    // If all checks pass, the date is valid
    return true;
}

function validateDate() {
    var dayInput = document.querySelector("#day").value;
    var monthInput = document.querySelector("#month").value;
    var yearInput = document.querySelector("#year").value;
   
    const isValid = isValidDate(dayInput, monthInput, yearInput);
    if (isValid) {
        var age = calculateAge();
        calcy.innerHTML=age.years;
        calcm.innerHTML=age.months;
        calcd.innerHTML=age.days;
    } 
}

function calculateAge() {
    var birthDay = document.getElementById("day").value;
    var birthMonth = document.getElementById("month").value;
    var birthYear = document.getElementById("year").value;

    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    var currentYear = currentDate.getFullYear();

    var years = currentYear - birthYear;
    var months = currentMonth - birthMonth;
    var days = currentDay - birthDay;

    if (birthDay=="" || birthMonth=="" || birthYear==""){
    return {
        years: 0,months:0,days:0
    };
    
    }// Check if the current date is before the birthdate this year
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        years--;
        months += 12;
    }

    // Check if the current day is before the birthdate this month
    if (currentDay < birthDay) {
        months--;
        var prevMonthDate = new Date(currentYear, currentMonth - 1, 0);
        days += prevMonthDate.getDate();
    }

    return {
        years: years,
        months: months,
        days: days
    };
}

btn.addEventListener("click",()=>{
    validateDate();
    emptyorno();
} );
