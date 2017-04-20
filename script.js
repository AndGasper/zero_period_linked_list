function linked_list(){
    this.head = null;
    this.current = null;
    this.count = 0;
    this.nodeList = {};
    this.add_list_item = function(data_payload){
        //create new object
        let node = {
            value: data_payload,
            next: null,
            isHead: false,
            isTail: false,
        };

        console.log("this.current", this.current);
        console.log("node",node);
        //if current is not null
        if (this.current !== null) {
            // console.log("this.current",this.current);
            // console.log("this.current.next",this.current.next);
            // set current next to new object
            node.isHead = false;
            (this.current.next === null)?(node.isTail = true):(node.isTail = false);
            this.current.next = node;
            this.current = node;
            this.nodeList[node.value] = node;
            //else
        } else {
            // HEAD = new_obj
            node.isHead = true;
            node.isTail = false;
            this.current = node; // set current node equal to the input
            this.head = node; // set the head = to the node added.
            this.nodeList[node.value] = node;
        }
        //increment count
        //returns count
        console.log(this.head);
        return this.count +=1;
    };
    this.get_current_value = function(){
        //return the value of the current link list node
        if (this.current.value !== null) {
            return this.current.value;
        }

    };
    this.get_next_value = function(){
        //walk to the next item in the list
        //returns the value of the item walked to
        //if there are no other items, it returns false
        if (this.current.next !== null) {
            this.current = this.current.next;
            return this.get_current_value();
        } else {
            return false;
        }
    };
    this.rewind = function(){
        //moves the list pointer back to the beginning of the list
        //returns true if accomplished, or false if the list is empty
        console.log("this.current", this.current);
        console.log("this.head", this.head);
        if (this.current !== null) {
            return this.current = this.head;
        } else {
            return false;
        }
    };
    // node1 -> node2 => node1 -> nodeToInsert -> node2
    this.editLinkedList= (nodeToInsert, nodeToLinkTo) => {
//     console.log('this.nodeList',this.nodeList);
//     console.log('this.nodeList.nodeToLinkTo', this.nodeList[nodeToLinkTo]);
        if (this.nodeList[nodeToLinkTo].next.next === null) {
            nodeToInsert.next = this.nodeList[nodeToLinkTo].next; // nodeToInsert -> node2;
            nodeToLinkTo.isHead = false;
            nodeToLinkTo.isTail = false;
            nodeToInsert.next.isHead = false; // nodeToInsert.next := node2;
            nodeToInsert.next.isTail = true;
            this.nodeList[nodeToLinkTo].next = nodeToInsert; // node1 -> nodeToInsert;
            this.nodeList[nodeToInsert.value] = nodeToInsert; // this.nodeList.(key) = nodeToInsert
        }
        console.log(this.nodeList);

        return (this.nodeList);
    }
}

let list = new linked_list();
console.log(list);
console.log("list.rewind()",list.rewind()); //returns false
console.log("list.add_list_item(1)",list.add_list_item(1)); //returns 1
console.log("list.add_list_item(3)",list.add_list_item(3)); //returns 2
console.log("list.add_list_item(8)",list.adds_list_item(8)); //returns 3
console.log(list);
console.log("list.get_current_value()",list.get_current_value()); //returns 8
console.log("list.rewind()",list.rewind()); //returns true
console.log("list.get_current_value()",list.get_current_value()); //returns 1
console.log("list.get_next_value()", list.get_next_value()); //returns 3
console.log("list.get_current_value()",list.get_current_value()); //returns 3
console.log("list.get_next_value()", list.get_next_value());//returns 8
console.log("list.get_next_value()", list.get_next_value());//returns false
console.log('list.editLinkedList({value:5,next:null},3)',list.editLinkedList({value:5,next:null,isHead:false,isTail:false},3));


