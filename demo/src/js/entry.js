/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-30 11:06:40
 * @version $Id$
 */
require('../css/style.css');
require('../images/share.png');
require('jquery');
document.write('it works of course,maybe');
document.write(require('./module.js'));
// document.write(require('!imports?$=jquery!./file.js'));
document.write(require('./file.js'));
