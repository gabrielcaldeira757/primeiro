import Firebird from 'node-firebird';

const options = {};
 
options.database = 'database.fdb'; // Caminho pro banco
options.user = 'SYSDBA'; // ?
options.password = 'masterkey'; //? 

export default Firebird.attach(options, function(err, db) {
 
  if (err)
      throw err;

  // db = DATABASE
  db.query('SELECT * FROM TABLE', function(err, result) {
      // IMPORTANT: close the connection
      db.detach();
  });

});
