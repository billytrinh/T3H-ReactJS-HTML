// function AsideComponent(){
//     let categories = [
//         "Fashion",
//         "Watch",
//         "Smart Phone",
//         "Tivi",
//         "Machines",
//         "Kitchens"
//     ];
//     let html = ` 
//     <aside>
//                     <ul class="list-group">`;

//      for(let i=0;i<categories.length;i++){
//         html += `<li class="list-group-item">${categories[i]}</li>`;
//      }               
//      html += `</ul>    
//                 </aside>`;
//     let components =  document.getElementsByTagName("AsideComponent");
//     for(let i=0;i<components.length;i++){
//         components[i].innerHTML = html;
//     }; 
// }
// AsideComponent();

class AsideComponent{
    categories = [
                "Fashion",
                "Watch",
                "Smart Phone",
                "Tivi",
                "Machines",
                "Kitchens"
            ];
    render(){
            let html = ` 
            <aside><ul class="list-group">`;

            for(let i=0;i<this.categories.length;i++){
                html += `<li class="list-group-item">${this.categories[i]}</li>`;
            }               
            html += `</ul>    
                        </aside>`;
            let components =  document.getElementsByTagName("AsideComponent");
            for(let i=0;i<components.length;i++){
                components[i].innerHTML = html;
            }; 
    }        
}
let o = new AsideComponent();
o.render();