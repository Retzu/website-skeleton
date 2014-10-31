Simple Website Skeleton
================

This is just a simple, extendable skeleton for creating a brand new website. It compiles, uglifies and concatenates JavaScript and SASS. It also utilizes Bower and automatically includes every installed Bower component.

##Setup
1. Clone the repo
2. ```npm install```
4. ```sudo npm install -g gulp bower``` if you don't have them already
3. ```bower install```

Now you can run ```gulp server```, edit your files and watch livereload do its magic.

##Quick, I need jQuery!
To install new front-end libraries just type ```bower install xyz```. Restart gulp and you're good to go. All libraries are automatically concatenated into libs.js in the dist folder which is included in index.html

##Why SASS but no CoffeeScript/LiveScript?
I used to like [CoffeeScript](http://coffeescript.org/), but not anymore.
- You cannot declare **real** functions, only function variables. For example: if you want to use addEventListener you have to declare the function before calling addEventListener. If you declare it after, your function variable will be undefined at the time addEventListener is called. [See this example](http://codepen.io/Retzudo/pen/EgoJw?editors=001)
- Every function automatically returns its last expression *unless* you write ```return```. Then a return statement is omitted completely in the resulting JS. This is weird.

[LiveScript](http://livescript.net/) is--for me personally--just a bit to much to "just" do some JavaScript.

I won't pick up my pitchfork and torch and hunt after you if you decide to include CoffeeScript or LiveScript in a fork.
