import { StatusCodes } from "http-status-codes";
import { bodyToStore } from "../dtos/store.dto.js";
import { createStore } from "../services/store.service.js";

export const handleCreateStore = async (req, res, next) => {
  /*
  #swagger.summary = '스토어 추가 API';
  #swagger.requestBody = {
    required: true,
    content: {
      "appication/json": {
        schema: {
          type:"object",
          properties: {
            storeName: {type:"string"},
            foodTypeId: {type:"number"},
            address: {type:"string"},
            openTime: {type:"string", example:"06:00:00"},
            closeTime: {type:"string", example:"22:00:00"},
            locationId: {type:"number"}
          }
        }
      }
    }
  };
  #swagger.responses[200] = {
    description: "스토어 추가 성공 응답",
    content: {
      "application/json":{
        schema:{
          type:"object",
          properties: {
            resultType: { type: "string", example: "SUCCESS" },
            error: { type: "object", nullable: true, example: null },
            success: {
              type: "object",
              properties: {
                storeName:{type:"string"},
                address: {type:"string"},
                openTime: {type:"string", example:"06:00:00"},
                closeTime: {type:"string", example:"22:00:00"},
                storeType: {type:"string", example:"중식당"},
                location: {type:"string", example:"권선구"}
              }
            }
          }
        }
      }
    }
  };
  #swagger.responses[409] = {
    description: "스토어 추가 실패 응답 (이미 존재하는 스토어 명)",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            resultType: {type:"string", example: "FAIL"},
            error: {
              type: "object",
              properties: {
                errorCode: {type:"string", example:"S002"},
                reason: {type:"string", example:"이미 존재하는 스토어 명 입니다."},
                data: {
                  type:"object",
                  properties: {
                    storeName: {type:"string"},
                    foodTypeId: {type:"number"},
                    address: {type:"string"},
                    openTime: {type:"string", example:"06:00:00"},
                    closeTime: {type:"string", example:"22:00:00"},
                    locationId: {type:"number"}
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
  #swagger.responses[404] = {
    description: "스토어 추가 실패 응답 (존재하지 않는 음식 카테고리 또는 지역)",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            resultType: {type:"string", example: "FAIL"},
            error: {
              type: "object",
              properties: {
                errorCode: {type:"string"},
                reason: {type:"string"},
                data: {
                  type:"object",
                  properties: {
                    storeName: {type:"string"},
                    foodTypeId: {type:"number"},
                    address: {type:"string"},
                    openTime: {type:"string", example:"06:00:00"},
                    closeTime: {type:"string", example:"22:00:00"},
                    locationId: {type:"number"}
                  }
                }
              }
            },
            success: { type:"obejct", nullable: true, example:null}
          }
        }
      }
    }
  },
  
  */
  console.log("새로운 스토어가 추가되었습니다!");
  console.log("body:", req.body);
  const store = await createStore(bodyToStore(req.body));
  res.status(StatusCodes.CREATED).success(store);
};
