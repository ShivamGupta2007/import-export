import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let url = "https://themealdb.com/api/json/v1/1/search.php?s=food";
let container = document.getElementById("container");

import { getData, append } from "./fetch.js";

getData(url).then((res)=>{
    append(res, container)
})