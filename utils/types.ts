export type actionFunction = (prevState: any, formData: FormData) =>
  Promise<{ message: string }>


export type VehicleColorType = {
  name: string,
  value: string
}

export type GasType = {
  name: string;
};

export type VehicleType = {
  name: string;
};

export type carMakesAndModelsTypes = {
  make: string;
  models: string[];

}