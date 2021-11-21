let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#coin");
let text = document.getElementById('text')

flipBtn.addEventListener("click", () => {
    
    const d = new Date();
    let seconds = d.getSeconds();
    text.style.opacity = 0;
    coin.style.animation = "none";
    if (seconds % 2 == 0) {
        setTimeout(function () {
            coin.style.animation = "spin-heads 3s forwards";
            setTimeout(function() {
                text.style.opacity = 1;
                text.innerHTML = "Just do it."
            }, 3000)
        }, 100);
    }
    else {
        setTimeout(function () {
            coin.style.animation = "spin-tails 3s forwards";
            setTimeout(function() {
                text.style.opacity = 1;
                text.innerHTML = "Think twice."
            }, 3000)
        }, 100);
    }
    setTimeout(updateStats, 3000);
    disableButton();
});
function updateStats() {
    // document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    // document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}
function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function () {
        flipBtn.disabled = false;
    }, 3000);
}
