import Dashboard from "@/components/Dashboard";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

async function Page() {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  const AUTH_CALLBACK_URL = "/auth-callback?origin=dashboard";

  if (!user || !user.id) redirect(AUTH_CALLBACK_URL);

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) redirect(AUTH_CALLBACK_URL);

  return <Dashboard />;
}

export default Page;
