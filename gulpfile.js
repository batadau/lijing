var gulp = require('gulp');

//����webserver���
var webserver = require('gulp-webserver'); 

gulp.task('webserver', function(){
gulp.src('./')

.pipe(websersdfsfsdfver({
port: 80,//�˿�

host: '127.0.0.1',//����
liveload: true,//ʵʱˢ�´��롣����f5ˢ��
directoryListing: {
path: './',
enable: true
}
}))
});