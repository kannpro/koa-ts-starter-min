const normalizePort = (v: string | undefined) => {
  if (v === undefined) return undefined;

  let port = parseInt(v, 10);

  if (!isNaN(port) || (port >= 0 && port <= 65535)) {
    return port;
  }

  return undefined;
};

export { normalizePort };
