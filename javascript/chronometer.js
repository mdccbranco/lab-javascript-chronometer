class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.currentTimeMil = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTimeMil += 1;
      if (this.currentTimeMil === 100) {
        this.currentTimeMil = 0;
        this.currentTime += 1;
      }
      callback();
    }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getMillis() {
    if(this.currentTimeMil > 99) return Math.floor(this.currentTimeMil/10)
    return this.currentTimeMil;
  }
  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }
  twoDigitsNumber(time) {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick(min, sec) {
  //   return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`
  // }
  splitClick() {
    const min = this.getMinutes();
    const sec = this.getSeconds();
    const mil = this.getMillis();
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(
      sec
    )}:${this.twoDigitsNumber(mil)}`;
  }
}
