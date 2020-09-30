export class Utils {
  public static findMax(...args: number[]): number {
    let len = args.length, max = -Infinity;
    while (len--) {
      if (Number(args[len]) > max) {
        max = Number(args[len]);
      }
    }
    return max
  }

  public static findMin(...args: number[]): number {
    let len = args.length, min = Infinity;
    while (len--) {
      if (Number(args[len]) < min) {
        min = Number(args[len]);
      }
    }
    return min
  }

  public static reformatData(x: any): Record<string, any> {
    const arr = {}
    x.forEach(posi => {
      if (!posi.role) return
      if (!arr[posi.role]) arr[posi.role] = [{ "nickname": posi.name }]
      else arr[posi.role].push({ "nickname": posi.name })
    })

    const ordered = {};
    Object.keys(arr).sort().forEach((key) => {
      ordered[key] = arr[key];
    });

    return ordered
  }
}

export default Utils

