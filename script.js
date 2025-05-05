const endDate = "05 May 2026 11:40 AM";

const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate)
    const cur = new Date()
    const diff = (end - cur) / 1000;

    if(diff < 0 ) return;
    // Calculate Days
    inputs[0].value = Math.floor(diff / 3600 /24);
    inputs[1].value = Math.floor((diff / 3600) %24);
    inputs[2].value = Math.floor((diff / 60) %60);
    inputs[3].value = Math.floor(diff % 60) ;
}

// Initial call
clock();

// SetInterval 

setInterval(() => {
    clock()
}, 1000);