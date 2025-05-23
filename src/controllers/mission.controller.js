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
  /*
    #swagger.summary = '새로운 미션 추가 API'
    #swagger.parameters['storeId'] = {
      in: 'path',
      description: "스토어 ID",
      required:true,
    };
    #swagger.requestBody = {
    required: true,
    content: {
      "application/json" : {
        schema: {
          type:"object",
          properties: {
            goal:{type:"number", example:30000},
            rewards:{type:"number", example:1000},
            expireDate:{type:"string", example:"2025-05-25"}
          }
        }
      }
    }
  }
  #swagger.responses[200] = {
    description: "새로운 미션 추가 성공 응답",
    content: {
      "application/json" : {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "SUCCESS"},
            error: { type: "object", nullable: true, example: null},
            success: {
              type: "object",
              properties: {
                storeName: {type: "string" },
                goal:{type:"number", example:30000},
                rewards:{type:"number", example:1000},
                expireDate:{type:"string", example:"2025-05-25T00:00:00.000Z"},
                location:{type:"string"}
              }
            }
          }
        }
      }
    }
  }
  #swagger.responses[404] = {
    description: "새로운 미션 추가 실패 응답 (존재하지 않는 스토어)",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            resultType: {type:"string", example: "FAIL"},
            error: {
              type: "object",
              properties: {
                errorCode: {type:"string", example:"S001"},
                reason: {type:"string", example:"존재하지 않는 스토어 입니다."},
                data: {
                  type:"object",
                  properties: {
                    storeId: {type:"number"},
                    goal:{type:"number", example:30000},
                    rewards:{type:"number", example:1000},
                    expireDate:{type:"string", example:"2025-05-25T00:00:00.000Z"},
                  }
                }
              }
            },
            success: { type:"obejct", nullable: true, example:null}
          }
        }
      }
    }
  }
  */
  console.log("새로운 미션이 추가되었습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 확인하기 위한 테스트용

  const mission = await createMission(bodyToMission(req.body, req.params));
  res.status(StatusCodes.CREATED).success(mission);
};

export const handleMissionAction = async (req, res, next) => {
  /*
    #swagger.summary = "미션 시작 / 완료 처리 API";
    #swagger.parameters['missionId'] = {
      in: 'path',
      description: "미션 ID",
      required:true,
    };
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json" : {
          schema: {
            type:"object",
            properties: {
              action:{type:"string"},
              userId:{type:"number"},
              verificationCode:{type:"string"}
            },
          },
          examples:{
            "start": {
              "summary": "미션 시작 요청",
              "value": {
                action:"start",
                userId:1,
              }
            },
            "complete": {
              "summary": "미션 완료 요청",
              "value": {
                action:"complete",
                userId:1,
                verificaitonCode:"123456789"
              }
            },
          }
        },
      }
    }
    #swagger.responses[200] = {
      description: "미션 시작 / 완료 처리 성공 응답",
      content: {
        "application/json" : {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "SUCCESS"},
              error: { type: "object", nullable: true, example: null},
              success: {
                type: "object",
                properties: {
                  storeName: {type: "string" },
                  goal:{type:"number", example:30000},
                  rewards:{type:"number", example:1000},
                  expireDate:{type:"string", example:"2025-05-25T00:00:00.000Z"},
                  verificationCode: {type:"string", example:"123456789"}
                }
              }
            }
          }
        }
      }
    };
    #swagger.responses[404] = {
      description: "미션 시작 / 완료 처리 실패 응답 (존재하지 않는 미션)",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: {type:"string", example: "FAIL"},
              error: {
                type: "object",
                properties: {
                  errorCode: {type:"string", example:"M001"},
                  reason: {type:"string", example:"존재하지 않는 미션 입니다."},
                  data: {
                    type:"object",
                    properties: {
                      missionId : {type:"number"},
                      userId: {type:"number"},
                      action: {type:"string"},
                      verificationCode: {type:"string", example:"123456789"}
                    }
                  }
                }
              },
              success: { type:"obejct", nullable: true, example:null}
            }
          }
        }
      }
    }
    #swagger.responses[401] = {
      description: "미션 완료 처리 실패 응답 (잘못된 인증번호)",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: {type:"string", example: "FAIL"},
              error: {
                type: "object",
                properties: {
                  errorCode: {type:"string", example:"M003"},
                  reason: {type:"string", example:"잘못된 인증 번호 입니다."},
                  data: {
                    type:"object",
                    properties: {
                      missionId : {type:"number"},
                      userId: {type:"number"},
                      action: {type:"string", example:"complete"},
                      verificationCode: {type:"string", example:"123456789"}
                    }
                  }
                }
              },
              success: { type:"obejct", nullable: true, example:null}
            }
          }
        }
      }
    }
    #swagger.responses[409] = {
      description: "미션 완료 처리 실패 응답 (이미 완료된 미션)",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: {type:"string", example: "FAIL"},
              error: {
                type: "object",
                properties: {
                  errorCode: {type:"string", example:"M002"},
                  reason: {type:"string", example:"이미 완료처리된 미션 입니다."},
                  data: {
                    type:"object",
                    properties: {
                      missionId : {type:"number"},
                      userId: {type:"number"},
                      action: {type:"string", example:"complete"},
                      verificationCode: {type:"string", example:"123456789"}
                    }
                  }
                }
              },
              success: { type:"obejct", nullable: true, example:null}
            }
          }
        }
      }
    }
  */
  console.log("미션 시작 / 완료 요청이 발생하였습니다!");
  console.log("body:", req.body);

  const mission = await doMissionAction(
    bodyToMissionRequest(req.body, req.params)
  );
  res.status(StatusCodes.ACCEPTED).success(mission);
};

