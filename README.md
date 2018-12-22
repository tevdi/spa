React starter pack
===================

This pack contains the minimal component to generate an isomorphic single-page application (SPA) with React, using it IN a module in Drupal 8. You can also run a React app without Drupal rendering only the client side. There're 2 modes: mode without states and mode Redux. Bare in mind that the purpose of this app is running into a Drupal 8 module, so don't use the scripts of package.json except webpack-dev and webpack-dev-redux.

How to run it
=============

    $ git clone https://github.com/tevdi/spa

    $ cd spa
    
    $ npm install
    
    $ npm run webpack-dev
    
or if you want to use the redux version: 
    
    $ npm run webpack-dev-redux

You can see the project running (by default) in http://localhost:8080

