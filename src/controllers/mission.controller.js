import { StatusCodes } from "http-status-codes";
import {
  bodyToMission,
  bodyToMissionRequest,
  bodyToStoreMissionsRequest,
  bodyToUserOngoingMissionsRequest,
} from "../dtos/mission.dto.js";
import {
  createMission,
  doMissionAction,
  getMissionsOfStore,
  getOngoingMissionsOfUser,
} from "../services/mission.service.js";

export const handleCreateMission = async (req, res, next) => {
  console.log("새로운 미션이 추가되었습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용

  const mission = await createMission(bodyToMission(req.body, req.params));
  res.status(StatusCodes.CREATED).success(mission);
};

export const handleMissionAction = async (req, res, next) => {
  console.log("미션 시작 / 완료 요청이 발생하였습니다!");
  console.log("body:", req.body);

  const mission = await doMissionAction(
    bodyToMissionRequest(req.body, req.params)
  );
  res.status(StatusCodes.ACCEPTED).success(mission);
};

export const handleListStoreMissions = async (req, res, next) => {
  console.log("특정 스토어의 미션의 로딩 요청이 발생하였습니다!");
  console.log("body:", req.body);
  const mission = await getMissionsOfStore(
    bodyToStoreMissionsRequest(req.params, req.query)
  );
  res.status(StatusCodes.OK).success(mission);
};

export const handleListMyOngoingMissions = async (req, res, next) => {
  console.log("자신의 진행중인 미션의 로딩 요청이 발생하였습니다!");
  console.log("body:", req.body);
  const mission = await getOngoingMissionsOfUser(
    bodyToUserOngoingMissionsRequest(req.body, req.query)
  );
  res.status(StatusCodes.OK).success(mission);
};
