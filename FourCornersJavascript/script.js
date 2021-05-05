class FourCorners{
    constructor() {
        this.players = ["Kacy", "Lucas", "Ali", "Cheung", "Leila", "Jeff", "Fran", "Noah", "Eldece", "Marwan", "Laura", "Harry", "Tim", "Jess", "Keziah"];
        this.playersMap = {};
        this.eastList = [];
        this.southList = [];
        this.westList = [];
        this.northList = [];
    }

    onReset() {
        const { players, playersMap } = this;
        for (let i = 0; i < players.length; i++){
            const random = Math.floor(Math.random() * 4);
            playersMap[players[i]] = random;
        }
        this.rearrange();
    }

    reset() {
        const { playersMap } = this;
        for (let key in playersMap){
            const random = Math.floor(Math.random() * 4);
            playersMap[key] = random;
        }
        this.westList = [];
        this.southList = [];
        this.northList = [];
        this.eastList = [];
        this.rearrange();
    }

    rearrange() {
        //east0 west1 north2 south3
        let { playersMap } = this

        for (let key in playersMap) {
            const val= playersMap[key]
            if (val === 0) this.eastList.push(key)
            else if (val === 1) this.westList.push(key)
            else if (val === 2) this.northList.push(key)
            else this.southList.push(key)
        }

        this.listElement(this.eastList, 'east');
        this.listElement(this.westList, 'west');
        this.listElement(this.southList, 'south');
        this.listElement(this.northList, 'north');
    }

    listElement(list, id) {
        const ul = document.getElementById(`ul-${id}`);
        const parent = document.getElementById(id)
        ul.innerHTML = '';
        parent.appendChild(ul);

        for (let i = 0; i < list.length; i++){
            const li = document.createElement('li')
            li.id = `li${id}-${i}`
            li.innerText = list[i];
            ul.appendChild(li);
        }
        
    }

    onButtonClick(id) {
        const { playersMap, northList, eastList, westList, southList } = this; 
        let list
        if (id === 'north') {
            list = northList;
        } else if (id === 'east') {
            list = eastList
        } else if (id === 'west') {
            list = westList
        } else {
            list = southList
        }   
        for (let i = 0; i < list.length ;i++) {
            delete playersMap[list[i]];
            console.log(delete playersMap[list[i]], list[i]);
        }
        this.reset();
    }
}



var fourCorners = new FourCorners();