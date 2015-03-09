
# Socket.IO Milestone

This repo is for the Fixing of socket io issue 1946

``https://github.com/Automattic/socket.io/issues/1946``

A cloud server for socket.io

## How to use

-Start the Client

```

Inside socket.io.milestone/examples1
node bin/chat
```

-Start the Server

```
Inside socket.io.milestone/
node bin/cloud
```

-Open the Browser for the page 
``http://app1.cloud.io:3001/``

-Change your hosts file to add

``
127.0.0.1       app1.cloud.io
``


#Example
![alt tag](https://github.com/vish1562/socket.io.milestone/blob/master/Example.png.jpg)

##Changes Made

Server - 
1. Added three new variables in Socket object
```
  this.encodeFlag = false ; //If the data has to be encoded
  this.decodeFlag = false ; //If the data has to be decoded
  this.encodedData = [];    //The encoded data
```
2. Added encode function in Socket.js file
  This will set the encode flag and the data to be encoded

3. In the emit function, checking for encodeFlag and emitting the encodedData if so 
```
 if(this.encodeFlag )
      {
        packet.data = this.encodedData;
        this.encodeFlag = false;
      }
  ```



