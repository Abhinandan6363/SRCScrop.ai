import fertilizers from "./fertilizers";

export const getFertilizerForCrop = (crop) => {
  return fertilizers[crop] || [];
};
