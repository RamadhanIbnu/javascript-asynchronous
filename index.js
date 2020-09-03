// let data = []
const getNationality = async () => {
    try {
        let response = await fetch("https://restcountries.eu/rest/v2/all");
        let data = await response.json();
        data.forEach(function (getData) {
            console.log(getData)
                const div = document.createElement('div')
                div.className = "col-lg-3 col-md-6 mb-4 data";
            
                div.innerHTML =
                '<div class="card h-100">' +
                    '<img class="card-img-top" src="' +getData.flag+ '" alt="fruit image">'+
                        '<div class="card-body">' +
                            '<h4 class="card-title">' +getData.name+ '</h4>' +
                        '</div>'+
                        '<div class="card-footer">'+
                            '<a href="" class="btn btn-primary">Find Out More!</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'
                document.getElementById("showData").appendChild(div);
        });
    } catch (error) {
        console.log("maaf data yang anda cari tidak ditemukan")
    }
}
getNationality()
    
    // fetch("https://restcountries.eu/rest/v2/all")
    // .then ((response)=>{
    //     return response.json()
    // })
    
    // .then ((result)=>{
    //     let allData = result;
    //     console.log(allData)
    
    //     allData.forEach(function (getData) {
    
    //         const div = document.createElement('div');
    //         div.className = "col-lg-3 col-md-6 mb-4 data";
        
    //         div.innerHTML = 
    //         '<div class="card h-100">' +
    //             '<img class="card-img-top" src="' +getData.flag+ '" alt="fruit image">'+
    //                 '<div class="card-body">' +
    //                     '<h4 class="card-title">' +getData.name+ '</h4>' +
    //                 '</div>'+
    //                 '<div class="card-footer">'+
    //                     '<a href="" class="btn btn-primary">Find Out More!</a>'+
    //                 '</div>'+
    //             '</div>'+
    //         '</div>'
    //         document.getElementById("showData").appendChild(div);
    //     });
        
    // });