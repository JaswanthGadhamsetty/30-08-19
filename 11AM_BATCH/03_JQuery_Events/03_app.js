// Click Event
$('#btn-1').click(function() {
    $(this).removeClass('btn-danger').addClass('btn-success').text('Register');
});

// DblClick
$('#btn-2').dblclick(function() {
    $(this).removeClass('btn-success').addClass('btn-danger').text('Login');
});

// Toggle effect
$('#btn-3').click(function () {
    if($(this).text() === 'login'){
        $(this).removeClass('btn-danger').addClass('btn-success').text('register');
    }
    else{
        $(this).removeClass('btn-success').addClass('btn-danger').text('login');
    }
});

