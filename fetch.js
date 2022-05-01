
    let getData = async (url) =>{
        let res = await fetch(url);
        let data = await res.json();

        return data.meals;
    }
    let append = (data, container)=>{
        data.forEach((el) => {
        
        let image = document.createElement('img');
        image.src = el.strMealThumb;
        image.style.width ="60%";
        image.style.height = "500px";
        image.style.marginLeft = "50px";

        let p = document.createElement('p');
        p.innerText = `Tiltle: ${el.strMeal}`

        let p1 = document.createElement('p');
        p1.innerText =`Area: ${el.strArea}`;

        let p2 = document.createElement('p');
        p2.innerText = `Category: ${el.strCategory}`;

        let p3 = document.createElement('p');
        p3.innerText = `Description: ${el.strInstructions}`;

        container.append(image,p, p1, p2, p3);
        });
    }

    export {getData, append}