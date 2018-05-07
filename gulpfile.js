var gulp = require('gulp'),
    babel = require("gulp-babel");

var paths = {
  scripts: ["config/*.es6", "controller/*.es6", "model/*.es6", "app.es6"],
  dest: ["config/", "controller/", "model/", ""]
};

gulp.task('praise', function(){
  paths.scripts.forEach(function(item, i){
    return gulp.src(item)
        .pipe(babel())
        .pipe(gulp.dest(paths.dest[i]));
  })
})

gulp.task('praiseAll', function(){
  gulp.src(['**/*.es6',"!public/**/*"])
      .pipe(babel())
      .pipe(gulp.dest("./server"));
})

gulp.task('default', ['praise'],()=>{
    gulp.watch(paths.scripts, ['praise']);
})

