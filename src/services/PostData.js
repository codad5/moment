export function PostData(type, userData){
    let BaseUrl = 'http://localhost/chat-app/user/api/';
    return new Promise((resolve, reject) => {
        fetch(BaseUrl+type,{
            method: 'POST',
            body:(userData)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson);
        })
        .catch((error) => {
            reject(error);
        })
    })
}