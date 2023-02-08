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
    const url = 'https://socket.ms.med247.co/socket/emitter'
    const payload = JSON.stringify({
        "client": "dev.DjgSIh1LTf3sl7qO6uY7Ds7HtfN8dv6n",
        "event": "chat.message",
        "data": "Sho"
    
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
