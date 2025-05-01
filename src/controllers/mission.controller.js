import { StatusCodes } from "http-status-codes";
import { bodyToMission, bodyToMissionRequest } from "../dtos/mission.dto.js";
import { createMission, doMissionAction } from "../services/mission.service.js";

export const handleCreateMission = async (req, res, next) => {
  console.log("새로운 미션이 추가되었습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용

  const mission = await createMission(bodyToMission(req.body, req.params));
  res.status(StatusCodes.CREATED).json({ result: mission });
};

export const handleMissionAction = async (req, res, next) => {
  console.log("미션 시작 / 완료 요청이 발생하였습니다!");
  console.log("body:", req.body);

  const mission = await doMissionAction(
    bodyToMissionRequest(req.body, req.params)
  );
  res.status(StatusCodes.ACCEPTED).json({ result: mission });
};
