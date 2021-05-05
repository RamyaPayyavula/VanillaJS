class Stopwatch{
    constructor(id, delay) {
        this.status = 'paused';
        this.delay = delay;
        this.display = document.getElementById(id);
        this.value = 0;
        this.interval = null;
    }

    formatTime(ms) {
        let hour = Math.floor(ms / 3600000);
        let min = Math.floor((ms - hour * 3600000) / 60000);
        let seconds = Math.floor    ((ms - hour * 3600000 - min * 60000) / 1000);
        if (hour < 10) hour = `0${hour}`;
        if (min < 10) min= `0${min}`;
        if (seconds < 10)seconds = `0${seconds}`;
        return  `${hour}:${min}:${seconds}`;
    }
    
    update() {
        console.log('thissss',this.status, this.value)
        if (this.status === 'running') {
            this.value += this.delay
        }
        console.log('this.sss',this.value)
        this.display.innerText = this.formatTime(this.value);
    }

    start() {
        if (this.status = 'paused') {
            this.status = 'running';
            this.interval = setInterval(()=>this.update(), this.delay)
        }
    }

    stop() {
        if (this.status = 'running') {
            this.status = 'paused';
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        }
        
    }

    reset() {
        this.value = 0;
        this.stop();
        this.update();

    }
}

const stopwatch = new Stopwatch('stopwatch', 1000);