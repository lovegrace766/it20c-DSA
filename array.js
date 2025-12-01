class Array{
    constructor(){
        this.data = {};
        this.lenght = 0;

        for(let i = 0; i < arguments.length; i++){
            this.data[i] = arguments[i];
            this.lenght++;
        }   
}

transverse(){
    for(let i = 0; i < this.lenght; i++){
        console.log(this.data[i]);
    }   

    console.log("Lenght: " + this.lenght);
}    


insert(index,data){
    //Correvting Statement
    if(index >= 0 && index <= this.lenght){
        console.log("Invalid Index");
        return;
    }

    //Shifting Condition
    for(let i = this.lenght; i > index; i--){
        this.data[i] = this.data[i - 1];
    }
    this.data[index] = data;
    this.lenght++;  
}

search(data){
    for(let i = 0; i < this.lenght; i++){
        if(this.data[i] === data){
            return i;
        }
    }
    return -1;
}

search(element){
    for(let i = 0; i < this.lenght; i++){
        if(this.data[i] === element){
            return i;
        }
        return -1;
    }
}

update(index, element){
    //Correcting Statement
    if(index < 0 || index >= this.lenght){
        console.log("Invalid Index");
           return;
}

//Shifting
for(let i = index; i < this.lenght; i++){
    this.data[i] = this.data[i + 1];
}

delete this.data[this.lenght - 1];
this.lenght--;
}


delete(index){
    //Correcting Statement
    if(index < 0 || index >= this.lenght){
        console.log("Invalid Index");
        return;
    }
    this.data[index] = "--DELETED--";

}

}

//
arr1 = new Array([4,2,3]);

arr1.transverse();
arr1.insert(0,50);
arr1.transverse();
arr1.search(5);
arr1.update(10);
arr1.transverse();
arr1.delete(1);
arr1.transverse();