import { Component } from '@angular/core';

@Component({
    selector: 'image-box',
    template: `
    <div>
        <h1>Friend!</h1>
    </div>
    `
    ,
    styles: ['h1 { color: yellowgreen; }', 
            'div { background: gold; width: 300px; height: 300px;}']
})

export class ImageBoxComponent {};