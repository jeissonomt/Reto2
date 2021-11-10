
/**
 * Funcion consultar todos
 */
function Consultar() {
    $.ajax(
        {
            url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/library/library',
            //  data : { id : 123 },
            type: 'GET',
            dataType: 'json',

            error: function (xhr, status) {
                alert('ha sucedido un problema, ' + xhr.status);
            },
            success: function (json) {
                $("#mostrarcubiculos").empty();
                $("#mostrar").html("");
                tabla = "<center><br><br><table border='1'><theader><tr><th>ID</th><th>TARGET</th><th>CAPACITY</th><th>CATEGORY_ID</th><th>NAME</th><th>OPCIONES</th></tr></theader><tbody>"
                total = 0;
                filas = ""
                for (i = 0; i < json.items.length; i++) {
                    filas += "<tr>"
                    filas += "<td>" + json.items[i].id +"</td>"
                    filas += "<td>" + json.items[i].target +"</td>"
                    filas += "<td>" + json.items[i].capacity +"</td>"
                    filas += "<td>" + json.items[i].category_id +"</td>"
                    filas += "<td>" + json.items[i].name +"</td>"
                    filas += "<td><center><button class='' title='Editar' onClick='editCubiculo("+json.items[i].id+")'><img src='img/editing.png'/></button>&nbsp;&nbsp;<button class=''  title='Borrar' onClick='deleteCubiculo("+json.items[i].id+")'><img src='img/bin.png'/></button></td>"

                }
                $("#mostrarcubiculos").append(tabla + filas + "</tbody></table></center>")
                console.log(json)
            }, complete: function (xhr, status) {
                //alert('Petición realizada, ' + xhr.status);
            }

        }
    );
}

/**
 * Funcion consultar uno
 */
 function Consultaruno() {
     id = $('#id').val();
    $.ajax(
        {
            url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/library/library/'+id,
            //  data : { id : 123 },
            type: 'GET',
            dataType: 'json',

            error: function (xhr, status) {
                alert('ha sucedido un problema, digite un ID, ' + xhr.status);
            },
            success: function (json) {
                $("#mostrarcubiculos").empty();
                $("#mostrar").html("");
                tabla = "<center><br><br><table border='1'><theader><tr><th>ID</th><th>TARGET</th><th>CAPACITY</th><th>CATEGORY_ID</th><th>NAME</th><th>OPCIONES</th></tr></theader><tbody>"
                total = 0;
                filas = ""
                for (i = 0; i < json.items.length; i++) {
                    filas += "<tr>"
                    filas += "<td>" + json.items[i].id +"</td>"
                    filas += "<td>" + json.items[i].target +"</td>"
                    filas += "<td>" + json.items[i].capacity +"</td>"
                    filas += "<td>" + json.items[i].category_id +"</td>"
                    filas += "<td>" + json.items[i].name +"</td>"
                    filas += "<td><center><button class='' title='Editar' onClick='editCubiculo("+json.items[i].id+")'><img src='img/editing.png'/></button>&nbsp;&nbsp;<button class=''  title='Borrar' onClick='deleteCubiculo("+json.items[i].id+")'><img src='img/bin.png'/></button></td>"

                }
                $("#mostrarcubiculos").append(tabla + filas + "</tbody></table></center>")
                console.log(json)
            }, complete: function (xhr, status) {
                //alert('Petición realizada, ' + xhr.status);
            }

        }
    );
}

/**
 * limpiar consulta
 */
function LimpiarConsulta(){
    ruta ='index.html';
    $.ajax({
        type: 'GET',
        url: ruta,
        success: function (data) {
            $("#mostrarcubiculos").empty();
            //$('#mostrar').html(data);
            $('#id').val("");
            Consultar();
        }
    });
    return false;

}


