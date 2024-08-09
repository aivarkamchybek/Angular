import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
{
  counter = 0;
  interval: any;

  @Input()
  firstName = '';

  @ContentChild('parentContent', { static: true }) parentContent: any;
  @ViewChild('childContent', { static: true }) childContent: any;

  constructor() {
    console.log('Child Constructor called');
  }

  ngOnInit(): void {
    console.log('Child OnInit - component is initialized');
    console.log('init - ' + this.parentContent?.nativeElement.textContent);
    console.log('init - ' + this.childContent?.nativeElement.textContent);
  }

  ngOnDestroy() {
    // clearInterval(this.interval);
    console.log('Child OnDestroy - component is destroyed');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Child OnChanges');
    console.log('Changes:', changes);
    console.log('onChanges - ' + this.parentContent?.nativeElement.textContent);
    console.log('onChanges - ' + this.childContent?.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('Child DoCheck');
    console.log('doCheck - ' + this.parentContent?.nativeElement.textContent);
    console.log('doCheck - ' + this.childContent?.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log('Child After Content Init');
    console.log('AfterContentInit - ' + this.parentContent?.nativeElement.textContent);
    console.log('AfterContentInit - ' + this.childContent?.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('Child After Content Checked');
    console.log('AfterContentChecked - ' + this.parentContent?.nativeElement.textContent);
    console.log('AfterContentChecked - ' + this.childContent?.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('Child After View Init');
    console.log('AfterViewInit - ' + this.childContent?.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('Child After View Checked');
    console.log('AfterViewChecked - ' + this.childContent?.nativeElement.textContent);
  }

  updateFirstName(newName: string) {
    this.firstName = newName;
  }
}
