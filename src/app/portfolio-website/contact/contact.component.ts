import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  openSocialLink(platform: string) {
    let url = '';

    // switch (platform) {
    //   case 'linkedin':
    //     url = 'https://www.linkedin.com/in/kiranmayi-tummala';
    //     break;
    //   case 'twitter':
    //     url = 'https://github.com/kiranmayi1609';
            
    //     break;

    // }

    // Open the link in a new tab
   
    switch (platform) {
      case 'linkedin':
        url = 'https://www.linkedin.com/in/kiranmayi-tummala';
        break;
      case 'github':
        url = 'https://github.com/kiranmayi1609';
        break;
    }
   
   
    window.open(url, '_blank');
  }

}
