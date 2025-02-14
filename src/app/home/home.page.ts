import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  sensorData:any[]=[];
  
  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    this.sensorData=await this.supabaseService.getSensorReadings();
  }

}
