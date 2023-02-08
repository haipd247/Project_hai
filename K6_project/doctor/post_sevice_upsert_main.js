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
    const url = 'https://qa.ms.med247.co/doctor/v1/services/upsert'
    const payload = JSON.stringify({
        "idMain": 98,
        "code": "PKDD-006",
        "description": "",
        "doHomeService": false,
        "image": "",
        "isPopular": "true",
        "limitTime": 15,
        "name": "Khám và tư vấn Dinh dưỡng với bác sĩ chuyên gia",
        "price": 500000,
        "status": "inactive"
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
