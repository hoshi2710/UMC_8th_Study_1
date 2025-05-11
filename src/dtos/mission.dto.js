export const bodyToMission = (body, params) => {
  const expireDate = new Date(body.expireDate);

  return {
    storeId: parseInt(params.storeId),
    goal: body.goal,
    rewards: body.rewards,
    expireDate,
  };
};

export const responseFromMission = (body) => {
  return {
    storeName: body.mission.store.name,
    goal: body.mission.goal,
    rewards: body.mission.rewards,
    expireDate: body.mission.expireDate,
    location: body.mission.locations.name,
  };
};

export const bodyToMissionRequest = (body, params) => {
  return {
    missionId: parseInt(params.missionId),
    userId: body.userId,
    action: body.action,
    verificationCode: body.verificationCode || null,
  };
};
export const responseFromMissionRequest = (body) => {
  return {
    storeName: body.mission.missions.store.name,
    goal: body.mission.missions.goal,
    rewards: body.mission.missions.rewards,
    expireDate: body.mission.missions.expireDate,
    completedAt: body.mission.completedAt,
    verificationCode: body.mission.verificationCode,
  };
};

export const bodyToStoreMissionsRequest = (params, query) => {
  return {
    storeId: parseInt(params.storeId),
    cursor: typeof query.cursor === "string" ? parseInt(query.cursor) : 0,
  };
};

export const responseFromStoreMissionsRequest = (body) => {
  const data = [];
  body.missions.forEach((element) => {
    data.push({
      storeName: element.store.name,
      location: element.locations.name,
      goal: element.goal,
      rewards: element.rewards,
      expireDate: element.expireDate,
    });
  });
  return {
    data: data,
    pagination: {
      cursor: body.missions.length
        ? body.missions[body.missions.length - 1].id
        : null,
    },
  };
};

export const bodyToUserOngoingMissionsRequest = (body, query) => {
  return {
    userId: body.userId,
    cursor: typeof query.cursor === "string" ? parseInt(query.cursor) : 0,
  };
};

export const responseFromOngoingMissionsRequest = (body) => {
  const data = [];
  body.missions.forEach((element) => {
    data.push({
      storeName: element.missions.store.name,
      goal: element.missions.goal,
      rewards: element.missions.rewards,
      expireDate: element.missions.expireDate,
      verificationCode: element.verificationCode,
    });
  });
  return {
    data: data,
    pagination: {
      cursor: body.missions.length
        ? body.missions[body.missions.length - 1].id
        : null,
    },
  };
};
