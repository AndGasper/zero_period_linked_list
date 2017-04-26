
// Taken from https://khan4019.github.io/front-end-Interview-Questions/bst.html
function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}
function BinarySearchTree(){
    this.root = null;
}

BinarySearchTree.prototype.push = function(val){
    let root = this.root;

    if(!root){
        this.root = new Node(val);
        return;
    }
    let currentNode = root;
    let newNode = new Node(val);

    while(currentNode){
        if(val < currentNode.value){
            if(!currentNode.left){
                currentNode.left = newNode;
                break;
            }
            else{
                currentNode = currentNode.left;
            }
        }
        else{
            if(!currentNode.right){
                currentNode.right = newNode;
                break;
            }
            else{
                currentNode = currentNode.right;
            }
        }
    }

};

function leftBranch(array) {
    for (let j = parseInt(array.length/2); j >= 0; j--) {
        bst.push(array[j]);
    }
};

function rightBranch(array) {
    for (let i = parseInt(array.length/2); i < array.length; i++) {
        bst.push(array[i]);
    }
};

var bst = new BinarySearchTree();
var testArray = [0, 14, 28, 42, 53, 69, 84, 92, 128, 137, 156, 170, 171];
leftBranch(testArray);
rightBranch(testArray);
console.log(bst);

