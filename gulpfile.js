var gulp    = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function(){
  return gulp.src('app/**/*')
    .pipe(ghPages({cacheDir: "deploy"}));
});

gulp.task('cname', function(){
  return gulp.src('CNAME')
    .pipe(gulp.dest('app'));
});

gulp.task('build', ['cname']);