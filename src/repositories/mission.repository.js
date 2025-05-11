import { prisma } from "../db.config.js";

export const addMission = async (data) => {
  try {
    const locationId = await prisma.store.findFirst({
      select: {
        locationId: true,
      },
      where: {
        id: data.storeId,
      },
    });
    if (locationId == null) {
      return null;
    }
    const mission = await prisma.missions.create({
      data: {
        storeId: data.storeId,
        goal: data.goal,
        rewards: data.rewards,
        expireDate: data.expireDate,
        locationId: locationId.locationId,
      },
    });
    return mission.id;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};

export const getMission = async (missionId) => {
  try {
    const mission = await prisma.missions.findFirst({
      select: {
        store: {
          select: {
            name: true,
          },
        },
        goal: true,
        rewards: true,
        expireDate: true,
        locations: {
          select: {
            name: true,
          },
        },
      },
      where: {
        id: missionId,
      },
    });
    return mission;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};

export const startMission = async (data) => {
  try {
    const confirm = await prisma.missions.findFirst({
      select: {
        id: true,
      },
      where: {
        id: data.missionId,
      },
    });
    if (confirm == null) return null;
    const mission = await prisma.acceptedMissions.create({
      data: {
        verificationCode: data.verificationCode,
        completedAt: data.completedAt,
        missions: {
          connect: {
            id: data.missionId,
          },
        },
        members: {
          connect: {
            id: data.userId,
          },
        },
      },
    });
    return mission.id;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};

export const completeMission = async (data) => {
  try {
    const mission = await prisma.acceptedMissions.findFirst({
      select: {
        id: true,
        verificationCode: true,
        completedAt: true,
      },
      where: {
        missionId: data.missionId,
        userId: data.userId,
      },
    });
    if (mission == null) return -1;
    if (mission.verificationCode !== data.verificationCode) return -2;
    if (mission.completedAt != null) return -3;
    const completedAt = new Date().toISOString();
    console.log(completedAt);
    await prisma.acceptedMissions.update({
      where: {
        id: mission.id,
      },
      data: {
        completedAt: completedAt,
      },
    });
    const completedMission = await prisma.completedMissions.create({
      data: {
        missionId: data.missionId,
        userId: data.userId,
        completedAt: completedAt,
      },
    });
    return completedMission.id;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};

export const getCompletedMission = async (completedId) => {
  try {
    const mission = await prisma.completedMissions.findFirst({
      select: {
        missions: {
          select: {
            store: {
              select: {
                name: true,
              },
            },
            goal: true,
            rewards: true,
          },
        },
        completedAt: true,
      },
      where: {
        id: completedId,
      },
    });
    return mission;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};

export const getOnGoingMission = async (missionId) => {
  try {
    const mission = await prisma.acceptedMissions.findFirst({
      select: {
        missions: {
          select: {
            store: {
              select: {
                name: true,
              },
            },
            goal: true,
            rewards: true,
            expireDate: true,
          },
        },
        verificationCode: true,
      },
    });
    return mission;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};

export const getMissionsByStoreId = async (data) => {
  try {
    const isStoreExists = await prisma.store.findFirst({
      select: {
        id: true,
      },
      where: {
        id: data.storeId,
      },
    });
    if (isStoreExists == null) return null;
    const missions = await prisma.missions.findMany({
      select: {
        id: true,
        store: {
          select: {
            name: true,
          },
        },
        locations: {
          select: {
            name: true,
          },
        },
        goal: true,
        rewards: true,
        expireDate: true,
      },
      where: {
        storeId: data.storeId,
        id: {
          gt: data.cursor,
        },
      },
      orderBy: {
        id: "asc",
      },
      take: 5,
    });
    return missions;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};

export const getOngoingMissionsByUserId = async (data) => {
  try {
    const isUserExists = prisma.members.findFirst({
      select: {
        id: true,
      },
      where: {
        id: data.userId,
      },
    });
    if (isUserExists == null) return null;
    const missions = await prisma.acceptedMissions.findMany({
      select: {
        id: true,
        missions: {
          select: {
            store: {
              select: {
                name: true,
              },
            },
            goal: true,
            rewards: true,
            expireDate: true,
          },
        },
        verificationCode: true,
      },
      where: {
        userId: data.userId,
        id: {
          gt: data.cursor,
        },
      },
      orderBy: {
        id: "asc",
      },
      take: 5,
    });
    return missions;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};
