import { CharacterModel } from "./character.interface"
import { atom } from "recoil"

export const characterListState = atom<CharacterModel[]>({
  key: "characterListState",
  default: [],
})
