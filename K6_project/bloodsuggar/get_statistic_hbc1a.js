import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 200,
  duration: "1s"
};

export default function() {
  let res = http.get("https://qa.ms.med247.co/bloodsugar/v1/statistic/hbc1a?startTime=2022-08-24&endTime=2022-08-28&uid=16&timeType=beforeBreakfast");

  check(res, {
    "status was 200": (r) => r.status === 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });

  sleep(1);
}
