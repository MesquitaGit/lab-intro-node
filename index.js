class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if(pos > this.items.length){
    throw new Error('OutOfBounds');
    }else{
    return this.items[pos];
    }
  };

  max() {

    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }

    const max = this.items.reduce((a, b) => { return Math.max(a, b) });
    return max;
  }

  min() {

    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }

    const min = this.items.reduce((a, b) => { return Math.min(a, b) });
    return min;
  }

  sum() {

    if(this.items.length === 0){
      return 0;
    }

    let sum = this.items.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
  });
    return sum;
  }

  avg() {

    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }

    let sum = this.items.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
  });
    return sum / this.items.length;
  }
}

module.exports = SortedList;
