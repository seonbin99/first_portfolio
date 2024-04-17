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


    let scrT, secboxT, sec2T, sec3T, sec4T, sec5T, sec6T, sec7T, sec8T, sec9T, contactT, winH, docH ;
    let bin = true;

    secboxT = $('#sectionbox').offset().top;
    if($(window).scrollTop() >= secboxT) {
        $('#sectionbox nav').css({position:'fixed',top:0});
    }

    
    docH = $(document).height();
    winH = $(window).height();
    scrT = $(window).scrollTop();
    if(scrT >= docH - winH){
        skillGo()
    }

    $(window).scroll(function(){
        scrT = $(window).scrollTop();
        docH = $(document).height();
        winH = $(window).height();
        secboxT = $('#sectionbox').offset().top;
        // sec2T = $('#section2').offset().top;
        // sec3T = $('#section3').offset().top;
        // sec4T = $('#section4').offset().top;
        // sec5T = $('#section5').offset().top;
        // sec6T = $('#section6').offset().top;
        // sec7T = $('#section7').offset().top;
        // sec8T = $('#section8').offset().top;
        // sec9T = $('#section9').offset().top;
        contactT = $('#contact_me').offset().top;


        if(scrT>=secboxT) {
            $('#sectionbox nav').css({position:'fixed',top:0});
        } else {
            $('#sectionbox nav').css({position:'', top:''});
        };

        $('#sectionbox nav ul li a').click(function(){
            let navHref = $(this).attr('href');
            let secT = $(navHref).offset().top;
            $('html').stop().animate({scrollTop:secT},1000)
        });

        if(scrT >= docH - winH && bin == true){
            skillGo()
            bin = false
        }



    });

    function skillGo(){
        let spanData
        $('#contact_me .skill ul li span.num').each(function(){
            spanData = $(this).attr('data-per');
            $(this).parent().find('.nowbar').css({width: spanData+'%'})
            
            let skillThis = $(this)
            spanData = skillThis.attr('data-per');
            
            $({ val : 0 }).animate({ val : spanData }, {
                duration: 2000,
                step: function() {
                    var num = Math.floor(this.val);
                    skillThis.parent().find('.nowbar').css({width: num+'%'})
                    skillThis.text(num+'%');
                },
                complete: function() {
                    var num = this.val;
                    skillThis.parent().find('.nowbar').css({width: num+'%'})
                    skillThis.text(num+'%');
                }
            });


            if (spanData>=90) {
                $(this).parent().find('.nowbar').css({background:'#20AFFF'})
            } else if (spanData>=80) {
                $(this).parent().find('.nowbar').css({background:'#FFF963'})
            } else if (spanData >=70) {
                
                $(this).parent().find('.nowbar').css({background:'#FFC163'})
            }



        })
    }


    $('figure.more').click(function(){
        let sectionBoxTop = $('#sectionbox').offset().top;
        $('html').animate({scrollTop:sectionBoxTop})
    })


    $('#section5 .btns a').click(function(){
        let index = $(this).index();
        $('#section5 .visualbox figure').css({marginLeft:-index*100+'%'});
        $(this).addClass('on').siblings().removeClass()
        $('#section5 .visualbox').animate({scrollTop:0})
        return false
    });






});