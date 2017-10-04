window.Project = (function(){
  var Project = Project || {};
  Project.util = Project.util || {};

  Project.util.extends = function (){
      if(!arguments || arguments.length < 2){
        return;
      }
      var first = arguments[0];
      for ( var i = 1; i < arguments.length; i++){
        for(var k in arguments[i]){
            first[k] = arguments[i][k];
        }
      }
      return first;
  }
  return Project;
})();
