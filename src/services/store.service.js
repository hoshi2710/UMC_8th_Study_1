import { responseFromStore } from "../dtos/store.dto.js";
import { DuplicateStoreNameError, FoodTypeNotFoundError, LocationNotFoundError } from "../error.js";
import { addStore, getStore } from "../repositories/store.repository.js";

export const createStore = async (data) => {
  const addedStoreId = await addStore({
    name: data.storeName,
    foodTypeId: data.foodTypeId,
    address: data.address,
    openTime: data.openTime,
    closeTime: data.closeTime,
    locationId: data.locationId,
  });
  if (addedStoreId == -1) {
    throw new DuplicateStoreNameError("이미 존재하는 스토어 명 입니다.",data);
  }
  if (addedStoreId == -2) {
    throw new FoodTypeNotFoundError("존재하지 않는 음식 카테고리 입니다.",data);
  }
  if (addedStoreId == -3) {
    throw new LocationNotFoundError("존재하지 않는 지역 입니다.",data);
  }
  const store = await getStore(addedStoreId);
  return responseFromStore({ store });
};
