$(document).ready(function(){
    setTimeout(function(){
        $('.start .bottom_bar .rightbox li.bell img').attr('src','images/bell_on.png')

        $('.start .hidden_content').fadeIn();
    },500);


    // 채팅방 날짜계산

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var nowMonth = '0'+month;
    var realMonth = nowMonth.toString().slice(-2);
    var day = date.getDate();
    var nowDay = '0'+day;
    var realDay = nowDay.toString().slice(-2);

    $('.hidden_content ul li.chat span.date').text(year+'년'+' '+ realMonth+'월'+' '+realDay+'일');


    // 채팅방 입력시 출력되게 하는법 

    $('#chat-form').submit(function(event) {
        event.preventDefault();

        let message = $('#message').val();
        $('.start .chatbox .letter').append('<li class="other">'+message+'</li>');

        $('#message').val('');

        $('.start .chatbox> ul> li.chat').scrollTop($('.start .chatbox> ul> li.chat')[0].scrollHeight);
    });

    // 포폴창 나오게하기

    $('.start .chatbox> ul> li.chat .cont .letter li:nth-child(2) a').click(function(){
        $('.start .fort_box').fadeIn();
        $('.start .chatbox> ul> li.chat .cont .letter li:nth-child(2) .arrow').fadeOut();
    });
    $('.fort_box .browser_size figure.close').click(function(){
        $('.start .fort_box').fadeOut();

        $('.start .chatbox> ul> li.chat .cont .letter').append('<li>열심히 작업했습니다.</li>');
        $('.start .chatbox> ul> li.chat').scrollTop($('.start .chatbox> ul> li.chat')[0].scrollHeight);
        $('.start .chatbox> ul> li.chat .cont .letter li:nth-child(2) .arrow').fadeIn();
    });


    // nav가 따라다니게 하기

    let   scrT, secboxT, sec2T, sec3T, sec4T, sec5T, sec6T, sec7T, sec8T, sec9T

    $(window).scroll(function(){
        scrT = $(window).scrollTop();
        secboxT = $('#sectionbox').offset().top;
        // sec2T = $('#section2').offset().top;
        // sec3T = $('#section3').offset().top;
        // sec4T = $('#section4').offset().top;
        // sec5T = $('#section5').offset().top;
        // sec6T = $('#section6').offset().top;
        // sec7T = $('#section7').offset().top;
        // sec8T = $('#section8').offset().top;
        // sec9T = $('#section9').offset().top;


        if(scrT>=secboxT) {
            $('#sectionbox nav').css({display:'block'});
            $('#sectionbox nav').css({top:scrT})
        } else {
            $('#sectionbox nav').css({display:''});
        }

        $('#sectionbox nav .work li a').click(function(){
            let navHref = $(this).attr('href');
            let secT = $(navHref).offset().top;
            $('html').stop().animate({scrollTop:secT},1000)
        })
    });

    $('#contact_me .skill ul li span.num').each(function(){
        let spanData = $(this).attr('data-per');
        console.log(spanData)
        $(this).parent().find('.nowbar').css({width: spanData+'%'})

        if (spanData>=90) {
            $(this).parent().find('.nowbar').css({background:'#20AFFF'})
        } else if (spanData>=80) {
            $(this).parent().find('.nowbar').css({background:'#FFF963'})
        } else if (spanData >=70) {
            
            $(this).parent().find('.nowbar').css({background:'#FFC163'})
        }
    })


});