export default {
  port: 8080,
  host: "localhost",
  dbUrl: "mongodb://lmo:asdffdsa@127.0.0.1:27017/local-pos?authSource=admin",
  saltWorkFactor: 10,
  secretKey: "suuhh",
  page_limit: 50,
  mqttUrl: "ws://127.0.0.1:9001",
  // mqttUrl: "ws://127.0.0.1:1883",

  mqttUserName: "detpos",
  mqttPassword: "asdffdsa",
  wsServerUrl: "http://detfsmm:9000/api/change-mode",
  // detailsaleCloudUrl: "https://detfsmm.com/api/detail-sale",
  //coustomerCloudUrl: "http://detfsmm.com:9000/api/customer",
  // coustomerCloudUrl: "https://detfsmm.com/api/customer/local-create",
  // debtCloudUrl: "https://detfsmm.com/api/debt/local-create",
};