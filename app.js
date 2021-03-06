// Plain JavaScript AJAX
window.onload = function() {

  var loadTextBtn = document.querySelector('#loadTextBtn');
  var httpRequest;

  loadTextBtn.addEventListener('click', function(element) {
    element.preventDefault();

    httpRequest = new XMLHttpRequest();

    // GET Request
    var url = "random-text.php";
    httpRequest.onreadystatechange = loadQuote;
    httpRequest.open('GET', url);
    httpRequest.send();
  });

  function loadQuote() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var response = httpRequest.responseText;
        var quote = document.querySelector('#quote');
        quote.innerHTML = response;
      } else {
        alert('There was a problem with the request.');
      }
    }
  }

};
