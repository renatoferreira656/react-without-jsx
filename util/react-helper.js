(function(Project, React, ReactDOM){
  Project = Project || {};
  Project.ReactDOM = ReactDOM || {};
  Project.React = React || {};

  Project.React.create = function (render){
    var clazz = function(){};
    Project.util.extends(clazz.prototype || {}, Project.React.Component.prototype);
    if( typeof(render) == 'function' ){
      clazz.prototype.render = render;
    } else {
      Project.util.extends(clazz.prototype, render);
    }
    return clazz;
  }

  Project.React.addScreen = function (element, where){
    ReactDOM.render(
      Project.React.createElement(element, null, null),
      where
    );
  }

})(Project, React, ReactDOM);
