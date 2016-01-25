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

gulp.task('build-main-all',
    ['compile-styles'],
    shell.task('sphinx-build -b html -a -E . _build/html',
        { cwd: './main' }
    )
);

gulp.task('build-admin',
    ['compile-styles'],
	shell.task('make html', { cwd: './admin' })
);

gulp.task('build-admin-all',
    ['compile-styles'],
    shell.task('sphinx-build -b html -a -E . _build/html',
        { cwd: './admin' }
    )
);

gulp.task('build-dev',
    ['compile-styles'],
	shell.task('make html', { cwd: './dev' })
);

gulp.task('build-dev-all',
    ['compile-styles'],
    shell.task('sphinx-build -b html -a -E . _build/html',
        { cwd: './dev' }
    )
);

gulp.task('build-design',
    ['compile-styles'],
	shell.task('make html', { cwd: './design' })
);

gulp.task('build-design-all',
    ['compile-styles'],
    shell.task('sphinx-build -b html -a -E . _build/html',
        { cwd: './design' }
    )
);

gulp.task('build-all', ['build-main-all', 'build-admin-all', 'build-dev-all', 'build-design-all']);

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