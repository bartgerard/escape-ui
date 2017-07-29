export class Mission2 {

  constructor(
    public start: Date,
    public end: Date
  ) {
  }

  static of(
    start: Date,
    minutes: number
  ): Mission2 {
    const now: Date = new Date();
    const end: Date = new Date();
    end.setMinutes(now.getMinutes() + minutes);
    return new Mission2(now, end);
  };

}
