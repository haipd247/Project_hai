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
        "reference": "test.80",
        "amount": "10000",
        "provider": "appotapay",
        "ipn": "https://ved.ms.med247.co/payment/hook/test-ipn",
        "redirect": "https://ved.ms.med247.co/payment/ui/test-result", 
        "title": "Thanh toan",
        "icon": "",
        "note": "",
        "user": {
            "username": "Nguyen Van B"
        }
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
