const dir = {
      build: './src/build/',
      theme: './src/theme/'
};

let gulp          = require('gulp'),
    concat        = require('gulp-concat'),
    sass          = require('gulp-sass')(require('sass')),
    autoprefixer  = require('gulp-autoprefixer'),
    sourcemaps    = require('gulp-sourcemaps'),
    rename        = require('gulp-rename'),
    cleanCSS      = require('gulp-clean-css'), /* minify css */
    browserSync   = require('browser-sync').create(); 



// Browser Sync task
function browserSyncTask(){
  let files = [
    dir.theme + '*.html',
    dir.build + 'css/**/*.css',
    // dir.build + 'sass/**/*.scss',
    dir.build + 'js/**/*.js',
    dir.theme + 'js/**/*.js'
  ];

  // Initialize BrowserSync
  browserSync.init(files,{
    // server: './src/theme'
    server: {
      baseDir: './src/theme',
    },
    // prevent automatic opening browser
    open: false,
    // Don't show any notifications in the browser.
    notify: false
  });
  // browserSync.init(files,{
  //   proxy: "http://localhost/mysite/"
  // });

}

// Created a separate file .browserslistrc to store autoprefixerOptions
//let autoprefixerOptions = { browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] };

function sassCompile(){
  return gulp.src(dir.build + 'sass/main.scss')
  .pipe(sourcemaps.init( {loadMaps: false} ))
  .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(rename('style.css'))
  // .pipe(sourcemaps.write())
  .pipe(gulp.dest(dir.theme))
  .pipe(browserSync.stream())
}



/* 
Minify CSS - Gulp-Clean-CSS 
https://www.npmjs.com/package/gulp-clean-css
*/
function compressCSS(){
  return gulp.src( dir.template+'style.css' )
    .pipe(cleanCSS({compatibilty: 'ie8'}))
    .pipe(rename( 'style.min.css' ))
    .pipe(concat( 'style.min.css' ))
    .pipe(gulp.dest(dir.template+'.'))
};

// Watch Task
function gulpWatch(){
  gulp.watch(dir.build + 'sass/**/*.scss', sassCompile);
}

// New Gulp 4.0 
gulp.task('default', gulp.parallel(gulpWatch, browserSyncTask)); 


// gulp.task('compress', gulp.series(compressCSS));

