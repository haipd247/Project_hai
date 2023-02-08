
import http from 'k6/http';
import {sleep} from 'k6';
import  {check} from 'k6';
import  {group} from 'k6';


export const options = { 
    vus: 4000,
    iterations: 1000,
    duration: '1s', 
}
export  default function () {
    const url = 'https://qa.ms.med247.co/bloodsugar/v1/configs'
    const payload = JSON.stringify({
        "logTime": "2022-08-30 00:00:00",
        "value": 6.2,
        "logType": "glucose",
        "timeType": "afterBreakfastIn1h2h",
        "note":"Em bị tiểu đường",
        "image":["https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg","https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-4.jpg"],
        "user": {
            "id": 5637
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
        'is res body has username': (r) => r.body.includes('glucose'),
    });
    sleep(1);
};
