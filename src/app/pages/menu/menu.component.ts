import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[] = [];

    constructor() { }

    ngOnInit(): void {

        this.items = [

            {
                label: 'Cesta',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'Cesta'
                },

                items: [
                    {
                        "label": "Cesta grande Bauducco de Natal",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Cesta",
                            "modelo": "Cesta grande Bauducco de Natal",
                        }
                    },
                    {
                        "label": "Cesta pequena Bauducco de Natal",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Cesta",
                            "modelo": "Cesta grande Bauducco de Natal",
                        }
                    },
                    {
                        "label": "Cesta Mega Bauducco de Natal 4kg",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Cesta",
                            "modelo": "Cesta Mega Bauducco de Natal 4kg",                            
                        }
                    },

                ]
            },

            {
                label: 'Biscoitos',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'Biscoitos'
                },
                items: [
                    {
                        "label": "400un Biscoitos Bauducco Em Sache Choco+leite+gotas+banana",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "400un Biscoitos Bauducco Em Sache Choco+leite+gotas+banana",                            
                        }
                    },
                    {
                        "label": "Biscoito Agua E Sal Levissimo Bauducco 200 Grs",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Agua E Sal Levissimo Bauducco 200 Grs",                            
                        }
                    },
                    {
                        "label": "Biscoito Amanteigado Leite Bauducco Pacote 335g Embalagem Econômica",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Amanteigado Leite Bauducco Pacote 335g Embalagem Econômica",                            
                        }
                    },
                    {
                        "label": "Biscoito Bauducco Choco Biscuit Leite 80g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Bauducco Choco Biscuit Leite 80g",                            
                        }
                    },
                    {
                        "label": "Biscoito Bauducco Wafer De Chocolate Com Avelã Pacote 140g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Bauducco Wafer De Chocolate Com Avelã Pacote 140g",                            
                        }
                    },
                    {
                        "label": "Biscoito Bauducco Wafer De Chocolate Pacote 140g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Bauducco Wafer De Chocolate Pacote 140g",                            
                        }
                    },
                    {
                        "label": "Biscoito Bauducco Wafer Maxi De Chocolate Pacote 117g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Bauducco Wafer Maxi De Chocolate Pacote 117g",                            
                        }
                    },
                    {
                        "label": "Biscoito Bauducco Wafer Triplo Chocolate Pacote 140g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Bauducco Wafer Triplo Chocolate Pacote 140g",                            
                        }
                    },
                    {
                        "label": "Biscoito Choco Biscuit Ao Leite Bauducco 80g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Choco Biscuit Ao Leite Bauducco 80g",                            
                        }
                    },
                    {
                        "label": "Biscoito Choco Biscuit Meio Amargo Bauducco 80g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Choco Biscuit Meio Amargo Bauducco 80g",                            
                        }
                    },
                    {
                        "label": "Biscoito Chocolate ao Leite Bauducco Choco Biscuit Pacote 36g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Chocolate ao Leite Bauducco Choco Biscuit Pacote 36g",                            
                        }
                    },
                    {
                        "label": "Biscoito Cream Cracker Bauducco Levíssimo Pacote 200g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Cream Cracker Bauducco Levíssimo Pacote 200g",                            
                        }
                    },
                    {
                        "label": "Biscoito Cream Cracker Levissimo 200g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Cream Cracker Levissimo 200g",                            
                        }
                    },
                    {
                        "label": "Biscoito Cream Cracker Levissimo 200g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Cream Cracker Levissimo 200g",                            
                        }
                    },
                    {
                        "label": "Biscoito Maizena Bauducco 170g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Maizena Bauducco 170g",                            
                        }
                    },
                    {
                        "label": "Biscoito Recheado Maxi 25gr Bauducco Chocolate",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Recheado Maxi 25gr Bauducco Chocolate",                            
                        }
                    },
                    {
                        "label": "Biscoito Recheado Maxi 30gr Bauducco Goiaba",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Recheado Maxi 30gr Bauducco Goiaba",                            
                        }
                    },
                    {
                        "label": "Biscoito Recheados Duplo Chocolate Bauducco 140g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Recheados Duplo Chocolate Bauducco 140g",                            
                        }
                    },
                    {
                        "label": "Biscoito Wafer Chocolate Com Avelã Bauducco 140g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Wafer Chocolate Com Avelã Bauducco 140g",                            
                        }
                    },
                    {
                        "label": "Biscoito Wafer Maxi Chocolate Bauducco 117g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Wafer Maxi Chocolate Bauducco 117g",                            
                        }
                    },
                    {
                        "label": "Biscoito Wafer Maxi Cookies Creme Bauducco 117g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Wafer Maxi Cookies Creme Bauducco 117g",                            
                        }
                    },
                    {
                        "label": "Biscoito Wafer Morango Bauducco 140g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Wafer Morango Bauducco 140g",                            
                        }
                    },
                    {
                        "label": "Biscoito Wafer Nozes Bauducco 140g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Wafer Nozes Bauducco 140g",                            
                        }
                    },
                    {
                        "label": "Biscoito Wafer Recheio Chocolate Bauducco Maxi Pacote 117g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Wafer Recheio Chocolate Bauducco Maxi Pacote 117g",                            
                        }
                    },
                    {
                        "label": "Biscoito Wafer Recheio Chocolate Bauducco Maxi Pacote 90g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Wafer Recheio Chocolate Bauducco Maxi Pacote 90g",                            
                        }
                    },
                    {
                        "label": "Biscoito Wafer Recheio Chocolate com Avelã Bauducco Pacote 140g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Wafer Recheio Chocolate com Avelã Bauducco Pacote 140g",                            
                        }
                    },
                    {
                        "label": "Biscoito Wafer Recheio Triplo Chocolate Bauducco Pacote 140g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Wafer Recheio Triplo Chocolate Bauducco Pacote 140g",                            
                        }
                    },
                    {
                        "label": "Biscoito Waffer Bauducco De Chocolate 140g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Waffer Bauducco De Chocolate 140g",                            
                        }
                    },
                    {
                        "label": "Biscoito Waffer Bauducco De Chocolate 90g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Waffer Bauducco De Chocolate 90g",                            
                        }
                    },
                    {
                        "label": "Choco Biscuit com Chocolate Meio Amargo Bauducco 80g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Choco Biscuit com Chocolate Meio Amargo Bauducco 80g",                            
                        }
                    },
                    {
                        "label": "Biscoito Água e Sal Bauducco Levíssimo Pacote 200g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Água e Sal Bauducco Levíssimo Pacote 200g",                            
                        }
                    },
                    {
                        "label": "Biscoito Bauducco Maxi de gotas de chocolate 96 g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Bauducco Maxi de gotas de chocolate 96 g",                            
                        }
                    },
                    {
                        "label": "Biscoito Cream Cracker Integral Bauducco Levíssimo Pacote 200g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Cream Cracker Integral Bauducco Levíssimo Pacote 200g",                            
                        }
                    },
                    {
                        "label": "Maxi Chocolate Bauducco Display C 20un",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Maxi Chocolate Bauducco Display C 20un",                            
                        }
                    },
                    {
                        "label": "Maxi Goiabinha Bauducco Display C 20un",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Maxi Goiabinha Bauducco Display C 20un",                            
                        }
                    },
                    {
                        "label": "Biscoito Bauducco de chocolate com gotas de chocolate hershey's 100 g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Bauducco de chocolate com gotas de chocolate hershey's 100 g",                            
                        }
                    },
                    {
                        "label": "Biscoito Nestlé Classic de chocolate com gotas de chocolate ao leite 60 g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Nestlé Classic de chocolate com gotas de chocolate ao leite 60 g",                            
                        }
                    },
                    {
                        "label": "Biscoito Recheio Chocolate Passatempo Pacote 130g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Recheio Chocolate Passatempo Pacote 130g",                            
                        }
                    },
                    {
                        "label": "Biscoito Nestlé Negresco de chocolate com gotas de baunilha 60 g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Nestlé Negresco de chocolate com gotas de baunilha 60 g",                            
                        }
                    },
                    {
                        "label": "Biscoito Dona Benta de original com gotas de chocolate 60 g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Dona Benta de original com gotas de chocolate 60 g",                            
                        }
                    },
                    {
                        "label": "Biscoito Salgadinho Queijo Sol Hits Pacote 80g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Salgadinho Queijo Sol Hits Pacote 80g",                            
                        }
                    },
                    {
                        "label": "Biscoito Chocolate Recheio Baunilha Negresco Pacote 140g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Chocolate Recheio Baunilha Negresco Pacote 140g",                            
                        }
                    },
                    {
                        "label": "Biscoito Cookie Chocolate com Gotas de Chocolate Dona Benta Pacote 60g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Cookie Chocolate com Gotas de Chocolate Dona Benta Pacote 60g",                            
                        }
                    },
                    {
                        "label": "Biscoito Recheio Morango Trakinas Mais Recheio Pacote 126g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Recheio Morango Trakinas Mais Recheio Pacote 126g",                            
                        }
                    },
                    {
                        "label": "Biscoito Recheio Chocolate Bono Pacote 126g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Recheio Chocolate Bono Pacote 126g",                            
                        }
                    },
                    {
                        "label": "Biscoito Chocolate Recheio Baunilha Oreo Pacote 36g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Biscoitos",
                            "modelo": "Biscoito Chocolate Recheio Baunilha Oreo Pacote 36g",                            
                        }
                    },
                ]
            },

            {

                label: 'Bolinho',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://marcas-logos.net/wp-content/uploads/2019/12/Fiat-Logo-1.png',
                    modelo: '',
                    marca: 'Bolinho'
                },
                items: [
                    {
                        "label": "Bolinho Baunilha Recheado Morango C 14un 40g - Bauducco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Bolinho",
                            "modelo": "Bolinho Baunilha Recheado Morango C 14un 40g - Bauducco",                            
                        }
                    },
                    {
                        "label": "Bolinho Chocolate Recheio Chocolate C 14un - Bauducco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Bolinho",
                            "modelo": "Bolinho Chocolate Recheio Chocolate C 14un - Bauducco",                            
                        }
                    },
                    {
                        "label": "Bolinho Coberto Recheado Roll Cake 34gr Bauducco Chocolate",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Bolinho",
                            "modelo": "Bolinho Coberto Recheado Roll Cake 34gr Bauducco Chocolate",                            
                        }
                    },
                    {
                        "label": "Bolinho Duo Goiabinha C 15un 27g - Bauducco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Bolinho",
                            "modelo": "Bolinho Duo Goiabinha C 15un 27g - Bauducco",                            
                        }
                    },
                    {
                        "label": "Bolinho Recheado Duplo Chocolate 14 40g - Bauducco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Bolinho",
                            "modelo": "Bolinho Recheado Duplo Chocolate 14 40g - Bauducco",                            
                        }
                    },
                    {
                        "label": "Bolinho Recheio Chocolate Brigadeiro C14un- Bauducco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Bolinho",
                            "modelo": "Bolinho Recheio Chocolate Brigadeiro C14un- Bauducco",                            
                        }
                    },
                ]
            },

            {
                label: 'Chocottone',
                routerLink: 'marca',
                queryParams: {                    
                    modelo: '',
                    marca: 'Chocottone'
                },

                items: [
                    {
                        "label": "Choco Bites Bauducco 107G",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Chocottone",
                            "modelo": "Choco Bites Bauducco 107G",                            
                        }
                    },
                    {
                        "label": "Chocottone Bauducco 908g Bauducco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Chocottone",
                            "modelo": "Chocottone Bauducco 908g Bauducco",                            
                        }
                    },
                    {
                        "label": "Chocottone Com Gotas De Chocolate Bauducco 500g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Chocottone",
                            "modelo": "Chocottone Com Gotas De Chocolate Bauducco 500g",                            
                        }
                    },
                    {
                        "label": "Chocottone Lata 750g Panettone Bauducco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Chocottone",
                            "modelo": "Chocottone Lata 750g Panettone Bauducco",                            
                        }
                    },
                    {
                        "label": "CHOCOTTONE MAXI BAUDUCCO 500G",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Chocottone",
                            "modelo": "CHOCOTTONE MAXI BAUDUCCO 500G",                            
                        }
                    },
                    {
                        "label": "CHOCOTTONE MAXI BAUDUCCO avelã 500G",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Chocottone",
                            "modelo": "CHOCOTTONE MAXI BAUDUCCO avelã 500G",                            
                        }
                    },
                    {
                        "label": "CHOCOTTONE MAXI BAUDUCCO chocolate branco 500G",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Chocottone",
                            "modelo": "CHOCOTTONE MAXI BAUDUCCO chocolate branco 500G",                            
                        }
                    },
                    {
                        "label": "Chocottone_4kg",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Chocottone",
                            "modelo": "Chocottone_4kg",                            
                        }
                    },
                    {
                        "label": "Mini Chocottone Bauducco 80g Bauducco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Chocottone",
                            "modelo": "Mini Chocottone Bauducco 80g Bauducco",                            
                        }
                    },
                    {
                        "label": "Mini Chocottone M&M's Bauducco 80g Bauducco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Chocottone",
                            "modelo": "Mini Chocottone M&M's Bauducco 80g Bauducco",                            
                        }
                    },
                    {
                        "label": "Panettone Recheio Trufa Cobertura Chocolate Bauducco Chocottone Maxi Caixa 500g Bauducco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Chocottone",
                            "modelo": "Panettone Recheio Trufa Cobertura Chocolate Bauducco Chocottone Maxi Caixa 500g Bauducco",                            
                        }
                    },
                ]
            },

            {
                label: 'Linha Speciale',
                routerLink: 'marca',
                queryParams: {                    
                    modelo: '',
                    marca: 'Speciale'
                },

                items: [
                    {
                        "label": "Panettone com Frutas e Damasco Cobertura Açucarada e Amêndoas Bauducco Speciale Caixa 500g Bauducco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Speciale",
                            "modelo": "Panettone com Frutas e Damasco Cobertura Açucarada e Amêndoas Bauducco Speciale Caixa 500g Bauducco",                            
                        }
                    },
                    {
                        "label": "Panettone Limão Siciliano e Uvas Bauducco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Speciale",
                            "modelo": "Panettone Limão Siciliano e Uvas Bauducco",                            
                        }
                    },
                ]
            },  

            {
                label: 'Pandoro',
                routerLink: 'marca',
                queryParams: {
                    url: 'https://logodownload.org/wp-content/uploads/2014/05/hyundai-logo-0.png',
                    modelo: '',
                    marca: 'Pandoro'
                },

                items: [
                    {
                        "label": "Pandoro Bauducco 500g Bauducco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pandoro",
                            "modelo": "Pandoro Bauducco 500g Bauducco",                            
                        }
                    },
                    {
                        "label": "Pandoro Bauducco morango e cereja",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pandoro",
                            "modelo": "Pandoro Bauducco morango e cereja",                            
                        }
                    },
                ]
            },  

            {
                label: 'Panettone',
                routerLink: 'marca',
                queryParams: {                    
                    modelo: '',
                    marca: 'Panettone'
                },
            
                items: [
                    {
                        "label": "Mini Panettone de Frutas Bauducco 80g Bauducco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Panettone",
                            "modelo": "Mini Panettone de Frutas Bauducco 80g Bauducco",                            
                        }
                    },
                    {
                        "label": "Panettone Bauducco 4Kg - Panettone Bauducco® 4kg",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Panettone",
                            "modelo": "Panettone Bauducco 4Kg - Panettone Bauducco® 4kg",                            
                        }
                    },
                    {
                        "label": "Panettone Bites Bauducco 107G",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Panettone",
                            "modelo": "Panettone Bites Bauducco 107G",                            
                        }
                    },
                    {
                        "label": "Panettone de Frutas Bauducco 1kg Bauducco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Panettone",
                            "modelo": "Panettone de Frutas Bauducco 1kg Bauducco",                            
                        }
                    },
                    {
                        "label": "Panettone de Frutas Bauducco 500g Bauducco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Panettone",
                            "modelo": "Panettone de Frutas Bauducco 500g Bauducco",                            
                        }
                    },
                    {
                        "label": "Panettone Lata - Panettone Bauducco Lata 750g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Panettone",
                            "modelo": "Panettone Lata - Panettone Bauducco Lata 750g",                            
                        }
                    },
                    {
                        "label": "Panettone Salgado Bauducco",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Panettone",
                            "modelo": "Panettone Salgado Bauducco",                            
                        }
                    },
                ]
            },
            
            {
                label: 'Pão',
                routerLink: 'marca',
                queryParams: {                    
                    modelo: '',
                    marca: 'Pão'
                },
            
                items: [
                    {
                        "label": "Kit 2 Pão De Mel Bauducco Cobertura Choc. Ao Leite 30gc14un",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pão",
                            "modelo": "Kit 2 Pão De Mel Bauducco Cobertura Choc. Ao Leite 30gc14un",                            
                        }
                    },
                    {
                        "label": "Pão De Forma Bauducco Multi Grãos 400g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pão",
                            "modelo": "Pão De Forma Bauducco Multi Grãos 400g",                            
                        }
                    },
                    {
                        "label": "Pão De Forma Bauducco Tradicional 400g Ferm Natural",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pão",
                            "modelo": "Pão De Forma Bauducco Tradicional 400g Ferm Natural",                            
                        }
                    },
                    {
                        "label": "Pão De Forma Integral Bauducco 400g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pão",
                            "modelo": "Pão De Forma Integral Bauducco 400g",                            
                        }
                    },
                    {
                        "label": "Pão De Forma Integral Visconti 400g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pão",
                            "modelo": "Pão De Forma Integral Visconti 400g",                            
                        }
                    },
                    {
                        "label": "Pão De Forma Tradicional Visconti 400g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pão",
                            "modelo": "Pão De Forma Tradicional Visconti 400g",                            
                        }
                    },
                    {
                        "label": "Pão De Mel Bauducco Cobertura Chocolate Ao Leite 30g C 14un",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pão",
                            "modelo": "Pão De Mel Bauducco Cobertura Chocolate Ao Leite 30g C 14un",                            
                        }
                    },
                    {
                        "label": "Pão De Mel Especial Chocolate Branco Bauducco 240g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pão",
                            "modelo": "Pão De Mel Especial Chocolate Branco Bauducco 240g",                            
                        }
                    },
                ]
            },

            {
                label: 'Pringles',
                routerLink: 'marca',
                queryParams: {                    
                    modelo: '',
                    marca: 'Pringles'
                },
            
                items: [
                    {
                        "label": "PRINGLES® BBQ CRISPS",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pringles",
                            "modelo": "PRINGLES® BBQ CRISPS",                            
                        }
                    },
                    {
                        "label": "PRINGLES® BUFFALO RANCH CRISPS",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pringles",
                            "modelo": "PRINGLES® BUFFALO RANCH CRISPS",                            
                        }
                    },
                    {
                        "label": "PRINGLES® CHEDDAR & SOUR CREAM CRISPS",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pringles",
                            "modelo": "PRINGLES® CHEDDAR & SOUR CREAM CRISPS",                            
                        }
                    },
                    {
                        "label": "PRINGLES® CHEDDAR CHEESE CRISPS - 120G",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pringles",
                            "modelo": "PRINGLES® CHEDDAR CHEESE CRISPS - 120G",                            
                        }
                    },
                    {
                        "label": "PRINGLES® HONEY MUSTARD CRISPS",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pringles",
                            "modelo": "PRINGLES® HONEY MUSTARD CRISPS",                            
                        }
                    },
                    {
                        "label": "PRINGLES® JALAPEÑO CRISPS",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pringles",
                            "modelo": "PRINGLES® JALAPEÑO CRISPS",                            
                        }
                    },
                    {
                        "label": "PRINGLES® ORIGINAL CRISPS",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pringles",
                            "modelo": "PRINGLES® ORIGINAL CRISPS",                            
                        }
                    },
                    {
                        "label": "PRINGLES® PARMESAN & ROASTED GARLIC CRISPS",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pringles",
                            "modelo": "PRINGLES® PARMESAN & ROASTED GARLIC CRISPS",                            
                        }
                    },
                    {
                        "label": "PRINGLES® PIZZA CRISPS",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pringles",
                            "modelo": "PRINGLES® PIZZA CRISPS",                            
                        }
                    },
                    {
                        "label": "PRINGLES® RANCH CRISPS",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pringles",
                            "modelo": "PRINGLES® RANCH CRISPS",                            
                        }
                    },
                    {
                        "label": "PRINGLES® ROTISSERIE CHICKEN CRISPS",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pringles",
                            "modelo": "PRINGLES® ROTISSERIE CHICKEN CRISPS",                            
                        }
                    },
                    {
                        "label": "PRINGLES® SALT & VINEGAR CRISPS",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pringles",
                            "modelo": "PRINGLES® SALT & VINEGAR CRISPS",                            
                        }
                    },
                    {
                        "label": "PRINGLES® SCREAMIN' DILL PICKLE CRISPS",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pringles",
                            "modelo": "PRINGLES® SCREAMIN' DILL PICKLE CRISPS",                            
                        }
                    },
                    {
                        "label": "PRINGLES® SOUR CREAM & ONION CRISPS",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Pringles",
                            "modelo": "PRINGLES® SOUR CREAM & ONION CRISPS",                            
                        }
                    },
                ]
            },
          
            {
                label: 'Torrada',
                routerLink: 'marca',
                queryParams: {                    
                    modelo: '',
                    marca: 'Torrada'
                },

                items: [
                    {
                        "label": "TORRADA BAUDUCCO LIGHT 160G",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Torrada",
                            "modelo": "TORRADA BAUDUCCO LIGHT 160G",                            
                        }
                    },
                    {
                        "label": "TORRADA BAUDUCCO MULTIGRAOS 142G",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Torrada",
                            "modelo": "TORRADA BAUDUCCO MULTIGRAOS 142G",                            
                        }
                    },
                    {
                        "label": "Torrada Bauducco Salgada Tradicional 142g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Torrada",
                            "modelo": "Torrada Bauducco Salgada Tradicional 142g",                            
                        }
                    },
                    {
                        "label": "Torrada Integral Bauducco 142g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Torrada",
                            "modelo": "Torrada Integral Bauducco 142g",                            
                        }
                    },
                    {
                        "label": "Torrada Multi Grãos Bauducco 160g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Torrada",
                            "modelo": "Torrada Multi Grãos Bauducco 160g",                            
                        }
                    },
                    {
                        "label": "Torradinha Bauducco Caixa 110g",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                        
                            "marca": "Torrada",
                            "modelo": "Torradinha Bauducco Caixa 110g",                            
                        }
                    },
                ]
            },
        ]
    }
}

