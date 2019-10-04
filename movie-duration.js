// Translates a IMDB runtime string to a Date().
function parseMovieRuntime(runtimeString) {
    let time = 0;
    let current = '';
    for (let i=0; i<runtimeString.length; i++) {
        let char = runtimeString[i];
        if (!isNaN(Number.parseInt(char))) {
            current += char;
        }else{
            const amount = Number.parseInt(current);
            switch (char) {
                case 'm':
                    time += amount * 60;
                    break;
                case 'h':
                    time += amount * 60 * 60;
                    break;
                default:
                    break;
            }
            current = '';
        }
    }

    return addSeconds(new Date(), time);
}

function addSeconds(date, seconds) {
    date.setSeconds(date.getSeconds() + seconds);
    return date;
}

module.exports = parseMovieRuntime;
