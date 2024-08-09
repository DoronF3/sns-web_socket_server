import { ConfigurableModuleBuilder } from '@nestjs/common';
import { IS3ServiceToken } from './interface/s3.service.interface';
import { S3Service } from './s3.service';

export interface SnsSubscriberOptions {
  Protocol: 'http' | 'https';
  TopicArn: string;
  Endpoint: string;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<SnsSubscriberOptions>()
    .setExtras<{
      useS3Mock: boolean;
      mock: null | {
        imports?: any;
        mockedService?: any;
      };
    }>(
      {
        useS3Mock: false,
        mock: null,
      },
      (definition, extras) => {
        return {
          ...definition,
          imports: extras.useS3Mock ? extras?.mock?.imports ?? [] : [],
          exports: [IS3ServiceToken],
          providers: [
            ...(definition?.providers || []),
            {
              provide: IS3ServiceToken,
              useClass: extras.useS3Mock
                ? extras?.mock?.mockedService
                : S3Service,
            },
          ],
        };
      },
    )
    .build();
