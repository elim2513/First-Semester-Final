class Password{
  constructor(pub,pri){
    this.publickey=pub;
    this.privatekey=pri;
  }
  validPublickey(){
    if(this.publickey.length >=8 && this.publickey <=25){
      return true;
    }
    else{
      return false;
    }
  }
  validPrivatekey(){
    
  }
