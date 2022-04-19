document.addEventListener("DOMContentLoaded", function(){
    var db = openDatabase("tareas", "1.0", "mi base de datos de tareas", 2 * 1024 * 1024);
    db.transaction( function (tr) {
        //tr.executeSql('DELETE FROM mistareas');
           tr.executeSql('CREATE TABLE IF NOT EXISTS mistareas (id unique, text)');
        //tr.executeSql('CREATE TABLE mistareas (id unique, text)');
        
        tr.executeSql('SELECT * FROM mistareas ORDER BY id DESC LIMIT 1', [], function (tr, results) {
          var len = results.rows.length, i;
          if (len == '') {
             id = 1;
          } else {
             id = results.rows.item(i).id;
             id++;
          }
          tr.executeSql('INSERT INTO mistareas (id, text) VALUES (' + id +',"Asi se visualiza una tarea")');
       });
    
       //tr.executeSql('DELETE FROM mistareas WHERE id = 34');

       tr.executeSql('SELECT * FROM mistareas ORDER BY id', [], function(tr, results){
          var len = results.rows.length, i;
          var html = "";
          for(i = 0; i <= len; i++){
             html = html + "<p>" + results.rows.item(i).id + " - " + results.rows.item(i).text + "</p>";
             var posicion = document.getElementById("tareas");
             posicion.innerHTML = html;
          }
       });

       



     });
     
});









   







