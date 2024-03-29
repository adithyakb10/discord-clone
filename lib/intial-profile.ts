import { currentUser, redirectToSignIn } from "@clerk/nextjs";

import { db } from "./db";

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    redirectToSignIn();
  }

  const profile = await db.profile.findUnique({
    where: {
      userID: user?.id,
    },
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.profile.create({
    data: {
      userID: user?.id,
      name: `${user?.firstName}`,
      imageUrl: user?.imageUrl,
      email: user?.emailAddresses[0].emailAddress,
    },
  });
  return newProfile;
};
