function getData(url, callback) {
    $.ajax({
        type: 'GET',
        url: url,
        success: callback
    })
}
module.exports = {
    getData: getData
};