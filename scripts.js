(function(d){

  d.getElementById('continueBtn').addEventListener('click', function(){
    var screenClass = d.body.classList;

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
      screenClass.add('references');
    }
  });

})(document);
