(function(d){

  d.getElementById('continueBtn').addEventListener('click', function(){
    var screenClass = d.body.classList;

    d.getElementById('continueBtn').innerHTML = '<< continue >>';
    if (screenClass.contains('title-screen')) {
      screenClass.remove('title-screen');
      screenClass.add('first-point');
    }
    else if (screenClass.contains('first-point')) {
      screenClass.remove('first-point');
      screenClass.add('second-point');
    }
    else if (screenClass.contains('second-point')) {
      screenClass.remove('second-point');
      screenClass.add('third-point');
    }
    else if (screenClass.contains('third-point')) {
      screenClass.remove('third-point');
      screenClass.add('fourth-point');
    }
    else if (screenClass.contains('fourth-point')) {
      screenClass.remove('fourth-point');
      screenClass.add('fifth-point');
    }
    else if (screenClass.contains('fifth-point')) {
      screenClass.remove('fifth-point');
      screenClass.add('quiz-1');
    }
    else if (screenClass.contains('quiz-1')) {
      screenClass.remove('quiz-1');
      screenClass.add('quiz-2');
    }
    else if (screenClass.contains('quiz-2')) {
      d.getElementById('continueBtn').innerHTML = '<< return >>';
      checkboxScore();
      screenClass.remove('quiz-2');
      screenClass.add('results');
    }
    else if (screenClass.contains('results')) {
      location.reload();
    }
  });

  function checkboxScore() {
    var checkboxes = d.querySelectorAll("input[type='checkbox']"),
        score = 0;

    for (const checkbox of checkboxes) {
      if (checkbox.checked == true){
        score += 1;
      }
    }
    printScoreResults(score);
  }

  function printScoreResults(score) {
    if (score < 7){
      d.getElementById('results').innerHTML += '<p>That you design FOR people. While this has its merits, designing for people and not with them can often to lead to unhappy or dissatisfied clients or users.</p>';
    } else {
      d.getElementById('results').innerHTML += "<p>That you design WITH people. By carefully considering your clients' and users' wants and needs, and involving them in the design process, you are able to achieve a more satisfying outcome for eveyone involved.</p>";
    }
    d.getElementById('results').innerHTML += '<br><p>Take a card - printed on them you will find five critical points regarding desiging WITH people.</p>';
  }
})(document);
