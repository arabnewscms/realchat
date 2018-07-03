var socket = io.connect('http://localhost:5000');

var username  = document.getElementById('username');
var message   = document.getElementById('message');
var send 	  = document.getElementById('send');
var chat 	  = document.getElementById('chat');

send.addEventListener('click',function(){
	socket.emit('message',{
		username:username.value,
		message:message.value,
	});
});

 
socket.on('new_msg',function(data){
 chat.innerHTML += '<div class="container"><strong>'+data.username+':</strong>'+data.message+'</div>';
});