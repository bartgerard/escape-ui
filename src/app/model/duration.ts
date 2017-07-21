export class Duration {

  constructor(
    public days: number,
    public hours: number,
    public minutes: number,
    public seconds: number,
    public milliseconds: number
  ) {
  }

  static between(
    date1: Date,
    date2: Date
  ): Duration {
    let difference: number = Math.abs(date1.getTime() - date2.getTime());
    const days: number = Math.floor(difference / (24 * 60 * 60 * 1000)) % 24 * 60 * 60;

    const hours: number = Math.floor(difference / (60 * 60 * 1000)) % (60 * 60);

    const minutes: number = Math.floor(difference / (60 * 1000)) % 60;

    const seconds: number = Math.floor(difference / 1000) % 60;

    const milliseconds: number = difference % 1000;

    //console.log(difference);
    //console.log(difference + ' => ' + days + ' ' + hours + ' ' + minutes + ' ' + seconds + ' ' + milliseconds);

    return new Duration(
      days,
      hours,
      minutes,
      seconds,
      milliseconds
    );
  }

}
