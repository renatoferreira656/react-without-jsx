(function(R, RD){

  var a = function (obj, newObj) {
    for ( var i in newObj){
      obj[i] = newObj[i];
    }
    return obj;
  };

  var A = function(){

  }

  A.prototype = a({}, R.Component.prototype);
  A.prototype.render = function () {
    return R.createElement('div', null, this.props.value + ' from a');
  }

  RD.render(
    R.createElement(A, {'value': 'value'}, null),
    document.getElementById('content')
  );
  
})(React, ReactDOM);
