function secondsToTimeWithUnits(seconds) {
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;

    const formattedTime = `${hours.toString().padStart(2, '0')} hours, ${minutes.toString().padStart(2, '0')} minutes, ${secs.toString().padStart(2, '0')} seconds`;
    return formattedTime;
}

const totalSeconds = 87000;
const formattedTimeWithUnits = secondsToTimeWithUnits(totalSeconds);
console.log(formattedTimeWithUnits); 
