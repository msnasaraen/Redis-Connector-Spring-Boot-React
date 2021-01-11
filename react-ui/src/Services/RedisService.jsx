import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8081/";

class RedisService {

    addDataToRedis(data){
        return axios.post(EMPLOYEE_API_BASE_URL+'redis/add', data);
    }

    getValueFromRedis(data){
        return axios.post(EMPLOYEE_API_BASE_URL+'redis/get', data);
    }
}

export default new RedisService()