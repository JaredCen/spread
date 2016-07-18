var gulp = require('gulp'),
	less = require('gulp-less');

gulp.task('less', function () {
	gulp.src('less/demo.less')
		.pipe(less())
		.pipe(gulp.dest('styles'))
});

gulp.task('watch', function () {
	gulp.watch('less/demo.less', ['less'])
});

gulp.task('default', ['less', 'watch']);