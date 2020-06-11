
function nextDay(input) {
    let ip = input.map(Number)

    let nextDay = new Date(ip[0], ip[1], ip[2]+1);
    console.log(nextDay);
 }

nextDay(['2016', '9', '30']);