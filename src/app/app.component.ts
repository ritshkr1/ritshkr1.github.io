import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator_Projects';
  data: string = "";
  result:string = "";
  clear() {
    if (this.data !="" ) {
      this.data=this.data.substr(0, this.data.length-1)
    }
  }

  allClear() {
    this.data = '';
    this.result = '';
  }
  pressNum(num: string) {

    //Do Not Allow . more than once
    if (num==".") {
      if (this.data !="" ) {

        const lastNum=this.getLastOperand()
        console.log(lastNum.lastIndexOf("."))
        if (lastNum.lastIndexOf(".") >= 0) return;
      }
    }
    if (num=="0") {
      if (this.data=="" ) {
        return;
      }
      const PrevKey = this.data[this.data.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+')  {
          return;
      }
    }

    this.data = this.data + num
    this.calcAnswer();
  }
  getLastOperand() {
    let pos:number;
    console.log(this.data)
    pos=this.data.toString().lastIndexOf("+")
    if (this.data.toString().lastIndexOf("-") > pos) pos=this.data.lastIndexOf("-")
    if (this.data.toString().lastIndexOf("*") > pos) pos=this.data.lastIndexOf("*")
    if (this.data.toString().lastIndexOf("/") > pos) pos=this.data.lastIndexOf("/")
    console.log('Last '+this.data.substr(pos+1))
    return this.data.substr(pos+1)
  }
  pressOperator(op: string) {

    //Do not allow operators more than once
    const lastKey = this.data[this.data.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
      return;
    }

    this.data = this.data + op
    this.calcAnswer();
  }
  calcAnswer() {
    let formula = this.data;

    let lastKey = formula[formula.length - 1];

    if (lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }

    lastKey = formula[formula.length - 1];

    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }

    console.log("Formula " +formula);
    this.result = eval(formula);
  }

  getAnswer() {
    this.calcAnswer();
    this.data = this.result;
    if (this.data=="0") this.data="";
  }
}
