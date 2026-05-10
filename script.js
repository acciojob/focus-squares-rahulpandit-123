//your JS code here. If required.
let boxes = document.getElementsByClassName("square")

        for (let box of boxes) {
            box.addEventListener("mouseover", (e) => {
                for(let item of boxes){
                    if(item != box){
                        item.classList.add("active")
                    }
                }
            })
            box.addEventListener("mouseout", ()=>{
                for(let item of boxes){
                    if(item != box ){
                        item.classList.remove("active")
                       
                    }
                }
            })
        }