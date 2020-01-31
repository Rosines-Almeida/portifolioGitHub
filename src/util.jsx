import React from 'react';

const formatarData = (props)=>{
    if(props){
    let data = props;
    let ano = data.slice(0,4)
    let mes = data.slice(5,7)
    let dia = data.slice(8,10)
 return data = `${dia}/${mes}/${ano}`
}

}
const validarDados =(dado)=>{

    if(dado ===0| undefined | null){
        return true
    }
}
export  {formatarData,validarDados} ;
 