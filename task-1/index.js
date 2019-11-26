let btn = document.getElementById('subm-1');
let advantages = document.querySelectorAll('section');
let text = document.querySelector('.text');
let gridContainer = document.querySelector('.grid-container');

function windowWidth950(innerText, gridRows, gridTemplateRows) {
	let windowWidth = window.innerWidth;
	if (windowWidth>950) {
		text.classList.toggle("text-active");
		if(text.innerHTML == ''){
			text.innerHTML = innerText;
			gridContainer.style.cssText=`grid-template-rows: `+ gridTemplateRows +`;`;
			text.style.gridRow = gridRows;
		} else{
			text.innerHTML = '';
			gridContainer.style.cssText=`grid-template-rows: 179px 0px 179px 0px;`;
		}
	}
}

function windowWidth530(innerText, gridRows, gridTemplateRows) {
	let windowWidth = window.innerWidth;
	if (windowWidth>530 && windowWidth<=950) {
		text.classList.toggle("text-active");
		if(text.innerHTML == ''){
			text.innerHTML = innerText;
			gridContainer.style.cssText=`grid-template-rows: `+ gridTemplateRows +`;`;
			text.style.gridRow = gridRows;
		} else{
			text.innerHTML = '';
			gridContainer.style.cssText=`grid-template-rows: 179px 0px 179px 0px;`;
		}
	}
}

function windowWidth0(innerText, gridRows, gridTemplateRows) {
	let windowWidth = window.innerWidth;
	if (windowWidth<=530) {
		text.classList.toggle("text-active");
		if(text.innerHTML == ''){
			text.innerHTML = innerText;
			gridContainer.style.cssText=`grid-template-rows: `+ gridTemplateRows +`;`;
			text.style.gridRow = gridRows;
		} else{
			text.innerHTML = '';
			gridContainer.style.cssText=`grid-template-rows: 179px 0px 179px 0px;`;
		}
	}
}

