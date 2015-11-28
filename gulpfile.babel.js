import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import browserSync, { reload } from 'browser-sync';
import buffer from 'vinyl-buffer';
import eslint from 'gulp-eslint';
import notify from 'gulp-notify';
import rimraf from 'rimraf';
import runSequence from 'run-sequence';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import watchify from 'watchify';

// HTML
import jade from 'gulp-jade';
import gDATA from 'gulp-data';
// Post CSS
import postcss from 'gulp-postcss'; // Main Plugins
import _vars from 'postcss-custom-properties';
import autoprefixer from 'autoprefixer';
import bemLinter from 'postcss-bem-linter';
import Calc from 'postcss-calc';
import cssFocus from 'postcss-focus';
import cssImport from 'postcss-import';
import cssMedia from 'postcss-custom-media';
import cssnano from 'cssnano';
import cssReport from 'postcss-reporter';
import extend from 'postcss-simple-extend';
import hexA from 'postcss-hexrgba';
import inputStyle from 'postcss-input-style';
import mqPacker from 'css-mqpacker';
import nested from 'postcss-nested';
import resType from 'postcss-responsive-type';



const paths = {
  bundle: 'app.js',
  srcJSX: 'src/js/Index.js',
  srcCSS: 'src/css/style.css',
  srcIMG: 'src/img/**',
  srcJADE: 'src/html/*.jade',
  partJADE: 'src/html/**/*.jade',
  DATA: 'src/data/**/*.{js,json}',
  dist: 'dist',
  distJS: 'dist/js',
  distCSS: 'dist/css',
  distImg: 'dist/img'
};

// HTML TASK

gulp.task('html', () => {
  gulp.src(paths.srcJADE)
  .pipe(sourcemaps.init())
  .pipe(jade({
    pretty: true
  }))
  .on('error', notify.onError())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.dist))
  .pipe(reload({stream: true}));
});

// CSS TASK
const cssProcess = [
  cssImport,
  _vars,
  cssMedia,
  inputStyle,
  extend,
  nested,
  Calc,
  hexA,
  resType,
  cssFocus,
  autoprefixer,
  mqPacker,
  bemLinter,
  cssReport({clearMessages: true})
];
gulp.task('styles', () => {
  gulp.src(paths.srcCSS)
  .pipe(sourcemaps.init())
  .pipe(postcss(cssProcess))
  .on('error', notify.onError())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.distCSS))
  .pipe(reload({stream: true}));
});

// JS Task
gulp.task('watchify', () => {
  let bundler = watchify(browserify(paths.srcJSX, watchify.args));
  function rebundle() {
    return bundler
      .bundle()
      .on('error', notify.onError())
      .pipe(source(paths.bundle))
      .pipe(gulp.dest(paths.distJS))
      .pipe(reload({stream: true}));
  }
  bundler.transform(babelify,{presets: ['es2015', 'react']})
  .on('update', rebundle);
  return rebundle();
});

gulp.task('browserify', () => {
  browserify(paths.srcJSX)
  .transform(babelify,{presets: ['es2015', 'react']})
  .bundle()
  .pipe(source(paths.bundle))
  .pipe(buffer())
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(paths.distJS));
});

// browserSync
gulp.task('browserSync', () => {
  browserSync({
    server: {
      baseDir: './dist'
    }
  });
});

// Linting JS
gulp.task('lint', () => {
  gulp.src(paths.srcJSX)
  .pipe(eslint())
  .pipe(eslint.format());
});
// Watch
gulp.task('watchTask', () => {
  gulp.watch(paths.srcCSS, ['styles']);
  gulp.watch(paths.srcJSX, ['lint']);
  gulp.watch(paths.partJADE, ['html']);
});

// Cleaning
gulp.task('clean', cb => {
  rimraf('dist', cb);
});

gulp.task('default', cb => {
  runSequence('clean', ['browserSync', 'watchTask', 'watchify', 'styles', 'lint','html'], cb);
});