export const bodyToStore = (body) => {
  console.log(body.openTime);
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
    storeName: body.store.name,
    address: body.store.address,
    openTime: body.store.openTime,
    closeTime: body.store.closeTime,
    storeType: body.store.foodType.storeTypeName,
    location: body.store.locations.name,
  };
};
