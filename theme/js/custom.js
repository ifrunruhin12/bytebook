// Custom ByteBook JavaScript

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    
    // Add copy button to code blocks
    document.querySelectorAll('pre code').forEach(function(codeBlock) {
        const pre = codeBlock.parentElement;
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.textContent = '📋 Copy';
        button.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            padding: 6px 12px;
            background: linear-gradient(135deg, #6366f1, #ec4899);
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.85rem;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 10;
        `;
        
        pre.style.position = 'relative';
        pre.appendChild(button);
        
        pre.addEventListener('mouseenter', function() {
            button.style.opacity = '1';
        });
        
        pre.addEventListener('mouseleave', function() {
            button.style.opacity = '0';
        });
        
        button.addEventListener('click', function() {
            const code = codeBlock.textContent;
            navigator.clipboard.writeText(code).then(function() {
                button.textContent = '✅ Copied!';
                setTimeout(function() {
                    button.textContent = '📋 Copy';
                }, 2000);
            });
        });
    });
    
    // Add reading progress bar
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #6366f1, #ec4899);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = progress + '%';
    });
    
    // Add "back to top" button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #6366f1, #ec4899);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
    `;
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
        } else {
            backToTop.style.opacity = '0';
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTop.addEventListener('mouseenter', function() {
        backToTop.style.transform = 'scale(1.1)';
    });
    
    backToTop.addEventListener('mouseleave', function() {
        backToTop.style.transform = 'scale(1)';
    });
    
    // Add keyboard shortcuts info
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('searchbar');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
    
    // Enhance external links
    document.querySelectorAll('a[href^="http"]').forEach(function(link) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        link.innerHTML += ' 🔗';
    });
    
    // Add emoji to list items for better visual hierarchy
    document.querySelectorAll('.content ul > li').forEach(function(li) {
        if (!li.querySelector('input[type="checkbox"]')) {
            const text = li.innerHTML;
            if (!text.trim().match(/^[🔸🔹▪️•]/)) {
                li.innerHTML = '🔹 ' + text;
            }
        }
    });
    
    // Console easter egg
    console.log('%c🦀 Welcome to ByteBook! 🐹', 'font-size: 20px; font-weight: bold; background: linear-gradient(135deg, #6366f1, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
    console.log('%cHappy learning! 📚✨', 'font-size: 14px; color: #6366f1;');
});
