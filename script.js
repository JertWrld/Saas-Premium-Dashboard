document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Toggle Execution
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
    }
    
    // 2. Clear Accordion Logic Fix
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.nextElementSibling;
            const icon = btn.querySelector('.icon');
            const isOpen = answer.style.display === 'block';
            
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
            document.querySelectorAll('.icon').forEach(i => i.textContent = '+');
            
            if (!isOpen) {
                answer.style.display = 'block';
                icon.textContent = '−';
            }
        });
    });
    
    // 3. Robust Modal Tracking Configuration
    const modal = document.getElementById('custom-modal');
    const modalTitle = document.getElementById('modal-title');
    const closeBtn = document.getElementById('close-modal-btn');
    const openBtns = document.querySelectorAll('.open-modal-btn');
    const portalForm = document.getElementById('portal-form');
    const successMsg = document.getElementById('form-success-msg');
    
    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modalTitle.textContent = `Action Group: ${btn.textContent.trim()}`;
            successMsg.classList.add('hidden');
            if (portalForm) portalForm.reset();
            modal.classList.remove('hidden');
        });
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    }
    
    // CRITICAL BUG FIX: Only hide if the target clicked is the outer background mask container itself
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
    
    if (portalForm) {
        portalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            successMsg.classList.remove('hidden');
            setTimeout(() => modal.classList.add('hidden'), 1200);
        });
    }
});