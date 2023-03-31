// function HeaderComponent(){
//     let html = `<section><div class="container">
//                 <h1>Header</h1>
//             </div></section`;
//     let headercomponents =  document.getElementsByTagName("HeaderComponent");
//     for(let i=0;i<headercomponents.length;i++){
//         headercomponents[i].innerHTML = html;
//     };      
// }
// HeaderComponent();
class HeaderComponent{
    tagName = "HeaderComponent";
    render(){
        let html = `<section><div class="container">
            <h1>Header</h1>
        </div></section`;
        let headercomponents =  document.getElementsByTagName(this.tagName);
        for(let i=0;i<headercomponents.length;i++){
            headercomponents[i].innerHTML = html;
        };   
    }
}
let o = new HeaderComponent();
o.render();