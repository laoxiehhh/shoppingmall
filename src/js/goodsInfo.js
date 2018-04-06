require('../css/goodsInfo.less');
require('./goodsCover.js');
var tool = require('./tool.js');
var url = 'http://localhost:8080/api/goodsList.json';
tool.getData(url, function (data) {
    console.log(data)
    getGoodsInfo(data);
});

function getId() {
    var optionArr = location.search.slice(1).split('&');
    var idNum;
    optionArr.forEach(function (ele, index) {
        if (ele.indexOf('id=') !== -1) {
            idNum = ele.slice(3); 
        }
    });
    return idNum;
}
function getGoodsInfo(data) {
    var idNum = getId();
    var dataArr = data.list,
        len = dataArr.length,
        str = '',
        listStr = '';
    for (var i = 0; i < len; i ++) {
        if (dataArr[i].id == idNum) {
            $('.infor_one_img').html('<img src="' + dataArr[i].imgurl[0] + '">');
            $('.one_name').html(dataArr[i].name);
            //价格排序
            dataArr[i].spectList.sort(function (a, b) {
                return a['price'] - b['price'];
            });
            var spectArr = dataArr[i].spectList,
                spectArrLen = spectArr.length;
            if (spectArrLen > 1) {
                $('.one_price').html('￥' + spectArr[0].price + '-' + spectArr[spectArrLen - 1].price);
            } else {
                $('.one_price').html('￥' + spectArr[0].price);
            }

            $('.infor_th p').html(dataArr[i].name);
            dataArr[i].imgurl.forEach(function (ele, index) {
                str += '<img src="' + ele + '">';
            });
            $('.infor_th').append($(str));
            dataArr[i].spectList.forEach(function (ele, index) {
                listStr += '<li class="buy_spect_li" data-price=' + ele.price + ' data-quantity=' + ele.quantity + '>' + ele.spect + '</li>';
            });
            $('.buy_spect_wrap ul').html(listStr);
        }
    }
}


function bindEvent() {
    $('.infor_two').on('click', function () {
        $('.buy_wrap').css('display','block');
        $('html').css({height:'100%',overflow: 'hidden'});
    })
    $('.buy_gray').on('click', function () {
        $('.buy_wrap').css('display','none');
        $('html').css({height:'100%',overflow: 'visible'});
    })
}
bindEvent();