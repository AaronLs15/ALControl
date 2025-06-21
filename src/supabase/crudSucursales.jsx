import {supabase} from "../index"

const tabla= "sucursales"

export async function MostrarSucursales (p) {
    const {data} = await supabase.from(tabla).select().eq("id_empresa",p.id_empresa)
    return data;
}
