import { response } from "express";
import { CustomErrors } from "../errors/custom-errors.errors";

export function Number() {
  return (target: any, propertyKey: string) => {
    let value: number;

    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: number) {
        if (value !== undefined) {
          return value;
        }

        if (typeof newValue !== "number") {
          throw CustomErrors.BadRequest(
            `${propertyKey} must be of type number`,
          );
        }
        value = newValue;
        return value;
      },
    };
    Object.defineProperty(target, propertyKey, descriptor);
  };
}
