//Імпортування основного модуля ----------------------
import gulp from 'gulp';

// Імпортування допоміжних модулів --------------
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';





//передача даних в глобальний об'єкт ------------
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

// Імпортування тасків --------------------
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { server } from './gulp/tasks/server.js';
import { images } from './gulp/tasks/images.js';
import { js } from './gulp/tasks/js.js';
import { fonts } from './gulp/tasks/fonts.js';


function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images);
    // gulp.watch(path.watch.fonts, fonts);

}



//Побудова сценаріїв таксів
const mainTasks = gulp.parallel(copy, html, scss, js, images, fonts);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher,server))

// Сценарій виконання тасків ---------------------
gulp.task('default', dev);


