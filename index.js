document.addEventListener("DOMContentLoaded", function () {
    const endDate = new Date(2023, 11, 31, 23, 59, 59).getTime();

    const timer = document.getElementById("timer");
    const countdown = document.getElementById("countdown");
    const textFinal = document.querySelector(".background-text");
    const canvasFireworks = document.querySelector("canvas");
    textFinal.style.display = "none";
    canvasFireworks.style.display = "none";

    function formatNumberWithLeadingZero(number) {
        return number < 10 ? `0${number}` : `${number}`;
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const timeDifference = endDate - now;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            const formattedHours = formatNumberWithLeadingZero(hours);
            const formattedMinutes = formatNumberWithLeadingZero(minutes);
            const formattedSeconds = formatNumberWithLeadingZero(seconds);

            timer.innerHTML = `${days}d ${formattedHours}h ${formattedMinutes}m ${formattedSeconds}s`;
        } else {
            countdown.style.display = "none";
            textFinal.style.display = "";
            canvasFireworks.style.display = "";
        }
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();
});
