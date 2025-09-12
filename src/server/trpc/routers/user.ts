import { createTRPCRouter, authenticatedProcedure } from "../setup/context";
import { selectUserById } from "@/server/db/repositories/user";

export const userRouter = createTRPCRouter({
  getProfile: authenticatedProcedure.query(async ({ ctx }) => {
    const { id } = ctx.user;

    const u = await selectUserById(ctx.db, id);

    return u;
  }),
});
