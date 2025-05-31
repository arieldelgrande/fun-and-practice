import { response } from "express";
import { CustomErrors } from "../errors/custom-errors.errors";

export function Number() {
  return (target: any, propertyKey: string) => {
    let value: any;

    if (!target.__number_props__) {
      target.__number_props__ = [];
    }

    target.__number_props__.push(propertyKey);

    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: number) {
        if (typeof newValue !== "number") {
          return (value = {
            error: true,
            message: `${propertyKey} must be of type number`,
            value: null,
          });
        }

        return (value = {
          error: false,
          message: "Value accepted",
          value: newValue,
        });
      },
    };
    Object.defineProperty(target, propertyKey, descriptor);
  };
}
