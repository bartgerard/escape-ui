export class Mission {

  constructor(
    public start: Date,
    public end: Date
  ) {
  }

  static of(
    start: Date,
    minutes: number
  ): Mission {
    const now: Date = new Date();
    const end: Date = new Date();
    end.setMinutes(now.getMinutes() + minutes);
    return new Mission(now, end);
  };

}
