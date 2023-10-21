const navBtn = document.querySelector('.nav-btn')
const navigation = document.querySelector('.navigation-mobile')

const showNav = () => {
    if(navigation.classList.contains('hide')){
        navigation.classList.remove('hide')
    } else{
        navigation.classList.toggle('hide')
    }
}

navBtn.addEventListener('click', showNav)