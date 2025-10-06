import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Component } from '@angular/core';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {path: "", component: Home}, /*hace que home sea la ruta principal */
    {path: `home`, component: Home},
    {path: `products`, component: Products},
    {path: `about`, component: About},
    {path: `contact`, component: Contact},
];

