class App {
  constructor(name) {
    this.name = name;
  }

  mount(node) {
    node.textContent = this.name;
  }
}

export default App;
