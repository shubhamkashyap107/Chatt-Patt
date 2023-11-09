const socket = io();

$('#chatbox').hide()


$('#send-btn').on('click', () => {
    let msgText = $('#input').val();
    // console.log(msgText);
    msgText = msgText.trim()
    if(!msgText){
        return;
    } else
    {
        $('#input').val("");
    
        socket.emit('send-msg', {'msg' : msgText})
    }
    
})


socket.on('received-msg', (data) => {
    // console.log(data)
            $('#chat').append(`<li class="border mt-2 p-2 rounded-pill" style="background-color: #FACBEA;"><span class="fw-bold">${data.username} : </span>${data.msg}</li>`)
})



$('#loginBtn').on('click', () => {
    // console.log('ok')
    let username = $('#username').val();
    username = username.trim();
    if(!username){
        return;
    }
    socket.emit('login', {
        username: username
    })

    $('#login').hide()
    $('#chatbox').show()


    $('#username').val("");

})




















