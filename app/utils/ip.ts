import axios from "axios";

export function getIP() {
  return axios.get("http://api.ipify.cn?format=json").then((res) => res.data.ip as string);
}

export function getLocationByIP(ip: string) { 
  return axios.get(`https://qifu-api.baidubce.com/ip/local/geo/v1/district?ip=${ip}`).then((res) => res.data.data);
}

export async function getLocation() {
  try {
    const ip = await getIP()
    const location = await getLocationByIP(ip)
    return location
  } catch (error) {
    console.log(error);
  }
}

export function getWeather() {
  return axios.get("https://weather.cma.cn/api/weather/view").then((res) => res.data);
}
