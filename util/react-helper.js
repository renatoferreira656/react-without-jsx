(function(Project, React, ReactDOM){
  Project = Project || {
    ReactDOM:  ReactDOM
  };
  Project.React = React || {};

  Project.React.create = function (render){
    var clazz = function(){};
    Project.util.extends(clazz.prototype || {}, Project.React.Component.prototype);
    clazz.prototype.render = render;
    return clazz;
  }

  Project.React.addScreen = function (element, where){
    ReactDOM.render(
      Project.React.createElement(element, null, null),
      where
    );
  }

})(Project, React, ReactDOM);
