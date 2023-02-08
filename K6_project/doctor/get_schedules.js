import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 200,
  duration: "10s"
};

export default function() {
  let res = http.get("https://qa.ms.med247.co/doctor/v1/schedules?startDate=2022-11-26T18:00:00.000Z&endDate=2022-12-26T18:00:00.000Z&mainServiceId=28&doHomeService=false&clinicId=8");

  check(res, {
    "status was 200": (r) => r.status === 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });

  sleep(1);
}
