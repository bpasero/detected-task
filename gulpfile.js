var gulp = require('gulp');

gulp.task('build', function () {
    console.log('Build');
});

gulp.task('watch', function () {
    console.log('Watch');
    console.log("src/protocol.ts(413,17): error TS2304: Cannot find name 'TextDocumentClientCapabilities'.");
    console.log("src/protocol.ts(413,17): error TS4033: Property 'textDocument' of exported interface has or is using private name 'TextDocumentClientCapabilities'.");
});