for (var i = advantages.length - 1; i >= 0; i--) {
	advantages[i].onclick = function(){
		switch(this.id){
			case 'website':
				let innerText1 = 'Для любого вашего домена, зарегистрированного на «Джино», вы можете в несколько кликов создать простую страницу-визитку. Это удобно, если ваш основной сайт еще не готов, или если домен вам нужен только для почты. Вы можете разместить здесь краткую информацию о себе или вашем бизнесе, ссылки на аккаунты в соцсетях и любые другие сайты. Создание и поддержка базового варианта сайта-визитки абсолютно бесплатны.';
				windowWidth950(innerText1, '2/3', '179px auto 179px 0px');
				windowWidth530(innerText1, '2/3', '179px auto 179px 0px 179px 0px');
				windowWidth0(innerText1, '2/3', '179px auto 179px 0px 179px 0px 179px 0px');
				break;

			case 'dns-support':
				let innerText2 = 'Зарегистрировав домен через «Джино», вы бесплатно получаете постоянную возможность изменения NS-записей и направления домена туда, куда вам хочется. У вас несколько доменов? Мы предоставляем бесплатную поддержку DNS для всех доменов, зарегистрированных и поддерживаемых «Джино».';
				windowWidth950(innerText2, '2/3', '179px 1fr 179px 0px');
				windowWidth530(innerText2, '2/3', '179px 1fr 179px 0px 179px 0px');
				windowWidth0(innerText2, '2/3', '179px 1fr 179px 0px 179px 0px 179px 0px');
				break;

			case 'certificate':
				let innerText3 = 'Подтвердите владение доменным именем с помощью официального сертификата «Джино». Вам достаточно распечатать документ в формате PDF, который будет доступен в панели управления сразу же после делегирования домена.';
				windowWidth950(innerText3, '2/3', '179px 1fr 179px 0px');
				windowWidth530(innerText3, '2/3', '179px 1fr 179px 0px 179px 0px');
				windowWidth0(innerText3, '4/5', '179px 0px 179px 1fr 179px 0px 179px 0px');
				break;

			case 'auto-completion':
				let innerText4 = 'С помощью функции «Автопродление» больше не нужно беспокоиться о том, что ваш домен внезапно перестанет работать. «Джино» заблаговременно продлит регистрацию на следующий период и вышлет вам уведомление об этом.';
				windowWidth950(innerText4, '2/3', '179px 1fr 179px 0px');
				windowWidth530(innerText4, '4/5', '179px 0px 179px 1fr 179px 0px');
				windowWidth0(innerText4, '4/5', '179px 0px 179px 1fr 179px 0px 179px 0px');
				break;

			case 'cloud':
				let innerText5 = 'Специально для своих клиентов «Джино» предлагает абсолютно бесплатный сервис — «Джино.Облако». Это надежное место для хранения файлов — здесь точно поместится всё. Вы получите постоянный доступ к своей музыке, фотографиям и документам и сможете без труда делиться данными с кем угодно.';
				windowWidth950(innerText5, '4/5', '179px 0px 179px 1fr');
				windowWidth530(innerText5, '4/5', '179px 0px 179px 1fr 179px 0px');
				windowWidth0(innerText5, '6/7', '179px 0px 179px 0px 179px 1fr 179px 0px');
				break;

			case 'ssl':
				let innerText6 = 'Будучи клиентом «Джино», вы можете бесплатно получить SSL-сертификат от удостоверяющего центра Let’s Encrypt. Данный сертификат позволит вашим сайтам работать по безопасному протоколу HTTPS и избежать предупреждений браузера о том, что на сайте используется незашифрованное соединение. Вы можете легко обзавестись сертификатом: в разделе «Домены» вашего аккаунта выберите нужный домен и на странице его настроек перейдите во вкладку «SSL». Сертификат выдаётся по нажатию одной кнопки и продлевается автоматически.';
				windowWidth950(innerText6, '4/5', '179px 0px 179px 1fr');
				windowWidth530(innerText6, '4/5', '179px 0px 179px 1fr 179px 0px');
				windowWidth0(innerText6, '6/7', '179px 0px 179px 0px 179px 1fr 179px 0px');
				break;

			case 'dnssec':
				let innerText7 = 'С помощью технологии цифрового подписывания ответа DNS-сервера вы можете застраховаться от возможной его подмены и быть уверенными в том, что посетители вашего сайта не попали на замаскированный сайт злоумышленников. Для подключения DNSSEC необходимо перейти в соответствующую вкладку в настройках вашего домена и нажать кнопку «Включить».';
				windowWidth950(innerText7, '4/5', '179px 0px 179px 1fr');
				windowWidth530(innerText7, '6/7', '179px 0px 179px 0px 179px 1fr');
				windowWidth0(innerText7, '8/9', '179px 0px 179px 0px 179px 0px 179px 1fr');
				break;

			case 'overpressure':
				let innerText8 = 'Зарегистрировав домен на «Джино», вы сможете в любой момент просто и бесплатно перенаправить его на любую страницу любого сайта. У вас есть своя группа в социальной сети? Дайте ей персональный домен и она сможет стать полноценным сайтом, а не только страницей соцсети! Персонифицирование при помощи перенаправления доменного имени от «Джино» — это дополнительный инструмент в продвижении и идентификации вашей деятельности.';
				windowWidth950(innerText8, '4/5', '179px 0px 179px 1fr');
				windowWidth530(innerText8, '6/7', '179px 0px 179px 0px 179px 1fr');
				windowWidth0(innerText8, '8/9', '179px 0px 179px 0px 179px 0px 179px 1fr');
				break;
		}
	}
}

btn.onclick = function(){
    $.ajax({
        type:"GET",
        url: "",
        success: function(){
            let ansver = document.getElementById('ansver');
            ansver.style.removeProperty('display');
            ansver.style.setProperty('display', 'block');
        }
    });
};
let btn2 = document.getElementById('subm-2');
btn2.onclick = btn.onclick;

