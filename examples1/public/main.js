$(function() {
  function addSimpleMessage (data) {

     $('ul').append("<li>" + data + "</li>");
  }

  // Socket events

  // Whenever the server emits 'new message', update the chat body
  socket.on('new message', function (data) {
    myDecodeFunc(data);
  });

  function myDecodeFunc(data)
  {
    var res = data.split(",");
      var i=0;
      for(i=0;i<res.length ;i++)
      {
      addSimpleMessage(res[i]);
      }
   }




});


