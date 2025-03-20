document.addEventListener('DOMContentLoaded', function() {
    const ageVerification = document.getElementById('age-verification');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');
    
    // ローカルストレージから確認済みかチェック
    if (localStorage.getItem('age-verified') === 'true') {
        ageVerification.style.display = 'none';
    }
    
    confirmYes.addEventListener('click', function() {
        localStorage.setItem('age-verified', 'true');
        ageVerification.style.display = 'none';
    });
    
    confirmNo.addEventListener('click', function() {
        window.location.href = 'https://www.google.com';
    });
});