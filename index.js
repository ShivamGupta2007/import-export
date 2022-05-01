//https://themealdb.com/api/json/v1/1/search.php?s=food

let food_div = document.getElementById("food");
let id;
async function searchFood(){
    try{
        const query = document.getElementById("query").value;

        const res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${query}`)

        const data = await res.json();
        console.log("data:", data);

        const food = data.meals; 
        return food;

    }catch (err){
        console.log("err:",err);
    }
}

function appendFood(data){
    document.querySelector("#food").innerHTML = "";
    data.forEach(function(el) {
        var div = document.createElement("div");
        div.style.marginTop = "20px";
        div.style.width = "122%";

        let image = document.createElement("img");
        image.src = el.strMealThumb;

        let p = document.createElement("p");
        p.innerText = `Title: ${el.strMeal}`;

        let p1 = document.createElement("p1");
        p1.innerText = `Area: ${el.strArea}`;

        var div2 = document.createElement("div");
        div2.setAttribute("id", "flex");
        div2.style.marginTop ="18px";

         let p2 = document.createElement("p2");
         p2.innerText = `Category: ${el.strCategory}`;

        div.append(image, p, p1, div2, p2); 
        document.querySelector("#food").append(div);  
    });
}
async function main(){
      let data = await searchFood();
      //console.log("data:", data)
      if(data === undefined){
        return false;
    }
    appendFood(data);
}   

function debounce(func, delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    }, delay);
}

