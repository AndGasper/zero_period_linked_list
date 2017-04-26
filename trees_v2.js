
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
    var root = this.root;

    if(!root){
        this.root = new Node(val);
        return;
    }
    var currentNode = root;
    var newNode = new Node(val);

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

}

var bst = new BinarySearchTree();
var testArray = [0, 14, 28, 42, 53, 69, 84, 92, 128, 137, 156, 170, 171];
for (var i = parseInt(testArray.length/2); i < testArray.length; i++) {
    bst.push(testArray[i]);
}
for (var j = parseInt(testArray.length/2); j >= 0; j--) {
    bst.push(testArray[j]);
}

console.log(bst);

