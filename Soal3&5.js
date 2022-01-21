document.addEventListener("DOMContentLoaded", function (event) {
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var mydata = data;

      var deleted=2
      mydata.splice(deleted,1)  //DELETE DATA

      var mainContainer = document.getElementById("mytable");

      for (var i = 0; i < 10; i++) {
        var tr = document.createElement("tr");
        tr.innerHTML =
          "<td>" +
          mydata[i].userId +
          "</td>" +
          "<td>" +
          mydata[i].id +
          "</td>" +
          "<td>" +
          mydata[i].title +
          "</td>" +
          "<td>" +
          mydata[i].body + 
          "</td>";
        mainContainer.appendChild(tr);
      }
    //   deleteData()
    });

    
    
});

//DELETE HTML TR
// function deleteData(){
//     var j=3;
//     var mainContainer = document.getElementById("mytable");
//     mainContainer.removeChild(mainContainer.childNodes[j])
// }


