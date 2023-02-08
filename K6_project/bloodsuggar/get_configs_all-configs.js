import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 2,
  duration: "1s"
};

export default function() {
  let res = http.get("https://qa.ms.med247.co/bloodsugar/v1/configs");

  check(res, {
    "status was 200": (r) => r.status === 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });

  sleep(1);
}
