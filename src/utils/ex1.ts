import { Length } from "class-validator"

export class Utils {
  public static findMax(...valMax: number[]): number {
    let len = valMax.length, max = -Infinity;
    while (len--) {
      if (Number(valMax[len]) > max) {
        max = Number(valMax[len]);
      }
    }
    return max
  }

  public static findMin(...valMin: number[]): number {
    let len = valMin.length, min = Infinity;
    while (len--) {
      if (Number(valMin[len]) < min) {
        min = Number(valMin[len]);
      }
    }
    return min
  }

  public static reformatData(x: any): Record<string, any> {
    return {}
  }
}

export default Utils

