
import {clear} from './utils'
import ctx from './ctx'
import Stats from 'stats.js'

var fpsCounter = new Stats();
fpsCounter.showPanel( 0 )
document.body.appendChild( fpsCounter.dom );

var start = null;

function tick(timestamp) {
    fpsCounter.begin()

    if (!start) start = timestamp;
    var progress = timestamp - start;
    
    clear(ctx)

    fpsCounter.end()

    if (progress < 2000) {
      window.requestAnimationFrame(tick);
    }
  }
  
  window.requestAnimationFrame(tick);