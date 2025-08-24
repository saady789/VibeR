import { initTRPC } from "@trpc/server";
import { cache } from "react";
import superjson from "superjson";
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create({
  transformer: superjson,
});
// Base router and procedure helpers
export const router = t.router;
export const procedure = t.procedure;
export const factory = t.createCallerFactory;
export function createTRPCContext() {
  // Add any context logic here (auth, headers, etc.)
  return {};
}
