import {Node} from './Node.js';

export class List{
    constructor(){
        this.count = 0;
        this.root = null;
    }
    
    // Add a new element at the end
    Add(value){
        this.count++;
        let lastNode = this.GetLast();
        let newNode = new Node(lastNode, null, value);
        if (lastNode == null){
            //add as the root
            this.root = newNode;
            return;
        }

        lastNode.child = newNode;
        console.log(this.root);
    }

    // Remove the last element
    Remove(){
        let lastNode = this.GetLast();
        if (lastNode == null){
            // If last node is root and is null do nothing
            return null;
        }
        
        this.count--;
        if(lastNode == this.root){
            this.root = null;
            return;
        }

        lastNode.parent.child = null;
    }

    // Add a new element at index
    AddAtIndex(value, index){
        this.HandleOutOfRange(index);
        let foundNode = this.GetAtIndex(index);
        let isFoundNodeRoot = this.root == foundNode;
        //new node will be inserted to the left of the foundNode2
        let newNode = new Node(foundNode?.parent, foundNode, value);

        this.count++;
        // Insert to the root
        if (isFoundNodeRoot){
            if(this.root != null){
                this.root.parent = newNode;
            }
            this.root = newNode
            return;
        }

        if (foundNode != null){
            foundNode.parent.child = newNode;
            foundNode.parent = newNode;
            return;
        }

        // Insert to last place
        let lastNode = this.GetLast();
        newNode.parent = lastNode;
        lastNode.child = newNode;
    }

    // Remove the element at index
    RemoveAtIndex(index){
        this.HandleOutOfRange(index);

        let node = this.GetAtIndex(index);
        if (node == null){
            return;
        }

        this.count--;

        if (node == this.root){
            node.parent = null;
            this.root = node.child;
            return;
        }

        node.parent.child = node.child;
        if(node.child != null){
            node.child.parent = node.parent;
        }
    }

    // Get the node at index
    GetAtIndex(index){
        if(this.root == null){
            return null;
        }
        
        let node = this.root;
        // Loop thru all nodes until index is reached
        while(--index >= 0){
            node = node.child;
            // Don't need to continue the loop because if node is null then there should be no more nodes after
            if (node == null){ 
                return null;
            }
        }

        return node;
    }

    // Get the first node #root
    GetFirst(){
        return this.root;
    }

    // Get the last node
    GetLast(){
        if(this.root == null){
            return null;
        }

        // Loop thru all nodes until last is reached
        let node = this.root;
        while(node.child != null){
            node = node.child;
        }

        return node;
    }

    ShowEverything(){
        let result = "";
        
        let node = this.root;
        if(node == null){
            return "";
        }

        // Loop thru all nodes until last is reached
        while(node != null){
            result += `${node.value}`
            if(node.child != null){
                result += ` - `
            }
            node = node.child;
        }
        return result;
    }

    HandleOutOfRange(index){
        if(index < 0){
            throw("Out of range");
        }

        if(index > this.count){
            throw("Out of range");
        }
    }
}