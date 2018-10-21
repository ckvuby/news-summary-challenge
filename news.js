(function(exports){
    function News() {
        
    }
    exports.News = News
})(this);

News.prototype.getHeadlines = function() {
    const Http = new XMLHttpRequest();
    const url="http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail";
    Http.open("GET", url);
    Http.send();
    
    Http.onload = function () {
        var data = JSON.parse(Http.responseText);

        console.log(data["response"]["results"])
        
        if (Http.status >= 200 && Http.status < 400) {
            data.response.results.forEach(function(elem) {
                console.log(elem.webTitle)
            });
        } else {
            console.log('error')
        }
    }


}
