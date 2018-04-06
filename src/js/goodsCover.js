require('../css/goodsCover.less');
var state = {
    num: 1,
    choice: false
};
function bindEvent() {
    $('.buy_spect_wrap ul').on('click', '.buy_spect_li', function () {
        state.choice = true;
        $('.buy_spect_li').removeClass('active');
        $(this).addClass('active');
        $('.price_value').html($(this).attr('data-price'));
        state.num = 1;
        $('.buy_number_value').html(state.num);
        $('.price_quantity span').html($(this).attr('data-quantity'));
    });
    $('.buy_number_decrease').on('click', function () {
        if (state.num > 1) {
            $('.buy_number_value').html(--state.num);
        }
    });
    $('.buy_number_add').on('click', function () {
        if (state.num < parseInt($('.price_quantity span').html())) {
            $('.buy_number_value').html(++state.num);
        }
    });
    $('.buy_ok').click(function () {
        if(state.choice == true) {
            alert('提交成功');
            window.open('http://localhost:8080/index.html');
        }else {
            alert('请选择规则');
        }
    })
}
bindEvent();