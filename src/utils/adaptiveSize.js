export const adaptiveSize = (data) => {
  if (data.length < 5 && data.length > 2) {
    return 95;
  } else if (data.length >= 5 && data.length <= 8) {
    return 80;
  } else if (data.length >= 9 && data.length <= 12) {
    return 70;
  } else if (data.length >= 13 && data.length <= 16) {
    return 68;
  } else if (data.length >= 17 && data.length <= 20) {
    return 60;
  } else if (data.length >= 21 && data.length <= 24) {
    return 45;
  } else if (data.length >= 25 && data.length <= 28) {
    return 35;
  } else if (data.length >= 29 && data.length <= 32) {
    return 25;
  }
  return 100;
};
export const adaptiveItemTitle = (data) => {
  if (data.length < 5) {
    return 180 - 18;
  } else if (data.length >= 5 && data.length <= 7) {
    return 168 - 18;
  } else if (data.length >= 8 && data.length <= 10) {
    return 153 - 18;
  } else if (data.length >= 11 && data.length <= 13) {
    return 138 - 18;
  } else if (data.length >= 14 && data.length <= 16) {
    return 122 - 18;
  } else if (data.length >= 17 && data.length <= 19) {
    return 108 - 18;
  } else if (data.length >= 20 && data.length <= 22) {
    return 92 - 18;
  } else if (data.length >= 23 && data.length <= 25) {
    return 77 - 18;
  } else if (data.length >= 26 && data.length <= 28) {
    return 63 - 18;
  } else if (data.length >= 29 && data.length <= 31) {
    return 50 - 18;
  }
  return 100;
};
