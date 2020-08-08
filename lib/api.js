import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://10.4.22.73:8080/', //local
    // baseURL: 'http://10.4.22.184/', //local
    // baseURL : 'http://ec2-34-244-178-211.eu-west-1.compute.amazonaws.com/', //live
    // baseURL: 'https://sohocrm-api.herokuapp.com/',
    baseURL: 'http://62.252.239.190:8080/',
    // baseURL: 'http://localhost:8080',
    headers: {
        Apptoken: '9870d04b-cac2-4c7c-933f-9cf647a04a06',
        // Authorization: window.localStorage.getItem('authToken')||"",
    },
});

api.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        console.log(localStorage.getItem('authToken'))
        if (
            !localStorage.getItem('authToken') &&
            localStorage.getItem('authToken') === null &&
            window.location.pathname !== '/login'
        ) {
            window.location.href = '/login';
        } else {
            config.headers['Authorization'] = localStorage.getItem('authToken');
        }
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

export const toFormData = object => {
    const formData = new FormData();
    Object.keys(object).forEach(key => {
        formData.append(key, object[key]);
    });
    return formData;
};

// export const url="http://10.4.22.184:8082/fileAccess/"

export default api;
