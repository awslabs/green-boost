interface CreateWebAuthnAdapterParams {
  onAuthenticated: (claims: unknown) => void;
}

export function createWebAuthnAdapter(params: CreateWebAuthnAdapterParams) {
  params;
}
