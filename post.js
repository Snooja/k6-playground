//1. init code (runs once per VU in non-cloud scripts)
import http from 'k6/http';

// global variables
const url = 'http://test.k6.io/login';
const payload = JSON.stringify({
    email: 'aaa',
    password: 'bbb',
});
const params = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export default function () {
    //3. VU Code (run once per iteration per VU)
    http.post(url, payload, params);
}
