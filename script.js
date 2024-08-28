// Плавная прокрутка при клике на ссылки в меню
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Функционал для сворачиваемых блоков
document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        
        // Ищем родительский элемент project-item и находим collapsible-content внутри него
        const content = this.closest('.project-item').querySelector('.collapsible-content');
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    var nav = document.querySelector('.mobile-nav');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});










