import { TransformerHero } from './transformer';
import { HumanHero } from './hero';
// Importáld be a HumanHero és TransformerHero osztályokat.


/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
  { id: 12, name: "Hercules", sex: "male", age: 32, health: 95 },
  { id: 10, name: "Spider Man", sex: "male", age: 30, health: 85 },
  { id: 20, name: "James Bond", sex: "male", age: 35, health: 90 },
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
  { id: 1, name: "IronHide", wings: 2, wheels: 5, clan: "metal" },
  { id: 2, name: "Cyborg", wings: 1, wheels: 3, clan: "bio" },
  { id: 3, name: "Brainstrom", wings: 0, wheels: 3, clan: "robots" },
];
