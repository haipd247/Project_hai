import http from 'k6/http';
import {sleep} from 'k6';
import  {check} from 'k6';

export const options = { 
    vus: 100,
    // iterations: 1000,
    duration: '1s', 
}
export  default function () {
    const url = 'https://qa.ms.med247.co/bloodsugar/v1/configs'
    const payload = JSON.stringify({
        "diabetesType": "normal",
        "unitType": "mmol/L",
       "scheduals":["09:00","16:00","16:30"],
        "remind":true,
        // "user": {
        //     "id": 30
        // }
    });
    
    const params = {
        header: {
            'Content-Type': 'application/json',
        },
    };

    const   res = http.post(url, payload, params);
    check(res, {
        'Response status is 200': (r) => r.status == 200,
        'is res body has username': (r) => r.body.includes('bangnd'),
    });
};
