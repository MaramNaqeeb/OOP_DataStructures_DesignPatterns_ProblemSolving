class Graph {
  constructor() {
    this.list = {};
  }
  addNode(val) {
    // or addVertix
    this.list[val] = []; // initially it is an empty array
  }
  addEdge(n1, n2) {
    this.list[n1].push(n2);
    this.list[n2].push(n1);
  }
  removeEdge(n1, n2) {
    this.list[n1] = this.list[n1].filter((node) => node != n2); // to remove n2
    this.list[n2] = this.list[n2].filter((node) => node != n1); // to remove n1
  }
  printGraph() {
    for (let node in this.list) {
      console.log(node + "==>" + this.list[node]);
    }
  }
  isNeighbor(n1, n2) {
    console.log(this.list[n1].includes[n2]);
  }
  bfs(node) {
    //Breadth first search
    let visited = new Set();
    let result = [];
    let queue = [node];
    while (queue.length !== 0) {
      let curr = queue.shift(); // delete the node that got added in the below loop
      if (!visited.has(curr)) {
        visited.add(curr);
        result.push(curr);
      }
      for (let neighbor of this.list[curr]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);  // add the neighbor to the queue
        }
      }
    }
    return result;
  }
  dfs(node) {
    // Depth first search
    let visited = new Set();
    let result = [];
    let stack = [node];
    while (!stack.length == 0) {
      let curr = stack.pop();
      if (!visited.has(curr)) {
        visited.add(curr);
        result.push(curr);
      }
      for (let neighbor of this.list[curr]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
    return result;
  }
}
const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");
graph.addNode("G");
graph.addEdge("A", "B");
graph.addEdge("A", "E");
graph.addEdge("A", "D");
graph.addEdge("B", "C");
graph.addEdge("B", "E");
graph.addEdge("D", "E");
graph.addEdge("C", "F");
graph.addEdge("C", "G");
graph.addEdge("C", "E");
graph.addEdge("F", "E");
graph.addEdge("F", "G");
graph.printGraph()
console.log(graph.bfs("A"));
console.log(graph.dfs("A"));
