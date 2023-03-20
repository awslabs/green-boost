// @ts-nocheck
import { ReactElement } from "react";
import { Navigate, ScrollRestoration } from "react-router-dom";

export function Root(): ReactElement {
  return (
    <>
      <Navigate to="/items" />
      <ScrollRestoration />
    </>
  );
}
