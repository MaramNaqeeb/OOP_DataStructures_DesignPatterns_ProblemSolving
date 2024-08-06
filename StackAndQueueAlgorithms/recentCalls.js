class RecentCalls {
  constructor() {
    this.requests = [];
  }

  ping(time) {
    this.requests.push(time);
    while (this.requests[0] < time - 3000) {
      this.requests.shift();  // delete all the previous requests
    }
    return this.requests.length;
  }
}

var calls = new RecentCalls();
console.log(calls.ping(2));
console.log(calls.ping(20));
console.log(calls.ping(2000));
console.log(calls.ping(8000));
console.log(calls.ping(8050));
console.log(calls.ping(100000));
