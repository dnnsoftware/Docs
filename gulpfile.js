var gulp = require('gulp');
var shell = require('gulp-shell');

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
	gulp.watch(['./{admin,common,design,dev,main}/**/*.{rst,py,html,css,js}', '!./**/_build/**/*'], ['build-all'])	
});

gulp.task('default', ['build-all']);