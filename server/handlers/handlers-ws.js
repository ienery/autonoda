exports.echo = (ws, req) => {
    
    ws.on('message', function(msg) {
       console.log(msg);
       let message = JSON.parse(msg);
       console.log(message.message);
       let {message:msg2} = message;
       ws.send(msg2);
   });
};
