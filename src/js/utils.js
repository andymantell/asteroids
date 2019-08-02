import {canvasHeight, canvasWidth} from './config'

function clear(ctx) {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)
}

export {clear}