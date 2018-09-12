//检测数组中是否存在某个字符串
function indexOfArray(search,array){
    for(var i in array){
        if(array[i]==search){
            return i;
        }
    }
    return -1;
}

module.exports = indexOfArray;
