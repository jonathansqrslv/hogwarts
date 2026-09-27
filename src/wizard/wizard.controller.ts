// Lista os bruxos.
// No navegador: http://localhost:3000/api/v1/wizards
import { Controller, Get } from '@nestjs/common';
import { WizardService } from './wizard.service';

@Controller('wizards')
export class WizardController {
  constructor(private readonly wizards: WizardService) {}

  @Get()
  findAll() {
    return this.wizards.findAll();
  }
}
