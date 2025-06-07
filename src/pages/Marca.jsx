import { useQuery } from '@tanstack/react-query';
import {MarcaTemplate, Spinner1, useEmpresaStore, useMarcaStore} from '../index'

export function Marca() {
  const {dataempresa} = useEmpresaStore()
  const {mostrarmarca,buscarmarca,buscador} = useMarcaStore()
  const {isLoading,error} = useQuery({queryKey:["mostrar marca",dataempresa?.id],queryFn: ()=>mostrarmarca({id_empresa:dataempresa?.id}),enabled:!!dataempresa,refetchOnWindowFocus:false})

  //buscar categorias
  const {} = useQuery({queryKey:["buscar marca",buscador],queryFn: ()=>buscarmarca({id_empresa:dataempresa?.id,descripcion:buscador}),enabled:!!dataempresa,refetchOnWindowFocus:false})

  if (isLoading ) {
    return(<Spinner1/>)
  }
  if(error){
    <span>Error...</span>
  }
  return (<MarcaTemplate/>);
}
