import http from 'k6/http';
import {sleep} from 'k6';
import  {check} from 'k6';

export const options = { 
    vus: 100,
    // iterations: 1000,
    duration: '1s', 
}
export  default function () {
    const url = 'https://med247.co/graphql'
    const payload = JSON.stringify({
        "app": "web"
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
