import {supabase} from "../index"

const tabla= "tipodocumento"

export async function MostrarTipodocumentos (p) {
    const {data} = await supabase.from(tabla).select().eq("id_empresa",p.id_empresa);
    return data;
}
