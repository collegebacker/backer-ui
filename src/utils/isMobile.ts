const isMobile = () => {
  return /mobile/i.test(navigator.userAgent);
};

export default isMobile;
