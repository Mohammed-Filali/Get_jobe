const BtnAdd=document.getElementById('addJob');
var Name=document.getElementById('Name');
var email=document.getElementById('email');
var souers=document.getElementById('imag');
var Dives=document.getElementById('Home');
var sourese;

const fileImg=document.getElementById('imag');
fileImg.addEventListener('change', function(event){
    const file = this.files[0];
        const reader = new FileReader();
    
        reader.onload = function(event) {
           var url = event.target.result;
           
           
           sourese=url;
           
        };
     
    
        reader.readAsDataURL(file);

});

 
BtnAdd.addEventListener('click',function(){
    const Card=`
    <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-8 ">
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="box-content">
                                    <img src="${sourese}" class="img-fluid "  alt="img"/>
                                    <h3>${Name.value}</h3>
                                </div>
                                <div class="box-content">
                                    <p>12/07/2024</p>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row d-flex justify-content-center  ">
                                    <div class="col-sm-5 col-md-6  d-flex justify-content-center mb-2  ">
                                        <div class="box-link">
                                            <div class="box-col">
                                                <i class="bi bi-collection"></i>
                                            </div>
                                            <div class="box-col">
                                                <p>Cvs</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-5 col-md-6 d-flex justify-content-center ">
                                        <div class="box-link">
                                            <div class="box-col">
                                                <i class="bi bi-collection"></i>
                                            </div>
                                            <div class="box-col">
                                                <p>Project</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                            <div class="card-footer text-muted">
    
                               <div class="row">
                                <div class="col-sm-12">
                                    <button type="button" class="btn btn-outline-primary" onclick="supprimer(this)">Supprimer </button> 
                                    <button type="button" class="btn btn-outline-primary" >Envoyer Message</button> 
                                </div>
                               </div>    
                            </div>
                           </div>
                    </div>
                </div>
            </div>
            `;
    Dives.innerHTML += Card;
    console.log(Dives.innerHTML);
});


const myModal1 = new bootstrap.Modal(
    document.getElementById("modalId"),
    options,
);

const myModal2 = new bootstrap.Modal(
    document.getElementById("loginModal"),
    options,
);

const myModal3 = new bootstrap.Modal(
    document.getElementById("modalgo"),
    options,
);

function supprimer(e) {
    e.parentNode.parentNode.parentNode.parentNode.remove();
}












