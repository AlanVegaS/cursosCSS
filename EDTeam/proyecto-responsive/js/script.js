const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)
    if(toggle && nav) {
        document.getElementById('main-menu-toggle').addEventListener('click', () => {
            document.getElementById('main-nav').classList.toggle('show')
        })
    }
}

showMenu('main-menu-toggle', 'main-nav')