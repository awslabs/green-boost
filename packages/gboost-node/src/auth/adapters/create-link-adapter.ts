interface CreateLinkAdapterParams {
  onLink: (link: string, claims: unknown) => void;
  onAuthenticated: (claims: unknown) => void;
}

export function createLinkAdapter(params: CreateLinkAdapterParams) {
  params;
}
