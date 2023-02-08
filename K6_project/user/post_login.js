import http from 'k6/http';
import {sleep} from 'k6';
import  {check} from 'k6';

export const options = { 
    vus: 1000,
    // iterations: 1000,
    duration: '5s', 
}
export  default function () {
    const url = 'https://qa.ms.med247.co/user/v1/users/login/'
    const payload = JSON.stringify({
        username: 'bangnd',
        password: 'bang9999',
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
