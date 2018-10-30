class Queue 
{
  constructor() {
    this.queue = [];
  }

  print() {
    console.log(this.queue);
  }

  enqueue(x) {
    this.queue[this.queue.length] = x;
  }

  isEmpty() {
     return this.queue.length == 0
  }
  
  peek() {
     if (this.isEmpty()) { return null }
     return this.queue[0]
  }
  
  dequeue() {
    if (this.isEmpty()) { return null }
    return this.queue.splice(0,1)[0]
  }

  dequeueMax() {
    let _q = new Queue()
    let maxValue = null

    while (!this.isEmpty()) {
      let value = this.dequeue()
      _q.enqueue(value)
      if (value > maxValue || maxValue == null) {
        maxValue = value
      }
    }
    
    let foundMax = false

    while (!_q.isEmpty()) {
      let value = _q.dequeue()
      if (value < maxValue || foundMax) {
        this.enqueue(value)
      } else if (value == maxValue) { foundMax = true; }
    }

    return maxValue
  }
}

class MaxValueQueue {
  constructor() {
    
  }

  print() {
    console.log(this.queue);
  }

  enqueue(x) {

  }

  isEmpty() {
     return this.queue.length == 0
  }
  
  peek() {
     if (this.isEmpty()) { return null }
     return this.queue[0]
  }
  
  dequeue() {

  }

  getMax() {
    
  }
}