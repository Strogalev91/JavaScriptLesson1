//task#1
let townInfo = {
	Name: 'Krasnouralsk',
	country: 'Russia',
	population: 22972,
	footballStadium: true
}
console.log(townInfo);

//task#2
let heigh = 40;
	width = 70;
	rectangleArea = heigh * width;
console.log(rectangleArea);

//task#3
let time = 2;
	speedOfFirst = 95;
	speedOfSecond = 114;
	distanceOfFirst = speedOfFirst * time;
	distanceOfSecond = speedOfSecond * time;
	distance = distanceOfFirst + distanceOfSecond;
console.log(distance);

//task#4
const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber < 20) {
	console.log('randomNumber меньше 20');
} else if (randomNumber > 50) {
	console.log('randomNumber больше 50');
} else {
	console.log('randomNumber больше 20, и меньше 50');
}

//task#5
const randomNumber1 = Math.floor(Math.random() * 100);
console.log(randomNumber1);
switch(true){
	case(randomNumber1 < 20) :
		console.log('randomNumber меньше 20');
		break;
	case(randomNumber1 > 50) :
		console.log('randomNumber больше 50');
		break;
	default :
		console.log('randomNumber больше 20, и меньше 50');
}