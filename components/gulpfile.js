var gulp = require("gulp");
var concat = require("gulp-concat");
var autoprefixer = require("autoprefixer");
var postcss = require("gulp-postcss");

gulp.task("default", ["build"]);
gulp.task("build", ["styles", "html", "js", "assets", "fonts"]);

gulp.task("styles", function() {
	return gulp.src("./src/styles/**/*.css")
		.pipe(concat("build.min.css"))
		.pipe(postcss([autoprefixer]))
		.pipe(gulp.dest("./public/styles/"));
});

gulp.task("html", function() {
	return gulp.src("./src/**/*.html")
		.pipe(gulp.dest("./public/"));
});

gulp.task("assets", function() {
    gulp.src("./src/assets/**/*.{svg,jpg,png}")
        .pipe(gulp.dest("./public/assets/"));
});

gulp.task("fonts", function() {
    gulp.src("./src/fonts/**/*.ttf")
        .pipe(gulp.dest("./public/fonts/"));
});

gulp.task("js", function() {
	return gulp.src("./src/scripts/**/*.js")
		.pipe(concat("build.js"))
		.pipe(gulp.dest("./public/scripts/"));
});
