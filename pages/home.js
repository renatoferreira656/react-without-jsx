(function(Project){
  var login = Project.React.create(function () {
    var form = new Project.Form('login').addInput('login').addInput('password');
    form.addButton('Login', function(){
      console.log("foi =D");
    });
    return form.form();
  });

  Project.React.addScreen(login, document.getElementById('content'));
})(Project);
