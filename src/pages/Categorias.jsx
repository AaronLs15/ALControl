import { useQuery } from '@tanstack/react-query';
import {CategoriasTemplate, Spinner1, useCategoriasStore, useEmpresaStore} from '../index'

export function Categorias() {
  
  const {dataempresa} = useEmpresaStore()
  const {mostrarCategorias,buscarCategorias,buscador} = useCategoriasStore()
  const {isLoading,error} = useQuery({queryKey:["mostrar categorias",dataempresa?.id],queryFn: ()=>mostrarCategorias({id_empresa:dataempresa?.id}),enabled:!!dataempresa,refetchOnWindowFocus:false})

  //buscar categorias
  const {} = useQuery({queryKey:["buscar categorias",buscador],queryFn: ()=>buscarCategorias({id_empresa:dataempresa?.id,descripcion:buscador}),enabled:!!dataempresa,refetchOnWindowFocus:false})

  if (isLoading ) {
    return(<Spinner1/>)
  }
  if(error){
    <span>Error...</span>
  }
  return (<CategoriasTemplate/>);
}
