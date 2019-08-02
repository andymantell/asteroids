import {canvasHeight, canvasWidth} from './config'

const canvas = document.createElement('canvas')
canvas.width = canvasWidth
canvas.height = canvasHeight
document.body.appendChild(canvas)

const ctx = canvas.getContext('2d')

export default ctx