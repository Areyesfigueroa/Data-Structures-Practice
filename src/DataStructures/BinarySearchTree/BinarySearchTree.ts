export {};

export class BinarySearchTree {
  root: Node | null = null;
  length: number = 0;

  public addNode = (key: number, name: string): void => {
    const newNode: Node = new Node(key, name);
    this.length++;

    if (this.root === null) {
      this.root = newNode;
    } else {
      let focusNode: Node | null = this.root;
      let parent: Node | null = this.root;

      let safetyCounter = 0;
      while (safetyCounter <= this.length) {
        safetyCounter++;
        parent = focusNode;

        if (!focusNode || !parent) return;

        if (key < focusNode.key) {
          //Going left
          focusNode = focusNode.leftNode;
          if (focusNode === null) {
            parent.leftNode = newNode;
            return;
          }
        } else {
          //Going right
          focusNode = focusNode.rightNode;
          if (focusNode === null) {
            parent.rightNode = newNode;
            return;
          }
        }
      }
    }
  };
  public preOrderTraveral = (focusNode: Node | null): void => {
    if (focusNode != null) {
      console.log(`${focusNode.key}: ${focusNode.name}`);
      this.preOrderTraveral(focusNode.leftNode);
      this.preOrderTraveral(focusNode.rightNode);
    }
  };
  public inOrderTraveral = (focusNode: Node | null): void => {
    if (focusNode != null) {
      this.inOrderTraveral(focusNode.leftNode);
      console.log(`${focusNode.key}: ${focusNode.name}`);
      this.inOrderTraveral(focusNode.rightNode);
    }
  };
  public postOrderTraveral = (focusNode: Node | null): void => {
    if (focusNode != null) {
      this.postOrderTraveral(focusNode.leftNode);
      this.postOrderTraveral(focusNode.rightNode);
      console.log(`${focusNode.key}: ${focusNode.name}`);
    }
  };
  public findNode = (key: number): Node | null => {
    let focusNode: Node | null = this.root;
    if (focusNode === null) return null;

    while (focusNode.key !== key) {
      if (key < focusNode.key) {
        focusNode = focusNode.leftNode;
      } else {
        focusNode = focusNode.rightNode;
      }

      if (focusNode === null) return null;
    }

    return focusNode;
  };
}

export class Node {
  key: number;
  name: string;

  leftNode: Node | null = null;
  rightNode: Node | null = null;
  constructor(key: number, name: string) {
    this.key = key;
    this.name = name;
  }
}
