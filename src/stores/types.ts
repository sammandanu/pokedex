import { defineStore } from "pinia";
import bug from "@/assets/types/bug.png";
import dark from "@/assets/types/dark.png";
import dragon from "@/assets/types/dragon.png";
import electric from "@/assets/types/electric.png";
import fairy from "@/assets/types/fairy.png";
import fighting from "@/assets/types/fighting.png";
import fire from "@/assets/types/fire.png";
import flying from "@/assets/types/flying.png";
import ghost from "@/assets/types/ghost.png";
import grass from "@/assets/types/grass.png";
import ground from "@/assets/types/ground.png";
import ice from "@/assets/types/ice.png";
import normal from "@/assets/types/normal.png";
import poison from "@/assets/types/poison.png";
import psychic from "@/assets/types/psychic.png";
import rock from "@/assets/types/rock.png";
import shadow from "@/assets/types/shadow.png";
import steel from "@/assets/types/steel.png";
import unknown from "@/assets/types/unknown.png";
import water from "@/assets/types/water.png";

export const pokemonTypes = defineStore("pokemonTypes", {
  state: () => {
    return {
      types: {
        fire: {
          color:
            "background: rgb(238,129,48);background: linear-gradient(180deg, rgba(238,129,48,1) 10%, rgba(255,255,255,1) 45%);",
          icon: fire,
        },
        grass: {
          color:
            "background: rgb(122,199,76);background: linear-gradient(180deg, rgba(122,199,76,1) 10%, rgba(255,255,255,1) 60%);",
          icon: grass,
        },
        electric: {
          color:
            "background: rgb(247,208,44);background: linear-gradient(180deg, rgba(247,208,44,1) 10%, rgba(255,255,255,1) 60%);",
          icon: electric,
        },
        water: {
          color:
            "background: rgb(99,144,240);background: linear-gradient(180deg, rgba(99,144,240,1) 10%, rgba(255,255,255,1) 60%);",
          icon: water,
        },
        ground: {
          color:
            "background: rgb(226,191,101);background: linear-gradient(180deg, rgba(226,191,101,1) 10%, rgba(255,255,255,1) 60%);",
          icon: ground,
        },
        rock: {
          color:
            "background: rgb(182,161,54);background: linear-gradient(180deg, rgba(182,161,54,1) 10%, rgba(255,255,255,1) 60%);",
          icon: rock,
        },
        fairy: {
          color:
            "background: rgb(214,133,173);background: linear-gradient(180deg, rgba(214,133,173,1) 10%, rgba(255,255,255,1) 60%);",
          icon: fairy,
        },
        poison: {
          color:
            "background: rgb(163,62,161);background: linear-gradient(180deg, rgba(163,62,161,1) 10%, rgba(255,255,255,1) 60%);",
          icon: poison,
        },
        bug: {
          color:
            "background: rgb(166,185,26);background: linear-gradient(180deg, rgba(166,185,26,1) 10%, rgba(255,255,255,1) 60%);",
          icon: bug,
        },
        dragon: {
          color:
            "background: rgb(111,53,252);background: linear-gradient(180deg, rgba(111,53,252,1) 10%, rgba(255,255,255,1) 60%);",
          icon: dragon,
        },
        psychic: {
          color:
            "background: rgb(249,85,135);background: linear-gradient(180deg, rgba(249,85,135,1) 10%, rgba(255,255,255,1) 60%);",
          icon: psychic,
        },
        flying: {
          color:
            "background: rgb(169,143,243);background: linear-gradient(180deg, rgba(169,143,243,1) 10%, rgba(255,255,255,1) 60%);",
          icon: flying,
        },
        fighting: {
          color:
            "background: rgb(194,46,40);background: linear-gradient(180deg, rgba(194,46,40,1) 10%, rgba(255,255,255,1) 60%);",
          icon: fighting,
        },
        normal: {
          color:
            "background: rgb(168,167,122);background: linear-gradient(180deg, rgba(168,167,122,1) 10%, rgba(255,255,255,1) 60%);",
          icon: normal,
        },
        ice: {
          color:
            "background: rgb(150,217,214);background: linear-gradient(180deg, rgba(150,217,214,1) 10%, rgba(255,255,255,1) 60%);",
          icon: ice,
        },
        ghost: {
          color:
            "background: rgb(115,87,151);background: linear-gradient(180deg, rgba(115,87,151,1) 10%, rgba(255,255,255,1) 60%);",
          icon: ghost,
        },
        dark: {
          color:
            "background: rgb(112,87,70);background: linear-gradient(180deg, rgba(112,87,70,1) 10%, rgba(255,255,255,1) 60%);",
          icon: dark,
        },
        steel: {
          color:
            "background: rgb(183,183,206);background: linear-gradient(180deg, rgba(183,183,206,1) 10%, rgba(255,255,255,1) 60%);",
          icon: steel,
        },
        shadow: {
          color:
            "background: rgb(235,243,245);background: linear-gradient(180deg, rgba(235,243,245,1) 10%, rgba(255,255,255,1) 60%);",
          icon: shadow,
        },
        unknown: {
          color:
            "background: rgb(150,155,165);background: linear-gradient(180deg, rgba(150,155,165,1) 10%, rgba(255,255,255,1) 60%);",
          icon: unknown,
        },
      },
    };
  },
});
