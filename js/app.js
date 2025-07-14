const wrapper = document.querySelector(".wrapper");
const loadingScreen = document.querySelector(".loading-screen");
// function showContent() {
//     //* way1
//     loadingScreen.classList.add("hidden");

//     //* way2 
//     // loadingScreen.className += " hidden"; وقتایی که تعداد زیادی کلاس رو میخوایم همزمان اضافه کنیم، بهتره از این روش استفاده کنیم در غیراینصورت روش اول بهتره
// }
window.addEventListener('load', () => {
    const minLoadingTime = 3000;
    const startTime = performance.timing.navigationStart;

    const now = Date.now();

    const elapsed = now - startTime;

    const remainingTime = Math.max(0, minLoadingTime - elapsed);

    setTimeout(() => {
        loadingScreen.classList.add("hidden");
        wrapper.classList.remove("hidden");
    }, remainingTime);
});