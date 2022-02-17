const filterArr = (element, type) => {
    let types = element.type.types.filter(ty => ty.name == type );
    if(types.length > 0){
        return true;
    }else{
        return false;
    }
}

module.exports = filterArr;