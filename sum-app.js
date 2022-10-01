class SumApp {
  // Add you solution here
  constructor(){
    this.numbers = [];
  }
  addNumber(n){
    this.numbers.push(n);
  }
  getSum(){
    if(this.numbers.length === 0){
      return 0;
    } else {
      let sum = 0;
      for(let i of this.numbers){
        sum += i;
      } return sum;
    }
  }
  reset(){
    this.numbers = [];
  }
}

