import { z } from "zod";
import {
  createTRPCRouter,
  authenticatedProcedure,
  publicProcedure,
} from "../setup/context";
import { users } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const userRouter = createTRPCRouter({
  // Get current user profile
  getProfile: authenticatedProcedure.query(async ({ ctx }) => {
    const { id } = ctx.user;

    const u = await ctx.db.query.users.findFirst({
      where: eq(users.id, id),
    });

    return u;
  }),

  // Get user by ID (public for now, but could be protected)
  getUserById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db.query.users.findFirst({
        where: eq(users.id, input.id),
      });

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    }),

  // Update user profile
  updateProfile: authenticatedProcedure
    .input(
      z.object({
        firstName: z.string().min(1).optional(),
        lastName: z.string().min(1).optional(),
        avatar: z.string().url().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = ctx.user;

      const [updatedUser] = await ctx.db
        .update(users)
        .set({
          ...input,
          updatedAt: new Date(),
        })
        .where(eq(users.id, user.id))
        .returning();

      return updatedUser;
    }),
});
