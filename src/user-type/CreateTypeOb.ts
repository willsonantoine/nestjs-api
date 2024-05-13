import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTypeOb {
  @ApiPropertyOptional({
    type: String,
    description: `Nom du type d'utilisateur`,
    example: 'Default User',
  })
  @IsNotEmpty()
  name: string;
  @ApiPropertyOptional({
    type: String,
    description: `Description nom du type d'utilisateur`,
    example: 'Je suis la description du type utilisateur',
  })
  description: string;
  @ApiPropertyOptional({
    type: Boolean,
    description: `Cet état definie si le role peut etre public ou pas`,
    example: 'false',
  })
  @IsNotEmpty()
  isPublic: boolean;
}