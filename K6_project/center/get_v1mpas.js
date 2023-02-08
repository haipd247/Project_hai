import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 200,
  duration: "10s"
};

export default function() {
  let res = http.get("https://qa.ms.med247.co/center/v1/maps?mid=639fe075a66a635bf7218475");

  check(res, {
    "status was 200": (r) => r.status === 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });

  sleep(1);
}
