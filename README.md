# Personal Web Portfolio
<br>
this is my personal portfolio and resume am going to keep it update with my personal info and achivments and also keep it updated always with lates technologies 
<br>
## Whos the God Father 
<p align="center">
  <a href="https://github.com/mwaylabs/generator-m-ionic" alt="Generator-M-Ionic">
    <img width="175" src="https://raw.githubusercontent.com/mwaylabs/generator-m-ionic/dev/docs/resources/logo.png">
  </a>
</p>

>** this generator helped me a lot to accomplish this and take it to the light

**[Read more ... ](https://github.com/mwaylabs/generator-m-ionic/tree/master/docs/intro/why_you_need_it.md)**

### What's in the box
<br>
<br>
<p align="center" >
  <a href="http://yeoman.io/" target="_blank" alt="yeoman" title="yeoman">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/6041228/c1f91cac-ac7a-11e4-9c85-1a5298e29067.png">
  </a>
  <a href="http://gulpjs.com/" target="_blank" alt="gulp" title="gulp">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/9409728/c5332474-481c-11e5-9a6e-74641a0f1782.png">
  </a>
  <a href="http://bower.io/" target="_blank" alt="bower" title="bower">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/6041250/ef9a78b8-ac7a-11e4-9586-7e7e894e201e.png">
  </a>
  <a href="https://www.browsersync.io/" target="_blank" alt="bower" title="bower">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/16412038/77028548-3d2a-11e6-88d0-2c0d66582f4c.png">
  </a>
  <a href="https://angularjs.org/" target="_blank" alt="angular" title="angular">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/6041199/5978cb96-ac7a-11e4-9568-829e2ea4312f.png">
  </a>
  <br>
  <br>
  <a href="http://sass-lang.com/" target="_blank" alt="sass" title="sass">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/9410121/c330a3de-481e-11e5-8a69-ca0c56f6cabc.png">
  </a>
  <a href="http://eslint.org/" target="_blank" alt="eslint" title="eslint">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/15893052/ada5651e-2d7d-11e6-9246-dc749c7afd63.png">
  </a>
  <a href="http://karma-runner.github.io/" target="_blank" alt="karma" title="karma">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/9410216/44fef8fc-481f-11e5-8037-2f7f03678f4c.png">
  </a>
  <a href="http://jasmine.github.io/" target="_blank" alt="jasmine" title="jasmine">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/9410153/ebd46a00-481e-11e5-9864-f00fa8427d17.png">
  </a>
  <a href="https://angular.github.io/protractor/#/" target="_blank" alt="protractor" title="protractor">
    <img height="100" src="https://cloud.githubusercontent.com/assets/1370779/9410114/b99aaa9a-481e-11e5-8655-ebc1e324200d.png">
  </a>
</p>
<br>
<br>

# Installation and Prerequisites

Besides simply installing everything, I recommend having or obtaining a **fair knowledge** of the technologies, so you can understand what you are doing.

## Node and dependencies
-  **[Nodejs & npm](https://nodejs.org/)** - install via their website
- **[Yo](http://yeoman.io/)**, **[Gulp](http://gulpjs.com/)** and **[Bower](http://bower.io/)** - install via npm

```
npm install --global yo
npm install --global gulp
npm install --global bower
```

# Start Development

## Generating your Website
1. **Go to devProj directory** - and cd into it.

  ```sh
  cd devProj
  ```

1. **run npm and bower**

  ```
  npm install
  bower install
  ```
  and follow the instructions


## Running in the browser
```
gulp watch
```
Prepares everything for development and opens your default browser:

When you run `gulp watch` it does this to your `index.html`:
- inject all bower javascript and css files (Angular,...)
- inject all of your app files (compiled css, angular files, ...)

`gulp watch` also livereloads your application when changing/adding/deleting files to immediately show the changes you make in your browser. For your convenience any occurring **ESLint or jsonlint errors** will be presented to you on every livereload.

```
gulp watch --no-open
```
If you don't want this task to open your browser every time, just add the `--no-open` option and navigate to `http://localhost:9000` yourself.

## Questions, issues?
please don't hesitate to contact me or submit an issue or an enhancement
