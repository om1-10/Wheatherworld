const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle');
xhr.setRequestHeader('x-rapidapi-key', '55a5496286msh8495a8c969a2e13p170d4ajsnfe265aca7f9a');
xhr.setRequestHeader('x-rapidapi-host', 'weather-by-api-ninjas.p.rapidapi.com');

xhr.send(data);