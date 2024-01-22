import{ sleep } from 'k6'; 
import http from 'k6/http'; 
  
export let options = { 
    duration : '1m', 
    vus : 10, 
}; 
  
export default function() { 
    http.get('https://spl-tp-crafter-delivery.tekcent.com/'); 
    sleep(3); 
}
