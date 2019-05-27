const getData = new Promise(function(resolve, reject){
const xhr =  new XMLHttpRequest();

function handleSuccess () {

   resolve(this.responseText)

 }

 function handleError () {
   console.log( 'An error occurred \uD83D\uDE1E' );
 }

xhr.open("GET", "https://api.github.com/orgs/HackYourFuture/repos");
xhr.onload = handleSuccess;
xhr.onerror = handleError;
xhr.send();
})


getData
.then(function(data){
 console.log("here is out data" + data)
 document.getElementById("yo").innerHTML = data;

})
.then(function(data){

})
.catch( err => console.log(err.message))

const MyData = new Promise(function(){

})

function myFunction(){
  var x = document.getElementById("yo");
  if(x.style.display === "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}

document.getElementById('button').addEventListener('click', loadUsers);

    // Load Github Users
    function loadUsers(){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.github.com/users', true);

      xhr.onload = function(){
        if(this.status == 200){
          var users = JSON.parse(this.responseText);

          var output = '';
          for(var i in users){
            output +=
              '<div class="user">' +
              '<img src="'+users[i].avatar_url+'" width="70" height="70">' +
              '<ul>' +
              '<li>ID: '+users[i].id+'</li>' +
              '<li>Login: '+users[i].login+'</li>' +
              '</ul>' +
              '</div>';
          }

          document.getElementById('users').innerHTML = output;
        }
      }

      xhr.send();

  var x = document.getElementById("users");
    if(x.style.display === "none"){
    x.style.display = "block";
    } else {
    x.style.display = "none";
      }
    }


    document.getElementById('buttongithub').addEventListener('click', loadProject);

    // Load Github Users
    function loadProject(){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.github.com/users/panagot/repos', true);

      xhr.onload = function(){
        if(this.status == 200){
          var users = JSON.parse(this.responseText);

          var output = '';
          for(var i in users){
            output +=
              '<div class="user">' +
              '<img src="'+users[i].avatar_url+'" width="70" height="70">' +
              '<ul>' +
              '<li>ID: '+users[i].id+'</li>' +
              '<li>Name: '+users[i].name+'</li>' +
              '<li>Login: '+users[i].full_name+'</li>' +
              '<li>HTML: '+users[i].html_url+'</li>' +
              '</ul>' +
              '</div>';
          }

          document.getElementById('project').innerHTML = output;
        }
      }

      xhr.send();


      var x = document.getElementById("project");
      if(x.style.display === "none"){
      x.style.display = "block";
      } else {
      x.style.display = "none";
        }
      }
    

