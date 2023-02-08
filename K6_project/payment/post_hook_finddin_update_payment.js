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
    const url = 'https://qa.ms.med247.co/payment/hook/findiin/update_payment'
    const payload = JSON.stringify({
        "shop_id": "123456789",
        "order_id": "BC123123",
        "payment_status": 4,
        "series": [
            {
                "id": "EC1232VA.1",
                "amount": 100000,
                "payment_date": "2017-02-16T21:00:00Z"
            },
            {
                "id": "EC1232VA.2",
                "amount": 100000,
                "payment_date": "2017-03-16T21:00:00Z"
            },
            {
                "id": "EC1232VA.3",
                "amount": 100000,
                "payment_date": "2017-04-16T21:00:00Z"
            }
        ]
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
