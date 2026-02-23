export type MockUser = {
  id: string;
  name: string;
  role: "admin" | "analyst" | "operator";
};

export type MockProject = {
  id: string;
  name: string;
  ownerId: string;
  status: "active" | "paused";
};

export type FakeDb = {
  users: MockUser[];
  projects: MockProject[];
};

export const fakeDb: FakeDb = {
  users: [
    { id: "u_001", name: "Alex Chen", role: "admin" },
    { id: "u_002", name: "Mina Patel", role: "analyst" },
    { id: "u_003", name: "Rory Hayes", role: "operator" },
  ],
  projects: [
    { id: "p_101", name: "Threat Trace", ownerId: "u_001", status: "active" },
    { id: "p_102", name: "Signal Correlator", ownerId: "u_002", status: "active" },
    { id: "p_103", name: "Entity Atlas", ownerId: "u_003", status: "paused" },
  ],
};
