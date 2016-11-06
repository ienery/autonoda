let wsConns = [];

// setInterval(()=>{
//     console.log('---');
//     wsConns.map((ws) => {
//         //console.log('ws', ws);
//         console.log('ws');
//         //conn.sendText("inServer");
//         ws.send("inServer");
//     });
//     console.log('---');
// }, 5000);

exports.echo = (ws, req) => {
    console.log(req.session.test);

    ws.on('message', function(msg) {
       console.log(msg);
       let message = JSON.parse(msg);
       console.log(message.message);
       let {message:msg2} = message;
       ws.send(msg2);
       wsConns.push(ws);
   });

   ws.on('close', function(msg) {
      console.log('close');
      wsConns = [];
   });
    // setInterval(() => {
    //     ws.send('5000');
    // }, 2000);

};
