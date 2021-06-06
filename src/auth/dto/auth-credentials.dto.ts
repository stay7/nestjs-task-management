import { IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8, { message: '비밀번호는 8자 이상으로 설정해주세요.' })
  @MaxLength(32, { message: '비밀번호는 32자를 넘을 수 없습니다.' })
  password: string;
}
