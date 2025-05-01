export const bodyToMission = (body, params) => {
  const expireDate = new Date(body.expireDate);

  return {
    storeId: params.storeId,
    goal: body.goal,
    rewards: body.rewards,
    expireDate,
  };
};

export const responseFromMission = (body) => {
  return {
    storeName: body.mission[0].storeName,
    goal: body.mission[0].goal,
    rewards: body.mission[0].rewards,
    expireDate: body.mission[0].expire_date,
    location: body.mission[0].location,
  };
};

export const bodyToMissionRequest = (body, params) => {
  return {
    missionId: params.missionId,
    userId: body.userId,
    action: body.action,
  };
};
export const responseFromMissionRequest = (body) => {
  return {
    storeName: body.mission[0].storeName,
    goal: body.mission[0].goal,
    rewards: body.mission[0].rewards,
    expireDate: body.mission[0].expire_date,
    verificationCode: body.mission[0].verification_code,
  };
};
