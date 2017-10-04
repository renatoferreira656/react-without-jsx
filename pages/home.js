(function(Project){
  var hello = Project.React.create(function () {
    return Project.React.createElement('div', null,'hello world');
  });

  Project.React.addScreen(hello, document.getElementById('content'));
})(Project);
