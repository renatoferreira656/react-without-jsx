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

  Project.Form = function(mainClass){
    var li = [];
    var ul = Project.React.createElement('ul', null, li);
    var form = Project.React.createElement('form', {className:mainClass}, ul);
    var i =0;

    this.addInput = function(labelText){
      var label = Project.React.createElement('label', {id:'label_' + i, htmlFor:'input_' + i}, labelText + ':');
      var input = Project.React.createElement('input', {id:'input_' + i});
      this.li(label, input);
      return this;
    }

    this.addButton = function(buttonName, click){
      var button = Project.React.createElement('button', {id:'button_' + i, onClick:click, type:'button'}, buttonName);
      this.li(button);
      return this;
    }

    this.li = function(){
      var values = ['li', {id:'li_' + i, key:'li_' + i}];
      Array.prototype.push.apply(values, [].slice.call(arguments));
      li.push(Project.React.createElement.apply(Project.React, values));
      i++;
      return this;
    }

    this.form = function(){
      return form;
    }
  }

  return Project;
})();