/**
 * Funcion guardar
*/
function guardarCubiculo() {

    
    if($("#target").val() == ""){
        divtarget.style.display = 'block';
        divcapacity.style.display = 'none';
        divcategory.style.display = 'none';
        divname.style.display = 'none';
        $("#target").val('').focus();
        return false
    }
    if($("#capacity").val() == ""){
        divtarget.style.display = 'none';
        divcapacity.style.display = 'block';
        divcategory.style.display = 'none';
        divname.style.display = 'none';
        $("#capacity").val('').focus();
        return false
    }
    if($("#category").val() == ""){
        divtarget.style.display = 'none';
        divcapacity.style.display = 'none';
        divcategory.style.display = 'block';
        divname.style.display = 'none';
        $("#category").val('').focus();
        return false
    }
    if($("#name").val() == ""){
        divtarget.style.display = 'none';
        divcapacity.style.display = 'none';
        divcategory.style.display = 'none';
        divname.style.display = 'block';
        $("#name").val('').focus();
        return false
    }
    
    if (confirm("¿Seguro que deseas Guardar la informacion?")) {
        $.ajax(
            {
                url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/library/library',
                type: 'POST',
                dataType: 'json',
                data: {
                    target : $('#target').val(),
                    capacity : $('#capacity').val(),
                    category_id : $('#category').val(),
                    name : $('#name').val()
                },
                success: function (json) {
                    divcubiculosuccess.style.display = 'block';
                    divcubiculoerror.style.display = 'none';
                    divtarget.style.display = 'none';
                    divcapacity.style.display = 'none';
                    divcategory.style.display = 'none';
                    divname.style.display = 'none';
                    $("#target").val('');
                    $("#capacity").val('');
                    $("#category").val('');
                    $("#name").val('');
                    $("#codigo").val('');      
                },
                complete: function (xhr, status) {
                    //alert('Petición realizada, ' + xhr.status);
                    divcubiculosuccess.style.display = 'block';
                    divcubiculoerror.style.display = 'none';
                    divtarget.style.display = 'none';
                    divcapacity.style.display = 'none';
                    divcategory.style.display = 'none';
                    divname.style.display = 'none';
                    $("#target").val('');
                    $("#capacity").val('');
                    $("#category").val('');
                    $("#name").val('');
                    $("#codigo").val('');   
                },
                error: function (xhr, status) {
                    divcubiculoerror.style.display = 'none';   
                },
            }
        )
    }

}

/**
 * Funcion actualizar
*/
function updateCubiculo() {
    let myData={
        id : $('#codigo1').val(),
        target : $('#target1').val(),
        capacity : $('#capacity1').val(),
        category_id : $('#category1').val(),
        name : $('#name1').val()
    }
    let dataSend=JSON.stringify(myData);
    
    if($("#target1").val() == ""){
        divtarget.style.display = 'block';
        divcapacity.style.display = 'none';
        divcategory.style.display = 'none';
        divname.style.display = 'none';
        $("#target1").val('').focus();
        return false
    }
    if($("#capacity1").val() == ""){
        divtarget.style.display = 'none';
        divcapacity.style.display = 'block';
        divcategory.style.display = 'none';
        divname.style.display = 'none';
        $("#capacity1").val('').focus();
        return false
    }
    if($("#category1").val() == ""){
        divtarget.style.display = 'none';
        divcapacity.style.display = 'none';
        divcategory.style.display = 'block';
        divname.style.display = 'none';
        $("#category1").val('').focus();
        return false
    }
    if($("#name1").val() == ""){
        divtarget.style.display = 'none';
        divcapacity.style.display = 'none';
        divcategory.style.display = 'none';
        divname.style.display = 'block';
        $("#name1").val('').focus();
        return false
    }
    id=$('#codigo1').val();
   //alert (id);
    if (confirm("¿Seguro que deseas Guardar la informacion?")) {
        $.ajax(
            {
                url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/library/library',
                type: 'PUT',
                dataType: 'json',
                data: dataSend,
                contentType: 'application/JSON',
                success: function (json) {
                    divcubiculosuccess.style.display = 'block';
                    divcubiculoerror.style.display = 'none';
                    divtarget.style.display = 'none';
                    divcapacity.style.display = 'none';
                    divcategory.style.display = 'none';
                    divname.style.display = 'none';
                    $("#target1").val('');
                    $("#capacity1").val('');
                    $("#category1").val('');
                    $("#name1").val('');
                    $("#codigo1").val('');  
                    console.log(json);
                },
                complete: function (xhr, status) {
                    //alert('Petición realizada, ' + xhr.status);
                    divcubiculosuccess.style.display = 'block';
                    divcubiculoerror.style.display = 'none';
                    divtarget.style.display = 'none';
                    divcapacity.style.display = 'none';
                    divcategory.style.display = 'none';
                    divname.style.display = 'none';
                    $("#target1").val('');
                    $("#capacity1").val('');
                    $("#category1").val('');
                    $("#name1").val('');
                    $("#codigo1").val('');   
                },
                error: function (xhr, status) {
                    divcubiculoerror.style.display = 'none';   
                },
            }
        )
    }

}

