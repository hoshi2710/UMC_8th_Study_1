export const bodyToStore = (body) => {
  return {
    storeName: body.storeName,
    foodTypeId: body.foodTypeId,
    address: body.address,
    openTime: body.openTime,
    closeTime: body.closeTime,
    locationId: body.locationId,
  };
};
export const responseFromStore = (body) => {
  return {
    storeName: body.store[0].storeName,
    address: body.store[0].address,
    openTime: body.store[0].open_time,
    closeTime: body.store[0].close_time,
    storeType: body.store[0].storeType,
    location: body.store[0].location,
  };
};
