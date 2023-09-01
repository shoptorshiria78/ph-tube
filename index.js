const dataLoad = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();
    displayCategory(data.data);
   
}


const displayCategory = (category) => {
    const categoryContainer = document.getElementById('category-container');

    category.forEach((category) => {
        const btn = document.createElement('button');
        btn.classList=`w-20 h-8 rounded bg-gray-200 hover:bg-[#FF1F3D] hover:text-white`;
        btn.innerHTML = `
               ${category.category}
               `
        categoryContainer.appendChild(btn);
    })


}

const cardLoad = async ( categoryId) => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000')
    const data = await res.json();
    console.log(data.data);
}

const displayCard = () =>{
    const cardContainer = document.getElementById('card-container');


}
dataLoad();
cardLoad();