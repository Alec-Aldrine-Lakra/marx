const template = `<div class="color-palette">
    <div class="colors">
        <input type="radio" name="color" [(ngModel)]="color" (ngModelChange)="change($event)" value="red"><span class="red"></span>
    </div>
    <div class="colors">
        <input type="radio" name="color"  [(ngModel)]="color" (ngModelChange)="change($event)" value="orange"><span class="orange" ></span>
    </div>
    <div class="colors">
        <input type="radio" name="color" [(ngModel)]="color" (ngModelChange)="change($event)" value="yellow"><span class="yellow"></span>
    </div>
    <div class="colors">
        <input type="radio" name="color" [(ngModel)]="color" (ngModelChange)="change($event)" value="purple"><span class="purple"></span>
    </div>
    <div class="colors">
        <input type="radio" name="color" [(ngModel)]="color" (ngModelChange)="change($event)" value="teal"><span class="teal"></span>
    </div>
    <div class="colors">
        <input type="radio" name="color" [(ngModel)]="color" (ngModelChange)="change($event)" value="green"><span class="green"></span>
    </div>
    <div class="colors">
        <input type="radio" name="color" [(ngModel)]="color" (ngModelChange)="change($event)" value="grey"><span class="grey"></span>
    </div>
    <div class="colors">
        <input type="radio" name="color" [(ngModel)]="color" (ngModelChange)="change($event)" value="black"><span class="black"></span>
    </div>
    <div class="colors">
        <input type="radio" name="color" [(ngModel)]="color" (ngModelChange)="change($event)" value="white"><span class="white"></span>
    </div>
</div>`

export default template;
 