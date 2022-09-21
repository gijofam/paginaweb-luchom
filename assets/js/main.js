// document.addEventListener('DOMContentLoaded', () => {
//     const elementoCarousel = document.querySelectorAll('.carousel');
//     M.Carousel.init(elementoCarousel,{
//         duration: 150,
//         dist: -80,
//         shift: 5,
//         padding: 5,
//         numVisible: 3,
//         indicators: true,
//         noWrap: false
//     });
// });

// const addClassActive = () =>{
//     clickNav.classList.toggle('active')
// }
const clickNav =  document.getElementById('navstyle')
clickNav.addEventListener('click', (e) => {
    clickNav.classList.add('active')
})