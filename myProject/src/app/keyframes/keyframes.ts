import { keyframes,style } from "@angular/animations";


export const slideOutLeft = [
    style({transform : 'translate3d(0, 0, 0)', offset : 0}),
    style({visibility: 'hidden',  transform : 'translate3d(-60%, 0, 0)',offset : 0.7})

]

export const slideOutRight = [
    style({transform : 'translate3d(0, 0, 0)', offset : 0}),
    style({visibility: 'hidden',  transform : 'translate3d(60%, 0, 0)',offset : 0.7})


]