const normalizePort = (v: string) => {
  let port = parseInt(v, 10);

  if (!isNaN(port) || (port >= 0 && port <= 65535)) {
    return port;
  }

  return false;
};

export { normalizePort };