function editCubiculo(id){
    var ruta = 'editcubiculo.html';
    
    $.ajax({
        type: 'GET',
        url: ruta,
        success: function (data) {
            $("#mostrarcubiculos").empty();
            $('#mostrar').html(data);
            datosCubiculo(id);
        }
    });
    return false;

}

function datosCubiculo(id){
    
    
        $.ajax(
            {
                url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/library/library/'+id,
                type: 'GET',
                dataType: 'json',
                success: function (json) {
                    
                    $("#codigo1").val(json.items[0].id);
                    $("#target1").val(json.items[0].target);
                    $("#capacity1").val(json.items[0].capacity);
                    $("#category1").val(json.items[0].category_id);
                    $("#name1").val(json.items[0].name); 
                    console.log(json)
                },
                complete: function (xhr, status) {
                    //alert('Petición realizada, ' + xhr.status);
                },
                error: function (xhr, status) {
                    alert('ha sucedido un problema, ' + xhr.status);
                }

            }

        )
    
}


function openTab(evt, tabName) {
    
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function nuevoCubiculo() {
    var ruta = 'cubiculo.html';

    $.ajax({
        type: 'GET',
        url: ruta,
        success: function (data) {
            $("#mostrarcubiculos").empty();
            $('#mostrar').html(data);
        }
    });
    return false;

}

function deleteCubiculo(idc){
    let myData={
        id:idc
    }
    let dataSend=JSON.stringify(myData);
    //alert (idc);
    if(confirm("¿Seguro que deseas eliminar este dato?")){
        $.ajax(
            {
                url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/library/library',
                type: 'DELETE',
                dataType: 'json',
                data: dataSend,
                contentType: 'application/JSON',
                success: function (json) {
                    $("#mostrarcubiculos").empty();
                    alert("Informacion Eliminada exitosamente");
                    Consultar();
                    //console.log(json);
                   
                },
                complete: function (xhr, status) {
                  // alert('Petición realizada, ' + xhr.status);
                },
                error: function (xhr, status) {
                    alert('ha sucedido un problema, ' + xhr.status);
                },
            }
        )
}
}

//**********************************************************************CLIENTES
/**
 * Funcion consultar todos
 */
 function Consultarc() {
    $.ajax(
        {
            url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/client/client',
            //  data : { id : 123 },
            type: 'GET',
            dataType: 'json',

            error: function (xhr, status) {
                alert('ha sucedido un problema, ' + xhr.status);
            },
            success: function (json) {
                $("#mostrarclientes").empty();
                $("#mostrarc").html("");
                tabla = "<center><br><br><table border='1'><theader><tr><th>ID</th><th>NAME</th><th>EMAIL</th><th>AGE</th><th>OPCIONES</th></tr></theader><tbody>"
                total = 0;
                filas = ""
                for (i = 0; i < json.items.length; i++) {
                    filas += "<tr>"
                    filas += "<td>" + json.items[i].id +"</td>"
                    filas += "<td>" + json.items[i].name +"</td>"
                    filas += "<td>" + json.items[i].email +"</td>"
                    filas += "<td>" + json.items[i].age +"</td>"
                    filas += "<td><center><button class='' title='Editar' onClick='editcliente("+json.items[i].id+")'><img src='img/editing.png'/></button>&nbsp;&nbsp;<button class=''  title='Borrar' onClick='deletecliente("+json.items[i].id+")'><img src='img/bin.png'/></button></td>"

                }
                $("#mostrarclientes").append(tabla + filas + "</tbody></table></center>")
                console.log(json)
            }, complete: function (xhr, status) {
                //alert('Petición realizada, ' + xhr.status);
            }

        }
    );
}

/**
 * Funcion consultar uno
 */
 function Consultarunoc() {
     id = $('#idc').val();
    $.ajax(
        {
            url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/client/client/'+id,
            //  data : { id : 123 },
            type: 'GET',
            dataType: 'json',

            error: function (xhr, status) {
                alert('ha sucedido un problema, digite un ID' + xhr.status);
            },
            success: function (json) {
                $("#mostrarclientes").empty();
                $("#mostrarc").html("");
                tabla = "<center><br><br><table border='1'><theader><tr><th>ID</th><th>NAME</th><th>EMAIL</th><th>AGE</th><th>OPCIONES</th></tr></theader><tbody>"
                total = 0;
                filas = ""
                for (i = 0; i < json.items.length; i++) {
                    filas += "<tr>"
                    filas += "<td>" + json.items[i].id +"</td>"
                    filas += "<td>" + json.items[i].name +"</td>"
                    filas += "<td>" + json.items[i].email +"</td>"
                    filas += "<td>" + json.items[i].age +"</td>"
                    filas += "<td><center><button class='' title='Editar' onClick='editcliente("+json.items[i].id+")'><img src='img/editing.png'/></button>&nbsp;&nbsp;<button class=''  title='Borrar' onClick='deletecliente("+json.items[i].id+")'><img src='img/bin.png'/></button></td>"

                }
                $("#mostrarclientes").append(tabla + filas + "</tbody></table></center>")
                console.log(json)
            }, complete: function (xhr, status) {
                //alert('Petición realizada, ' + xhr.status);
            }

        }
    );
}

/**
 * limpiar consulta
 */
function LimpiarConsultac(){
    ruta ='index.html';
    $.ajax({
        type: 'GET',
        url: ruta,
        success: function (data) {
            $("#mostrarclientes").empty();
            //$('#mostrarc').html(data);
            $('#idc').val("");
            Consultarc();
        }
    });
    return false;

}


/**
 * Funcion guardar
*/
function guardarCliente() {

    
    if($("#namec").val() == ""){
        divnamec.style.display = 'block';
        divemail.style.display = 'none';
        divage.style.display = 'none';
        $("#namec").val('').focus();
        return false
    }
    if($("#email").val() == ""){
        divnamec.style.display = 'none';
        divemail.style.display = 'block';
        divage.style.display = 'none';
        $("#email").val('').focus();
        return false
    }
    if($("#age").val() == ""){
        divnamec.style.display = 'none';
        divemail.style.display = 'none';
        divage.style.display = 'block';
        $("#age").val('').focus();
        return false
    }
        
    if (confirm("¿Seguro que deseas Guardar la informacion?")) {
        $.ajax(
            {
                url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/client/client',
                type: 'POST',
                dataType: 'json',
                data: {
                    name : $('#namec').val(),
                    email : $('#email').val(),
                    age : $('#age').val(),
                   
                },
                success: function (json) {
                    divclientesuccess.style.display = 'block';
                    divclienteerror.style.display = 'none';
                    divnamec.style.display = 'none';
                    divemail.style.display = 'none';
                    divage.style.display = 'none';
                    $("#namec").val('');
                    $("#email").val('');
                    $("#age").val('');
                    $("#codigoc").val('');      
                },
                complete: function (xhr, status) {
                    //alert('Petición realizada, ' + xhr.status);
                    divclientesuccess.style.display = 'block';
                    divclienteerror.style.display = 'none';
                    divnamec.style.display = 'none';
                    divemail.style.display = 'none';
                    divage.style.display = 'none';
                    $("#namec").val('');
                    $("#email").val('');
                    $("#age").val('');
                    $("#codigoc").val('');   
                },
                error: function (xhr, status) {
                    divclienteerror.style.display = 'none';   
                },
            }
        )
    }

}

/**
 * Funcion actualizar
*/
function updateCliente() {
    let myData={
        id : $('#codigoc1').val(),
        name : $('#namec1').val(),
        email : $('#email1').val(),
        age : $('#age1').val(),
       
    }
    let dataSend=JSON.stringify(myData);
    
    if($("#namec1").val() == ""){
        divnamec.style.display = 'block';
        divemail.style.display = 'none';
        divage.style.display = 'none';
        $("#namec1").val('').focus();
        return false
    }
    if($("#email1").val() == ""){
        divnamec.style.display = 'none';
        divemail.style.display = 'block';
        divage.style.display = 'none';
        $("#email1").val('').focus();
        return false
    }
    if($("#age1").val() == ""){
        divnamec.style.display = 'none';
        divemail.style.display = 'none';
        divage.style.display = 'block';
        $("#age1").val('').focus();
        return false
    }
    id=$('#codigo1').val();
   //alert (id);
    if (confirm("¿Seguro que deseas Guardar la informacion?")) {
        $.ajax(
            {
                url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/client/client',
                type: 'PUT',
                dataType: 'json',
                data: dataSend,
                contentType: 'application/JSON',
                success: function (json) {
                    divclientesuccess.style.display = 'block';
                    divclienteerror.style.display = 'none';
                    divnamec.style.display = 'none';
                    divemail.style.display = 'none';
                    divage.style.display = 'none';
                    $("#namec1").val('');
                    $("#email1").val('');
                    $("#age1").val('');
                    $("#codigoc1").val(''); 
                },
                complete: function (xhr, status) {
                    //alert('Petición realizada, ' + xhr.status);
                    divclientesuccess.style.display = 'block';
                    divclienteerror.style.display = 'none';
                    divnamec.style.display = 'none';
                    divemail.style.display = 'none';
                    divage.style.display = 'none';
                    $("#namec1").val('');
                    $("#email1").val('');
                    $("#age1").val('');
                    $("#codigoc1").val(''); 
                },
                error: function (xhr, status) {
                    divclienteerror.style.display = 'none';   
                },
            }
        )
    }

}

function editcliente(id){
    var ruta = 'editcliente.html';
    
    $.ajax({
        type: 'GET',
        url: ruta,
        success: function (data) {
            $("#mostrarclientes").empty();
            $('#mostrarc').html(data);
            datoscliente(id);
        }
    });
    return false;

}

function datoscliente(id){
    
    
        $.ajax(
            {
                url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/client/client/'+id,
                type: 'GET',
                dataType: 'json',
                success: function (json) {
                    
                    $("#codigoc1").val(json.items[0].id);
                    $("#namec1").val(json.items[0].name);
                    $("#email1").val(json.items[0].email);
                    $("#age1").val(json.items[0].age);
                    
                },
                complete: function (xhr, status) {
                    //alert('Petición realizada, ' + xhr.status);
                },
                error: function (xhr, status) {
                    alert('ha sucedido un problema, ' + xhr.status);
                }

            }

        )
    
}



function nuevoCliente() {
    var ruta = 'cliente.html';

    $.ajax({
        type: 'GET',
        url: ruta,
        success: function (data) {
            $("#mostrarclientes").empty();
            $('#mostrarc').html(data);
        }
    });
    return false;

}

function deletecliente(idc){
    let myData={
        id:idc
    }
    let dataSend=JSON.stringify(myData);
    //alert (idc);
    if(confirm("¿Seguro que deseas eliminar este dato?")){
        $.ajax(
            {
                url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/client/client',
                type: 'DELETE',
                dataType: 'json',
                data: dataSend,
                contentType: 'application/JSON',
                success: function (json) {
                    $("#mostrarclientes").empty();
                    alert("Informacion Eliminada exitosamente");
                    Consultarc();
                    //console.log(json);
                   
                },
                complete: function (xhr, status) {
                  // alert('Petición realizada, ' + xhr.status);
                },
                error: function (xhr, status) {
                    alert('ha sucedido un problema, ' + xhr.status);
                },
            }
        )
}
}

//************************************************************MENSAJES
/**
 * Funcion consultar todos
 */
 function Consultarm() {
    $.ajax(
        {
            url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/message/message',
            //  data : { id : 123 },
            type: 'GET',
            dataType: 'json',

            error: function (xhr, status) {
                alert('ha sucedido un problema, ' + xhr.status);
            },
            success: function (json) {
                $("#mostrarmensajes").empty();
                $("#mostrarm").html("");
                tabla = "<center><br><br><table border='1'><theader><tr><th>ID</th><th>MESSAGE</th><th>OPCIONES</th></tr></theader><tbody>"
                total = 0;
                filas = ""
                for (i = 0; i < json.items.length; i++) {
                    filas += "<tr>"
                    filas += "<td>" + json.items[i].id +"</td>"
                    filas += "<td>" + json.items[i].messagetext +"</td>"
                    filas += "<td><center><button class='' title='Editar' onClick='editMensaje("+json.items[i].id+")'><img src='img/editing.png'/></button>&nbsp;&nbsp;<button class=''  title='Borrar' onClick='deleteMensaje("+json.items[i].id+")'><img src='img/bin.png'/></button></td>"

                }
                $("#mostrarmensajes").append(tabla + filas + "</tbody></table></center>")
                console.log(json)
            }, complete: function (xhr, status) {
                //alert('Petición realizada, ' + xhr.status);
            }

        }
    );
}

/**
 * Funcion consultar uno
 */
 function Consultarunom() {
     id = $('#idm').val();
    $.ajax(
        {
            url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/message/message/'+id,
            //  data : { id : 123 },
            type: 'GET',
            dataType: 'json',

            error: function (xhr, status) {
                alert('ha sucedido un problema, digite un id' + xhr.status);
            },
            success: function (json) {
                $("#mostrarmensajes").empty();
                $("#mostrarm").html("");
                tabla = "<center><br><br><table border='1'><theader><tr><th>ID</th><th>MESSAGE</th><th>OPCIONES</th></tr></theader><tbody>"
                total = 0;
                filas = ""
                for (i = 0; i < json.items.length; i++) {
                    filas += "<tr>"
                    filas += "<td>" + json.items[i].id +"</td>"
                    filas += "<td>" + json.items[i].messagetext +"</td>"
                    filas += "<td><center><button class='' title='Editar' onClick='editMensaje("+json.items[i].id+")'><img src='img/editing.png'/></button>&nbsp;&nbsp;<button class=''  title='Borrar' onClick='deleteMensaje("+json.items[i].id+")'><img src='img/bin.png'/></button></td>"

                }
                $("#mostrarmensajes").append(tabla + filas + "</tbody></table></center>")
                console.log(json)
            }, complete: function (xhr, status) {
                //alert('Petición realizada, ' + xhr.status);
            }

        }
    );
}

/**
 * limpiar consulta
 */
function LimpiarConsultam(){
    ruta ='index.html';
    $.ajax({
        type: 'GET',
        url: ruta,
        success: function (data) {
            $("#mostrarmensajes").empty();
            //$('#mostrarm').html(data);
            $('#idm').val("");
            Consultarm();
        }
    });
    return false;

}


/**
 * Funcion guardar
*/
function guardarMensaje() {

    
    if($("#message").val() == ""){
        divmessage.style.display = 'block';
        $("#message").val('').focus();
        return false
    }
    
    
    if (confirm("¿Seguro que deseas Guardar la informacion?")) {
        $.ajax(
            {
                url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/message/message',
                type: 'POST',
                dataType: 'json',
                data: {
                    messagetext : $('#message').val(),
                },
                success: function (json) {
                    divmensajesuccess.style.display = 'block';
                    divmensajeerror.style.display = 'none';
                    divmessage.style.display = 'none';
                    $("#message").val('');
                    $("#codigom").val('');      
                },
                complete: function (xhr, status) {
                    //alert('Petición realizada, ' + xhr.status);
                    divmensajesuccess.style.display = 'block';
                    divmensajeerror.style.display = 'none';
                    divmessage.style.display = 'none';
                    $("#message").val('');
                    $("#codigom").val('');     
                },
                error: function (xhr, status) {
                    divmensajeerror.style.display = 'none';   
                },
            }
        )
    }

}

/**
 * Funcion actualizar
*/
function updateMensaje() {
    let myData={
        id : $('#codigom1').val(),
        messagetext : $('#message1').val(),
        
    }
    let dataSend=JSON.stringify(myData);
    
    if($("#message1").val() == ""){
        divmessage.style.display = 'block';
        $("#message1").val('').focus();
        return false
    }
    
   
   //alert (id);
    if (confirm("¿Seguro que deseas Guardar la informacion?")) {
        $.ajax(
            {
                url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/message/message',
                type: 'PUT',
                dataType: 'json',
                data: dataSend,
                contentType: 'application/JSON',
                success: function (json) {
                    divmensajesuccess.style.display = 'block';
                    divmensajeerror.style.display = 'none';
                    divmessage.style.display = 'none';
                    $("#message1").val('');
                    $("#codigom1").val('');     
                },
                complete: function (xhr, status) {
                    //alert('Petición realizada, ' + xhr.status);
                    divmensajesuccess.style.display = 'block';
                    divmensajeerror.style.display = 'none';
                    divmessage.style.display = 'none';
                    $("#message1").val('');
                    $("#codigom1").val('');     
                },
                error: function (xhr, status) {
                    divmensajeerror.style.display = 'none';   
                },
            }
        )
    }

}

function editMensaje(id){
    var ruta = 'editmensaje.html';
    
    $.ajax({
        type: 'GET',
        url: ruta,
        success: function (data) {
            $("#mostrarmensajes").empty();
            $('#mostrarm').html(data);
            datosMensajes(id);
        }
    });
    return false;

}

function datosMensajes(id){
    
    
        $.ajax(
            {
                url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/message/message/'+id,
                type: 'GET',
                dataType: 'json',
                success: function (json) {
                    
                    $("#codigom1").val(json.items[0].id);
                    $("#message1").val(json.items[0].messagetext);
                   
                },
                complete: function (xhr, status) {
                    //alert('Petición realizada, ' + xhr.status);
                },
                error: function (xhr, status) {
                    alert('ha sucedido un problema, ' + xhr.status);
                }

            }

        )
    
}


/*function openTab(evt, tabName) {
    
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}*/

function nuevoMensaje() {
    var ruta = 'mensaje.html';

    $.ajax({
        type: 'GET',
        url: ruta,
        success: function (data) {
            $("#mostrarmensajes").empty();
            $('#mostrarm').html(data);
        }
    });
    return false;

}

function deleteMensaje(idc){
    let myData={
        id:idc
    }
    let dataSend=JSON.stringify(myData);
    //alert (idc);
    if(confirm("¿Seguro que deseas eliminar este dato?")){
        $.ajax(
            {
                url: 'https://gc1123eca6b0e1b-library.adb.ap-sydney-1.oraclecloudapps.com/ords/admin/message/message',
                type: 'DELETE',
                data: dataSend,
                contentType: 'application/JSON',
                dataType: 'json',
                success: function (json) {
                    $("#mostrarmensajes").empty();
                    alert("Informacion Eliminada exitosamente");
                    Consultarm();
                    //console.log(json);
                   
                },
                complete: function (xhr, status) {
                  // alert('Petición realizada, ' + xhr.status);
                },
                error: function (xhr, status) {
                    alert('ha sucedido un problema, ' + xhr.status);
                },
            }
        )
}
}