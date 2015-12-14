var gulp = require('gulp');
var shell = require('gulp-shell');
var argv = require('yargs').argv;

gulp.task('build-main',
	shell.task('make html', { cwd: './main' })
);

gulp.task('build-admin',
	shell.task('make html', { cwd: './admin' })
);

gulp.task('build-dev',
	shell.task('make html', { cwd: './dev' })
);

gulp.task('build-design',
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