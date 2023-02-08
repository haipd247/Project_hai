import http from "k6/http";

export let options = {
  stages: [
    { duration: "30s", target: 10 },
    { duration: "1m30s", target: 100 },
    { duration: "20s", target: 0 },
  ],
};

export default function() {
  let res1 = http.get("https://qa.ms.med247.co/bloodsugar/v1/logs/6392fb3bc620060159b57486");
  let res2 = http.get("https://qa.ms.med247.co/bloodsugar/v1/logs?limit=1&uid=5");
  let res3 = http.get("https://qa.ms.med247.co/activity/in/interests?type=tag&uid=635a946c2901840208e8bb03");
  console.log(res1.status);
  console.log(res2.status);
  console.log(res3.status);
};
