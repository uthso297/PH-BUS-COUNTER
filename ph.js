
const selectedSeats = document.getElementsByClassName('selected-seat');
const totalSeat = document.getElementById('total-seat').innerText;
let totalSeatNumber = parseFloat(totalSeat);
let countSeat = 0;

const totalTaka = document.getElementById('total-taka').innerText;
let totalTakaNumber = parseFloat(totalTaka);
for (let seat of selectedSeats) {
    seat.addEventListener('click', function () {
        totalSeatNumber -= 1;
        countSeat++;
        if (totalSeatNumber < 0 && countSeat > 40) {
            return;
        }
        document.getElementById('total-seat').innerText = totalSeatNumber;
        document.getElementById('booked-seat').innerText = countSeat;
        totalTakaNumber += 500;
        document.getElementById('total-taka').innerText = totalTakaNumber;

        const div = document.createElement('div');
        div.classList.add('flex', 'justify-between');
        div.innerHTML =
            `
        <p>${seat.innerText}</p>
        <p>Economy</p>
        <p>500</p>
        `
        document.getElementById('added-ele').appendChild(div);
    });

}


