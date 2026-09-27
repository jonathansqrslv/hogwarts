// Rota para ver se o servidor está vivo.
// No navegador: http://localhost:3000/api/v1/health
// A resposta é: { status: 'ok' }
import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  health() {
    return { status: 'ok' };
  }
}
