# Living in Circuits

A personal blog theme for [Ghost](http://github.com/tryghost/ghost/) used on [my blog](http://emily.ghost.io/)

## Prerequisites

1. [Node.js](http://nodejs.org/)
2. [Sass](http://sass-lang.com/)
3. [Gulp](http://gulpjs.com/)

## Node Installation
* Check you have the latest stable version of Node - node -v
* If you don't have node or your version is out of date visit [Node.js](http://nodejs.org/) or via terminal - sudo npm install n -g

## Sass Installation

* From terminal - sudo gem install sass - [Visit the Sass install instructions for more info](http://sass-lang.com/install)
* Always ensure you have the latest and greatest version of Sass. From terminal - sudo gem update sass

## Gulp Installation From terminal

* npm install -g gulp (globally)
* cd to your project root (cd var/www etc..)
* npm install
* run gulp by typing 'gulp'
* [Visit the docs for more info](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

## Running Gulp
* In development run 'gulp dev' This will allow sourcemaps.
* For production, run 'gulp rel' This will turn on prefix and minification.
* It is vital that only the gulp release version of the stylesheet is comiited to master.

## .gitignore

### Set up .gitignore with the following

* npm-debug.log
* .DS_Store
* node_modules
* .sass-cache
* style.css (Depends on how the site is deployed, if you don't know ask!)

### EditorConfig

EditorConfig helps developers maintain consistent coding styles between different editors
Install `EditorConfig` with [Package Control](https://sublime.wbond.net) and restart Sublime.

##Credits

Many thanks to all who have made [www.ghost.org](http://www.ghost.org "Ghost") possible.

## License
Living In Circuits Ghost Theme is licensed under the MIT license. (http://opensource.org/licenses/MIT)
