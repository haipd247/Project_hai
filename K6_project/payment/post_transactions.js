import http from 'k6/http';
import {sleep} from 'k6';
import  {check} from 'k6';
import  {group} from 'k6';


export const options = { 
    vus: 400,
    // iterations: 1000,
    duration: '1s', 
}
export  default function () {
    const url = 'https://qa.ms.med247.co/payment/v1/transactions'
    const payload = JSON.stringify({
        "reference": "test.37",
        "amount": "10000",
        "provider": "vnpay",
        "ipn": "https://med247.co/hook/microservice/ipn",
        "redirect": "https://med247.co/thong-tin-phieu-kham",
        "title": "",
        "icon": "",
        "note": ""
    });
    
    const params = {
        header: {
            'Content-Type': 'application/json',
        },
    };

    const   res = http.post(url, payload, params);
    check(res, {
        'Response status is 200': (r) => r.status == 200,
       
    });
    sleep(1);
};
