$(function() {
searchWord = function(){
  var searchResult,
      searchText = $(this).val(), // 検索ボックスに入力された値
      targetText,
      hitNum;
      
      searchResult = [];
      
      $('#search-text').empty();
      $('#search-text_hitNum').empty();
      
      if (searchText !=  ''){
          $('.target-area li').each(function() {
              targetText = $(this).text();
              
              if(targetText.indexOf(searchText) != -1) {
                  searchResult.push(targetText);
              }
          });
          
          for (var i = 0; i<searchResult.length; i++){
              $('<span>').text(searchResult[i]).appendTo('#search-text');
          }
              
              hitNum='<span>検索結果</span>:' + searchResult.length +  '件見つかりました。';
              $('.search-text_hitNum').append(hitNum);
          }
      };
      
      $('#search-text').on('input',searchWord);
});