const buttons = document.getElementById('button-seat').children;


const totalSeat = document.getElementById('total-seat').innerText
let totalSeatNumber = parseFloat(totalSeat);


const bookedSeat = document.getElementById('booked-seat').innerText;
let bookedSeatNumber = parseFloat(bookedSeat);

const ticketPrice = document.getElementById('ticket-price').innerText;
const ticketPriceNumber = parseFloat(ticketPrice);

const totalTaka = document.getElementById('total-taka').innerText;
let totalTakaNumber = parseFloat(totalTaka);


// discount

const grandTotal = document.getElementById('grand-total').innerText;
let grandTotalNumber = parseFloat(grandTotal);

const new15Discount = document.getElementById('new-15').innerText;
let new15DiscountNumber = parseFloat(new15Discount);

const couple20Discount = document.getElementById('couple-20').innerText;
let couple20DiscountNumber = parseFloat(couple20Discount);

const new15 = document.getElementById('new-15-text').innerText;

const couple20 = document.getElementById('couple-20-text').innerText;





for (let button of buttons) {
    button.addEventListener('click', function () {
        if (button.classList.contains('bg-gray-400')) {
            button.classList.remove('bg-gray-400');
            button.classList.add('bg-sky-700');
            totalSeatNumber = totalSeatNumber - 1;
            document.getElementById('total-seat').innerText = totalSeatNumber;
            bookedSeatNumber += 1;
            document.getElementById('booked-seat').innerText = bookedSeatNumber;



            const div = document.createElement('div');
            div.classList.add('flex', 'justify-between');
            div.innerHTML =
                `
                        <p>${button.innerText}</p>
                        <p>Economy</p>
                        <p>${ticketPriceNumber}</p>
                        `
            document.getElementById('added-ele').appendChild(div);

            totalTakaNumber += ticketPriceNumber;
            document.getElementById('total-taka').innerText = totalTakaNumber;


            // discount


            document.getElementById('apply').addEventListener('click', function () {
                console.log('applied');

                const discount = document.getElementById('discount-input').value;
                console.log(discount);

                if (discount === new15) {
                    grandTotalNumber = totalTakaNumber - (totalTakaNumber * (new15DiscountNumber / 100));
                    document.getElementById('grand-total').innerText = grandTotalNumber;
                }
                else if (discount === couple20) {
                    grandTotalNumber = totalTakaNumber - (totalTakaNumber * (couple20DiscountNumber / 100));
                    document.getElementById('grand-total').innerText = grandTotalNumber;
                }
                else{
                    alert('There is no coupon code like this!');
                }

            })


        }


        else {
            button.classList.remove('bg-sky-700');
            button.classList.add('bg-gray-400');
            totalSeatNumber = totalSeatNumber + 1;
            document.getElementById('total-seat').innerText = totalSeatNumber;
            bookedSeatNumber -= 1;
            document.getElementById('booked-seat').innerText = bookedSeatNumber;


            let divs = document.getElementById('added-ele').children;

            for (let div of divs) {
                if (div.firstElementChild.innerText === button.innerText) {
                    div.remove();
                    break;
                }
            }

            totalTakaNumber -= ticketPriceNumber;
            document.getElementById('total-taka').innerText = totalTakaNumber;

        }
    })
}
console.log(bookedSeatNumber);

