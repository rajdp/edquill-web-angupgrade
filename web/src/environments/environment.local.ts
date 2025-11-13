// Local Development Environment
const DEFAULT_HOST = 'localhost';
const DEFAULT_FRONTEND_PORT = 8211;
const DEFAULT_BACKEND_HOST = 'localhost';
const DEFAULT_BACKEND_PORT = 8888;
const DEFAULT_BACKEND_BASE_PATH = 'rista_ci4';

function resolveHostname(): string {
  if (typeof window === 'undefined' || !window?.location?.hostname) {
    return DEFAULT_HOST;
  }
  return window.location.hostname.toLowerCase();
}

function resolveFrontendOrigin(hostname: string): string {
  if (typeof window !== 'undefined' && window?.location?.origin) {
    return window.location.origin;
  }
  return `http://${hostname}:${DEFAULT_FRONTEND_PORT}`;
}

const hostname = resolveHostname();
const frontendOrigin = resolveFrontendOrigin(hostname);
function resolveBackendHost(hostname: string): string {
  if (
    !hostname ||
    hostname === DEFAULT_HOST ||
    hostname.endsWith('.localhost')
  ) {
    return DEFAULT_BACKEND_HOST;
  }
  return hostname;
}

const backendHost = resolveBackendHost(hostname);
const backendOrigin = `http://${backendHost}:${DEFAULT_BACKEND_PORT}`;
const backendBaseUrl = DEFAULT_BACKEND_BASE_PATH
  ? `${backendOrigin}/${DEFAULT_BACKEND_BASE_PATH.replace(/^\/|\/$/g, '')}`
  : backendOrigin;

export const environment = {
  production: false,
  apiHost: `${backendBaseUrl}/`,
  webHost: frontendOrigin,
  imgUrl: `${backendBaseUrl}/public`,
  version: '6.0.0',
  showStudent: true,
  sessionPrefix: 'rista_',
  envName: 'LOCAL'
};


