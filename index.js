
//node class
class Node {

    //constructor for node class
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//BST class
class BST {

    //constructor for BST class
    constructor(value){
        this.root = new Node(value);
        this.count = 1;
    }

    //how big is the tree
    size(){
        return this.count
    }

    //insert into tree
    insert(value){
        this.count++;

        //create new node
        let newNode = new Node(value);

        //recursive search function
        const searchTree = (node) => {

            //if value is less than node.value go left
            if (value<node.value){
                //if no left child append new node
                if(!node.left){
                    node.left = newNode;
                } 
                //if there is a left child we call search tree again
                else {
                    searchTree(node.left);
                }
            }

            //if value is greater than node.value go right
            else if (value>node.value){
                
                //if no right node append new node
                if (!node.right){
                    node.right = newNode;
                }
                //if there is a right child we call search tree again
                else {
                    searchTree(node.right);
                }

            }
        }

        //run search tree on root node
        searchTree(this.root);
    }

    //find the last left child
    min(){
        //creates variable and sets it to root
        let currentNode = this.root;

        //while loop to go down the left side of the tree
        while(currentNode.left){
            currentNode = currentNode.left;
        }

        //retuns current value when no more child nodes
        return currentNode.value
    }

    //find the last right child
    max(){
                //creates variable and sets it to root
                let currentNode = this.root;

                //while loop to go down the right side of the tree
                while(currentNode.right){
                    currentNode = currentNode.right;
                }
        
                //retuns current value when no more child nodes
                return currentNode.value
    }

    //determines if value exists in the tree
    contains(value){

        //set variable to root
        let currentNode = this.root;

        //while loop through current node 
        while (currentNode){

            //if value equals current node value
            if (value===currentNode.value){
                return true
            }

            // if value is less than left child node set current value to left child
            if (value<currentNode.value){
                currentNode = currentNode.left;
            }

            // if value is greater than left child node set current value to right child
            else {
                currentNode = currentNode.right;
            }
        }

        return false;
    }

    //depth first search - looks branch by branch

    //in order comes out in order
    //checks left, root, right
    dfsInOrder(){

        //create array
        let result = [];

        //nested recursive function
        const traverse = (node) => {

            //checks if there is a left node keep traversing left
            if (node.left) {traverse(node.left);}
                
            //capture root node value
            result.push(node.value);

            //if right child exists
            if (node.right){traverse(node.right);}
        }

        //calls traverse
        traverse(this.root)

        //return the array
        return result;
    }

    //pre order
    //checks root, left, right
    dfsPreOrder(){
        
        //create array
        let result = [];

        //nested recursive function
        const traverse = (node) => {

            //capture root node value
            result.push(node.value);

            //checks if there is a left node keep traversing left
            if (node.left) {traverse(node.left);}            

            //if right child exists
            if (node.right){traverse(node.right);}
        }

        //calls traverse
        traverse(this.root)

        //return the array
        return result;
    }

    //post order
    // checks left, right, root
    dfsPostOrder(){
        //create array
        let result = [];

        //nested recursive function
        const traverse = (node) => {

            //checks if there is a left node keep traversing left
            if (node.left) {traverse(node.left);}            

            //if right child exists
            if (node.right){traverse(node.right);}
            
            //capture root node value
            result.push(node.value);
        }

        //calls traverse
        traverse(this.root)

        //return the array
        return result;
    }

    //breadth first search - looks level by level

    //uses a queue
    bfs(){

        //create array
        let result = [];
        let queue = [];

        //push root node into the queue
        queue.push(this.root);

        //loops through queue
        while (queue.length){

            //removes the first item from queue array
            let currentNode = queue.shift();

            //adds that item taken from queue array to the end of result array
            result.push(currentNode.value);

            // if the current node has a left child
            if (currentNode.left){

                //push that left child into the queue array
                queue.push(currentNode.left);
            }

            // if the current node has a right child
            if (currentNode.right){

                //push that right child into the queue array
                queue.push(currentNode.right);
            }
        }

        //return the array
        return result;
    }
}


//                             15
//                           /    \
//                          3      36
//                        /  \    /  \
//                       2    12 28  39


//testing it out
const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

console.log('bst = ', bst);
console.log("********************************************");
console.log('bst size = ', bst.size());
console.log("********************************************");
console.log('bst min = ', bst.min());
console.log("********************************************");
console.log('bst max = ', bst.max());
console.log("********************************************");
console.log('bst = ', bst.dfsInOrder());
console.log("********************************************");
console.log('bst = ', bst.dfsPreOrder());
console.log("********************************************");
console.log('bst = ', bst.dfsPostOrder());
console.log("********************************************");
console.log('bfs = ', bst.bfs());
console.log("********************************************");
console.log('bst insert 14 = ', bst.insert(14));
console.log("********************************************");
console.log('bst contains 14? ', bst.contains(14));
console.log("********************************************");
console.log('bst contains 55? ', bst.contains(55));
console.log("********************************************");
console.log('bst = ', bst);
console.log("********************************************");