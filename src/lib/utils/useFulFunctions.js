export const handleClickOnItem = (link, router) => {
  if (!link || typeof link !== 'string') {
    console.error('Invalid link provided to handleClickOnItem');
    return;
  }

  const parts = link.split('@');
  if (parts.length !== 2) {
    console.error(`Invalid link format: ${link}. Expected 'type@path'.`);
    return;
  }

  const type = parts[0];
  const path = parts[1];

  if (type === 'internal') {
    if (!router) {
      console.error('Router instance is required for internal links.');
      return;
    }
    if (path) {
      router.push(path);
    } else {
      console.warn('Internal link path is empty.');
    }
  } else if (type === 'external') {
    if (path) {
      if (path.startsWith('http://') || path.startsWith('https://')) {
        window.location.href = path;
      } else {
        window.location.href = `https://${path}`;
      }
    } else {
      console.warn('External link path is empty.');
    }
  } else {
    console.warn(`Unknown link type: ${type}`);
  }
};
