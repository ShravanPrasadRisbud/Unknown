class Player {
    constructor(){
        this.rank = null;
        this.distance = 0;
        this.name = null;
        this.count = null;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount: this.count
        });
    }

    updateCount(){
        database.ref('/').update({
            playerCount: count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref(playerIndex);
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        });
    }

    getCarsAtEnd(){
        database.ref(getCarsAtEnd).on("value",(data)=>{
            this.rank = data.val();
        });
    }

    static updateCarsAtEnd(rank){
        database.ref('/').update({
            CarsAtEnd: rank
        });
    }
    
}
