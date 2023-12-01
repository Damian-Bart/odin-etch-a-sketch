const divCont = document.getElementById('divsCont');

for (let i = 0; i <= 16; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.setAttribute('style', 'width: 60px; height: 60px; border: #F1F1F1 solid;')
    divCont.appendChild(squareDiv);
}