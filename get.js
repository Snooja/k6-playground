// 1. Init code (run once per VU) in non-cloud scripts
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    {duration: '3s', target: 20},
    {duration: '7s', target: 10},
    {duration: '2s', target: 35},
    {duration: '1s', target: 0}
  ] 
};

export function setup () {
  //2. Setup Code (run once overall)
}

export default function () {
  //3. VU Code (run once per iteration per VU)
  http.get('https://test.k6.io');
  sleep(1);
}

export function teardown(data) {
  //4. Teardown Code (runs once unnless early error exits)
}
