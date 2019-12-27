var gulp = require("gulp");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");

gulp.task("jsmin", function() {
  gulp
    .src("./src/ido-image-loader.js")
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist"));
});
