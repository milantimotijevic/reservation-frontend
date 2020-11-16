const reservationsList = document.getElementById('reservations');
const reload = document.getElementById('reload');

reload.addEventListener('click', () => {
	while (reservationsList.firstChild) {
		reservationsList.removeChild(reservationsList.firstChild);
	}

	axios.get('http://localhost:3000/reservation').then(function(resp) {
		const reservations = resp.data;
		reservations.forEach(reservation => {
			const li = document.createElement('li');
			li.appendChild(document.createTextNode(`${reservation.guestName} / ${reservation.hotelName}`));
			reservationsList.appendChild(li);
		});
	});
});

const guest = document.getElementById('guest');
const hotel = document.getElementById('hotel');
const createReservation = document.getElementById('create-reservation');

createReservation.addEventListener('click', () => {
	const reservation = {
		guestName: guest.value,
		hotelName: hotel.value,
		startDate: new Date(),
		endDate: new Date()
	};

	axios.post('http://localhost:3000/reservation', reservation);
});
