const tabBtns = document.querySelectorAll('.tab-btn');
const tabs = document.querySelectorAll('.tab');

tabBtns.forEach(tabBtn => {
    tabBtn.addEventListener('click', (e) => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        
        tabBtns.forEach(tabBtn => {
            tabBtn.classList.remove('active');
        })

        let target = document.querySelector(e.target.dataset['target']);

        target.classList.add('active');
        e.target.classList.add('active');
    })
})
