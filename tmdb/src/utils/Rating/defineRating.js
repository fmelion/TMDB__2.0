const defineRating = rate => {
  if (rate <= 12.5) {
    return 12;
  }

  if (rate <= 25) {
    return 25;
  }

  if (rate <= 37.5) {
    return 37;
  }

  if (rate <= 50) {
    return 50;
  }

  if (rate <= 62.5) {
    return 62;
  }

  if (rate <= 75) {
    return 75;
  }

  if (rate <= 87) {
    return 87;
  }

  if ((rate <= 97, 5)) {
    return 97;
  }

  return 100;
};

export default defineRating;
