let restaurantBtn = document.querySelector('#restaurant')
const theButton = () => {
    alert(rOptions[random])
}
restaurantBtn.addEventListener('click', theButton)




const rOptions = ["McDonalds", "Subway", "Wendys"];

const random = Math.floor(Math.random() * rOptions.length);
console.log(random, rOptions[random]);