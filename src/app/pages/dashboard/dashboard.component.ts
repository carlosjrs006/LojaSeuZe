import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../utils/interfaces/usuarios';
import { CadastroServicesService } from '../../utils/services/cadastro-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  usuarios!: number | string;

  constructor(private service: CadastroServicesService, private router: Router) { }

  ngOnInit(): void {
    this.countUsuarios();
  }

  countUsuarios() {
    this.service.buscaUsuarios().subscribe(res => this.usuarios = this.pad(res.length, 4));
  }

  pad(num: number, size: number): string {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

}
