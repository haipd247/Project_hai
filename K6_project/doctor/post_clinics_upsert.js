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
    const url = 'https://qa.ms.med247.co/doctor/v1/clinics/upsert'
    const payload = JSON.stringify({
        "id": 15,
        "status": "active",
        "name": "Bệnh viện Tai Mũi Họng Sài Gòn",
        "phone": "0399331234",
        "email": "",
        "address": {
            "formated": "",
            "components": []
        },
        "slug": "benh-vien-tai-mui-hong-sai-gon",
        "description": "",
        "brand": {
            "name": "Bệnh viện Tai Mũi Họng Sài Gòn",
            "domain": "tmhsg",
            "email": "",
            "phone": "",
            "slug": "benh-vien-tai-mui-hong-sai-gon",
            "id": 14
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
