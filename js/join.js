$(document).ready(function() {

        /* 회원가입 완료 알림창 */ 
        function submitForm() {
            var joinCheck = $('.join_check input');
            var isTrue = true;
            for(var i=0;i<joinCheck.length;i++){
                if (joinCheck.prop('required')) {
                    if (joinCheck.eq(i).val().trim().length==0){
                        isTrue = false;
                        break
                    }   
                }
            }
            if(isTrue){
                alert('회원가입이 완료되었습니다.');
                location.href = "./";
            }
        }
        
        /* 전체 체크시 애니메이션 */ 
        function submitAgree() {}

        
        function getToken() {
            var telCom = $('input[type="tel"]').val().trim();
            console.log(telCom);
            if (telCom.length>0){
                alert('인증번호가 발송 되었습니다.');
            }else{
                alert('휴대폰 번호를 입력해주세요.');
            }
        }

        /* 동의 누를 시 슬라이드 다운 */
        // $(document).ready(function(){
        // $('.container').hide();
        // $('.select_all').on('click',function(){
        //     let chbox = $('input[type="checkbox"]');
        //     for (let i = 0; i < chbox.length; i++) {
        //         var isChecked = $(this).eq(0).prop('checked');
        //         chbox.eq(i).prop('checked', isChecked);
        //     }

        //     $('.container').stop().slideToggle();
        //     $('html, body').animate({ scrollTop : $('.agree_btn').offset().top }, 1500);
        // }); 조장님 요청 전 제이쿼리 세팅

        /* 아래로 필수만 선택시, 전부 선택시에만 동의버튼 작동하도록 추가 CSS 커서 포인터 추가 */ 
        $('.select_all').on('click',function(){
            let chbox = $('input[type="checkbox"]');
            for (let i = 0; i < chbox.length; i++) {
                var isChecked = $(this).eq(0).prop('checked');
                chbox.eq(i).prop('checked', isChecked);
            }});

        $(document).ready(function(){
        $('.container').hide();
        $('.agree_btn').on('click',function(){
            let chk = true;
            let chbox = $('input[class="required"]');
            for (let i = 0; i < chbox.length; i++) {
                var isChecked = chbox.eq(i).prop('checked');
                if (!isChecked) {
                    chk = false;
                    break;
                }
            }
            if (chk) {
                $('.container').stop().slideToggle();
                $('html, body').animate({ scrollTop : $('.agree_btn').offset().top }, 450);
            }else{
                alert("필수 항목을 동의하세요.")
            }
            
        });
        

        // top 스크롤 연습
        // $('.go_top').on('click',function(){
        // $('html, body').animate({scrollTop:0},'slow');

        // return false;
        // });

        });

        /* 눈 모양 show.hide 제이쿼리 */
        $('#password_btn, #repassword_btn').on('click', function() {
            if ($(this).hasClass('active')) {
                //$('#password_btn, #repassword_btn').attr('type', 'password');
                $(this).closest('tr').find('input[type="text"]').attr('type', 'password');
                $(this).removeClass('active');
                $(this).children().attr("src","./images/icon/pw_hide.png")
            } else {
                // $('#password_btn, #repassword_btn').attr('type', 'text');
                $(this).closest('tr').find('input[type="password"]').attr('type', 'text');
                $(this).addClass('active');
                $(this).children().attr("src","./images/icon/pw_show.png")
            }
        });
        $('a[href="#"]').click(function(e){
            e.preventDefault();
        })

});