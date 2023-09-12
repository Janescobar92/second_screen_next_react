export interface VehicleBrand {
  id: number;
  name: string;
  is_common: boolean;
  is_visible: boolean;
}

export interface VehicleModel {
  id: number;
  name: string;
  slug: string;
  car_make: number;
  car_model?: number;
  car_model_family: number;
}

export interface VehicleVersion {
  id: number;
  name: string;
  cc: number;
  kw: number;
  hp: number;
  capacity: number;
  cylinders: number;
  fuel: number;
  original_tyre_size: string;
  optional_tyre_size: string;
  slug?: string;
  car_make?: number;
  car_model: number;
}

export interface Vehicle {
  vehicle_owned_url: string;
  id?: number;
  created_at?: string;
  updated_at?: string;
  license_plate: string;
  year: number | string;
  car_frame: string;
  mileage: number | string;
  car_model: VehicleModel | number;
  car_version: VehicleVersion | number;
  car_make: VehicleBrand | number;
  fuel: string;
}
