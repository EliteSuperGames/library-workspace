export interface Address {
  addressLineOne: string;
  addressLineTwo: string | null;
  city: string;
  state: string;
  zipCode: string;
  addressType: AddressType;
}

export enum AddressType {
  PHYSICAL = 'PHYSICAL',
  MAILING = 'MAILING',
  SHIPPING = 'SHIPPING',
}
