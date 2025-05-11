import {
  responseFromMission,
  responseFromMissionRequest,
  responseFromOngoingMissionsRequest,
  responseFromStoreMissionsRequest,
} from "../dtos/mission.dto.js";
import { MissionAlreadyCompletedError, MissionNotFoundError, StoreNotFoundError, UserNotFoundError, WrongVerificationCodeError } from "../error.js";
import {
  addMission,
  completeMission,
  getCompletedMission,
  getMission,
  getMissionsByStoreId,
  getOnGoingMission,
  getOngoingMissionsByUserId,
  startMission,
} from "../repositories/mission.repository.js";

export const createMission = async (data) => {
  const addedMissionId = await addMission({
    storeId: data.storeId,
    goal: data.goal,
    rewards: data.rewards,
    expireDate: data.expireDate,
  });
  if (addedMissionId == null) {
    throw new StoreNotFoundError("존재하지 않는 스토어 입니다.",data);
  }
  const mission = await getMission(addedMissionId);
  return responseFromMission({ mission });
};

export const doMissionAction = async (data) => {
  // console.log(data);
  if (data.action == "start") {
    const verificationCode = [];
    for (let i = 0; i < 9; i += 1) {
      verificationCode.push(Math.trunc(Math.random() * 10));
    }
    const startedMissionId = await startMission({
      missionId: data.missionId,
      userId: data.userId,
      verificationCode: verificationCode.join(""),
      completedAt: null,
    });
    if (startedMissionId == null) {
      throw new MissionNotFoundError("존재하지 않는 미션 입니다.",data);
    }
    const mission = await getOnGoingMission(startedMissionId);
    console.log(mission);
    return responseFromMissionRequest({ mission });
  }
  if (data.action == "complete") {
    const completedId = await completeMission(data);
    if (completedId == -1) {
      throw new MissionNotFoundError("존재하지 않는 미션 입니다.",data);
    }
    if (completedId == -2) {
      throw new WrongVerificationCodeError("잘못된 인증 번호 입니다.",data);
    }
    if (completedId == -3) {
      throw new MissionAlreadyCompletedError("이미 완료처리된 미션 입니다.",data);
    }
    const mission = await getCompletedMission(completedId);
    return responseFromMissionRequest({ mission });
  }
};

export const getMissionsOfStore = async (data) => {
  const missions = await getMissionsByStoreId(data);
  if (missions == null) {
    throw new StoreNotFoundError("존재하지 않는 스토어 입니다.",data);
  }
  return responseFromStoreMissionsRequest({ missions });
};

export const getOngoingMissionsOfUser = async (data) => {
  const missions = await getOngoingMissionsByUserId(data);
  if (missions == null) {
    throw new UserNotFoundError("존재하지 않는 사용자 입니다.",data);
  }
  return responseFromOngoingMissionsRequest({ missions });
};
