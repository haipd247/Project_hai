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
        "id": 521,
        "brand": {
            "name": "Greenbay",
            "domain": "gb",
            "id": 18
        },
        "category": "normal",
        "code": "MED. 12345",
        "degrees": [
            {
                "id": 7,
                "content": "- Phó giáo sư, Giáo sư, Thầy thuốc Ưu tú, Thầy thuốc Nhân dân\n- Tiến sĩ, BSCKII có đủ điều kiện: Người có tên tuổi/tầm ảnh hưởng trên thị trường hiện nay, giữ chức vụ từ Phó khoa trở lên.\n",
                "name": "Bác sĩ chuyên gia"
            }
        ],
        "description": "",
        "doHomeService": false,
        "enableReason": false,
        "extra": {},
        "image": "",
        "isInternalOnly": 0,
        "isPopular": true,
        "kind": "offline",
        "limitTime": 15,
        "main": {
            "id": 98,
            "name": "Khám và tư vấn Dinh dưỡng với bác sĩ chuyên gia"
        },
        "name": "Khám và tư vấn Dinh dưỡng với bác sĩ chuyên gia",
        "price": 500000,
        "specialities": [
            {
                "id": 11,
                "image": "",
                "translations": [
                    {
                        "locale": "vi",
                        "value": "Dinh Dưỡng"
                    },
                    {
                        "locale": "en",
                        "value": "Nutrition"
                    }
                ]
            },
            {
                "id": 34,
                "image": "1630922425-diet.png",
                "translations": [
                    {
                        "locale": "vi",
                        "value": "Dinh dưỡng"
                    },
                    {
                        "locale": "en",
                        "value": "Nutrition"
                    }
                ]
            }
        ],
        "status": "active",
        "sync": true,
        "useForBilling": true
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