export const handleListStoreMissions = async (req, res, next) => {
  /*
    #swagger.summary = "지정한 스토어의 미션 가져오기 API";
    #swagger.parameters['storeId'] = {
      in: 'path',
      description: "스토어 ID",
      required:true,
    }
    #swagger.parameters['cursor'] = {
      in: 'query',
      description: "페이지네이션 커서",
      required:false
    }
    #swagger.responses[200] = {
      description: "지정한 스토어의 미션 가져오기 성공 응답",
      content: {
        "application/json" : {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "SUCCESS"},
              error: { type: "object", nullable: true, example: null},
              success: {
                type: "object",
                properties: {
                  data:{
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        storeName:{type:"string"},
                        location: {type:"string"},
                        goal: {type:"number", example:30000},
                        rewards: {type:"number", example:1000},
                        expireDate: {type:"string", example:"2025-05-25T09:00:00.000Z"}
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    #swagger.responses[404] = {
      description: "상지정한 스토어의 미션 가져오기 실패 응답 (존재하지 않는 스토어)",
      content:{
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "FAIL"},
              error: {
                type: "object",
                properties: {
                  errorCode: {type:"string", example: "S001"},
                  reason: {type:"string", example: "존재하지 않는 스토어 입니다."},
                  data: {
                    type: "object",
                    properties: {
                      storeId: {type:"number"},
                      cursor: {type:"number"}
                    }
                  }
                }
              },
              success: { type: "object", nullable: true, example: null }
            }
          }
        }
      }
    };
  */
  console.log("특정 스토어의 미션의 로딩 요청이 발생하였습니다!");
  console.log("body:", req.body);
  const mission = await getMissionsOfStore(
    bodyToStoreMissionsRequest(req.params, req.query)
  );
  res.status(StatusCodes.OK).success(mission);
};

export const handleListMyOngoingMissions = async (req, res, next) => {
  /*
    #swagger.summary = "자신의 진행중인 미션 가져오기 API";
    #swagger.parameters['cursor'] = {
      in: 'query',
      description: "페이지네이션 커서",
      required:false
    }
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json" : {
          schema: {
            type:"object",
            properties: {
              userid: {type:"number"},
            }
          }
        }
      }
    }
    #swagger.responses[200] = {
      description: "자신의 진행중인 미션 가져오기 성공 응답",
      content: {
        "application/json" : {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "SUCCESS"},
              error: { type: "object", nullable: true, example: null},
              success: {
                type: "object",
                properties: {
                  data:{
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        storeName:{type:"string"},
                        goal: {type:"number", example:30000},
                        rewards: {type:"number", example:1000},
                        expireDate: {type:"string", example:"2025-05-25T09:00:00.000Z"},
                        verificationCode: {type: "string", example:"123456789"}
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    #swagger.responses[404] = {
    description: "자신의 진행중인 미션 가져오기 실패 응답 (존재하지 않는 사용자)",
    content:{
      "application/json": {
        schema: {
          type: "object",
          properties: {
            resultType: { type: "string", example: "FAIL"},
            error: {
              type: "object",
              properties: {
                errorCode: {type:"string", example: "U002"},
                reason: {type:"string", example: "존재하지 않는 사용자 입니다."},
                data: {
                  type: "object",
                  properties: {
                    userId: {type:"number"},
                    cursor: {type:"number"}
                  }
                }
              }
            },
            success: { type: "object", nullable: true, example: null }
          }
        }
      }
    }
  };
  */
  console.log("자신의 진행중인 미션의 로딩 요청이 발생하였습니다!");
  console.log("body:", req.body);
  const mission = await getOngoingMissionsOfUser(
    bodyToUserOngoingMissionsRequest(req.body, req.query)
  );
  res.status(StatusCodes.OK).success(mission);
};
