export interface Name {
  name: string;
}
export interface Type {
  type: Name;
}
export interface Ability {
  ability: Name;
}
export interface Stats {
  base_stat: number;
  stat: Name;
}
export interface Moves {
  move: Name;
}
export interface Pokemon {
  id: number;
  name: string;
  types: Type[];
  image: string;
  favorite: boolean;
  abilities: Ability[];
  weight: number;
  height: number;
  stats: Stats[];
  moves: Moves[];
}
