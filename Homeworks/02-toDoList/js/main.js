let listDOM = document.querySelector("#list")
let addDOM = document.querySelector("#add")

addDOM.addEventListener("click", addli)

function addli(event){
    let textDOM = document.querySelector("#task")
    if( textDOM.value == "" || textDOM.value == "BOS BIRAKAMAZSIN!" ){
        textDOM.value = "BOS BIRAKAMAZSIN!"
        $(".error").toast("show")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = `
          <div class="container">
            <div class="row">
              <div class="col">
                <p class="font-weight-bold">${textDOM.value}</p>
              </div>
              <div class="col-md-auto">
              </div>
              <div>
                <button id="delete" type="button" class="btn btn-outline-dark ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                  </svg>
                </button>
                <button id="done" type="button" class="btn btn-outline-dark ml-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div> 
        `
        listDOM.append(li)
        
        let liDelDom = li.querySelector("#delete")
        liDelDom.addEventListener("click", delli)

        let liDoneDom = li.querySelector("#done")
        liDoneDom.addEventListener("click", doneLi)
    }
}

function delli(event){
  const item = this.closest("li")
  item.remove()
}

function doneLi(event){
  let item = this.closest("div")
  item.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="green" class="bi bi-check-all" viewBox="0 0 16 16">
    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
    </svg>
  `

}
