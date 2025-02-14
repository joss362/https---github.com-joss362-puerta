import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase=createClient(environment.supabaseURL,environment.supabaseKey);
  constructor() { }
  async getSensorReadings(){
    const{data,error}= await this.supabase
    .from('movimientos')
    .select('id,distancia');
    if(error){
      console.error('Error al obtener datos',error);
      return[];
    }
    return data;
  }
  
}
