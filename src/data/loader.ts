import { fakeDb, type FakeDb } from "./fakeDb";

function hashSeed(seed: string): number {
  let hash = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function deterministicSort<T extends { id: string }>(items: T[], seed: string): T[] {
  const seedHash = hashSeed(seed);
  return [...items].sort((a, b) => {
    const aScore = hashSeed(`${seedHash}:${a.id}`);
    const bScore = hashSeed(`${seedHash}:${b.id}`);
    return aScore - bScore;
  });
}

export function loadFakeDb(seed = "baseline"): FakeDb {
  return {
    users: deterministicSort(fakeDb.users, `${seed}:users`),
    projects: deterministicSort(fakeDb.projects, `${seed}:projects`),
  };
}
