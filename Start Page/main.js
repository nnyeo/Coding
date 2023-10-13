var myDate = new Date();
    var int_day = myDate.getDay();
    var int_month = myDate.getMonth();
    var string_year = myDate.getFullYear();

    var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var string_month = months[int_month]
    var string_day = weekday[int_day]

    let interval;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    let formattedDate = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    var suffix;
    if (int_day === 1 || int_day === 21 || int_day === 31) {
        suffix = 'st';
    } else if (int_day === 2 || int_day === 22) {
        suffix = 'nd';
    } else if (int_day === 3 || int_day === 23) {
        suffix = 'rd';
    } else {
        suffix = 'th';
    }   

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }

    var myTime = hours + ':' + minutes + ':' + seconds;
    var myDate = string_day + ', ' + string_month + ' ' + int_day + suffix + ', ' + string_year

     interval = setInterval(() => {
        var seconds = myDate.getSeconds();
        var minutes = myDate.getMinutes();
        var hours = myDate.getHours();
    }