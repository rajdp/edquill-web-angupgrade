// Default Environment (Local Development)
// This file is used by default when running 'ng serve'
export const environment = {
  production: false,
  // CI4 Backend - Testing
  apiHost: 'http://localhost:8888/rista_ci4/public/',
  webHost: 'http://localhost:8211',
  imgUrl: 'http://localhost:8888/rista',
  version: '5.9.11',
  showStudent: true,
  sessionPrefix: 'rista_',
  envName: 'LOCAL - CI4'  // Added CI4 marker to verify which config is loaded
};

// Log to console so you can verify which config is loaded
console.log('🔧 [ENVIRONMENT] Loading environment.ts');
console.log('🔧 [ENVIRONMENT] API Host:', environment.apiHost);
console.log('🔧 [ENVIRONMENT] Env Name:', environment.envName);
