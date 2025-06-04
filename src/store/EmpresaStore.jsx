import { create } from "zustand";
import {InsertarEmpresa,MostrarEmrpesaXidusuario} from "../index"

export const useEmpresaStore = create((set)=>({
    dataempresa: [],
    mostrarempresa: async(p)=>{
        const response = await MostrarEmrpesaXidusuario(p)
        set({dataempresa:response})
        return response;
    },
    insertarempresa: async (p) =>{
        const response= await InsertarEmpresa(p)
        console.log("respuesta",response)
    }
}))