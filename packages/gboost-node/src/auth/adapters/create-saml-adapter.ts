interface CreateSAMLAdapterParams {
  onAuthenticated: (claims: unknown) => void;
}

export function createSAMLAdapter(params: CreateSAMLAdapterParams) {
  params;
}
