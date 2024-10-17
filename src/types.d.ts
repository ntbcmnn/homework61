export interface APICountry {
  name: string;
  alpha3Code: string;
}

export interface APICountryInfo {
  name: string;
  capital: string;
  population: number;
  flag: string;
  borders: string[];
  currency: string;
}