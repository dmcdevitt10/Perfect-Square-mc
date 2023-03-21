function square(num){
    let sq = Math.sqrt(num)
    if(Math.round(sq) !== sq){
        return -1
    }
    sq += 1
    sq *= sq
    return sq
}
console.log(square(9))