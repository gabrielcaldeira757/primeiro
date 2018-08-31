import Firebird from 'node-firebird';

const options = {};
 
options.host = '127.0.0.1';
options.port = 3050;
options.database = 'C:\Users\ASPRA\Desktop\primeiro projeto\primeiro\BD\BANDOLOCADORES.fdb'; // Caminho pro banco
options.user = 'SYSDBA'; // ?
options.password = 'masterkey'; //?
options.lowercase_keys = false; // set to true to lowercase keys
options.role = null;            // default
options.pageSize = 4096;  

export default Firebird.attach(options, function(err, db) {
 
  if (err)
      throw err;

  // db = DATABASE
  db.query('SELECT * FROM TABLE', function(err, result) {
      // IMPORTANT: close the connection
      db.detach();
  });

});
