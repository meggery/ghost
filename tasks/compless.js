module.exports=function (gulp, options, plugins) {
    gulp.task('compless',function () {
        return gulp.src(options.paths.less)
            .pipe(plugins.less())
            .pipe(gulp.dest('css'))
    })
}