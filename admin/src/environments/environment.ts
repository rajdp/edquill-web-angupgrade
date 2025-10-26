// Default Environment (Local Development)
// This file is used by default when running 'ng serve'
export const environment = {
  production: false,
  // CI4 Backend - Testing
  apiHost: 'http://localhost:8888/rista_ci4/public/',
  webHost: 'http://localhost:4211',
  imgUrl: 'http://localhost:8888/rista',
  version: '1.0.1',
  sessionPrefix: 'rista_',
  envName: 'LOCAL'
};

//uat
//
// export const environment = {
//   production: false,
//   apiHost: 'https://uthkal.com/rista/api/index.php/admin/',
//   webHost: 'http://localhost:4200',
//   imgUrl: 'https://uthkal.com/uat/rista',
//   version: '1.0.1'
// };
