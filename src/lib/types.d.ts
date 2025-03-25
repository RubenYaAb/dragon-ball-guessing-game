import { AffiliationEnum, GenderEnum, RaceEnum } from "./enums"

type Character = {
  id: number,
  name: string,
  ki: string,
  maxKi: string,
  race: RaceEnum,
  gender: GenderEnum,
  description: string,
  image: string,
  affiliation: AffiliationEnum,
  deletedAt: null | string
}