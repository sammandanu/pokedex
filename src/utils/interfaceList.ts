export interface TypeData {
  name: string;
}
export interface Type {
  type: TypeData;
}
export interface Pokemon {
  id: number;
  name: string;
  types: Type[];
  image: string;
  favorite: boolean;
}
