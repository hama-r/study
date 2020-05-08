const gulp = require('gulp')
const imageminPngquant = require('imagemin-pngquant')
const gulpLoadPlugins = require('gulp-load-plugins')
const pl = gulpLoadPlugins()

const srcDir = './src'
const distDir = './dist'
const imgDir = '/images'
const templateFile = './gulp/temp.html'

const imageminOption = [
  imageminPngquant({
    quality: '65-80'
  }),
  pl.imagemin.optipng(),
  pl.imagemin.svgo()
]

gulp.task('imagemin', () => {
  return gulp.src(srcDir + imgDir + '/**/*')
    .pipe(pl.imagemin(imageminOption))
    .pipe(gulp.dest(distDir + imgDir))
})

gulp.task('svgbuild', () => {
  return gulp
    .src(srcDir + '/svg/*')
    .pipe(pl.svgmin())
    .pipe(pl.svgstore({ inlineSvg: true }))
    .pipe(
      pl.cheerio(function ($) {
        $('svg').attr({
          style: 'position: absolute; width: 0; height: 0;',
          width: 0,
          height: 0
        })
        const symbols = $('svg > symbol')
          .map(function () {
            return {
              id: $(this).attr('id')
            }
          })
          .get()
        gulp
          .src(templateFile)
          .pipe(
            pl.template({
              inlineSvg: $('svg'),
              symbols: symbols
            })
          )
          .pipe(gulp.dest(distDir + '/svg'))
      })
    )
    .pipe(gulp.dest(srcDir + imgDir))
})
