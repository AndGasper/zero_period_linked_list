// var testArray = [1,2,3,4,5,6,7,8,9,10];
var testArray = [1,2,3,4,5,6,7,8,9,11,12,15,19,20];

function Tree() {
    this.root = null; // "Top" of tree
    this.nodeList = null;
    this.nodeMaker = (element) => {
        return node = {value: element, leftNode: null, rightNode: null}
    };
    this.populateNodeList = (array) => {
        this.nodeList = array.map(this.nodeMaker);
    };

    this.connectNodes = (node1, node2) => {
        if (node1.value < node2.value) {
            node2.leftNode = node1;
        }
        else if (node1.value > node2.value) {
            node2.rightNode = node1;
        }
        return this.nodeList;
    };

    this.addNode = (node) => {
        let root = this.root; // initial value is null
        //if the root is undefined, define the root as whatever node was passed in
        if (!this.root) {
            return this.root = node;
        }
        let currentNode = root;
        let nextNode = node;
        while (currentNode) {
            // if the node to add is less than the currentNode/root node, add it to the left of the tree, only if the left position is available
            if (node.value < currentNode.value) {
                if (!currentNode.leftNode) {
                    currentNode.leftNode = nextNode;
                    break;
                } else {
                    currentNode = currentNode.leftNode;
                }
            }
            // else the node to add is greater than the currentNode/root node, add it to the right of the tree, only if the right position is available
            else {
                if (!currentNode.rightNode) {
                    currentNode.rightNode = nextNode;
                    break;
                }
            }
        }
    };
}


var tree = new Tree();
tree.populateNodeList(testArray);
console.log(tree);
