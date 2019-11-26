let docs = document.getElementsByClassName('doc')
for(let i=0;i<docs.length;i++){
    let input = docs[i].getElementsByTagName('input')[0];
    input.addEventListener("change", handleFiles, false,);
}


function handleFiles() {
    let answer = this.parentNode.parentNode.getElementsByClassName('answer')[0].getElementsByTagName('p')[0];
    let aboutFile = this.parentNode.getElementsByTagName('p')[0];
    let title = this.parentNode.getElementsByTagName('h2')[0];
    let img_cont = this.parentNode.parentNode.getElementsByClassName('img-cont')[0];
    let size = Math.round(this.files[0].size/1024);


    aboutFile.innerHTML = `${this.files[0].name} (${size}Кб)`;
    answer.innerHTML = 'Идет проверка';
    title.innerHTML = 'Файл загружен';

    answer.classList.remove('red');
    answer.classList.remove('green');

    let promise = new Promise((resolve, reject) => {
        img_cont.style.setProperty('background-image','url(./img/checking.png)')
        setTimeout(()=>{
            img_cont.style.removeProperty('background-image');
            let result = Math.round(Math.random());
            resolve(result);
        },2000);
    });
    promise.then(result =>{
        if(result){
            title.innerHTML = 'Страница с пропиской';
            answer.innerHTML = 'Проверено';
            answer.classList.add('green');
            img_cont.style.setProperty('background-image','url(./img/accepted.png)')
        }else{
            title.innerHTML = 'Pагрузить скан страницы с фотографией';
            answer.innerHTML = 'Отклонено';
            answer.classList.add('red');
            aboutFile.innerHTML = 'Размер файла не более 5МБ';
        }
    })
}