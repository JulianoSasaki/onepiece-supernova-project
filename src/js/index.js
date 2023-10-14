const personagens = document.querySelectorAll('.character')
const body = document.querySelector('body')
const degrade = document.getElementById('fade')
const information = document.querySelectorAll('.information')
const homePageBtn = document.querySelectorAll('.homePageButton')

document.querySelectorAll('.pageButton').forEach(function (crewBtn) {
    crewBtn.addEventListener('click', function () {
        const buttonId = crewBtn.id

        if (buttonId === 'luffy') {
            personagens[0].classList.add('selected')
            personagens[2].classList.remove('selected')
            body.style.marginTop = 0;
            degrade.style.display = 'block';
            information[0].style.display = 'flex';
        } else if (buttonId === 'kid') {
            personagens[1].classList.add('selected')
            personagens[2].classList.remove('selected')
            body.style.marginTop = 0;
            degrade.style.display = 'block';
            information[1].style.display = 'flex';
        } else if (buttonId === 'law') {
            personagens[3].classList.add('selected')
            personagens[2].classList.remove('selected')
            body.style.marginTop = 0;
            degrade.style.display = 'block';
            information[2].style.display = 'flex';
        } else if (buttonId === 'xdrake') {
            personagens[4].classList.add('selected')
            personagens[2].classList.remove('selected')
            body.style.marginTop = 0;
            degrade.style.display = 'block';
            information[3].style.display = 'flex';
        } else if (buttonId === 'bonney') {
            personagens[5].classList.add('selected')
            personagens[2].classList.remove('selected')
            body.style.marginTop = 0;
            degrade.style.display = 'block';
            information[4].style.display = 'flex';
        } else if (buttonId === 'apoo') {
            personagens[6].classList.add('selected')
            personagens[2].classList.remove('selected')
            body.style.marginTop = 0;
            degrade.style.display = 'block';
            information[5].style.display = 'flex';
        } else if (buttonId === 'zoro') {
            personagens[7].classList.add('selected')
            personagens[2].classList.remove('selected')
            body.style.marginTop = 0;
            degrade.style.display = 'block';
            information[6].style.display = 'flex';
        } else if (buttonId === 'urouge') {
            personagens[8].classList.add('selected')
            personagens[2].classList.remove('selected')
            body.style.marginTop = 0;
            degrade.style.display = 'block';
            information[7].style.display = 'flex';
        } else if (buttonId === 'hawkins') {
            personagens[9].classList.add('selected')
            personagens[2].classList.remove('selected')
            body.style.marginTop = 0;
            degrade.style.display = 'block';
            information[8].style.display = 'flex';
        } else if (buttonId === 'killer') {
            personagens[10].classList.add('selected')
            personagens[2].classList.remove('selected')
            body.style.marginTop = 0;
            degrade.style.display = 'block';
            information[9].style.display = 'flex';
        } else if (buttonId === 'bege') {
            personagens[11].classList.add('selected')
            personagens[2].classList.remove('selected')
            body.style.marginTop = 0;
            degrade.style.display = 'block';
            information[10].style.display = 'flex';
        }
    })
})

homePageBtn.forEach(function (homePageButton) {
    homePageButton.addEventListener('click', function () {
        document.querySelector('.character.selected').classList.remove('selected')
        personagens[2].classList.add('selected')
        body.style.marginTop = '-26px';
        degrade.style.display = 'none';
        information.style.display = 'none';
    })
})