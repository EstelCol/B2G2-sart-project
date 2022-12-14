const GulpClient = require("gulp")

const hello = (done) => {
    console.log("hello B2G2")
    done()
}

exports.default = hello;




const gulp = require("gulp")
const uglify = require("gulp-uglify")

const javascript = (done) => {


      gulp.src("./src/js/*js")
          .pipe(uglify())
          .pipe(gulp.dest("./dist/js"))

          done()

}

exports.default = javascript