let heading = document.querySelector('.heading');

let btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    alert("hello there ")
})

let imgshow = document.querySelector('.img');
let data = [
    {img:"img/bg.jpg"}
]

function showImg (){
    return (
        imgshow.innerHTML = data.map((e)=>{
            return (
                `
                <img src=${e.img} alt="">
                `
            )
        })
    )
}

showImg()