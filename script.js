function handleSidebarOpen(){
    const sidebar = document.getElementById('sidebar');
    const cover = document.getElementById('cover');
    sidebar.style.display = 'block';
    cover.style.display = 'block';
}

function handleSidebarClose(){
    const sidebar = document.getElementById('sidebar');
    const cover = document.getElementById('cover');
    sidebar.style.display = 'none';
    cover.style.display = 'none';
}

function toggleFeaturesMenu(){
    const menu = document.getElementById('mobile-dropdown-features');
    const icon = document.getElementById('features-dropdown');
    console.log(icon.src)
    if(menu.style.display === ''){
        menu.style.display = 'block';
        icon.src = './images/icon-arrow-up.svg';
    } else {
        menu.style.display = '';
        icon.src = './images/icon-arrow-down.svg';
    }
}

function toggleCompanyMenu(){
    const menu = document.getElementById('mobile-dropdown-company');
    const icon = document.getElementById('company-dropdown');
    if(menu.style.display === ''){
        menu.style.display = 'block';
        icon.src = './images/icon-arrow-up.svg';
    } else {
        menu.style.display = '';
        icon.src = './images/icon-arrow-down.svg';
    }
}