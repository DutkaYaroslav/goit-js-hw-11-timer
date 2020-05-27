const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor(сalendar) {
    this.сalendar = сalendar.targetDate;
  }

  timer() {
    const time = this.сalendar.getTime() - new Date(Date.now()).getTime();

    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    const secs = Math.floor((time % (1000 * 60)) / 1000);

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
  }

  move() {
    setInterval(() => this.timer(), 1000);
  }
}

const setData = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("June 28, 2020"),
});

setData.timer();

setData.move();
