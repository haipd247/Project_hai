import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 20,
  duration: "10s"
};

export default function() {
  let res = http.get("/payment/hook/vnpay?vnp_Amount=2000000&vnp_BankCode=NCB&vnp_BankTranNo=VNP13903894&vnp_CardType=ATM&vnp_OrderInfo=order_desc&vnp_PayDate=20221214134142&vnp_ResponseCode=00&vnp_TmnCode=MED24702&vnp_TransactionNo=13903894&vnp_TxnRef=test.26&vnp_SecureHashType=SHA256&vnp_SecureHash=6f6aa358ceec1b001f35642343422e583ae55e8f4e05bf2151c92b34ae2356c8");

  check(res, {
    "status was 200": (r) => r.status === 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });

  sleep(1);
}
