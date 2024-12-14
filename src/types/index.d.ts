class BaseObject{
  id: string;
  createDate: Date;
  title: string;
  price: number;
  gender: string;
  lunchTime: string;
  lunchSchedule: string;
  isTop: boolean;
  status: boolean;
  deadline: Date;
  telegramLink: string;
  instagramLink: string;
  tgUserName: string;
  phoneNumber: string;
  petCategory: PetCategory;
  district: District;
}

export class Pet extends BaseObject {
  benefit: string;
  requirement: string;
  minAge: number;
  maxAge: number;
  latitude: number;
  longitude: number;
}

export class Seller extends BaseObject {
  createdBy: string;
  birthDate: Date;
  fullName: string;
  userName: string;
}

export interface District {
  id: string;
  name: string;
  region: Region;
}

export interface Region {
  id: string;
  name: string;
}

export interface FAQ{
  id: string;
  question: string;
  answer: string;
  createDate: Date;
}

export interface Feedback{
  id: string;
  message: string;
  fullName: string;
  dueDate: Date;
}

export interface PetCategory {
  id: string;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  companyName: string;
  position: string;
  startDate: Date;
  endDate: Date;
  description: string;
}

export interface Pet{
  id: string;
  title: string;
  price: number;
  
}