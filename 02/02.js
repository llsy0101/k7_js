document.addEventListener('DOMContentLoaded',() => {
    console.log('DOM 완성');

    const btDiv = document.getElementById('btDiv');
    const bt1 = document.createElement('button');
    const bt1Txt = document.createTextNode('버튼11');

    bt1.setAttribute('id', 'bt11');
    bt1.appendChild(bt1Txt);
    bt1Div.append(bt1);




});