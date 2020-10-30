con.end(function(err) {
  if (err) {
    console.log('error:' + err.message);
  }
  console.log('Disconnected!');
});
