import { currentUser } from "@clerk/nextjs/server";
import { db, users } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
    const user = await currentUser();

    const userResult = await db.select().from(users)
        .where(eq(users.email, user?.primaryEmailAddress?.emailAddress ?? ''))

    if (userResult.length == 0) { //if not then insert a new user
        const result = await db.insert(users).values({
            name: user?.fullName,
            email: user?.primaryEmailAddress?.emailAddress ?? '',
        }).returning();

        return NextResponse.json(result);

    }
    return NextResponse.json(userResult[0]);
}