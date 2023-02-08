import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 200,
  duration: "10s"
};

export default function() {
  let res = http.get("https://qa.ms.med247.co/activity/in/interests?type=tag&uid=635a946c2901840208e8bb03");

  check(res, {
    "status was 200": (r) => r.status === 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });

  sleep(1);
}
// export function handleSummary(data) {
//   return {
//     'summary.json': JSON.stringify(data), //the default data object
//   };
// }
