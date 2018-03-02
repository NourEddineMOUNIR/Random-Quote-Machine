
// finish the designe
// sherch for an quotes api
// add event listner to my button
// send a request to the api
// change the DOM
$(document).ready(function () {
    // disable cache in all future ajax
    $.ajaxSetup({ cache: false });

    // get references
    var quoteContent = $("#quoteContent");
    var quoteAuthor = $("#quoteAuthor");

    var getQuote = function () {
        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=2", function (resp) {
            quoteAuthor.hide();
            quoteContent.hide();
            quoteAuthor.html(resp[0].title);
            quoteContent.html(resp[0].content);
            quoteAuthor.fadeIn("slow");
            quoteContent.fadeIn("slow");
        });
    };

    var setIntervalVar;
    var setIntervalQuote = function () {
        return setInterval(function () {
            getQuote();
        }, 10000);
    };

    $("#getQuoteButton").on('click', function () {
        if(setIntervalVar) clearInterval(setIntervalVar);
        getQuote();
        setIntervalVar = setIntervalQuote();
    });

    setIntervalVar = setIntervalQuote();

});