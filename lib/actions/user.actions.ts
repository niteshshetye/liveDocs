"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { getRandomColor, parseStringify } from "./../utils";

export const getClerkUsers = async ({ userIds }: { userIds: string[] }) => {
  try {
    const { data } = await clerkClient.users.getUserList({
      emailAddress: userIds,
    });

    const users = data.map((user) => ({
      id: user.id,
      email: user.emailAddresses[0].emailAddress,
      name: `${user.firstName} ${user.lastName}`,
      avatar: user.imageUrl,
      color: getRandomColor(),
    }));

    const sortedUsers = userIds.map((email) =>
      users.find((user) => user.email === email)
    ) as User[];
    return parseStringify(sortedUsers);
  } catch (error) {
    console.log(`Error: while getting clerk users list => ${error}`);
  }
};
