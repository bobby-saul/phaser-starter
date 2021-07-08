# Phaser Starter

This repo is built to be the starting point for creating games with [Phaser 3.55.2](https://phaser.io/).

To use, clone the repo, remove the git remote, and add the new project's remote.

Or click on the "use this template" button to create a new repo with this project as a template. 

For developing run ```npm i``` to install the proper node packages. The scripts to build in the development mode is ```npm run dev``` and to watch is ```npm run watch```. To run the watch and open a developer server run ```npm run start```. To build in production mode run ```npm run prod```. This project is currently using the latest long term support version of node (14.17.1).

This project contains the index.html file to load the js built by webpack from the source javascript located in /src/index.js and placed in /public/index.js. The webpack build uses the babel loader, style loader, sass loader, and file loader.
