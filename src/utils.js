export function getRedirectPath({type,avatar}){
    // 根据用户信息，跳地址
    // console.log(123);
    let url = (type==="boss")?"/boss":"/genius";
    if(!avatar) {
        url += "info"
    }
    return url;
}