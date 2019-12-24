

// обрабатываем кнопку голосования и отправлем запрос на сервер
 $("#button-vote-c").click (function() {
 // 1. Создаём новый XMLHttpRequest-объект
 let xhr = new XMLHttpRequest();
 // 2. Настраиваем его: GET-запрос по URL /article/.../load
 xhr.open('POST', 'https://sf-pyw.mosyag.in/sse/vote/cats');
 xhr.send();
 $("#button-stat-c").show();

});

// обрабатываем кнопку голосования и отправлем запрос на сервер
 $("#button-vote-d").click (function() {
 // 1. Создаём новый XMLHttpRequest-объект
 let xhr = new XMLHttpRequest();
 // 2. Настраиваем его: GET-запрос по URL /article/.../load
 xhr.open('POST', 'https://sf-pyw.mosyag.in/sse/vote/dogs');
 xhr.send();
 $("#button-stat-d").show();

});

// обрабатываем кнопку голосования и отправлем запрос на сервер
 $("#button-vote-p").click (function() {
 // 1. Создаём новый XMLHttpRequest-объект
 let xhr = new XMLHttpRequest();
 // 2. Настраиваем его: GET-запрос по URL /article/.../load
 xhr.open('POST', 'https://sf-pyw.mosyag.in/sse/vote/parrots');
 xhr.send();
 $("#button-stat-p").show();

});




function init() {
	$("#button-stat-c").hide();
	$("#button-stat-d").hide();
	$("#button-stat-p").hide();
}

$(document).ready(init);
