
document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    const modeToggle = document.querySelector('.mode-toggle'); 
    const bodyBlog = document.getElementById('body-blog'); 
    const modeIcon = document.getElementById('mode-icon'); 

    
    if (localStorage.getItem('theme') === 'dark') {
        bodyBlog.classList.add('dark-mode');
        
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }

    
    menuToggle.addEventListener('click', () => {
        
        navMenu.classList.toggle('active');
        
        const icon = menuToggle.querySelector('i');
        
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); 
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars'); 
        }
    });

    
    modeToggle.addEventListener('click', () => {
        
        bodyBlog.classList.toggle('dark-mode');
        
        
        if (bodyBlog.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon'); 
        } else {
            localStorage.setItem('theme', 'light');
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun'); 
        }
    });
});