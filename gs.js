class GS{
    constructor(){

    }

    display(){

    }

    readGS(){
var gameRef = database.ref("gamestate");
gameRef.on('value', function(data){
    gameS = data.val();
})
    }

    writeGS(gameS){
database.ref('/').update({
gamestate:gameS
})
    }
}