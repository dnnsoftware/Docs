var gulp = require('gulp');
var shell = require('gulp-shell');
var argv = require('yargs').argv;
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('compile-styles', function () {
    gulp.src('./common/themes/dnn/styles/dnn.styles.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./common/themes/dnn/static'))
});

gulp.task('build-main',
    ['compile-styles'],
	shell.task('make html', { cwd: './main' })
);

gulp.task('build-admin',
    ['compile-styles'],
	shell.task('make html', { cwd: './admin' })
);

gulp.task('build-dev',
    ['compile-styles'],
	shell.task('make html', { cwd: './dev' })
);

gulp.task('build-design',
    ['compile-styles'],
	shell.task('make html', { cwd: './design' })
);

gulp.task('build-all', ['build-main', 'build-admin', 'build-dev', 'build-design']);

gulp.task('watch', function () {
	switch (argv.proj) {
		case 'main':
			gulp.watch(['./{common,main}/**/*.{rst,py,html,css,js,txt}', '!./**/_build/**/*'], ['build-main'])
			break;
		case 'admin':
			gulp.watch(['./{common,admin}/**/*.{rst,py,html,css,js,txt}', '!./**/_build/**/*'], ['build-admin'])
			break;
		case 'dev':
			gulp.watch(['./{common,dev}/**/*.{rst,py,html,css,js,txt}', '!./**/_build/**/*'], ['build-dev'])
			break;
		case 'design':
			gulp.watch(['./{common,design}/**/*.{rst,py,html,css,js,txt}', '!./**/_build/**/*'], ['build-design'])
			break;
		default: 
			gulp.watch(['./{admin,common,design,dev,main}/**/*.{rst,py,html,css,js,txt}', '!./**/_build/**/*'], ['build-all'])
	}

});

gulp.task('default', ['build-all']);