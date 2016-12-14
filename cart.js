class Cart{
  constructor(i,q){
    this.itemList=i;
    this.itemQuantity=q
  }

  addItem(i,q){
    this.itemList.push(i);
    this.itemQuantity.push(q);
  }
  totalCart(){
    let total=0;
    for(i=0; i<this.itemlist.length i++){
      total += this.itemList[i].price*this.itemQuantity[]
      return total; 
    }
