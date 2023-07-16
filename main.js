var productName =document.getElementById("productName")
var productPrice =document.getElementById("productPrice")
var productCategory =document.getElementById("productCategory")
var productDescription =document.getElementById("productDescription")
var searchValue=document.getElementById("searchInput")
var addProduct=document.getElementById("addProduct")



var productList =[];
if(localStorage.getItem("products")!=null){

   productList=JSON.parse( localStorage.getItem("products"));
   display();

}


function AddProduct(){
  var product = {
    name:productName.value,
    Price:productPrice.value,
    Category:productCategory.value,
    Description:productDescription.value,
 
  }
  productList.push(product)

  display()


  localStorage.setItem("products" ,JSON.stringify(productList) )

}

function display(){
    
    var temp="";
    for(var i=0;i<productList.length;i++){

        temp+=`
        <tr>
        <td>`+i+`</td>
            <td>`+productList[i].name+`</td>
            <td>`+productList[i].Price+`</td>
            <td>`+productList[i].Category+`</td>
            <td>`+productList[i].Description+`</td>

              <td>
         <button  onclick="setForm(`+i+`)" class="btn btn-primary">Update</button>
    </td>

    <td>
        <button onclick="deleteProduct(`+i+`)"  class="btn btn-danger">Delete</button>
    </td>
    

        </tr>
`


    }

    document.getElementById("tableBody").innerHTML=temp;
}



function clearForm(){
    productName.value="";
    productPrice.value="";
    productCategory.value="tv";
    productDescription.value="";
}

function deleteProduct(index){
    productList.splice(index,1);
    localStorage.setItem("products" ,JSON.stringify(productList) )

display();


}

 function search(){
    var searchValue= searchInput.value.toLowerCase()
    var temp ="";
    for(var i=0; i<productList.length;i++)
    {
        if(
            productList[i].name.toLowerCase().includes(searchValue)== true
           || productList[i].Category.toLowerCase().includes(searchValue)== true
      ){
 
        temp += `   <tr>
        <td>`+i+`</td>
        <td>`+productList[i].name.toLowerCase().replace(searchValue,"<span class='text-danger fw-bold '>"+searchValue+"</span>")+`</td>
        <td>`+productList[i].Category.toLowerCase().replace(searchValue,"<span class='text-danger fw-bold '>"+searchValue+"</span>")+`</td>
        <td>`+productList[i].Category+`</td>
        <td>`+productList[i].Description+`</td>
        <td>
        <button class="btn btn-primary">Update</button>
    </td>
    <td>
        <button  onclick="deleteProduct(`+i+`)"  class="btn btn-danger">Delete</button>
    </td>

    </tr>

` 
      }
        
    }
       
 document.getElementById("tableBody").innerHTML=temp;

    }







function setForm(index){
    
    x=index;
    addProduct.classList.replace('d-inline-block' , 'd-none')
    updateProduct.classList.replace('d-none' , 'd-inline-block')
    productName.value=productList[index].name;
    productPrice.value=productList[index].Price;
    productCategory.value=productList[index].Category;
    productDescription.value=productList[index].Description;

}
function Ubdate(){
    productList[x].name=productName.value;
    productList[x].price=productPrice.value;
    productList[x].cate=productCategory.value;
    productList[x].desc=productDescription.value;

    display();
    localStorage.setItem("products",JSON.stringify(productList) )
    updateProduct.classList.replace('d-inline-block','d-none' )
    addProduct.classList.replace('d-none' , 'd-inline-block')
    clearForm();

}











































































































// var productName =document.getElementById("productName")
// var productPrice =document.getElementById("productPrice")
// var productCategory =document.getElementById("productCategory")
// var productDescription =document.getElementById("productDescription")
// var searchInput=document.getElementById("searchInput")
// var addProduct=document.getElementById("addProduct")
// var updateProduct=document.getElementById("updateProduct")

// var x=0;



//  var productList;
//  if(localStorage.getItem("products") !=null){
//     productList = JSON.parse( localStorage.getItem("products"))
//     display()
//  }


// function AddProduct(){
//     product ={
//         name:productName.value,
//         price:productPrice.value,
//         cate:productCategory.value,
//         desc:productDescription.value,
//     }
//     productList.push(product)
//     localStorage.setItem("products",JSON.stringify(productList) )
//     console.log(productList);

//     display()

  
   

// }



//  function display(){
//     var temp ="";
//     for(var i=0;i<productList.length;i++){
//         temp += `   <tr>
//         <td>`+i+`</td>
//         <td>`+productList[i].name+`</td>
//         <td>`+productList[i].price+`</td>
//         <td>`+productList[i].cate+`</td>
//         <td>`+productList[i].desc+`</td>
//         <td>
//         <button onclick="setForm(`+i+`)" class="btn btn-primary">Update</button>
//     </td>

//     <td>
//         <button  onclick="deleteProduct(`+i+`)"  class="btn btn-danger">Delete</button>
//     </td>
    



//     </tr>
// `
//     }

//     document.getElementById("tableBody").innerHTML=temp;
//  }



//  function deleteProduct(index){
//     productList.splice(index,1);
//     display();
//     localStorage.setItem("products",JSON.stringify(productList) )




//  }

// function clearForm(){
//     productName.value="";
//     productPrice.value="";
//     productCategory.value="mobile";
//     productDescription.value="";
    
// }

//  function search(){
//     var searchValue= searchInput.value.toLowerCase()
//     var temp ="";
//     for(var i=0; i<productList.length;i++)
//     {
//         if(
//             productList[i].name.toLowerCase().includes(searchValue)== true
//            || productList[i].cate.toLowerCase().includes(searchValue)== true
//       ){
 
//         temp += `   <tr>
//         <td>`+i+`</td>
//         <td>`+productList[i].name.toLowerCase().replace(searchValue,"<span class='text-danger fw-bold '>"+searchValue+"</span>")+`</td>
//         <td>`+productList[i].cate.toLowerCase().replace(searchValue,"<span class='text-danger fw-bold '>"+searchValue+"</span>")+`</td>
//         <td>`+productList[i].cate+`</td>
//         <td>`+productList[i].desc+`</td>
//         <td>
//         <button class="btn btn-primary">Update</button>
//     </td>
//     <td>
//         <button  onclick="deleteProduct(`+i+`)"  class="btn btn-danger">Delete</button>
//     </td>

//     </tr>

// ` 
//       }
        
//     }
       
//  document.getElementById("tableBody").innerHTML=temp;

//     }

   

// function setForm(index){
    
//     x=index;
//     addProduct.classList.replace('d-inline-block' , 'd-none')
//     updateProduct.classList.replace('d-none' , 'd-inline-block')
//     productName.value=productList[index].name;
//     productPrice.value=productList[index].price;
//     productCategory.value=productList[index].cate;
//     productDescription.value=productList[index].desc;

// }
// function Ubdate(){
//     productList[x].name=productName.value;
//     productList[x].price=productPrice.value;
//     productList[x].cate=productCategory.value;
//     productList[x].desc=productDescription.value;

//     display();
//     localStorage.setItem("products",JSON.stringify(productList) )
//     updateProduct.classList.replace('d-inline-block','d-none' )
//     addProduct.classList.replace('d-none' , 'd-inline-block')
//     clearForm();

// }

