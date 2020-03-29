# Node Template Server

This is an attempt to create a base frame work for api(client-server) model node server which has essential features like user authorization,scheduler, notification, payment services.

### frame work structure
the server is divided in two parts

  * app and 
  * services


the services part contains the essential services for an app server and app part you can write your app.

For backEnd we are using MangoDB and for authorization we are using token system where a token is sent in header for every request to identify the user.
