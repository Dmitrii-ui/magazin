const gulp = require('gulp')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')
const cleanCSS = require('gulp-clean-css')
const babel = require('gulp-babel')
const HTMLMinimizer = require('gulp-html-minimizer')
const rm = require('gulp-rm')
const { series } = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
const sourcemaps = require('gulp-sourcemaps')
const gulp_if = require('gulp-if')

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'


gulp.task('clean', () => {
    return gulp.src('dist/**/*', {read: false}).pipe(rm())
})

gulp.task('styles', () => {
    return gulp.src('src/styles/**/*.scss')
            .pipe(gulp_if(isProd, sourcemaps.init()))
            .pipe(sass())
            .pipe(autoprefixer({
                'Browserslist config': ['last 2 versions'],
                cascade: false
            }))
            .pipe(concat('bundle.min.css'))
            .pipe(cleanCSS())
            .pipe(gulp_if(isProd, sourcemaps.write()))
            .pipe(gulp.dest('dist/css'))
            .pipe(browserSync.reload({stream: true}))
})

gulp.task('media', () => {
    return gulp.src('src/media/*.scss')
            .pipe(gulp_if(isProd, sourcemaps.init()))
            .pipe(sass())
            .pipe(autoprefixer({
                'Browserslist config': ['last 2 versions'],
                cascade: false
            }))
            .pipe(concat('media.bundle.min.css'))
            .pipe(cleanCSS())
            .pipe(gulp_if(isProd, sourcemaps.write()))
            .pipe(gulp.dest('dist/css'))
            .pipe(browserSync.reload({stream: true}))
})

gulp.task('html', () => {
    return gulp.src('*.html')
            .pipe(gulp_if(isProd, HTMLMinimizer({collapseWhitespace: true})))
            .pipe(gulp.dest('dist'))
            .pipe(browserSync.reload({stream: true}))
})

gulp.task('img', () => {
    return gulp.src('src/img/**/*')
            .pipe(gulp.dest('dist/img'))
})

gulp.task('js', () => {
    return gulp.src('src/js/**/*.js')
            .pipe(gulp_if(isProd, sourcemaps.init()))
            .pipe(concat('main.min.js'))
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
            .pipe(gulp_if(isProd, sourcemaps.write()))
            .pipe(gulp.dest('dist/js'))
            .pipe(browserSync.reload({stream: true})) 
})

gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
})

gulp.task('default', series('clean', 'styles', 'media', 'js', 'img', 'html', 'server'))

gulp.watch('src/styles/**/*.scss', series('styles'))
gulp.watch('src/media/*.scss', series('media'))
gulp.watch('*.html', series('html'))
gulp.watch('src/js/**/*.js', series('js'))