const isRelativeUrl = ((href:string): boolean => {
  try {
    return !(new URL(href));
  } catch (_) {
    return true;
  }
});

export default isRelativeUrl;
