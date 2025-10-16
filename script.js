const timeEl = document.getElementById("current-time");

function updateTime() {
  timeEl.textContent = Date.now().toLocaleString();
}


updateTime();


setInterval(updateTime, 1000);
