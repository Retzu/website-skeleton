Simple Website Skeleton
=======================

This is just a simple, extendable skeleton for creating a brand new frontend website.

Key features:
- ES2015 via Babel
- SCSS
- browser-sync


Setup
-----
1. Clone the repo
2. Change details (name, version) in `package.json`.
3. Remove the git origin: `git remote remove origin`
4. `npm install` (and maybe `npm update` if you run into problems)

Now you can run `gulp serve`, edit your files and watch browser-sync do its magic.


Files
-----
### `dist/index.html`
This is just the basic structure for HTML5.

### `src/js/` and `src/css/`
Here you can put your JavaScripts and SCSS. You can also use sub-directories to keep things organized. JavaScript files will be compiles into one file (`dist/js/main.js`) by Browserify, Sass files will be compiled as-is.


Quick, I need jQuery!
---------------------
```shell
npm install --save jquery
```

And in your script:

```javascript
import $ from "jquery";

$('<h1>').text('Yay!').appendTo('body');
```

Production
----------
By default, Browserify will add source maps to the output and Sass's output style will be the default nested one. To disable source maps and enable CSS compression run `gulp --production`.
