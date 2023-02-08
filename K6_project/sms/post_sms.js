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
    const url = 'https://qa.ms.med247.co/sms/v1/messages'
    const payload = JSON.stringify({
        "phone": "+84971512593",
        "provider": "vivas",
        "template": "test_template",
        "context": {
            "name": "Hà"
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
