require('../css/entry.less');

// function getGoodsList() {
//     $.ajax({
//         type: 'GET',
//         url: 'http://localhost:8080/api/goodsList.json',
//         success: function (data) {
//             createDom(data);
//         }
//     })
// }
// getGoodsList();
var tool = require('./tool.js');
var url = 'http://localhost:8080/api/goodsList.json';
tool.getData(url, function (data) {
    createDom(data);
})
function createDom(data) {
    console.log(data);
    var goodsArr = data.list;
    var str = '';
    goodsArr.forEach(function (ele, index) {
        str += '<a href="http://localhost:8080/goodsInfo.html?id='+ ele.id +'"><div class="goods_item">\
        <img src="' + ele.imgurl[0] + '">\
        <p class="item_name">' + ele.name + '</p>\
        <p class="item_price">￥' + ele.spectList[0].price + '</p>\
    </div></a>';
    });
    $('.tab_content').html(str);
}