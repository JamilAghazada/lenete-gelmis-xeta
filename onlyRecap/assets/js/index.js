function clear() {
    $('input').val(' ')
    $('.articleinhere').html(' ')
    console.log($('#search-term').val())

}
function search() {
var searchTerm = $('#search-term').val().trim()
$.ajax({
url:  'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=xLVvfg22jIB0HAQkQRcpdG7AQCaKBd6c&q='+searchTerm,
method:"GET"
}).done(function(response){
    console.log(response)
    console.log(response.docs)
})
}




$('#clear').on('click', clear)
$('#search').on('click', search)
