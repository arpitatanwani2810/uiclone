const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");

let playing = false;
let value = 0;
let interval;

playBtn.addEventListener("click", () => {

    if (!playing) {

        playing = true;
        playBtn.innerHTML =
            '<i class="fas fa-pause"></i>';

        interval = setInterval(() => {

            value++;

            progress.value = value;

            if (value >= 100) {
                value = 0;
            }

        }, 200);

    } else {

        playing = false;

        playBtn.innerHTML =
            '<i class="fas fa-play"></i>';

        clearInterval(interval);
    }
});
