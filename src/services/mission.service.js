import {
  responseFromMission,
  responseFromMissionRequest,
} from "../dtos/mission.dto.js";
import {
  addMission,
  getMission,
  getOnGoingMission,
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
    throw new Error("존재하지 않는 스토어 입니다.");
  }
  const mission = await getMission(addedMissionId);
  return responseFromMission({ mission });
};

export const doMissionAction = async (data) => {
  console.log(data);
  if (data.action == "start") {
    const verificationCode = [];
    for (let i = 0; i < 9; i += 1) {
      verificationCode.push(Math.trunc(Math.random() * 10));
    }
    const startedMissionId = await startMission({
      missionId: data.missionId,
      userId: data.userId,
      verificationCode: verificationCode.join(""),
    });
    if (startedMissionId == null) {
      throw new Error("존재하지 않는 미션 입니다.");
    }
    const mission = await getOnGoingMission(startedMissionId);
    console.log(mission);
    return responseFromMissionRequest({ mission });
  }
  // 미션 완료 등 미션에 대한 추가 작업을 이부분에 추가
};
