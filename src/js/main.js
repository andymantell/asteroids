
import {clear} from './utils'
import ctx from './ctx'
import Stats from 'stats.js'
import Asteroid from './objects/asteroid'
import { canvasWidth, canvasHeight, numberOfAsteroids } from './config';

var fpsCounter = new Stats();
fpsCounter.showPanel( 0 )
document.body.appendChild( fpsCounter.dom );

var start = null;

const stage = []

function init() {
    for(var i=0;i<numberOfAsteroids;i++) {
        stage.push(new Asteroid(ctx, canvasWidth, canvasHeight))
    }
}

init()

function tick(timestamp) {
    fpsCounter.begin()

    clear(ctx)
    
    stage.map(item => item.draw())
    stage.map(item => item.tick())
    stage.map(item => item.collide(stage))

    fpsCounter.end()

    window.requestAnimationFrame(tick);
  }
  
  window.requestAnimationFrame(tick);