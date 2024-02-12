import InitialModal from "@/components/modals/initial-modal";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/intial-profile";
import { redirect } from "next/navigation";

export default async function SetupPage() {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      Member: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/server/${server.id}`);
  }

  return <InitialModal />;
}
