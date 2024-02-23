const text = document.querySelector(".typed");
    
const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Connection To Department";
            }, 0);
            setTimeout(() => {
                text.textContent = "Ask College related doubts";
            }, 4100);
        }

textLoad();
setInterval(textLoad, 12000);