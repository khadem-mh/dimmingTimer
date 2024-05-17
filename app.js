
let timeToStart = document.querySelector('#timeToStart')
let timeControl = document.querySelector('#timeControl')
let second = 1000
let minute = second * 60
let hour = minute * 60
let day = hour * 24

// اون تاریخی که قراره بهش برسیم
let countDown = new Date('Sep 20, 2015 00:00:00').getTime();

const myRacing = () => {

    let nowDate = new Date().getTime(),
        distance = countDown - nowDate;
    //
    document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    // وقتی تاریخ و زمان گذشته بود
    if (distance < 0) {
        clearInterval(MyTimer);
        timeToStart.innerHTML = 'The camp began ☻'
        timeControl.innerHTML = ''
    }

}

MyTimer = setInterval(myRacing, 1000);
