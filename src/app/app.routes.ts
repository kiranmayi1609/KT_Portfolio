import { Routes } from '@angular/router';

export const routes: Routes = [

    // 1. Route path: When the user navigates to 'portfolio-website', this route will be matched.
    // 2. Lazy load the PortfolioWebsiteModule when the user navigates to 'portfolio-website'
    {path:'portfolio-website',loadChildren:()=>import('./portfolio-website/portfolio-website.module').then(m=>m.PortfolioWebsiteModule)}
];
