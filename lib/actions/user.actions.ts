"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { getRandomColor, parseStringify } from "./../utils";
import { liveblocks } from "../liveblock";

export const getClerkUsers = async ({ userIds }: { userIds: string[] }) => {
  try {
    const { data } = await clerkClient().users.getUserList({
      emailAddress: userIds,
    });

    const users = data.map((user) => ({
      id: user.id,
      email: user.emailAddresses[0].emailAddress,
      name: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
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

export const getDocumentUsers = async ({
  roomId,
  currentUser,
  text,
}: {
  roomId: string;
  currentUser: string;
  text: string;
}) => {
  try {
    const room = await liveblocks.getRoom(roomId);
    const users = Object.keys(room.usersAccesses).filter(
      (email) => email !== currentUser
    );

    if (text.length) {
      const lowerCaseText = text.toLowerCase();
      const filteredUsers = users.filter((email) =>
        email.toLowerCase().includes(lowerCaseText)
      );

      return parseStringify(filteredUsers);
    }

    return parseStringify(users);
  } catch (error) {
    console.log(`Error: while getting document user => ${error}`);
  }
};
