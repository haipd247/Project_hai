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
    const url = 'https://qa.ms.med247.co/doctor/v1/schedules/upsert'
    const payload = JSON.stringify({
        "id": 1410,
        "brand": {
            "id": 10,
            "name": "test"
        },
        "date": 1670917322337,
        "day": null,
        "status": "active",
        "type": "date",
        "user": {
            "id": 1246,
            "username": "84903890834",
            "phone": "0923456789",
            "email": "samclaffin_prefix@gmail.com",
            "avatar": "1661929594-featured_.jpg"
        },
        "work": {
            "morning": {
                "active": true,
                "from": 1020,
                "to": 270
            },
            "afternoon": {
                "active": true,
                "from": 360,
                "to": 540
            },
            "evening": {
                "active": true,
                "from": 690,
                "to": 960
            }
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
