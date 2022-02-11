---
to: pnpm-lock.yaml
---

lockfileVersion: 5.3

importers:

  .:
    specifiers:
      esbuild: ^0.14.16
    dependencies:
      esbuild: 0.14.16

  back-end:
    specifiers:
      '@aws-cdk/aws-appsync-alpha': ^2.5.0-alpha.0
      '@aws-sdk/client-cognito-identity-provider': ^3.49.0
      '@types/aws-lambda': ^8.10.92
      '@types/jest': ^27.4.0
      '@types/node': ^14.18.10
      '@typescript-eslint/eslint-plugin': ^5.10.2
      '@typescript-eslint/parser': ^5.10.2
      aws-cdk: ^2.10.0
      aws-cdk-lib: ^2.10.0
      cdk-nag: ^2.4.47
      constructs: ^10.0.51
      esbuild: ^0.14.16
      eslint: ^8.8.0
      eslint-config-prettier: ^8.3.0
      eslint-define-config: ^1.2.3
      eslint-plugin-jest: ^25.3.4
      eslint-plugin-prettier: ^4.0.0
      gb-lib: link:../../green-boost/packages/gb-lib
      jest: ^27.4.7
      prettier: ^2.5.1
      ts-jest: ^27.1.2
      ts-node: ^10.4.0
      typescript: ^4.5.5
    dependencies:
      '@aws-cdk/aws-appsync-alpha': 2.5.0-alpha.0_44c61fbecc635138459f3a222c73def8
      '@aws-sdk/client-cognito-identity-provider': 3.49.0
      aws-cdk: 2.10.0
      aws-cdk-lib: 2.10.0_constructs@10.0.51
      constructs: 10.0.51
      esbuild: 0.14.16
      gb-lib: link:../../green-boost/packages/gb-lib
    devDependencies:
      '@types/aws-lambda': 8.10.92
      '@types/jest': 27.4.0
      '@types/node': 14.18.10
      '@typescript-eslint/eslint-plugin': 5.10.2_2595c2126aec4d4b6e944b931dabb4c2
      '@typescript-eslint/parser': 5.10.2_eslint@8.8.0+typescript@4.5.5
      cdk-nag: 2.4.47_44c61fbecc635138459f3a222c73def8
      eslint: 8.8.0
      eslint-config-prettier: 8.3.0_eslint@8.8.0
      eslint-define-config: 1.2.3
      eslint-plugin-jest: 25.7.0_61d9f6ee10cf520b2c8d6abca813d843
      eslint-plugin-prettier: 4.0.0_43197c8d12d1d439034cfcf65e1c48c2
      jest: 27.4.7_ts-node@10.4.0
      prettier: 2.5.1
      ts-jest: 27.1.3_5809fbb6725b4aac8c31bd5088ddb062
      ts-node: 10.4.0_d9704c9be36ede869b5c33ef6688872e
      typescript: 4.5.5

  common:
    specifiers: {}

  front-end:
    specifiers:
      '@amcharts/amcharts5': ^5.1.3
      '@aws-amplify/api-graphql': ^2.2.21
      '@aws-amplify/auth': ^4.4.1
      '@aws-amplify/ui': 3.0.11
      '@aws-amplify/ui-react': 2.2.1
      '@fontsource/inter': ^4.5.2
      '@mantine/hooks': ^3.6.5
      '@radix-ui/colors': ^0.1.8
      '@stitches/react': ^1.2.6
      '@types/jest': ^27.4.0
      '@types/react': ^17.0.39
      '@types/react-dom': ^17.0.11
      '@vitejs/plugin-react': ^1.1.4
      aws-amplify: ^4.3.14
      eslint: ^8.8.0
      eslint-config-prettier: ^8.3.0
      eslint-config-react-app: ^7.0.0
      eslint-define-config: ^1.2.3
      eslint-plugin-jest: ^25.3.4
      eslint-plugin-prettier: ^4.0.0
      graphql: ^15.8.0
      graphql-tag: ^2.12.6
      jest: ^27.4.7
      prettier: ^2.5.1
      react: ^17.0.2
      react-dom: ^17.0.2
      react-icons: ^4.3.1
      react-router-dom: ^6.2.1
      ts-jest: ^27.1.2
      typescript: ^4.5.5
      vite: ^2.7.13
      vite-plugin-html: ^2.1.2
      vite-tsconfig-paths: ^3.3.17
    dependencies:
      '@amcharts/amcharts5': 5.1.3
      '@aws-amplify/api-graphql': 2.2.21
      '@aws-amplify/auth': 4.4.1
      '@aws-amplify/ui': 3.0.11_aws-amplify@4.3.14
      '@aws-amplify/ui-react': 2.2.1_6716b37029a3ed57f88964eaf5dd0740
      '@fontsource/inter': 4.5.2
      '@mantine/hooks': 3.6.5_react@17.0.2
      '@radix-ui/colors': 0.1.8
      '@stitches/react': 1.2.6_react@17.0.2
      aws-amplify: 4.3.14
      graphql: 15.8.0
      graphql-tag: 2.12.6_graphql@15.8.0
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      react-icons: 4.3.1_react@17.0.2
      react-router-dom: 6.2.1_react-dom@17.0.2+react@17.0.2
    devDependencies:
      '@types/jest': 27.4.0
      '@types/react': 17.0.39
      '@types/react-dom': 17.0.11
      '@vitejs/plugin-react': 1.1.4
      eslint: 8.8.0
      eslint-config-prettier: 8.3.0_eslint@8.8.0
      eslint-config-react-app: 7.0.0_ee07baedc10f0b46d30cd9c14bf6940b
      eslint-define-config: 1.2.3
      eslint-plugin-jest: 25.7.0_ee07baedc10f0b46d30cd9c14bf6940b
      eslint-plugin-prettier: 4.0.0_43197c8d12d1d439034cfcf65e1c48c2
      jest: 27.4.7
      prettier: 2.5.1
      ts-jest: 27.1.3_5809fbb6725b4aac8c31bd5088ddb062
      typescript: 4.5.5
      vite: 2.7.13
      vite-plugin-html: 2.1.2_vite@2.7.13
      vite-tsconfig-paths: 3.3.17_vite@2.7.13

packages:

  /@amcharts/amcharts5/5.1.3:
    resolution: {integrity: sha512-DjlTZfE/LGKtDSc4o+T5t1zgtZSuW3nF8y5ANYI46mLFUe4NavO1wgyNlZBRIWcYovyMbxhrXtNA0lZC/DoFJQ==}
    dependencies:
      '@types/d3': 6.7.5
      '@types/d3-chord': 2.0.3
      '@types/d3-sankey': 0.11.2
      '@types/d3-shape': 2.1.3
      '@types/geojson': 7946.0.8
      '@types/polylabel': 1.0.5
      '@types/svg-arc-to-cubic-bezier': 3.2.0
      d3: 6.7.0
      d3-chord: 2.0.0
      d3-geo: 2.0.2
      d3-sankey: 0.12.3
      d3-selection: 1.4.2
      d3-transition: 1.3.2
      markerjs2: 2.19.0
      pdfmake: 0.2.2
      polylabel: 1.1.0
      svg-arc-to-cubic-bezier: 3.2.0
      tslib: 2.3.1
      xlsx: 0.17.5
    dev: false

  /@aws-amplify/analytics/5.1.12:
    resolution: {integrity: sha512-fHRUeqsx5Fz6Oiae/Qk1SGypaQ0PWUCZW+CyLmJsuUeEr32sqT9LJIMA8z9nr9gDbOa80j5nh2dnsWFlCaHwBw==}
    dependencies:
      '@aws-amplify/cache': 4.0.34
      '@aws-amplify/core': 4.3.14
      '@aws-sdk/client-firehose': 3.6.1
      '@aws-sdk/client-kinesis': 3.6.1
      '@aws-sdk/client-personalize-events': 3.6.1
      '@aws-sdk/client-pinpoint': 3.6.1
      '@aws-sdk/util-utf8-browser': 3.6.1
      lodash: 4.17.21
      uuid: 3.4.0
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-amplify/api-graphql/2.2.21:
    resolution: {integrity: sha512-FPvZrvR9ixwLf95HzMMLuLV9O8GTFie+xCXC3wumPSiK/OlNTpZOdempbWQV+RIwVp7A7S4g0bhziBC8+MKWLw==}
    dependencies:
      '@aws-amplify/api-rest': 2.0.32
      '@aws-amplify/auth': 4.4.1
      '@aws-amplify/cache': 4.0.34
      '@aws-amplify/core': 4.3.14
      '@aws-amplify/pubsub': 4.2.8
      graphql: 15.8.0
      uuid: 3.4.0
      zen-observable-ts: 0.8.19
    transitivePeerDependencies:
      - debug
      - encoding
      - react-native
    dev: false

  /@aws-amplify/api-rest/2.0.32:
    resolution: {integrity: sha512-gMWE6vOaW5bg7LHuUvJ2iNZ1AM/GYJqjtRJMVRfxwBYiycJbtJI796MAOmG3fnanpSIzGHEnDw+IyUuydR4fzg==}
    dependencies:
      '@aws-amplify/core': 4.3.14
      axios: 0.21.4
    transitivePeerDependencies:
      - debug
      - react-native
    dev: false

  /@aws-amplify/api/4.0.32:
    resolution: {integrity: sha512-3B/gSDTxMPiQSBn9ZZ3Z0CqECkKcC8N0FIVaF6+jgd8GCZgkgLcD7NBc6msDnmC+1vWJB4SyRN/Fs+lV+EyHow==}
    dependencies:
      '@aws-amplify/api-graphql': 2.2.21
      '@aws-amplify/api-rest': 2.0.32
    transitivePeerDependencies:
      - debug
      - encoding
      - react-native
    dev: false

  /@aws-amplify/auth/4.4.1:
    resolution: {integrity: sha512-aq3BOQ+v+ibt8cOue2tYMq22dbZ11ePauxMIdT3/dCi76nkcRjZYup1PturDIihlTgTxHgzaX1cYkFE29unzWw==}
    dependencies:
      '@aws-amplify/cache': 4.0.34
      '@aws-amplify/core': 4.3.14
      amazon-cognito-identity-js: 5.2.6
      crypto-js: 4.1.1
    transitivePeerDependencies:
      - encoding
      - react-native
    dev: false

  /@aws-amplify/cache/4.0.34:
    resolution: {integrity: sha512-gWh3SwNsYBdVJ/zY3GM3wc3bAbwHl/aOF8MrjwxXLeiDWYNr97JfjU5FdeKLGdaXi/B1xa2HdClQQWsieg+q2g==}
    dependencies:
      '@aws-amplify/core': 4.3.14
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-amplify/core/4.3.14:
    resolution: {integrity: sha512-xJZigjhH3CwP6sMmTRRyobAfFtP151MtxjDP6lbGiBWMHeUYwzIvjM7YQoDCTWEj6Ix4yV+UKb2SYUY1wyc0uw==}
    dependencies:
      '@aws-crypto/sha256-js': 1.0.0-alpha.0
      '@aws-sdk/client-cloudwatch-logs': 3.6.1
      '@aws-sdk/client-cognito-identity': 3.6.1
      '@aws-sdk/credential-provider-cognito-identity': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/util-hex-encoding': 3.6.1
      universal-cookie: 4.0.4
      zen-observable-ts: 0.8.19
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-amplify/datastore/3.7.6:
    resolution: {integrity: sha512-Kq6dicmBJueRatNCilcWz2euazQOsdyrL4qK3cwUBX3m+XD7dUOcT3utQysT02/nkKWiQgfDtRf71RmjQNS+Ng==}
    dependencies:
      '@aws-amplify/api': 4.0.32
      '@aws-amplify/auth': 4.4.1
      '@aws-amplify/core': 4.3.14
      '@aws-amplify/pubsub': 4.2.8
      amazon-cognito-identity-js: 5.2.6
      idb: 5.0.6
      immer: 9.0.6
      ulid: 2.3.0
      uuid: 3.3.2
      zen-observable-ts: 0.8.19
      zen-push: 0.2.1
    transitivePeerDependencies:
      - debug
      - encoding
      - react-native
    dev: false

  /@aws-amplify/geo/1.2.0:
    resolution: {integrity: sha512-ZxVn5bZmfPVD6oOMiiAyYp5VnsEPTEVMm+Im39pMfNc0qOnpMqeDghXY33yt+EAquRXBd2KcJuJ5Esk5ZbwEqg==}
    dependencies:
      '@aws-amplify/core': 4.3.14
      '@aws-sdk/client-location': 3.48.0
      camelcase-keys: 6.2.2
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-amplify/interactions/4.0.32:
    resolution: {integrity: sha512-LamtGeagu00cWjRnVtm8scLJK9qr5cNuZcmd2FSFHKq10VwyyoLBzo1Cufcbv0F4gfKawjPyuWA3znnO37uyYw==}
    dependencies:
      '@aws-amplify/core': 4.3.14
      '@aws-sdk/client-lex-runtime-service': 3.6.1
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-amplify/predictions/4.0.32:
    resolution: {integrity: sha512-DiH8eFGM6js6SS8Tk6v9n1j3CR9mp/O7JEExkCWTPCnWWUPmzaUeskZKZh1wL2JcXpCGfkpMhNGiHgGBJ6zL4w==}
    dependencies:
      '@aws-amplify/core': 4.3.14
      '@aws-amplify/storage': 4.4.15
      '@aws-sdk/client-comprehend': 3.6.1
      '@aws-sdk/client-polly': 3.6.1
      '@aws-sdk/client-rekognition': 3.6.1
      '@aws-sdk/client-textract': 3.6.1
      '@aws-sdk/client-translate': 3.6.1
      '@aws-sdk/eventstream-marshaller': 3.6.1
      '@aws-sdk/util-utf8-node': 3.6.1
      uuid: 3.4.0
    transitivePeerDependencies:
      - debug
      - react-native
    dev: false

  /@aws-amplify/pubsub/4.2.8:
    resolution: {integrity: sha512-IoucgeI06qFuPuEuZukddFv/tLkDvbyUmEEsFtNJV5nP8uW2B4A1t8Fd6gu4yfcOTANHiPclSe54p4clbVWMVA==}
    dependencies:
      '@aws-amplify/auth': 4.4.1
      '@aws-amplify/cache': 4.0.34
      '@aws-amplify/core': 4.3.14
      graphql: 15.8.0
      paho-mqtt: 1.1.0
      uuid: 3.4.0
      zen-observable-ts: 0.8.19
    transitivePeerDependencies:
      - encoding
      - react-native
    dev: false

  /@aws-amplify/storage/4.4.15:
    resolution: {integrity: sha512-T+LEmbtY58DKaNZ7s5dzr6fkZXbwHbBbwPEw1Qp3f6g9l6ShtbaCmxf3el/DxnDiwncN9Pb1DoRbRXeMZYdDaw==}
    dependencies:
      '@aws-amplify/core': 4.3.14
      '@aws-sdk/client-s3': 3.6.1
      '@aws-sdk/s3-request-presigner': 3.6.1
      '@aws-sdk/util-create-request': 3.6.1
      '@aws-sdk/util-format-url': 3.6.1
      axios: 0.21.4
      events: 3.3.0
      sinon: 7.5.0
    transitivePeerDependencies:
      - debug
      - react-native
    dev: false

  /@aws-amplify/ui-components/1.7.2_aws-amplify@4.3.14:
    resolution: {integrity: sha512-PrDG5o/svbZm87XModXvzBQ+HflHSmxse4S0yKcFRPuUmLkspzdBcwFmjb1SCqmXKtTVKVkCHJ38rZiO/WFNfw==}
    peerDependencies:
      aws-amplify: 3.x.x || 4.x.x
    dependencies:
      aws-amplify: 4.3.14
      qrcode: 1.5.0
      uuid: 8.3.2
    dev: false

  /@aws-amplify/ui-react/1.2.9_6dc93506b8f92740ed0f1e8441764781:
    resolution: {integrity: sha512-JvvIkzK0fjwnNZj5Oq9LfGgpkxgzXu0pzzUyIaDZjLmIWaJ5SzR9PazRAX1i5FS/b8DufxEvPq18EwrLbFh4FA==}
    peerDependencies:
      react: '>= 16.7.0'
      react-dom: '>= 16.7.0'
    dependencies:
      '@aws-amplify/ui-components': 1.7.2_aws-amplify@4.3.14
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
    transitivePeerDependencies:
      - aws-amplify
    dev: false

  /@aws-amplify/ui-react/2.2.1_6716b37029a3ed57f88964eaf5dd0740:
    resolution: {integrity: sha512-IGkcTo+9EldQrWQMx8qn6pUbSx49rI3ZfLFZR7SQAxlwOSSgVbEbsun8f18m8i/Nr2r2AhpQ3NG5/gQxXxELBQ==}
    peerDependencies:
      aws-amplify: 3.x.x || 4.x.x
      react: '>= 16.8.0'
      react-dom: '>= 16.8.0'
    dependencies:
      '@aws-amplify/ui': 3.0.11_aws-amplify@4.3.14
      '@aws-amplify/ui-react-v1': /@aws-amplify/ui-react/1.2.9_6dc93506b8f92740ed0f1e8441764781
      '@radix-ui/react-accordion': 0.1.1_react@17.0.2
      '@radix-ui/react-dropdown-menu': 0.1.1_b8fdba992ce7d797017dc07106486496
      '@radix-ui/react-id': 0.1.1_react@17.0.2
      '@radix-ui/react-slider': 0.1.1_react@17.0.2
      '@radix-ui/react-tabs': 0.1.1_react@17.0.2
      '@xstate/react': 1.6.3_a0c521d4794c7ad97f5f4c1c4a7d5818
      aws-amplify: 4.3.14
      classnames: 2.3.1
      deepmerge: 4.2.2
      lodash: 4.17.21
      qrcode: 1.5.0
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      react-generate-context: 1.0.1_react@17.0.2
    transitivePeerDependencies:
      - '@types/react'
      - '@xstate/fsm'
      - xstate
    dev: false

  /@aws-amplify/ui/2.0.5:
    resolution: {integrity: sha512-atoc/zIJRhgpoSDDKgRxbTSD7D9S4wbOzHUHMqRlcEPRKqRrQPGvd6zCUVSBS0jqdrrw6+UTJbWj7ttWCfE4pQ==}
    dev: false

  /@aws-amplify/ui/3.0.11_aws-amplify@4.3.14:
    resolution: {integrity: sha512-3To7kMgx5QtFK1539fvx9se84ctXYUT7r7uMZP9RSqCONt9+vqUAqpnVKTHEVC2uhBpXCL4cHD7S+fEHmFcl3Q==}
    peerDependencies:
      aws-amplify: 3.x.x || 4.x.x
    dependencies:
      aws-amplify: 4.3.14
      lodash: 4.17.21
      style-dictionary: 3.1.1
      xstate: 4.26.1
    dev: false

  /@aws-amplify/xr/3.0.32:
    resolution: {integrity: sha512-TZK0jqHk0bNWmjl2rTd/ytqaWw0V1H5VZsaDVj8B0N/j3s7aI1zpUTtSBf0N5ZC9kz9ceps65K+H2s5VVWrCwQ==}
    dependencies:
      '@aws-amplify/core': 4.3.14
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-cdk/aws-appsync-alpha/2.5.0-alpha.0_44c61fbecc635138459f3a222c73def8:
    resolution: {integrity: sha512-aHpuD3Qj1QaRO2jz1fLmFUQFoF9cPFO7eZfYSmdGby8uZ3gC5YQMUn/BZyK0wAxgCVc3/5Y2NltvHChCXsqv2Q==}
    engines: {node: '>= 14.15.0'}
    peerDependencies:
      aws-cdk-lib: ^2.5.0
      constructs: ^10.0.0
    dependencies:
      aws-cdk-lib: 2.10.0_constructs@10.0.51
      constructs: 10.0.51
    dev: false

  /@aws-cdk/cfnspec/2.10.0:
    resolution: {integrity: sha512-LUo972yDpdyPefR6CMaBCrC15zbSHYWdv9NNejRLM7IdhfD/IZsUHq6FS6k00+XCrSipfwDCWDqgnzPSA4JA+Q==}
    dependencies:
      fs-extra: 9.1.0
      md5: 2.3.0
    dev: false

  /@aws-cdk/cloud-assembly-schema/2.10.0:
    resolution: {integrity: sha512-r11bhSrO1VXO+lt28mwvm4OBVkp8gP9DR+e/2JKJPm/dDKLO6L2j7yR7nkoFVs/NfgNOJ9E4m5GAMPSEI9PEFw==}
    engines: {node: '>= 14.15.0'}
    dev: false
    bundledDependencies:
      - jsonschema
      - semver

  /@aws-cdk/cloudformation-diff/2.10.0:
    resolution: {integrity: sha512-1k6v9CvaIoQYJjD4A9qZV0bD51/lBadaKeDhhNAAueG89ciA/LexYHGEhmGyzPf22cb6KyOCgEGNkv7BfkaPVA==}
    engines: {node: '>= 14.15.0'}
    dependencies:
      '@aws-cdk/cfnspec': 2.10.0
      '@types/node': 10.17.60
      chalk: 4.1.2
      diff: 5.0.0
      fast-deep-equal: 3.1.3
      string-width: 4.2.3
      table: 6.8.0
    dev: false

  /@aws-cdk/cx-api/2.10.0:
    resolution: {integrity: sha512-d7snCIdRYkrAP5OFKcgwYX6dg4roiDuLmqElQfqw7Y2IWDyjhmMB6JVZwq3cG/QLoD5Zp7hbDiyOGBocue4mHg==}
    engines: {node: '>= 14.15.0'}
    dependencies:
      '@aws-cdk/cloud-assembly-schema': 2.10.0
    dev: false
    bundledDependencies:
      - semver

  /@aws-cdk/region-info/2.10.0:
    resolution: {integrity: sha512-UcQUSr9Xjq5C27FdYds8RA7MFAe9oClNO9lm9L5gots1qrs/Y9NAkcmB76M3dRsY4iKBAwzII1eOOiJzDTFYZQ==}
    engines: {node: '>= 14.15.0'}
    dev: false

  /@aws-crypto/crc32/1.2.2:
    resolution: {integrity: sha512-8K0b1672qbv05chSoKpwGZ3fhvVp28Fg3AVHVkEHFl2lTLChO7wD/hTyyo8ING7uc31uZRt7bNra/hA74Td7Tw==}
    dependencies:
      '@aws-crypto/util': 1.2.2
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-crypto/ie11-detection/1.0.0:
    resolution: {integrity: sha512-kCKVhCF1oDxFYgQrxXmIrS5oaWulkvRcPz+QBDMsUr2crbF4VGgGT6+uQhSwJFdUAQ2A//Vq+uT83eJrkzFgXA==}
    dependencies:
      tslib: 1.14.1
    dev: false

  /@aws-crypto/ie11-detection/2.0.0:
    resolution: {integrity: sha512-pkVXf/dq6PITJ0jzYZ69VhL8VFOFoPZLZqtU/12SGnzYuJOOGNfF41q9GxdI1yqC8R13Rq3jOLKDFpUJFT5eTA==}
    dependencies:
      tslib: 1.14.1
    dev: false

  /@aws-crypto/sha256-browser/1.2.2:
    resolution: {integrity: sha512-0tNR4kBtJp+9S0kis4+JLab3eg6QWuIeuPhzaYoYwNUXGBgsWIkktA2mnilet+EGWzf3n1zknJXC4X4DVyyXbg==}
    dependencies:
      '@aws-crypto/ie11-detection': 1.0.0
      '@aws-crypto/sha256-js': 1.2.2
      '@aws-crypto/supports-web-crypto': 1.0.0
      '@aws-crypto/util': 1.2.2
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/util-locate-window': 3.49.0
      tslib: 1.14.1
    dev: false

  /@aws-crypto/sha256-browser/2.0.0:
    resolution: {integrity: sha512-rYXOQ8BFOaqMEHJrLHul/25ckWH6GTJtdLSajhlqGMx0PmSueAuvboCuZCTqEKlxR8CQOwRarxYMZZSYlhRA1A==}
    dependencies:
      '@aws-crypto/ie11-detection': 2.0.0
      '@aws-crypto/sha256-js': 2.0.0
      '@aws-crypto/supports-web-crypto': 2.0.0
      '@aws-crypto/util': 2.0.1
      '@aws-sdk/types': 3.47.1
      '@aws-sdk/util-locate-window': 3.49.0
      '@aws-sdk/util-utf8-browser': 3.47.1
      tslib: 1.14.1
    dev: false

  /@aws-crypto/sha256-js/1.0.0-alpha.0:
    resolution: {integrity: sha512-GidX2lccEtHZw8mXDKJQj6tea7qh3pAnsNSp1eZNxsN4MMu2OvSraPSqiB1EihsQkZBMg0IiZPpZHoACUX/QMQ==}
    dependencies:
      '@aws-sdk/types': 1.0.0-rc.10
      '@aws-sdk/util-utf8-browser': 1.0.0-rc.8
      tslib: 1.14.1
    dev: false

  /@aws-crypto/sha256-js/1.2.2:
    resolution: {integrity: sha512-Nr1QJIbW/afYYGzYvrF70LtaHrIRtd4TNAglX8BvlfxJLZ45SAmueIKYl5tWoNBPzp65ymXGFK0Bb1vZUpuc9g==}
    dependencies:
      '@aws-crypto/util': 1.2.2
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-crypto/sha256-js/2.0.0:
    resolution: {integrity: sha512-VZY+mCY4Nmrs5WGfitmNqXzaE873fcIZDu54cbaDaaamsaTOP1DBImV9F4pICc3EHjQXujyE8jig+PFCaew9ig==}
    dependencies:
      '@aws-crypto/util': 2.0.1
      '@aws-sdk/types': 3.47.1
      tslib: 1.14.1
    dev: false

  /@aws-crypto/supports-web-crypto/1.0.0:
    resolution: {integrity: sha512-IHLfv+WmVH89EW4n6a5eE8/hUlz6qkWGMn/v4r5ZgzcXdTC5nolii2z3k46y01hWRiC2PPhOdeSLzMUCUMco7g==}
    dependencies:
      tslib: 1.14.1
    dev: false

  /@aws-crypto/supports-web-crypto/2.0.0:
    resolution: {integrity: sha512-Ge7WQ3E0OC7FHYprsZV3h0QIcpdyJLvIeg+uTuHqRYm8D6qCFJoiC+edSzSyFiHtZf+NOQDJ1q46qxjtzIY2nA==}
    dependencies:
      tslib: 1.14.1
    dev: false

  /@aws-crypto/util/1.2.2:
    resolution: {integrity: sha512-H8PjG5WJ4wz0UXAFXeJjWCW1vkvIJ3qUUD+rGRwJ2/hj+xT58Qle2MTql/2MGzkU+1JLAFuR6aJpLAjHwhmwwg==}
    dependencies:
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/util-utf8-browser': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-crypto/util/2.0.1:
    resolution: {integrity: sha512-JJmFFwvbm08lULw4Nm5QOLg8+lAQeC8aCXK5xrtxntYzYXCGfHwUJ4Is3770Q7HmICsXthGQ+ZsDL7C2uH3yBQ==}
    dependencies:
      '@aws-sdk/types': 3.47.1
      '@aws-sdk/util-utf8-browser': 3.47.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/abort-controller/3.47.2:
    resolution: {integrity: sha512-OpxsJ3b2KlpqTQKq6Py6JtLhA7KaAtHthH1JLLWStaFhU5/Js8nFnfPWdJIDRLpuAGyeRTbkjOEUsOkWAI5dAw==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/abort-controller/3.49.0:
    resolution: {integrity: sha512-1qLlgOgg3yrtm+AJEP7yoIk90o6ns3Dia8S9DRjj29jY40446etH3v/tIbHPE+em69HLXl1K6e5KD6t7EDxnlg==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/abort-controller/3.6.1:
    resolution: {integrity: sha512-X81XkxX/2Tvv9YNcEto/rcQzPIdKJHFSnl9hBl/qkSdCFV/GaQ2XNWfKm5qFXMLlZNFS0Fn5CnBJ83qnBm47vg==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/chunked-blob-reader-native/3.6.1:
    resolution: {integrity: sha512-vP6bc2v9h442Srmo7t2QcIbPjk5IqLSf4jGnKDAes8z+7eyjCtKugRP3lOM1fJCfGlPIsJGYnexxYdEGw008vA==}
    dependencies:
      '@aws-sdk/util-base64-browser': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/chunked-blob-reader/3.6.1:
    resolution: {integrity: sha512-QBGUBoD8D5nsM/EKoc0rjpApa5NE5pQVzw1caE8sG00QMMPkCXWSB/gTVKVY0GOAhJFoA/VpVPQchIlZcOrBFg==}
    dependencies:
      tslib: 1.14.1
    dev: false

  /@aws-sdk/client-cloudwatch-logs/3.6.1:
    resolution: {integrity: sha512-QOxIDnlVTpnwJ26Gap6RGz61cDLH6TKrIp30VqwdMeT1pCGy8mn9rWln6XA+ymkofHy/08RfpGp+VN4axwd4Lw==}
    engines: {node: '>=10.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 1.2.2
      '@aws-crypto/sha256-js': 1.2.2
      '@aws-sdk/config-resolver': 3.6.1
      '@aws-sdk/credential-provider-node': 3.6.1
      '@aws-sdk/fetch-http-handler': 3.6.1
      '@aws-sdk/hash-node': 3.6.1
      '@aws-sdk/invalid-dependency': 3.6.1
      '@aws-sdk/middleware-content-length': 3.6.1
      '@aws-sdk/middleware-host-header': 3.6.1
      '@aws-sdk/middleware-logger': 3.6.1
      '@aws-sdk/middleware-retry': 3.6.1
      '@aws-sdk/middleware-serde': 3.6.1
      '@aws-sdk/middleware-signing': 3.6.1
      '@aws-sdk/middleware-stack': 3.6.1
      '@aws-sdk/middleware-user-agent': 3.6.1
      '@aws-sdk/node-config-provider': 3.6.1
      '@aws-sdk/node-http-handler': 3.6.1
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/smithy-client': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/url-parser': 3.6.1
      '@aws-sdk/url-parser-native': 3.6.1
      '@aws-sdk/util-base64-browser': 3.6.1
      '@aws-sdk/util-base64-node': 3.6.1
      '@aws-sdk/util-body-length-browser': 3.6.1
      '@aws-sdk/util-body-length-node': 3.6.1
      '@aws-sdk/util-user-agent-browser': 3.6.1
      '@aws-sdk/util-user-agent-node': 3.6.1
      '@aws-sdk/util-utf8-browser': 3.6.1
      '@aws-sdk/util-utf8-node': 3.6.1
      tslib: 2.3.1
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-sdk/client-cognito-identity-provider/3.49.0:
    resolution: {integrity: sha512-YCxq5eLvNmBQ0BM83ZjmEBKq1nuvR7NiTfHLWjCdRrUc2yi8YxPQKTiulrhEBERGKAjRaWa6vyMgZZfvmFKh2g==}
    engines: {node: '>=12.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 2.0.0
      '@aws-crypto/sha256-js': 2.0.0
      '@aws-sdk/client-sts': 3.49.0
      '@aws-sdk/config-resolver': 3.49.0
      '@aws-sdk/credential-provider-node': 3.49.0
      '@aws-sdk/fetch-http-handler': 3.49.0
      '@aws-sdk/hash-node': 3.49.0
      '@aws-sdk/invalid-dependency': 3.49.0
      '@aws-sdk/middleware-content-length': 3.49.0
      '@aws-sdk/middleware-host-header': 3.49.0
      '@aws-sdk/middleware-logger': 3.49.0
      '@aws-sdk/middleware-retry': 3.49.0
      '@aws-sdk/middleware-serde': 3.49.0
      '@aws-sdk/middleware-signing': 3.49.0
      '@aws-sdk/middleware-stack': 3.49.0
      '@aws-sdk/middleware-user-agent': 3.49.0
      '@aws-sdk/node-config-provider': 3.49.0
      '@aws-sdk/node-http-handler': 3.49.0
      '@aws-sdk/protocol-http': 3.49.0
      '@aws-sdk/smithy-client': 3.49.0
      '@aws-sdk/types': 3.49.0
      '@aws-sdk/url-parser': 3.49.0
      '@aws-sdk/util-base64-browser': 3.49.0
      '@aws-sdk/util-base64-node': 3.49.0
      '@aws-sdk/util-body-length-browser': 3.49.0
      '@aws-sdk/util-body-length-node': 3.49.0
      '@aws-sdk/util-defaults-mode-browser': 3.49.0
      '@aws-sdk/util-defaults-mode-node': 3.49.0
      '@aws-sdk/util-user-agent-browser': 3.49.0
      '@aws-sdk/util-user-agent-node': 3.49.0
      '@aws-sdk/util-utf8-browser': 3.49.0
      '@aws-sdk/util-utf8-node': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/client-cognito-identity/3.6.1:
    resolution: {integrity: sha512-FMj2GR9R5oCKb3/NI16GIvWeHcE4uX42fBAaQKPbjg2gALFDx9CcJYsdOtDP37V89GtPyZilLv6GJxrwJKzYGg==}
    engines: {node: '>=10.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 1.2.2
      '@aws-crypto/sha256-js': 1.2.2
      '@aws-sdk/config-resolver': 3.6.1
      '@aws-sdk/credential-provider-node': 3.6.1
      '@aws-sdk/fetch-http-handler': 3.6.1
      '@aws-sdk/hash-node': 3.6.1
      '@aws-sdk/invalid-dependency': 3.6.1
      '@aws-sdk/middleware-content-length': 3.6.1
      '@aws-sdk/middleware-host-header': 3.6.1
      '@aws-sdk/middleware-logger': 3.6.1
      '@aws-sdk/middleware-retry': 3.6.1
      '@aws-sdk/middleware-serde': 3.6.1
      '@aws-sdk/middleware-signing': 3.6.1
      '@aws-sdk/middleware-stack': 3.6.1
      '@aws-sdk/middleware-user-agent': 3.6.1
      '@aws-sdk/node-config-provider': 3.6.1
      '@aws-sdk/node-http-handler': 3.6.1
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/smithy-client': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/url-parser': 3.6.1
      '@aws-sdk/url-parser-native': 3.6.1
      '@aws-sdk/util-base64-browser': 3.6.1
      '@aws-sdk/util-base64-node': 3.6.1
      '@aws-sdk/util-body-length-browser': 3.6.1
      '@aws-sdk/util-body-length-node': 3.6.1
      '@aws-sdk/util-user-agent-browser': 3.6.1
      '@aws-sdk/util-user-agent-node': 3.6.1
      '@aws-sdk/util-utf8-browser': 3.6.1
      '@aws-sdk/util-utf8-node': 3.6.1
      tslib: 2.3.1
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-sdk/client-comprehend/3.6.1:
    resolution: {integrity: sha512-Y2ixlSTjjAp2HJhkUArtYqC/X+zG5Qqu3Bl+Ez22u4u4YnG8HsNFD6FE1axuWSdSa5AFtWTEt+Cz2Ghj/tDySA==}
    engines: {node: '>=10.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 1.2.2
      '@aws-crypto/sha256-js': 1.2.2
      '@aws-sdk/config-resolver': 3.6.1
      '@aws-sdk/credential-provider-node': 3.6.1
      '@aws-sdk/fetch-http-handler': 3.6.1
      '@aws-sdk/hash-node': 3.6.1
      '@aws-sdk/invalid-dependency': 3.6.1
      '@aws-sdk/middleware-content-length': 3.6.1
      '@aws-sdk/middleware-host-header': 3.6.1
      '@aws-sdk/middleware-logger': 3.6.1
      '@aws-sdk/middleware-retry': 3.6.1
      '@aws-sdk/middleware-serde': 3.6.1
      '@aws-sdk/middleware-signing': 3.6.1
      '@aws-sdk/middleware-stack': 3.6.1
      '@aws-sdk/middleware-user-agent': 3.6.1
      '@aws-sdk/node-config-provider': 3.6.1
      '@aws-sdk/node-http-handler': 3.6.1
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/smithy-client': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/url-parser': 3.6.1
      '@aws-sdk/url-parser-native': 3.6.1
      '@aws-sdk/util-base64-browser': 3.6.1
      '@aws-sdk/util-base64-node': 3.6.1
      '@aws-sdk/util-body-length-browser': 3.6.1
      '@aws-sdk/util-body-length-node': 3.6.1
      '@aws-sdk/util-user-agent-browser': 3.6.1
      '@aws-sdk/util-user-agent-node': 3.6.1
      '@aws-sdk/util-utf8-browser': 3.6.1
      '@aws-sdk/util-utf8-node': 3.6.1
      tslib: 2.3.1
      uuid: 3.4.0
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-sdk/client-firehose/3.6.1:
    resolution: {integrity: sha512-KhiKCm+cJmnRFuAEyO3DBpFVDNix1XcVikdxk2lvYbFWkM1oUZoBpudxaJ+fPf2W3stF3CXIAOP+TnGqSZCy9g==}
    engines: {node: '>=10.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 1.2.2
      '@aws-crypto/sha256-js': 1.2.2
      '@aws-sdk/config-resolver': 3.6.1
      '@aws-sdk/credential-provider-node': 3.6.1
      '@aws-sdk/fetch-http-handler': 3.6.1
      '@aws-sdk/hash-node': 3.6.1
      '@aws-sdk/invalid-dependency': 3.6.1
      '@aws-sdk/middleware-content-length': 3.6.1
      '@aws-sdk/middleware-host-header': 3.6.1
      '@aws-sdk/middleware-logger': 3.6.1
      '@aws-sdk/middleware-retry': 3.6.1
      '@aws-sdk/middleware-serde': 3.6.1
      '@aws-sdk/middleware-signing': 3.6.1
      '@aws-sdk/middleware-stack': 3.6.1
      '@aws-sdk/middleware-user-agent': 3.6.1
      '@aws-sdk/node-config-provider': 3.6.1
      '@aws-sdk/node-http-handler': 3.6.1
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/smithy-client': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/url-parser': 3.6.1
      '@aws-sdk/url-parser-native': 3.6.1
      '@aws-sdk/util-base64-browser': 3.6.1
      '@aws-sdk/util-base64-node': 3.6.1
      '@aws-sdk/util-body-length-browser': 3.6.1
      '@aws-sdk/util-body-length-node': 3.6.1
      '@aws-sdk/util-user-agent-browser': 3.6.1
      '@aws-sdk/util-user-agent-node': 3.6.1
      '@aws-sdk/util-utf8-browser': 3.6.1
      '@aws-sdk/util-utf8-node': 3.6.1
      tslib: 2.3.1
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-sdk/client-kinesis/3.6.1:
    resolution: {integrity: sha512-Ygo+92LxHeUZmiyhiHT+k7hIOhJd6S7ckCEVUsQs2rfwe9bAygUY/3cCoZSqgWy7exFRRKsjhzStcyV6i6jrVQ==}
    engines: {node: '>=10.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 1.2.2
      '@aws-crypto/sha256-js': 1.2.2
      '@aws-sdk/config-resolver': 3.6.1
      '@aws-sdk/credential-provider-node': 3.6.1
      '@aws-sdk/eventstream-serde-browser': 3.6.1
      '@aws-sdk/eventstream-serde-config-resolver': 3.6.1
      '@aws-sdk/eventstream-serde-node': 3.6.1
      '@aws-sdk/fetch-http-handler': 3.6.1
      '@aws-sdk/hash-node': 3.6.1
      '@aws-sdk/invalid-dependency': 3.6.1
      '@aws-sdk/middleware-content-length': 3.6.1
      '@aws-sdk/middleware-host-header': 3.6.1
      '@aws-sdk/middleware-logger': 3.6.1
      '@aws-sdk/middleware-retry': 3.6.1
      '@aws-sdk/middleware-serde': 3.6.1
      '@aws-sdk/middleware-signing': 3.6.1
      '@aws-sdk/middleware-stack': 3.6.1
      '@aws-sdk/middleware-user-agent': 3.6.1
      '@aws-sdk/node-config-provider': 3.6.1
      '@aws-sdk/node-http-handler': 3.6.1
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/smithy-client': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/url-parser': 3.6.1
      '@aws-sdk/url-parser-native': 3.6.1
      '@aws-sdk/util-base64-browser': 3.6.1
      '@aws-sdk/util-base64-node': 3.6.1
      '@aws-sdk/util-body-length-browser': 3.6.1
      '@aws-sdk/util-body-length-node': 3.6.1
      '@aws-sdk/util-user-agent-browser': 3.6.1
      '@aws-sdk/util-user-agent-node': 3.6.1
      '@aws-sdk/util-utf8-browser': 3.6.1
      '@aws-sdk/util-utf8-node': 3.6.1
      '@aws-sdk/util-waiter': 3.6.1
      tslib: 2.3.1
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-sdk/client-lex-runtime-service/3.6.1:
    resolution: {integrity: sha512-xi3m3f3G9KEKdziOFyynkfvN7OzdT9T8V3wkM4x+Zhid9v1K4Rg7OvbBb5oG9UicLz54tcZGkt0VN4ldEB/XLQ==}
    engines: {node: '>=10.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 1.2.2
      '@aws-crypto/sha256-js': 1.2.2
      '@aws-sdk/config-resolver': 3.6.1
      '@aws-sdk/credential-provider-node': 3.6.1
      '@aws-sdk/fetch-http-handler': 3.6.1
      '@aws-sdk/hash-node': 3.6.1
      '@aws-sdk/invalid-dependency': 3.6.1
      '@aws-sdk/middleware-content-length': 3.6.1
      '@aws-sdk/middleware-host-header': 3.6.1
      '@aws-sdk/middleware-logger': 3.6.1
      '@aws-sdk/middleware-retry': 3.6.1
      '@aws-sdk/middleware-serde': 3.6.1
      '@aws-sdk/middleware-signing': 3.6.1
      '@aws-sdk/middleware-stack': 3.6.1
      '@aws-sdk/middleware-user-agent': 3.6.1
      '@aws-sdk/node-config-provider': 3.6.1
      '@aws-sdk/node-http-handler': 3.6.1
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/smithy-client': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/url-parser': 3.6.1
      '@aws-sdk/url-parser-native': 3.6.1
      '@aws-sdk/util-base64-browser': 3.6.1
      '@aws-sdk/util-base64-node': 3.6.1
      '@aws-sdk/util-body-length-browser': 3.6.1
      '@aws-sdk/util-body-length-node': 3.6.1
      '@aws-sdk/util-user-agent-browser': 3.6.1
      '@aws-sdk/util-user-agent-node': 3.6.1
      '@aws-sdk/util-utf8-browser': 3.6.1
      '@aws-sdk/util-utf8-node': 3.6.1
      tslib: 2.3.1
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-sdk/client-location/3.48.0:
    resolution: {integrity: sha512-oQtViqE1cxLkkV6UCOkq/eTNtw9pXPQ42jPjaIyhNRrNJaDa03qeoJv4I1hNhaA1fEdcXQ0TxayWHwbkrax6oA==}
    engines: {node: '>=12.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 2.0.0
      '@aws-crypto/sha256-js': 2.0.0
      '@aws-sdk/client-sts': 3.48.0
      '@aws-sdk/config-resolver': 3.47.2
      '@aws-sdk/credential-provider-node': 3.48.0
      '@aws-sdk/fetch-http-handler': 3.47.2
      '@aws-sdk/hash-node': 3.47.2
      '@aws-sdk/invalid-dependency': 3.47.2
      '@aws-sdk/middleware-content-length': 3.47.2
      '@aws-sdk/middleware-host-header': 3.47.2
      '@aws-sdk/middleware-logger': 3.47.2
      '@aws-sdk/middleware-retry': 3.47.2
      '@aws-sdk/middleware-serde': 3.47.2
      '@aws-sdk/middleware-signing': 3.47.2
      '@aws-sdk/middleware-stack': 3.47.2
      '@aws-sdk/middleware-user-agent': 3.47.2
      '@aws-sdk/node-config-provider': 3.47.2
      '@aws-sdk/node-http-handler': 3.47.2
      '@aws-sdk/protocol-http': 3.47.2
      '@aws-sdk/smithy-client': 3.47.2
      '@aws-sdk/types': 3.47.1
      '@aws-sdk/url-parser': 3.47.2
      '@aws-sdk/util-base64-browser': 3.47.1
      '@aws-sdk/util-base64-node': 3.47.2
      '@aws-sdk/util-body-length-browser': 3.47.1
      '@aws-sdk/util-body-length-node': 3.47.1
      '@aws-sdk/util-defaults-mode-browser': 3.47.2
      '@aws-sdk/util-defaults-mode-node': 3.47.2
      '@aws-sdk/util-user-agent-browser': 3.47.2
      '@aws-sdk/util-user-agent-node': 3.47.2
      '@aws-sdk/util-utf8-browser': 3.47.1
      '@aws-sdk/util-utf8-node': 3.47.2
      tslib: 2.3.1
    dev: false

  /@aws-sdk/client-personalize-events/3.6.1:
    resolution: {integrity: sha512-x9Jl/7emSQsB6GwBvjyw5BiSO26CnH4uvjNit6n54yNMtJ26q0+oIxkplnUDyjLTfLRe373c/z5/4dQQtDffkw==}
    engines: {node: '>=10.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 1.2.2
      '@aws-crypto/sha256-js': 1.2.2
      '@aws-sdk/config-resolver': 3.6.1
      '@aws-sdk/credential-provider-node': 3.6.1
      '@aws-sdk/fetch-http-handler': 3.6.1
      '@aws-sdk/hash-node': 3.6.1
      '@aws-sdk/invalid-dependency': 3.6.1
      '@aws-sdk/middleware-content-length': 3.6.1
      '@aws-sdk/middleware-host-header': 3.6.1
      '@aws-sdk/middleware-logger': 3.6.1
      '@aws-sdk/middleware-retry': 3.6.1
      '@aws-sdk/middleware-serde': 3.6.1
      '@aws-sdk/middleware-signing': 3.6.1
      '@aws-sdk/middleware-stack': 3.6.1
      '@aws-sdk/middleware-user-agent': 3.6.1
      '@aws-sdk/node-config-provider': 3.6.1
      '@aws-sdk/node-http-handler': 3.6.1
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/smithy-client': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/url-parser': 3.6.1
      '@aws-sdk/url-parser-native': 3.6.1
      '@aws-sdk/util-base64-browser': 3.6.1
      '@aws-sdk/util-base64-node': 3.6.1
      '@aws-sdk/util-body-length-browser': 3.6.1
      '@aws-sdk/util-body-length-node': 3.6.1
      '@aws-sdk/util-user-agent-browser': 3.6.1
      '@aws-sdk/util-user-agent-node': 3.6.1
      '@aws-sdk/util-utf8-browser': 3.6.1
      '@aws-sdk/util-utf8-node': 3.6.1
      tslib: 2.3.1
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-sdk/client-pinpoint/3.6.1:
    resolution: {integrity: sha512-dueBedp91EKAHxcWLR3aNx/eUEdxdF9niEQTzOO2O4iJL2yvO2Hh7ZYiO7B3g7FuuICTpWSHd//Y9mGmSVLMCg==}
    engines: {node: '>=10.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 1.2.2
      '@aws-crypto/sha256-js': 1.2.2
      '@aws-sdk/config-resolver': 3.6.1
      '@aws-sdk/credential-provider-node': 3.6.1
      '@aws-sdk/fetch-http-handler': 3.6.1
      '@aws-sdk/hash-node': 3.6.1
      '@aws-sdk/invalid-dependency': 3.6.1
      '@aws-sdk/middleware-content-length': 3.6.1
      '@aws-sdk/middleware-host-header': 3.6.1
      '@aws-sdk/middleware-logger': 3.6.1
      '@aws-sdk/middleware-retry': 3.6.1
      '@aws-sdk/middleware-serde': 3.6.1
      '@aws-sdk/middleware-signing': 3.6.1
      '@aws-sdk/middleware-stack': 3.6.1
      '@aws-sdk/middleware-user-agent': 3.6.1
      '@aws-sdk/node-config-provider': 3.6.1
      '@aws-sdk/node-http-handler': 3.6.1
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/smithy-client': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/url-parser': 3.6.1
      '@aws-sdk/url-parser-native': 3.6.1
      '@aws-sdk/util-base64-browser': 3.6.1
      '@aws-sdk/util-base64-node': 3.6.1
      '@aws-sdk/util-body-length-browser': 3.6.1
      '@aws-sdk/util-body-length-node': 3.6.1
      '@aws-sdk/util-user-agent-browser': 3.6.1
      '@aws-sdk/util-user-agent-node': 3.6.1
      '@aws-sdk/util-utf8-browser': 3.6.1
      '@aws-sdk/util-utf8-node': 3.6.1
      tslib: 2.3.1
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-sdk/client-polly/3.6.1:
    resolution: {integrity: sha512-y6fxVYndGS7z2KqHViPCqagBEOsZlxBUYUJZuD6WWTiQrI0Pwe5qG02oKJVaa5OmxE20QLf6bRBWj2rQpeF4IQ==}
    engines: {node: '>=10.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 1.2.2
      '@aws-crypto/sha256-js': 1.2.2
      '@aws-sdk/config-resolver': 3.6.1
      '@aws-sdk/credential-provider-node': 3.6.1
      '@aws-sdk/fetch-http-handler': 3.6.1
      '@aws-sdk/hash-node': 3.6.1
      '@aws-sdk/invalid-dependency': 3.6.1
      '@aws-sdk/middleware-content-length': 3.6.1
      '@aws-sdk/middleware-host-header': 3.6.1
      '@aws-sdk/middleware-logger': 3.6.1
      '@aws-sdk/middleware-retry': 3.6.1
      '@aws-sdk/middleware-serde': 3.6.1
      '@aws-sdk/middleware-signing': 3.6.1
      '@aws-sdk/middleware-stack': 3.6.1
      '@aws-sdk/middleware-user-agent': 3.6.1
      '@aws-sdk/node-config-provider': 3.6.1
      '@aws-sdk/node-http-handler': 3.6.1
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/smithy-client': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/url-parser': 3.6.1
      '@aws-sdk/url-parser-native': 3.6.1
      '@aws-sdk/util-base64-browser': 3.6.1
      '@aws-sdk/util-base64-node': 3.6.1
      '@aws-sdk/util-body-length-browser': 3.6.1
      '@aws-sdk/util-body-length-node': 3.6.1
      '@aws-sdk/util-user-agent-browser': 3.6.1
      '@aws-sdk/util-user-agent-node': 3.6.1
      '@aws-sdk/util-utf8-browser': 3.6.1
      '@aws-sdk/util-utf8-node': 3.6.1
      tslib: 2.3.1
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-sdk/client-rekognition/3.6.1:
    resolution: {integrity: sha512-Ia4FEog9RrI0IoDRbOJO6djwhVAAaEZutxEKrWbjrVz4bgib28L+V+yAio2SUneeirj8pNYXwBKPfoYOUqGHhA==}
    engines: {node: '>=10.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 1.2.2
      '@aws-crypto/sha256-js': 1.2.2
      '@aws-sdk/config-resolver': 3.6.1
      '@aws-sdk/credential-provider-node': 3.6.1
      '@aws-sdk/fetch-http-handler': 3.6.1
      '@aws-sdk/hash-node': 3.6.1
      '@aws-sdk/invalid-dependency': 3.6.1
      '@aws-sdk/middleware-content-length': 3.6.1
      '@aws-sdk/middleware-host-header': 3.6.1
      '@aws-sdk/middleware-logger': 3.6.1
      '@aws-sdk/middleware-retry': 3.6.1
      '@aws-sdk/middleware-serde': 3.6.1
      '@aws-sdk/middleware-signing': 3.6.1
      '@aws-sdk/middleware-stack': 3.6.1
      '@aws-sdk/middleware-user-agent': 3.6.1
      '@aws-sdk/node-config-provider': 3.6.1
      '@aws-sdk/node-http-handler': 3.6.1
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/smithy-client': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/url-parser': 3.6.1
      '@aws-sdk/url-parser-native': 3.6.1
      '@aws-sdk/util-base64-browser': 3.6.1
      '@aws-sdk/util-base64-node': 3.6.1
      '@aws-sdk/util-body-length-browser': 3.6.1
      '@aws-sdk/util-body-length-node': 3.6.1
      '@aws-sdk/util-user-agent-browser': 3.6.1
      '@aws-sdk/util-user-agent-node': 3.6.1
      '@aws-sdk/util-utf8-browser': 3.6.1
      '@aws-sdk/util-utf8-node': 3.6.1
      '@aws-sdk/util-waiter': 3.6.1
      tslib: 2.3.1
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-sdk/client-s3/3.6.1:
    resolution: {integrity: sha512-59cTmZj92iwgNoAeJirK5sZNQNXLc/oI3luqrEHRNLuOh70bjdgad70T0a5k2Ysd/v/QNamqJxnCJMPuX1bhgw==}
    engines: {node: '>=10.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 1.2.2
      '@aws-crypto/sha256-js': 1.2.2
      '@aws-sdk/config-resolver': 3.6.1
      '@aws-sdk/credential-provider-node': 3.6.1
      '@aws-sdk/eventstream-serde-browser': 3.6.1
      '@aws-sdk/eventstream-serde-config-resolver': 3.6.1
      '@aws-sdk/eventstream-serde-node': 3.6.1
      '@aws-sdk/fetch-http-handler': 3.6.1
      '@aws-sdk/hash-blob-browser': 3.6.1
      '@aws-sdk/hash-node': 3.6.1
      '@aws-sdk/hash-stream-node': 3.6.1
      '@aws-sdk/invalid-dependency': 3.6.1
      '@aws-sdk/md5-js': 3.6.1
      '@aws-sdk/middleware-apply-body-checksum': 3.6.1
      '@aws-sdk/middleware-bucket-endpoint': 3.6.1
      '@aws-sdk/middleware-content-length': 3.6.1
      '@aws-sdk/middleware-expect-continue': 3.6.1
      '@aws-sdk/middleware-host-header': 3.6.1
      '@aws-sdk/middleware-location-constraint': 3.6.1
      '@aws-sdk/middleware-logger': 3.6.1
      '@aws-sdk/middleware-retry': 3.6.1
      '@aws-sdk/middleware-sdk-s3': 3.6.1
      '@aws-sdk/middleware-serde': 3.6.1
      '@aws-sdk/middleware-signing': 3.6.1
      '@aws-sdk/middleware-ssec': 3.6.1
      '@aws-sdk/middleware-stack': 3.6.1
      '@aws-sdk/middleware-user-agent': 3.6.1
      '@aws-sdk/node-config-provider': 3.6.1
      '@aws-sdk/node-http-handler': 3.6.1
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/smithy-client': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/url-parser': 3.6.1
      '@aws-sdk/url-parser-native': 3.6.1
      '@aws-sdk/util-base64-browser': 3.6.1
      '@aws-sdk/util-base64-node': 3.6.1
      '@aws-sdk/util-body-length-browser': 3.6.1
      '@aws-sdk/util-body-length-node': 3.6.1
      '@aws-sdk/util-user-agent-browser': 3.6.1
      '@aws-sdk/util-user-agent-node': 3.6.1
      '@aws-sdk/util-utf8-browser': 3.6.1
      '@aws-sdk/util-utf8-node': 3.6.1
      '@aws-sdk/util-waiter': 3.6.1
      '@aws-sdk/xml-builder': 3.6.1
      fast-xml-parser: 3.21.1
      tslib: 2.3.1
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-sdk/client-sso/3.48.0:
    resolution: {integrity: sha512-A9f7B5k+X7bx062OQEcLHIMMIq0H1GlUqdw9xReCLd6W6vcRthbeSK5xbkM7TzHeKHE2/9qQYAy0lyKkxFE6bQ==}
    engines: {node: '>=12.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 2.0.0
      '@aws-crypto/sha256-js': 2.0.0
      '@aws-sdk/config-resolver': 3.47.2
      '@aws-sdk/fetch-http-handler': 3.47.2
      '@aws-sdk/hash-node': 3.47.2
      '@aws-sdk/invalid-dependency': 3.47.2
      '@aws-sdk/middleware-content-length': 3.47.2
      '@aws-sdk/middleware-host-header': 3.47.2
      '@aws-sdk/middleware-logger': 3.47.2
      '@aws-sdk/middleware-retry': 3.47.2
      '@aws-sdk/middleware-serde': 3.47.2
      '@aws-sdk/middleware-stack': 3.47.2
      '@aws-sdk/middleware-user-agent': 3.47.2
      '@aws-sdk/node-config-provider': 3.47.2
      '@aws-sdk/node-http-handler': 3.47.2
      '@aws-sdk/protocol-http': 3.47.2
      '@aws-sdk/smithy-client': 3.47.2
      '@aws-sdk/types': 3.47.1
      '@aws-sdk/url-parser': 3.47.2
      '@aws-sdk/util-base64-browser': 3.47.1
      '@aws-sdk/util-base64-node': 3.47.2
      '@aws-sdk/util-body-length-browser': 3.47.1
      '@aws-sdk/util-body-length-node': 3.47.1
      '@aws-sdk/util-defaults-mode-browser': 3.47.2
      '@aws-sdk/util-defaults-mode-node': 3.47.2
      '@aws-sdk/util-user-agent-browser': 3.47.2
      '@aws-sdk/util-user-agent-node': 3.47.2
      '@aws-sdk/util-utf8-browser': 3.47.1
      '@aws-sdk/util-utf8-node': 3.47.2
      tslib: 2.3.1
    dev: false

  /@aws-sdk/client-sso/3.49.0:
    resolution: {integrity: sha512-rY8uZo4DeNwwKf+Sx0TX/5ysXJKf+0SQSCTWD9S4a0AjtiaLc6hKCX+sJY43VDHvNYieKtXLDYHBdhhqZKwG+g==}
    engines: {node: '>=12.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 2.0.0
      '@aws-crypto/sha256-js': 2.0.0
      '@aws-sdk/config-resolver': 3.49.0
      '@aws-sdk/fetch-http-handler': 3.49.0
      '@aws-sdk/hash-node': 3.49.0
      '@aws-sdk/invalid-dependency': 3.49.0
      '@aws-sdk/middleware-content-length': 3.49.0
      '@aws-sdk/middleware-host-header': 3.49.0
      '@aws-sdk/middleware-logger': 3.49.0
      '@aws-sdk/middleware-retry': 3.49.0
      '@aws-sdk/middleware-serde': 3.49.0
      '@aws-sdk/middleware-stack': 3.49.0
      '@aws-sdk/middleware-user-agent': 3.49.0
      '@aws-sdk/node-config-provider': 3.49.0
      '@aws-sdk/node-http-handler': 3.49.0
      '@aws-sdk/protocol-http': 3.49.0
      '@aws-sdk/smithy-client': 3.49.0
      '@aws-sdk/types': 3.49.0
      '@aws-sdk/url-parser': 3.49.0
      '@aws-sdk/util-base64-browser': 3.49.0
      '@aws-sdk/util-base64-node': 3.49.0
      '@aws-sdk/util-body-length-browser': 3.49.0
      '@aws-sdk/util-body-length-node': 3.49.0
      '@aws-sdk/util-defaults-mode-browser': 3.49.0
      '@aws-sdk/util-defaults-mode-node': 3.49.0
      '@aws-sdk/util-user-agent-browser': 3.49.0
      '@aws-sdk/util-user-agent-node': 3.49.0
      '@aws-sdk/util-utf8-browser': 3.49.0
      '@aws-sdk/util-utf8-node': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/client-sts/3.48.0:
    resolution: {integrity: sha512-vOSIYCHjXB9nztZqwjIjV/jRZCfgej1YHpgqeNlfL8hPNhcrHemaoJaKHRPnhljIuHi+H5yQW7Pm4qJUFtGwKA==}
    engines: {node: '>=12.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 2.0.0
      '@aws-crypto/sha256-js': 2.0.0
      '@aws-sdk/config-resolver': 3.47.2
      '@aws-sdk/credential-provider-node': 3.48.0
      '@aws-sdk/fetch-http-handler': 3.47.2
      '@aws-sdk/hash-node': 3.47.2
      '@aws-sdk/invalid-dependency': 3.47.2
      '@aws-sdk/middleware-content-length': 3.47.2
      '@aws-sdk/middleware-host-header': 3.47.2
      '@aws-sdk/middleware-logger': 3.47.2
      '@aws-sdk/middleware-retry': 3.47.2
      '@aws-sdk/middleware-sdk-sts': 3.47.2
      '@aws-sdk/middleware-serde': 3.47.2
      '@aws-sdk/middleware-signing': 3.47.2
      '@aws-sdk/middleware-stack': 3.47.2
      '@aws-sdk/middleware-user-agent': 3.47.2
      '@aws-sdk/node-config-provider': 3.47.2
      '@aws-sdk/node-http-handler': 3.47.2
      '@aws-sdk/protocol-http': 3.47.2
      '@aws-sdk/smithy-client': 3.47.2
      '@aws-sdk/types': 3.47.1
      '@aws-sdk/url-parser': 3.47.2
      '@aws-sdk/util-base64-browser': 3.47.1
      '@aws-sdk/util-base64-node': 3.47.2
      '@aws-sdk/util-body-length-browser': 3.47.1
      '@aws-sdk/util-body-length-node': 3.47.1
      '@aws-sdk/util-defaults-mode-browser': 3.47.2
      '@aws-sdk/util-defaults-mode-node': 3.47.2
      '@aws-sdk/util-user-agent-browser': 3.47.2
      '@aws-sdk/util-user-agent-node': 3.47.2
      '@aws-sdk/util-utf8-browser': 3.47.1
      '@aws-sdk/util-utf8-node': 3.47.2
      entities: 2.2.0
      fast-xml-parser: 3.19.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/client-sts/3.49.0:
    resolution: {integrity: sha512-vqHNCuQriMZV1aeXc6cza5S9A/2zgfNiTelsmbDQdlCiZQ+YL3nTp1WFeYHap4ffYlLOAD0xv0yz/+naV4oHtQ==}
    engines: {node: '>=12.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 2.0.0
      '@aws-crypto/sha256-js': 2.0.0
      '@aws-sdk/config-resolver': 3.49.0
      '@aws-sdk/credential-provider-node': 3.49.0
      '@aws-sdk/fetch-http-handler': 3.49.0
      '@aws-sdk/hash-node': 3.49.0
      '@aws-sdk/invalid-dependency': 3.49.0
      '@aws-sdk/middleware-content-length': 3.49.0
      '@aws-sdk/middleware-host-header': 3.49.0
      '@aws-sdk/middleware-logger': 3.49.0
      '@aws-sdk/middleware-retry': 3.49.0
      '@aws-sdk/middleware-sdk-sts': 3.49.0
      '@aws-sdk/middleware-serde': 3.49.0
      '@aws-sdk/middleware-signing': 3.49.0
      '@aws-sdk/middleware-stack': 3.49.0
      '@aws-sdk/middleware-user-agent': 3.49.0
      '@aws-sdk/node-config-provider': 3.49.0
      '@aws-sdk/node-http-handler': 3.49.0
      '@aws-sdk/protocol-http': 3.49.0
      '@aws-sdk/smithy-client': 3.49.0
      '@aws-sdk/types': 3.49.0
      '@aws-sdk/url-parser': 3.49.0
      '@aws-sdk/util-base64-browser': 3.49.0
      '@aws-sdk/util-base64-node': 3.49.0
      '@aws-sdk/util-body-length-browser': 3.49.0
      '@aws-sdk/util-body-length-node': 3.49.0
      '@aws-sdk/util-defaults-mode-browser': 3.49.0
      '@aws-sdk/util-defaults-mode-node': 3.49.0
      '@aws-sdk/util-user-agent-browser': 3.49.0
      '@aws-sdk/util-user-agent-node': 3.49.0
      '@aws-sdk/util-utf8-browser': 3.49.0
      '@aws-sdk/util-utf8-node': 3.49.0
      entities: 2.2.0
      fast-xml-parser: 3.19.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/client-textract/3.6.1:
    resolution: {integrity: sha512-nLrBzWDt3ToiGVFF4lW7a/eZpI2zjdvu7lwmOWyXX8iiPzhBVVEfd5oOorRyJYBsGMslp4sqV8TBkU5Ld/a97Q==}
    engines: {node: '>=10.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 1.2.2
      '@aws-crypto/sha256-js': 1.2.2
      '@aws-sdk/config-resolver': 3.6.1
      '@aws-sdk/credential-provider-node': 3.6.1
      '@aws-sdk/fetch-http-handler': 3.6.1
      '@aws-sdk/hash-node': 3.6.1
      '@aws-sdk/invalid-dependency': 3.6.1
      '@aws-sdk/middleware-content-length': 3.6.1
      '@aws-sdk/middleware-host-header': 3.6.1
      '@aws-sdk/middleware-logger': 3.6.1
      '@aws-sdk/middleware-retry': 3.6.1
      '@aws-sdk/middleware-serde': 3.6.1
      '@aws-sdk/middleware-signing': 3.6.1
      '@aws-sdk/middleware-stack': 3.6.1
      '@aws-sdk/middleware-user-agent': 3.6.1
      '@aws-sdk/node-config-provider': 3.6.1
      '@aws-sdk/node-http-handler': 3.6.1
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/smithy-client': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/url-parser': 3.6.1
      '@aws-sdk/url-parser-native': 3.6.1
      '@aws-sdk/util-base64-browser': 3.6.1
      '@aws-sdk/util-base64-node': 3.6.1
      '@aws-sdk/util-body-length-browser': 3.6.1
      '@aws-sdk/util-body-length-node': 3.6.1
      '@aws-sdk/util-user-agent-browser': 3.6.1
      '@aws-sdk/util-user-agent-node': 3.6.1
      '@aws-sdk/util-utf8-browser': 3.6.1
      '@aws-sdk/util-utf8-node': 3.6.1
      tslib: 2.3.1
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-sdk/client-translate/3.6.1:
    resolution: {integrity: sha512-RIHY+Og1i43B5aWlfUUk0ZFnNfM7j2vzlYUwOqhndawV49GFf96M3pmskR5sKEZI+5TXY77qR9TgZ/r3UxVCRQ==}
    engines: {node: '>=10.0.0'}
    dependencies:
      '@aws-crypto/sha256-browser': 1.2.2
      '@aws-crypto/sha256-js': 1.2.2
      '@aws-sdk/config-resolver': 3.6.1
      '@aws-sdk/credential-provider-node': 3.6.1
      '@aws-sdk/fetch-http-handler': 3.6.1
      '@aws-sdk/hash-node': 3.6.1
      '@aws-sdk/invalid-dependency': 3.6.1
      '@aws-sdk/middleware-content-length': 3.6.1
      '@aws-sdk/middleware-host-header': 3.6.1
      '@aws-sdk/middleware-logger': 3.6.1
      '@aws-sdk/middleware-retry': 3.6.1
      '@aws-sdk/middleware-serde': 3.6.1
      '@aws-sdk/middleware-signing': 3.6.1
      '@aws-sdk/middleware-stack': 3.6.1
      '@aws-sdk/middleware-user-agent': 3.6.1
      '@aws-sdk/node-config-provider': 3.6.1
      '@aws-sdk/node-http-handler': 3.6.1
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/smithy-client': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/url-parser': 3.6.1
      '@aws-sdk/url-parser-native': 3.6.1
      '@aws-sdk/util-base64-browser': 3.6.1
      '@aws-sdk/util-base64-node': 3.6.1
      '@aws-sdk/util-body-length-browser': 3.6.1
      '@aws-sdk/util-body-length-node': 3.6.1
      '@aws-sdk/util-user-agent-browser': 3.6.1
      '@aws-sdk/util-user-agent-node': 3.6.1
      '@aws-sdk/util-utf8-browser': 3.6.1
      '@aws-sdk/util-utf8-node': 3.6.1
      tslib: 2.3.1
      uuid: 3.4.0
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-sdk/config-resolver/3.47.2:
    resolution: {integrity: sha512-uv9U/qDOSqyCPQ71qiwMslqRMxYyt0y0h6X0aQ67GCPq4rbbU/dn8PqnYT0VfX/9Ss+DcbTm7vOTxVKv+8XADA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/signature-v4': 3.47.2
      '@aws-sdk/types': 3.47.1
      '@aws-sdk/util-config-provider': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/config-resolver/3.49.0:
    resolution: {integrity: sha512-4kYV+89E9MG+/wfPY3dmwqzquQxNd951jdfjQbSg1ii68X/owqmWda4bLulV0Z4iGUz9TXkbaJCWyRyjsFNe4w==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/signature-v4': 3.49.0
      '@aws-sdk/types': 3.49.0
      '@aws-sdk/util-config-provider': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/config-resolver/3.6.1:
    resolution: {integrity: sha512-qjP1g3jLIm+XvOIJ4J7VmZRi87vsDmTRzIFePVeG+EFWwYQLxQjTGMdIj3yKTh1WuZ0HByf47mGcpiS4HZLm1Q==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/signature-v4': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/credential-provider-cognito-identity/3.6.1:
    resolution: {integrity: sha512-uJ9q+yq+Dhdo32gcv0p/AT7sKSAUH0y4ts9XRK/vx0dW9Q3XJy99mOJlq/6fkh4LfWeavJJlaCo9lSHNMWXx4w==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/client-cognito-identity': 3.6.1
      '@aws-sdk/property-provider': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-sdk/credential-provider-env/3.47.2:
    resolution: {integrity: sha512-HQKXY8y51kpTrD7P8fZJNf4MdCdu0+NcdOc+HScrQ21oZJv3BXUwXxKiOWY95Z3jYqyFwSKs1/FFuQ1mV0wjPg==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/property-provider': 3.47.2
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/credential-provider-env/3.49.0:
    resolution: {integrity: sha512-mx82N0un6URmmiM11X3ObK3ka5R99lEFdhwPc0jqsCPnXRVioUtK5DXkJ8FmgixbDcs5Pdij9A8MINSeBrG0bQ==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/property-provider': 3.49.0
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/credential-provider-env/3.6.1:
    resolution: {integrity: sha512-coeFf/HnhpGidcAN1i1NuFgyFB2M6DeN1zNVy4f6s4mAh96ftr9DgWM1CcE3C+cLHEdpNqleVgC/2VQpyzOBLQ==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/property-provider': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/credential-provider-imds/3.47.2:
    resolution: {integrity: sha512-7fCIofgU5pdKGgbCAYQ8H7sIFluN3oebFyFy7C4eXJyNy/8QKjFHEW3NkNCh0Bkd5sLOqkwYU3nyRx0CbNkEoQ==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/node-config-provider': 3.47.2
      '@aws-sdk/property-provider': 3.47.2
      '@aws-sdk/types': 3.47.1
      '@aws-sdk/url-parser': 3.47.2
      tslib: 2.3.1
    dev: false

  /@aws-sdk/credential-provider-imds/3.49.0:
    resolution: {integrity: sha512-d/H5VgmRiIupQdPg9QcX16kdvuiS/YytRYCQOncVstNXHvYZM9EgeIXJLXyPNaD2W8SS7CBf4KKWYJn3V+9AZw==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/node-config-provider': 3.49.0
      '@aws-sdk/property-provider': 3.49.0
      '@aws-sdk/types': 3.49.0
      '@aws-sdk/url-parser': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/credential-provider-imds/3.6.1:
    resolution: {integrity: sha512-bf4LMI418OYcQbyLZRAW8Q5AYM2IKrNqOnIcfrFn2f17ulG7TzoWW3WN/kMOw4TC9+y+vIlCWOv87GxU1yP0Bg==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/property-provider': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/credential-provider-ini/3.48.0:
    resolution: {integrity: sha512-PSTfzK8V+3WVJOv+wlS4y09KYZx3iYj4Ad8LMGmGE4aqew8eRf6u2WuTmqrWwuOTxDra9PJ1ObcM5vBc+nZcYA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/credential-provider-env': 3.47.2
      '@aws-sdk/credential-provider-imds': 3.47.2
      '@aws-sdk/credential-provider-sso': 3.48.0
      '@aws-sdk/credential-provider-web-identity': 3.47.2
      '@aws-sdk/property-provider': 3.47.2
      '@aws-sdk/shared-ini-file-loader': 3.47.1
      '@aws-sdk/types': 3.47.1
      '@aws-sdk/util-credentials': 3.47.2
      tslib: 2.3.1
    dev: false

  /@aws-sdk/credential-provider-ini/3.49.0:
    resolution: {integrity: sha512-QlWfxDwZVyX36pghgkKGBR+fBmX/mjmvc0kzxUmqGhUYAkDQ0YKR11ybpGBrxBKT4lIOE+9z6Tu4nLjp3OlJIg==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/credential-provider-env': 3.49.0
      '@aws-sdk/credential-provider-imds': 3.49.0
      '@aws-sdk/credential-provider-sso': 3.49.0
      '@aws-sdk/credential-provider-web-identity': 3.49.0
      '@aws-sdk/property-provider': 3.49.0
      '@aws-sdk/shared-ini-file-loader': 3.49.0
      '@aws-sdk/types': 3.49.0
      '@aws-sdk/util-credentials': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/credential-provider-ini/3.6.1:
    resolution: {integrity: sha512-3jguW6+ttRNddRZvbrs1yb3F1jrUbqyv0UfRoHuOGthjTt+L9sDpJaJGugYnT3bS9WBu1NydLVE2kDV++mJGVw==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/property-provider': 3.6.1
      '@aws-sdk/shared-ini-file-loader': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/credential-provider-node/3.48.0:
    resolution: {integrity: sha512-7CrbUT7yEZvYSQNXxZWN5KUx355wD+xrYIafoEST28T7nwcIiu7l2zpBY3JPhPIPNXqryVKfNQJvKV1dP3wF4g==}
    engines: {node: '>=12.0.0'}
    dependencies:
      '@aws-sdk/credential-provider-env': 3.47.2
      '@aws-sdk/credential-provider-imds': 3.47.2
      '@aws-sdk/credential-provider-ini': 3.48.0
      '@aws-sdk/credential-provider-process': 3.47.2
      '@aws-sdk/credential-provider-sso': 3.48.0
      '@aws-sdk/credential-provider-web-identity': 3.47.2
      '@aws-sdk/property-provider': 3.47.2
      '@aws-sdk/shared-ini-file-loader': 3.47.1
      '@aws-sdk/types': 3.47.1
      '@aws-sdk/util-credentials': 3.47.2
      tslib: 2.3.1
    dev: false

  /@aws-sdk/credential-provider-node/3.49.0:
    resolution: {integrity: sha512-DonoqOZHcqfNuwMG1fGJpHJTqf1QinihRKzlOoUWzmseqBCiuagGouSN7nOQgee5BrzF0X9/nao9lnPc4on2TA==}
    engines: {node: '>=12.0.0'}
    dependencies:
      '@aws-sdk/credential-provider-env': 3.49.0
      '@aws-sdk/credential-provider-imds': 3.49.0
      '@aws-sdk/credential-provider-ini': 3.49.0
      '@aws-sdk/credential-provider-process': 3.49.0
      '@aws-sdk/credential-provider-sso': 3.49.0
      '@aws-sdk/credential-provider-web-identity': 3.49.0
      '@aws-sdk/property-provider': 3.49.0
      '@aws-sdk/shared-ini-file-loader': 3.49.0
      '@aws-sdk/types': 3.49.0
      '@aws-sdk/util-credentials': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/credential-provider-node/3.6.1:
    resolution: {integrity: sha512-VAHOcsqkPrF1k/fA62pv9c75lUWe5bHpcbFX83C3EUPd2FXV10Lfkv6bdWhyZPQy0k8T+9/yikHH3c7ZQeFE5A==}
    engines: {node: '>=10.0.0'}
    dependencies:
      '@aws-sdk/credential-provider-env': 3.6.1
      '@aws-sdk/credential-provider-imds': 3.6.1
      '@aws-sdk/credential-provider-ini': 3.6.1
      '@aws-sdk/credential-provider-process': 3.6.1
      '@aws-sdk/property-provider': 3.6.1
      '@aws-sdk/shared-ini-file-loader': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/credential-provider-process/3.47.2:
    resolution: {integrity: sha512-LBuABkVt/tdSoHy8hdGVnInZx5QADhK90dEHc41+HTTP3bCSNsSBIErkZnmhAD/3AGz7m/4qkPmhJOqzFisY/g==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/property-provider': 3.47.2
      '@aws-sdk/shared-ini-file-loader': 3.47.1
      '@aws-sdk/types': 3.47.1
      '@aws-sdk/util-credentials': 3.47.2
      tslib: 2.3.1
    dev: false

  /@aws-sdk/credential-provider-process/3.49.0:
    resolution: {integrity: sha512-Zn7CJHoXln8O+yBKdTBvcwCz6GDh48s7HtIsqjoOrqoL0oZWhgy8gn8S9KQ+HIqpiO8N0lMMteXuPl5fbC2zGg==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/property-provider': 3.49.0
      '@aws-sdk/shared-ini-file-loader': 3.49.0
      '@aws-sdk/types': 3.49.0
      '@aws-sdk/util-credentials': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/credential-provider-process/3.6.1:
    resolution: {integrity: sha512-d0/TpMoEV4qMYkdpyyjU2Otse9X2jC1DuxWajHOWZYEw8oejMvXYTZ10hNaXZvAcNM9q214rp+k4mkt6gIcI6g==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/credential-provider-ini': 3.6.1
      '@aws-sdk/property-provider': 3.6.1
      '@aws-sdk/shared-ini-file-loader': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/credential-provider-sso/3.48.0:
    resolution: {integrity: sha512-31Ill3ZW35dueXb09PpOJ4C8oKdRGypbnycAgLYvvqYlO4LOs9FyQAsw+t2+ExvE6DznM0vkeWTQI3y7HUVYCA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/client-sso': 3.48.0
      '@aws-sdk/property-provider': 3.47.2
      '@aws-sdk/shared-ini-file-loader': 3.47.1
      '@aws-sdk/types': 3.47.1
      '@aws-sdk/util-credentials': 3.47.2
      tslib: 2.3.1
    dev: false

  /@aws-sdk/credential-provider-sso/3.49.0:
    resolution: {integrity: sha512-sFTqbQOyGR88K10Y1OgauEPKDmEibxtAkLSFjkJ6Yw/Jyp+lftchoa+TxRrNvDY1zjZX+XauVI6UmD5Pi4E1NQ==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/client-sso': 3.49.0
      '@aws-sdk/property-provider': 3.49.0
      '@aws-sdk/shared-ini-file-loader': 3.49.0
      '@aws-sdk/types': 3.49.0
      '@aws-sdk/util-credentials': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/credential-provider-web-identity/3.47.2:
    resolution: {integrity: sha512-biJo8zJwNk8Dwrd/mkTcu8iLuOlGbsG2Uahta4StkOUhZ733xewOZ4WISLXVLocb/PXLM1lZQgkobwugpFOQRA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/property-provider': 3.47.2
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/credential-provider-web-identity/3.49.0:
    resolution: {integrity: sha512-mlIHUTn04unB0HEwEO12YIY5848uE9B+gYI+YwlNZ70KXGs3lj2horOgPgbxeIfulCVw0aRTKChUg2ActTosYg==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/property-provider': 3.49.0
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/eventstream-marshaller/3.6.1:
    resolution: {integrity: sha512-ZvN3Nvxn2Gul08L9MOSN123LwSO0E1gF/CqmOGZtEWzPnoSX/PWM9mhPPeXubyw2KdlXylOodYYw3EAATk3OmA==}
    dependencies:
      '@aws-crypto/crc32': 1.2.2
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/util-hex-encoding': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/eventstream-serde-browser/3.6.1:
    resolution: {integrity: sha512-J8B30d+YUfkBtgWRr7+9AfYiPnbG28zjMlFGsJf8Wxr/hDCfff+Z8NzlBYFEbS7McXXhRiIN8DHUvCtolJtWJQ==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/eventstream-marshaller': 3.6.1
      '@aws-sdk/eventstream-serde-universal': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/eventstream-serde-config-resolver/3.6.1:
    resolution: {integrity: sha512-72pCzcT/KeD4gPgRVBSQzEzz4JBim8bNwPwZCGaIYdYAsAI8YMlvp0JNdis3Ov9DFURc87YilWKQlAfw7CDJxA==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/eventstream-serde-node/3.6.1:
    resolution: {integrity: sha512-rjBbJFjCrEcm2NxZctp+eJmyPxKYayG3tQZo8PEAQSViIlK5QexQI3fgqNAeCtK7l/SFAAvnOMRZF6Z3NdUY6A==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/eventstream-marshaller': 3.6.1
      '@aws-sdk/eventstream-serde-universal': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/eventstream-serde-universal/3.6.1:
    resolution: {integrity: sha512-rpRu97yAGHr9GQLWMzcGICR2PxNu1dHU/MYc9Kb6UgGeZd4fod4o1zjhAJuj98cXn2xwHNFM4wMKua6B4zKrZg==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/eventstream-marshaller': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/fetch-http-handler/3.47.2:
    resolution: {integrity: sha512-MZwwKtJwkWPm3Tzh+F3gcts13v1OuZih0slOO4GJpMxq46+lcW4DoW04lNHULJsyduXs4CziH8g65DDh0Yhq6w==}
    dependencies:
      '@aws-sdk/protocol-http': 3.47.2
      '@aws-sdk/querystring-builder': 3.47.2
      '@aws-sdk/types': 3.47.1
      '@aws-sdk/util-base64-browser': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/fetch-http-handler/3.49.0:
    resolution: {integrity: sha512-ougJRsvoIGP0qTgHSGVF1B5Ui95Y/SP5CpY/y6B8vMGrwJ+MmvcCUE3Qd2UJGjO1PfUneno8PHK4u5x7hc2ceA==}
    dependencies:
      '@aws-sdk/protocol-http': 3.49.0
      '@aws-sdk/querystring-builder': 3.49.0
      '@aws-sdk/types': 3.49.0
      '@aws-sdk/util-base64-browser': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/fetch-http-handler/3.6.1:
    resolution: {integrity: sha512-N8l6ZbwhINuWG5hsl625lmIQmVjzsqRPmlgh061jm5D90IhsM5/3A3wUxpB/k0av1dmuMRw/m0YtBU5w4LOwvw==}
    dependencies:
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/querystring-builder': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/util-base64-browser': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/hash-blob-browser/3.6.1:
    resolution: {integrity: sha512-9jPaZ/e3F8gf9JZd44DD6MvbYV6bKnn99rkG3GFIINOy9etoxPrLehp2bH2DK/j0ow60RNuwgUjj5qHV/zF67g==}
    dependencies:
      '@aws-sdk/chunked-blob-reader': 3.6.1
      '@aws-sdk/chunked-blob-reader-native': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/hash-node/3.47.2:
    resolution: {integrity: sha512-OpUCNGvchKI1WoOCtCm36gQtECMz2P5mJoXxAHNZQ5qQ69A5Vk/DZs1V24N94M7tl1u7ZpbLsJbWFdu+P4B27g==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/types': 3.47.1
      '@aws-sdk/util-buffer-from': 3.47.2
      tslib: 2.3.1
    dev: false

  /@aws-sdk/hash-node/3.49.0:
    resolution: {integrity: sha512-nRNCmSkcJOzWzKU6NihlKW/6H1HxaaBjUe9ETnwWIgwPC7NZ6IWtri48Cf7Itvveu3dln3ZM2WSXN20TlQpuBw==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/types': 3.49.0
      '@aws-sdk/util-buffer-from': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/hash-node/3.6.1:
    resolution: {integrity: sha512-iKEpzpyaG9PYCnaOGwTIf0lffsF/TpsXrzAfnBlfeOU/3FbgniW2z/yq5xBbtMDtLobtOYC09kUFwDnDvuveSA==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/util-buffer-from': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/hash-stream-node/3.6.1:
    resolution: {integrity: sha512-ePaWjCItIWxuSxA/UnUM/keQ3IAOsQz3FYSxu0KK8K0e1bKTEUgDIG9oMLBq7jIl9TzJG0HBXuPfMe73QHUNug==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/invalid-dependency/3.47.2:
    resolution: {integrity: sha512-QLIp0Gv9IbSVXru1kS92M4kF9ZgHmVP7Us8dWSu5UC7LJt6Uxhxjb+e+F0h9qY1Z3Prior12I4r5COgVO3dWxA==}
    dependencies:
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/invalid-dependency/3.49.0:
    resolution: {integrity: sha512-MXf/9l/Oiy+KGKDvInv0RT4rtS+iNftYRTlTmUn3RR74Kz8Fvw+O0RcUjzSrNn5SpjCf/UsGrF+KBTm2gFYQCA==}
    dependencies:
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/invalid-dependency/3.6.1:
    resolution: {integrity: sha512-d0RLqK7yeDCZJKopnGmGXo2rYkQNE7sGKVmBHQD1j1kKZ9lWwRoJeWqo834JNPZzY5XRvZG5SuIjJ1kFy8LpyQ==}
    dependencies:
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/is-array-buffer/3.47.1:
    resolution: {integrity: sha512-HQMvT3dP6DCjmn87WkzYxUF9RqkvuXgKfddLEKj/tg/OgDQJv9xIPjEEry8Fd36ncbBqaBmC/z2ETZhpzHQvXA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/is-array-buffer/3.49.0:
    resolution: {integrity: sha512-tLba+xvlm1+aAnv+bGieVZo8DCENbqfS9kLf/hp+9hrUSiNAsxs9Pqi34JBpMKGn6h9qORp6f8ClRS+gK8yvWg==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/is-array-buffer/3.6.1:
    resolution: {integrity: sha512-qm2iDJmCrxlQE2dsFG+TujPe7jw4DF+4RTrsFMhk/e3lOl3MAzQ6Fc2kXtgeUcVrZVFTL8fQvXE1ByYyI6WbCw==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      tslib: 1.14.1
    dev: false

  /@aws-sdk/md5-js/3.6.1:
    resolution: {integrity: sha512-lzCqkZF1sbzGFDyq1dI+lR3AmlE33rbC/JhZ5fzw3hJZvfZ6Beq3Su7YwDo65IWEu0zOKYaNywTeOloXP/CkxQ==}
    dependencies:
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/util-utf8-browser': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/middleware-apply-body-checksum/3.6.1:
    resolution: {integrity: sha512-IncmXR1MPk6aYvmD37It8dP6wVMzaxxzgrkIU2ACkN5UVwA+/0Sr3ZNd9dNwjpyoH1AwpL9BetnlJaWtT6K5ew==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/is-array-buffer': 3.6.1
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/middleware-bucket-endpoint/3.6.1:
    resolution: {integrity: sha512-Frcqn2RQDNHy+e2Q9hv3ejT3mQWtGlfZESbXEF6toR4M0R8MmEVqIB/ohI6VKBj11lRmGwvpPsR6zz+PJ8HS7A==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/util-arn-parser': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/middleware-content-length/3.47.2:
    resolution: {integrity: sha512-rpLtN6BczAfJnH1fpXyUOMdDFN3xrky3QZ4SULVgTLXNMOvN5zDJnjwUh/QNgEaEQhxd6lroVJSgosG3357kWg==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/protocol-http': 3.47.2
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/middleware-content-length/3.49.0:
    resolution: {integrity: sha512-7IaghPT7X92gNoyn9LzZj4V5YpGPDCYQTWhpzZoIlw88vOR4I0zKg7jwYeElRoNfRCI4OYhF26ajKnNHzNMlbA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/protocol-http': 3.49.0
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/middleware-content-length/3.6.1:
    resolution: {integrity: sha512-QRcocG9f5YjYzbjs2HjKla6ZIjvx8Y8tm1ZSFOPey81m18CLif1O7M3AtJXvxn+0zeSck9StFdhz5gfjVNYtDg==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/middleware-expect-continue/3.6.1:
    resolution: {integrity: sha512-vvMOqVYU3uvdJzg/X6NHewZUEBZhSqND1IEcdahLb6RmvDhsS39iS97VZmEFsjj/UFGoePtYjrrdEgRG9Rm1kQ==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/middleware-header-default': 3.6.1
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/middleware-header-default/3.6.1:
    resolution: {integrity: sha512-YD137iIctXVH8Eut0WOBalvvA+uL0jM0UXZ9N2oKrC8kPQPpqjK9lYGFKZQFsl/XlQHAjJi+gCAFrYsBntRWJQ==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/middleware-host-header/3.47.2:
    resolution: {integrity: sha512-sDIGydvdO1LC7VQntTDMK+YYLRVCJAhrsCT8SxyAX0Jhu7Ek1BfRZzSZDwapL+idbMyyKsB80NpNoTWuKRrrew==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/protocol-http': 3.47.2
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/middleware-host-header/3.49.0:
    resolution: {integrity: sha512-5l1ILqHs2mGqNvJb5mRe7hHbTQOO292jghE/LItpNx2tiu7BBGzP1bslHcyEVYoRBX9Oqyfou7s9Ww2yBWtImQ==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/protocol-http': 3.49.0
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/middleware-host-header/3.6.1:
    resolution: {integrity: sha512-nwq8R2fGBRZQE0Fr/jiOgqfppfiTQCUoD8hyX3qSS7Qc2uqpsDOt2TnnoZl56mpQYkF/344IvMAkp+ew6wR73w==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/middleware-location-constraint/3.6.1:
    resolution: {integrity: sha512-nFisTc0O5D+4I+sRxiiLPasC/I4NDc3s+hgbPPt/b3uAdrujJjhwFBOSaTx8qQvz/xJPAA8pUA/bfWIyeZKi/w==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/middleware-logger/3.47.2:
    resolution: {integrity: sha512-Oz14cAaYmtzMYw0/ehlVLvMF4gqQS0qaYWGyyR4a3nONiwEDzxNMEQiEg7i8VgsP4usK7lfYZLXgwSmqo7uCzg==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/middleware-logger/3.49.0:
    resolution: {integrity: sha512-OicQ0w5sCJXgpeZ+t3XeJA2R/09YfuSe53Ma6aWZm/2/r8vG/SW0yAnwFvwJeCm3DKtBxU1qO2eWhFqvJuWRVA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/middleware-logger/3.6.1:
    resolution: {integrity: sha512-zxaSLpwKlja7JvK20UsDTxPqBZUo3rbDA1uv3VWwpxzOrEWSlVZYx/KLuyGWGkx9V71ZEkf6oOWWJIstS0wyQQ==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/middleware-retry/3.47.2:
    resolution: {integrity: sha512-qgAE/+hVGXQDkqbVo+uFeb+N7mr7kBi0Oc1Fm490fm3uLQnXuyu3suIix//wxNejoLwIgKQGSLrQNgnXtuvhxw==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/protocol-http': 3.47.2
      '@aws-sdk/service-error-classification': 3.47.2
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
      uuid: 8.3.2
    dev: false

  /@aws-sdk/middleware-retry/3.49.0:
    resolution: {integrity: sha512-RSS4R4PNULHA1b1eYR50YPPfOV2jRuXgLNLVVYMEzzC23MabKEXJYPge+pI1Q9rRrbahVj7aQcOTSpT0MsiEeA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/protocol-http': 3.49.0
      '@aws-sdk/service-error-classification': 3.49.0
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
      uuid: 8.3.2
    dev: false

  /@aws-sdk/middleware-retry/3.6.1:
    resolution: {integrity: sha512-WHeo4d2jsXxBP+cec2SeLb0btYXwYXuE56WLmNt0RvJYmiBzytUeGJeRa9HuwV574kgigAuHGCeHlPO36G4Y0Q==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/service-error-classification': 3.6.1
      '@aws-sdk/types': 3.6.1
      react-native-get-random-values: 1.7.2
      tslib: 1.14.1
      uuid: 3.4.0
    transitivePeerDependencies:
      - react-native
    dev: false

  /@aws-sdk/middleware-sdk-s3/3.6.1:
    resolution: {integrity: sha512-HEA9kynNTsOSIIz8p5GEEAH03pnn+SSohwPl80sGqkmI1yl1tzjqgYZRii0e6acJTh4j9655XFzSx36hYPeB2w==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/util-arn-parser': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/middleware-sdk-sts/3.47.2:
    resolution: {integrity: sha512-KlO4cYb4Bxf/Jg/uxlxRrFvxUR/DmjMIS+JRZNGqK4XyYA+apYZkfM0XUtMiKc491n/euluf9A0AyTxpMgixxg==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/middleware-signing': 3.47.2
      '@aws-sdk/property-provider': 3.47.2
      '@aws-sdk/protocol-http': 3.47.2
      '@aws-sdk/signature-v4': 3.47.2
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/middleware-sdk-sts/3.49.0:
    resolution: {integrity: sha512-ZnLV37HKpMdK2x+69ZNqAqKr8rmweyMc//yZQRLtUKpKyQ/XSr0/KUBZXkgIny27aaBsrkplA5g1X2GrClRRZA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/middleware-signing': 3.49.0
      '@aws-sdk/property-provider': 3.49.0
      '@aws-sdk/protocol-http': 3.49.0
      '@aws-sdk/signature-v4': 3.49.0
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/middleware-serde/3.47.2:
    resolution: {integrity: sha512-Gjw+fkG4UvvbP5LrGW1FzUq0IJB6QIBFxStE0gbyjkKNYtcb9c0R3dIwH5CSECtelDZScytwmBKaVe8NGi6wJA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/middleware-serde/3.49.0:
    resolution: {integrity: sha512-bMAlwR19uFUZ4om+U+/vnPvkcyYw83HdtERF9wrjAqNUnqYsifA0xn4R7Sakg6CW8V0h82dsST6zVfmHd+E2VA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/middleware-serde/3.6.1:
    resolution: {integrity: sha512-EdQCFZRERfP3uDuWcPNuaa2WUR3qL1WFDXafhcx+7ywQxagdYqBUWKFJlLYi6njbkOKXFM+eHBzoXGF0OV3MJA==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/middleware-signing/3.47.2:
    resolution: {integrity: sha512-r6/2gf5gwkVdI7EOa1TdYdfzOdCF3jkhjLi98c3nAxZNxZFGwoycIy7Bd6sCfOdcmk8NyVmR0APpsgD9q+a3nw==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/property-provider': 3.47.2
      '@aws-sdk/protocol-http': 3.47.2
      '@aws-sdk/signature-v4': 3.47.2
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/middleware-signing/3.49.0:
    resolution: {integrity: sha512-9p0xZjxV9zEQdOpA4MtzmblPRUgchevg5Q70E23yAU/Wjwzwf/6J93cUxdcS8HnmOIl0zQjJaYMTcBsvgJF1eg==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/property-provider': 3.49.0
      '@aws-sdk/protocol-http': 3.49.0
      '@aws-sdk/signature-v4': 3.49.0
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/middleware-signing/3.6.1:
    resolution: {integrity: sha512-1woKq+1sU3eausdl8BNdAMRZMkSYuy4mxhLsF0/qAUuLwo1eJLLUCOQp477tICawgu4O4q2OAyUHk7wMqYnQCg==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/signature-v4': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/middleware-ssec/3.6.1:
    resolution: {integrity: sha512-svuH6s91uKUTORt51msiL/ZBjtYSW32c3uVoWxludd/PEf6zO5wCmUEsKoyVwa88L7rrCq+81UBv5A8S5kc3Cw==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/middleware-stack/3.47.2:
    resolution: {integrity: sha512-9wedI1L92stvg5fs6Y3CbUXYLZIYdI3Mrdqex+ulNRuepgZNORsk+dnb8rTkf9cO3nuWRrnfKBLc/uiTcA1dww==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/middleware-stack/3.49.0:
    resolution: {integrity: sha512-OZxs2P7EH58gkvkTI7ESlUPGam0TkE0ZxOX35KjCOcYMuWvTMshKBzHRLX64nz3DYdaHSIGHgB1v8LKELZjltw==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/middleware-stack/3.6.1:
    resolution: {integrity: sha512-EPsIxMi8LtCt7YwTFpWGlVGYJc0q4kwFbOssY02qfqdCnyqi2y5wo089dH7OdxUooQ0D7CPsXM1zTTuzvm+9Fw==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      tslib: 1.14.1
    dev: false

  /@aws-sdk/middleware-user-agent/3.47.2:
    resolution: {integrity: sha512-LF5gOi37lJ3tkuDSqZVKHmqYY8oTIUTEdmPVUbBQtPKsx9xfCNbMNVAP+C+7bnbt6StZIZsvtu0M144yNFXPGQ==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/protocol-http': 3.47.2
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/middleware-user-agent/3.49.0:
    resolution: {integrity: sha512-uAcKgafZ12L8UnyeQGgSFtwOKUfiBWDLt4P2fEHvZRz/HAIcK4pu1PXPArjwteinhUiCDNFfPw8hAPvstMoG6w==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/protocol-http': 3.49.0
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/middleware-user-agent/3.6.1:
    resolution: {integrity: sha512-YvXvwllNDVvxQ30vIqLsx+P6jjnfFEQUmhlv64n98gOme6h2BqoyQDcC3yHRGctuxRZEsR7W/H1ASTKC+iabbQ==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/node-config-provider/3.47.2:
    resolution: {integrity: sha512-POdigo6ZXLRVWhmjE21Y1Q1ziPnM/c3rH0wHgzAtdx0Mfn6/9jS77QHMkZzC8MJ7lzgXVFDWM25evVZqdYrh+g==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/property-provider': 3.47.2
      '@aws-sdk/shared-ini-file-loader': 3.47.1
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/node-config-provider/3.49.0:
    resolution: {integrity: sha512-OCn5c6M/RJDEO80Q+Iy4ADSYgqd/uyEsvp+7lU4di4bMND9kYT4JO2ky2SWjIuARGq/mhMOhaN2DO9MbcqV20g==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/property-provider': 3.49.0
      '@aws-sdk/shared-ini-file-loader': 3.49.0
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/node-config-provider/3.6.1:
    resolution: {integrity: sha512-x2Z7lm0ZhHYqMybvkaI5hDKfBkaLaXhTDfgrLl9TmBZ3QHO4fIHgeL82VZ90Paol+OS+jdq2AheLmzbSxv3HrA==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/property-provider': 3.6.1
      '@aws-sdk/shared-ini-file-loader': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/node-http-handler/3.47.2:
    resolution: {integrity: sha512-X2Y+H2DBoeDnrSe5rsVc63uhext230AuG/+hIFHK2/HkyG9DiiHKNCNj2w8N4FLWEX3l8KDif3C7BqYxj9ZkDg==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/abort-controller': 3.47.2
      '@aws-sdk/protocol-http': 3.47.2
      '@aws-sdk/querystring-builder': 3.47.2
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/node-http-handler/3.49.0:
    resolution: {integrity: sha512-t7D9hoSigBihC9RRgYrkzgSER0fYzZe7192pJAaP6jk13ZOpccQRfXZoKge/cm42aHJsTy8DdQdGtLg7wLTp0g==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/abort-controller': 3.49.0
      '@aws-sdk/protocol-http': 3.49.0
      '@aws-sdk/querystring-builder': 3.49.0
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/node-http-handler/3.6.1:
    resolution: {integrity: sha512-6XSaoqbm9ZF6T4UdBCcs/Gn2XclwBotkdjj46AxO+9vRAgZDP+lH/8WwZsvfqJhhRhS0qxWrks98WGJwmaTG8g==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/abort-controller': 3.6.1
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/querystring-builder': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/property-provider/3.47.2:
    resolution: {integrity: sha512-0NiVJ6+JtRC8XOvNb1ofHtsjINrinC1/fDKvl/bDtJDhehC5EcIeiDQmHFUhGsgTyD+VpmuHj7E4AlV6BchNPQ==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/property-provider/3.49.0:
    resolution: {integrity: sha512-6D48YpriOUpniezVuRI8J+MG+vgwb5C1SzBdgN4+S6DqbsEZy+kdEubXdoMICEd+Z8h7lH3p5zMr6po0icGCfA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/property-provider/3.6.1:
    resolution: {integrity: sha512-2gR2DzDySXKFoj9iXLm1TZBVSvFIikEPJsbRmAZx5RBY+tp1IXWqZM6PESjaLdLg/ZtR0QhW2ZcRn0fyq2JfnQ==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/protocol-http/3.47.2:
    resolution: {integrity: sha512-XAQFbSigJD0fk61nSR6y6TMv3+o1IjymltWuDmGEtoI25pisC2M3A+3/xO9YHag/41CSgt9nQ+lh1iC4UlKKJw==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/protocol-http/3.49.0:
    resolution: {integrity: sha512-lb9CO7/vm26v4UwveWb4jSapqWWP/p0b9SuHpRExq+yMuvHqwxcoGrxmvS7FsanWbepRF1895dxU/Ar6/4pviA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/protocol-http/3.6.1:
    resolution: {integrity: sha512-WkQz7ncVYTLvCidDfXWouDzqxgSNPZDz3Bql+7VhZeITnzAEcr4hNMyEqMAVYBVugGmkG2W6YiUqNNs1goOcDA==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/querystring-builder/3.47.2:
    resolution: {integrity: sha512-rsckQ262jFSDVES6rOuTnSDM9XEbM57zxeBj5BtD6eCnyUD0G4FZa1xZRum4khoxfff6/eJ+i2uncKrEk1v+EQ==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/types': 3.47.1
      '@aws-sdk/util-uri-escape': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/querystring-builder/3.49.0:
    resolution: {integrity: sha512-+NlgIYihVyUetZcrF1ADY0eg8WW1/ETD5bzTwguTiKduXVHmavSakXK1jJF5vg05mefljToZXjQnOaEs9+K9LA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/types': 3.49.0
      '@aws-sdk/util-uri-escape': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/querystring-builder/3.6.1:
    resolution: {integrity: sha512-ESe255Yl6vB1AMNqaGSQow3TBYYnpw0AFjE40q2VyiNrkbaqKmW2EzjeCy3wEmB1IfJDHy3O12ZOMUMOnjFT8g==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/util-uri-escape': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/querystring-parser/3.47.2:
    resolution: {integrity: sha512-28BirdFhZ+Y2pUMuI9r1ATgcQyt4q3cSqqpLSy7ADGb7xHde6oA/ZfRdX/s7OVIHoAfhrjAeI+TbYjwso9F/HA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/querystring-parser/3.49.0:
    resolution: {integrity: sha512-4bSCHI5A8wi+JjsD1gAhMuGRGjDmlw6MoMWUiv4R2J8Ow/9mV8biKRo2ZytUPiSSu4G5JQ7mEkqFsm/VgkstDQ==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/querystring-parser/3.6.1:
    resolution: {integrity: sha512-hh6dhqamKrWWaDSuO2YULci0RGwJWygoy8hpCRxs/FpzzHIcbm6Cl6Jhrn5eKBzOBv+PhCcYwbfad0kIZZovcQ==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/s3-request-presigner/3.6.1:
    resolution: {integrity: sha512-OI7UHCKBwuiO/RmHHewBKnL2NYqdilXRmpX67TJ4tTszIrWP2+vpm3lIfrx/BM8nf8nKTzgkO98uFhoJsEhmTg==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/protocol-http': 3.6.1
      '@aws-sdk/signature-v4': 3.6.1
      '@aws-sdk/smithy-client': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/util-create-request': 3.6.1
      '@aws-sdk/util-format-url': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/service-error-classification/3.47.2:
    resolution: {integrity: sha512-oJCJbAPYhTNguJUhD8hlD7ibWIDpkvGrhkcq89gxBcXHPl/2/kjsii0gr302IH452IJlumpVe5wOXoZeqZYjaw==}
    engines: {node: '>= 12.0.0'}
    dev: false

  /@aws-sdk/service-error-classification/3.49.0:
    resolution: {integrity: sha512-iVmf7RcrIsM/We5ip8fe14RzEpSLF5eN8oqhCMftEdmMVnOYMd/9x0f1w69fbyBJNIIpyREqM8eAKz5OWQn5/g==}
    engines: {node: '>= 12.0.0'}
    dev: false

  /@aws-sdk/service-error-classification/3.6.1:
    resolution: {integrity: sha512-kZ7ZhbrN1f+vrSRkTJvXsu7BlOyZgym058nPA745+1RZ1Rtv4Ax8oknf2RvJyj/1qRUi8LBaAREjzQ3C8tmLBA==}
    engines: {node: '>= 10.0.0'}
    dev: false

  /@aws-sdk/shared-ini-file-loader/3.47.1:
    resolution: {integrity: sha512-f0eVOMYkT4H0gOf1B9lw65/xeTa7rT9hocVB7DbjWk8Ifv46Uvlb4ZyYOLZIBDQyFNFrD/HHvja3BkzfV0MEOA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/shared-ini-file-loader/3.49.0:
    resolution: {integrity: sha512-TcgKU6U/3JZpenRFhGSy5R5QsBWkYoeawTK1rTK6deu3UbxVwtOkietbfwP3kIwKZ4hz6OkNeHcOJtXX/InZKw==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/shared-ini-file-loader/3.6.1:
    resolution: {integrity: sha512-BnLHtsNLOoow6rPV+QVi6jnovU5g1m0YzoUG0BQYZ1ALyVlWVr0VvlUX30gMDfdYoPMp+DHvF8GXdMuGINq6kQ==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      tslib: 1.14.1
    dev: false

  /@aws-sdk/signature-v4/3.47.2:
    resolution: {integrity: sha512-zJIhUY8LLiQldfM9wpgVw525dHbILJovyZm3xmm6Tq/t258cawNaeOvOp9w0I3ycA3gs+nKgMXdeMjLH8QLbWg==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/is-array-buffer': 3.47.1
      '@aws-sdk/types': 3.47.1
      '@aws-sdk/util-hex-encoding': 3.47.1
      '@aws-sdk/util-uri-escape': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/signature-v4/3.49.0:
    resolution: {integrity: sha512-mQSGclWmv/9/MsgthBuKMHN6nkkhGTLXspkhqJ9xSUhjhoaHQVwMoJc39PowJGbYFn1AtCvHAqJtFXTGsMRwPA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/is-array-buffer': 3.49.0
      '@aws-sdk/types': 3.49.0
      '@aws-sdk/util-hex-encoding': 3.49.0
      '@aws-sdk/util-uri-escape': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/signature-v4/3.6.1:
    resolution: {integrity: sha512-EAR0qGVL4AgzodZv4t+BSuBfyOXhTNxDxom50IFI1MqidR9vI6avNZKcPHhgXbm7XVcsDGThZKbzQ2q7MZ2NTA==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/is-array-buffer': 3.6.1
      '@aws-sdk/types': 3.6.1
      '@aws-sdk/util-hex-encoding': 3.6.1
      '@aws-sdk/util-uri-escape': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/smithy-client/3.47.2:
    resolution: {integrity: sha512-vCzZodWyKmLzC+N/B1GzDjKD8I5b/ILTwPHaaH7yJdncISq/3jyTMJVW7mZHbDX61a18rL/bADnIxEd524Y2hQ==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/middleware-stack': 3.47.2
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/smithy-client/3.49.0:
    resolution: {integrity: sha512-ANh9SlEvuru1DcalVoQ7K6wSCYuw4jyeTsIDsJSa13ckrmXAg+ql9vq61ELAXTSNVmuAISuuPjbVaWvOYCtdCQ==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/middleware-stack': 3.49.0
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/smithy-client/3.6.1:
    resolution: {integrity: sha512-AVpRK4/iUxNeDdAm8UqP0ZgtgJMQeWcagTylijwelhWXyXzHUReY1sgILsWcdWnoy6gq845W7K2VBhBleni8+w==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/middleware-stack': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/types/1.0.0-rc.10:
    resolution: {integrity: sha512-9gwhYnkTNuYZ+etCtM4T8gjpZ0SWSXbzQxY34UjSS+dt3C/UnbX0J22tMahp/9Z1yCa9pihtXrkD+nO2xn7nVQ==}
    engines: {node: '>= 10.0.0'}
    dev: false

  /@aws-sdk/types/3.47.1:
    resolution: {integrity: sha512-c+lxJJLD5Bq8HkrgaIWQfK8oGH53CYpRRJizyQ5qfRo9aXp/qshUnIVcgnA8t0k7jfzcIfa0Q7jSSBw3EerEbg==}
    engines: {node: '>= 12.0.0'}
    dev: false

  /@aws-sdk/types/3.49.0:
    resolution: {integrity: sha512-8bCqEpquTlPN6xkjaJ+s+RoEFIu5r4G8oXOsQ5HYBvBdpx62HnCqzHLFNHycL2b8sE+VysQgNvmdQYR98vdMGQ==}
    engines: {node: '>= 12.0.0'}
    dev: false

  /@aws-sdk/types/3.6.1:
    resolution: {integrity: sha512-4Dx3eRTrUHLxhFdLJL8zdNGzVsJfAxtxPYYGmIddUkO2Gj3WA1TGjdfG4XN/ClI6e1XonCHafQX3UYO/mgnH3g==}
    engines: {node: '>= 10.0.0'}
    dev: false

  /@aws-sdk/url-parser-native/3.6.1:
    resolution: {integrity: sha512-3O+ktsrJoE8YQCho9L41YXO8EWILXrSeES7amUaV3mgIV5w4S3SB/r4RkmylpqRpQF7Ry8LFiAnMqH1wa4WBPA==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/querystring-parser': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
      url: 0.11.0
    dev: false

  /@aws-sdk/url-parser/3.47.2:
    resolution: {integrity: sha512-xapm+8toLY1FJmdGWl/YWCGSbbzPitiKmcg9+NP1DIyZyHjzeG5vBZ2SYejYtGOf+Qn1VKyNN2+Qs049FOsh6w==}
    dependencies:
      '@aws-sdk/querystring-parser': 3.47.2
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/url-parser/3.49.0:
    resolution: {integrity: sha512-l5td6eu+sIjzNsZYVGr7Mz6vssf2j/8/QrrTYF76J2R6OoceCsKdyJgJPP/tXBdcp4HUZDdVcMqtWRbxGC4izQ==}
    dependencies:
      '@aws-sdk/querystring-parser': 3.49.0
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/url-parser/3.6.1:
    resolution: {integrity: sha512-pWFIePDx0PMCleQRsQDWoDl17YiijOLj0ZobN39rQt+wv5PhLSZDz9PgJsqS48nZ6hqsKgipRcjiBMhn5NtFcQ==}
    dependencies:
      '@aws-sdk/querystring-parser': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/util-arn-parser/3.6.1:
    resolution: {integrity: sha512-NFdYeuhaSrgnBG6Pt3zHNU7QwvhHq6sKUTWZShUayLMJYYbQr6IjmYVlPST4c84b+lyDoK68y/Zga621VfIdBg==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      tslib: 1.14.1
    dev: false

  /@aws-sdk/util-base64-browser/3.47.1:
    resolution: {integrity: sha512-asStae2d1xvgs3czWvvVb4JWHfY2iV8yximL4MwF+Lb8XG/b8LH3tG1E5axAFVMBcljdvRB941N7w3rug7V9ig==}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-base64-browser/3.49.0:
    resolution: {integrity: sha512-HFXJbsJC6AfrnO9M8KuFDo4ihvLbCbCFCfpWy0Gs4t8kTcvGqH8fIpfVsQKAtFHMmb8fen2LduOk+NNSA7srYw==}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-base64-browser/3.6.1:
    resolution: {integrity: sha512-+DHAIgt0AFARDVC7J0Z9FkSmJhBMlkYdOPeAAgO0WaQoKj7rtsLQJ7P3v3aS1paKN5/sk5xNY7ziVB6uHtOvHA==}
    dependencies:
      tslib: 1.14.1
    dev: false

  /@aws-sdk/util-base64-node/3.47.2:
    resolution: {integrity: sha512-0Oml66+9/uERV1dosecA/1tEd0zdiwI3kEobCF5w2f4gJDzUdaEoztcRwtbLcFv6yVT7XoW4evMQbtlcruypcQ==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/util-buffer-from': 3.47.2
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-base64-node/3.49.0:
    resolution: {integrity: sha512-xFAzOLZJOEZipG3KVLjB5z1g5PJSi6cmZOGWg2NC2/H5N0/Z+e5ObnIH8mpfO1d6kWchUuo3qJ6fTOvg/ynw7A==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/util-buffer-from': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-base64-node/3.6.1:
    resolution: {integrity: sha512-oiqzpsvtTSS92+cL3ykhGd7t3qBJKeHvrgOwUyEf1wFWHQ2DPJR+dIMy5rMFRXWLKCl3w7IddY2rJCkLYMjaqQ==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/util-buffer-from': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/util-body-length-browser/3.47.1:
    resolution: {integrity: sha512-qR307MATPC+4JtN7W9sSkchfdB3O4mulLKRpk7rF6Ns6vVwhaPfJstSGe9Qa68zYZXubF9h5WnoWuJz4N0Vqdw==}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-body-length-browser/3.49.0:
    resolution: {integrity: sha512-4a9Bw33JGKefaZDORlosQRMKxJGEYEiDD5kgNvwIv+KRl5yj2unePia6aFWMqXTWqidOb9WVlqc0Lh73ei5pTg==}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-body-length-browser/3.6.1:
    resolution: {integrity: sha512-IdWwE3rm/CFDk2F+IwTZOFTnnNW5SB8y1lWiQ54cfc7y03hO6jmXNnpZGZ5goHhT+vf1oheNQt1J47m0pM/Irw==}
    dependencies:
      tslib: 1.14.1
    dev: false

  /@aws-sdk/util-body-length-node/3.47.1:
    resolution: {integrity: sha512-U2K7+gi3bAQBb3WB1/trvA+4rPC2SKH9w/sRtqBwtxHNOjXjiCiF3oEYnbir7cdSfhzMH4HBYKbfkHZwTAHMfw==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-body-length-node/3.49.0:
    resolution: {integrity: sha512-ME5Sc8jo9BzToUjWskQKZM/NqN9PpwRDTOSH6EISDBUiH5bhWfY8MLkZqIN2UZz/XOiV3yOeWAU+fMYNnGdAQQ==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-body-length-node/3.6.1:
    resolution: {integrity: sha512-CUG3gc18bSOsqViQhB3M4AlLpAWV47RE6yWJ6rLD0J6/rSuzbwbjzxM39q0YTAVuSo/ivdbij+G9c3QCirC+QQ==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      tslib: 1.14.1
    dev: false

  /@aws-sdk/util-buffer-from/3.47.2:
    resolution: {integrity: sha512-oLytLGiIeJEk7FcT7bdeQNv7+vvVVPuL5hyXlCjHZwoWuDxepjoDhTaIC9Isq1UyPKfSZaVpk/1nqREe4aYDHw==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/is-array-buffer': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-buffer-from/3.49.0:
    resolution: {integrity: sha512-8JbIPYn91f+16QpDk000PdIBlBZu8/SoL1nF2fpAJ+M98jXpKUws3oiCztJ2FPIKRe/3ikKuZM4HxWrDyJa40Q==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/is-array-buffer': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-buffer-from/3.6.1:
    resolution: {integrity: sha512-OGUh2B5NY4h7iRabqeZ+EgsrzE1LUmNFzMyhoZv0tO4NExyfQjxIYXLQQvydeOq9DJUbCw+yrRZrj8vXNDQG+g==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/is-array-buffer': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/util-config-provider/3.47.1:
    resolution: {integrity: sha512-kBs+YghZaOqChxLZDTR8dw5RQxJ/qF064EjRpC+TdCegLCO2UtZ97RXBvc5mdt94OxXGjGUjDiD/eAlpjjFNXw==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-config-provider/3.49.0:
    resolution: {integrity: sha512-oVGT9q9UIGdv9Cra4B51QNciWKYQXTlfh8oD2FgLp91NbGTIkQLvK7Pah4TbBoa5+0u/obBI07UwCVn7wphWBQ==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-create-request/3.6.1:
    resolution: {integrity: sha512-jR1U8WpwXl+xZ9ThS42Jr5MXuegQ7QioHsZjQn3V5pbm8CXTkBF0B2BcULQu/2G1XtHOJb8qUZQlk/REoaORfQ==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/middleware-stack': 3.6.1
      '@aws-sdk/smithy-client': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/util-credentials/3.47.2:
    resolution: {integrity: sha512-C0L8pfZkJyWfuvLVRcM2Ff11t2mkM4lzjNBnQKdL80wuASZWCnAi50oUKBgwbHZdOsRKGV7C4zqAuTLTRaFpCQ==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/shared-ini-file-loader': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-credentials/3.49.0:
    resolution: {integrity: sha512-RzbKeuylb56m0zPuLGl5/TkN07+c4PKhZu3hikpsvN8n8n7aFHWPUus63QEGgVaUMCZD0QV6HqJfsCVVFF7UIg==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/shared-ini-file-loader': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-defaults-mode-browser/3.47.2:
    resolution: {integrity: sha512-ojAF5k/VFbPvJoj6/G6ekVQhbFvabUBvRhRaoQjkmj8LVEahtzcNcOxhu3FmH17mXR2oxWsGwvq6VAw6V3jLBg==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/property-provider': 3.47.2
      '@aws-sdk/types': 3.47.1
      bowser: 2.11.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-defaults-mode-browser/3.49.0:
    resolution: {integrity: sha512-MNOvFET5TNBHgvsmfcLuxVDDUV0OIjE1lxrdbXWol7bMgLc2uL3/QOXWKCOUzcFCqTOnWCvbnwkOjs3f7Dpzmw==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/property-provider': 3.49.0
      '@aws-sdk/types': 3.49.0
      bowser: 2.11.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-defaults-mode-node/3.47.2:
    resolution: {integrity: sha512-O35bXeahlepgPxg72XDN+5cXlbs+jZec5AH+7YYI+ldEVu6WxF0MxeQtMG4Fqpb19bpPIPz0SodHM1D1I53S5w==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/config-resolver': 3.47.2
      '@aws-sdk/credential-provider-imds': 3.47.2
      '@aws-sdk/node-config-provider': 3.47.2
      '@aws-sdk/property-provider': 3.47.2
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-defaults-mode-node/3.49.0:
    resolution: {integrity: sha512-bd5/ZJlNIX25n83mvcCh9eYQiDdf6gLHNH6ZftA/EbFfkE0o/qHrFhBhiB9HBY9ZoHhtoqrJNv5W9qKFHx1EIA==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/config-resolver': 3.49.0
      '@aws-sdk/credential-provider-imds': 3.49.0
      '@aws-sdk/node-config-provider': 3.49.0
      '@aws-sdk/property-provider': 3.49.0
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-format-url/3.6.1:
    resolution: {integrity: sha512-FvhcXcqLyJ0j0WdlmGs7PtjCCv8NaY4zBuXYO2iwAmqoy2SIZXQL63uAvmilqWj25q47ASAsUwSFLReCCfMklQ==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/querystring-builder': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/util-hex-encoding/3.47.1:
    resolution: {integrity: sha512-9vBhp1E74s6nImK5xk7BkopQ10w6Vk8UrIinu71U7V/0PdjCEb4Jmnn++MLyim2jTT0QEGmJ6v0VjPZi9ETWaA==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-hex-encoding/3.49.0:
    resolution: {integrity: sha512-ZbPu8Dd3Qm0BMP71FWUH7KPpZA/6izfkDlxbvHxtHdW7XYZALuJ0cVRpWGIY2fCSuA9X8Jfn60KMyjuSAuzM1w==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-hex-encoding/3.6.1:
    resolution: {integrity: sha512-pzsGOHtU2eGca4NJgFg94lLaeXDOg8pcS9sVt4f9LmtUGbrqRveeyBv0XlkHeZW2n0IZBssPHipVYQFlk7iaRA==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      tslib: 1.14.1
    dev: false

  /@aws-sdk/util-locate-window/3.49.0:
    resolution: {integrity: sha512-ryw+t+quF1raaK0nXSplMiCVnahNLNgNDijZCFFkddGTMaCy+L4VRLYyNms3bgwt3G0BmVn9f3uyDWRSkn5sSg==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-uri-escape/3.47.1:
    resolution: {integrity: sha512-CGqm+bT07OCJSgDo48/4Fegh9tNPR3kcOMfNWZ/J6lrt+nfAnOdXx5zZB63PjKCt5zJ7LM0thOQgAeOf2WdJzQ==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-uri-escape/3.49.0:
    resolution: {integrity: sha512-NH7iQUYvijYZEOzZkF/QQrp8kBOA9H0Z89hR/63FDCjr1M0Cdcs1bLaFO0a0qbW9NQtoYNsMBMk7pTveDrAzTw==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-uri-escape/3.6.1:
    resolution: {integrity: sha512-tgABiT71r0ScRJZ1pMX0xO0QPMMiISCtumph50IU5VDyZWYgeIxqkMhIcrL1lX0QbNCMgX0n6rZxGrrbjDNavA==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      tslib: 1.14.1
    dev: false

  /@aws-sdk/util-user-agent-browser/3.47.2:
    resolution: {integrity: sha512-dstakqLW8hXRMzR/s3uLpfYbMs/qDowG/Fp123cAuln4rUODG29VNFLkMAYRnG6RQ9hf2OtXsCfFGNSm+bnJMg==}
    dependencies:
      '@aws-sdk/types': 3.47.1
      bowser: 2.11.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-user-agent-browser/3.49.0:
    resolution: {integrity: sha512-RR4E6WlDSu9SivPjx/Jddo87PeVg6dhRL0XGdDBpew7i8bfwqCvxQydkbWIetxucLrt9zII9QnLDQUPBue1xUw==}
    dependencies:
      '@aws-sdk/types': 3.49.0
      bowser: 2.11.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-user-agent-browser/3.6.1:
    resolution: {integrity: sha512-KhJ4VED4QpuBVPXoTjb5LqspX1xHWJTuL8hbPrKfxj+cAaRRW2CNEe7PPy2CfuHtPzP3dU3urtGTachbwNb0jg==}
    dependencies:
      '@aws-sdk/types': 3.6.1
      bowser: 2.11.0
      tslib: 1.14.1
    dev: false

  /@aws-sdk/util-user-agent-node/3.47.2:
    resolution: {integrity: sha512-9wYkGvTrOFWb+9QjziQma+l9M0u1tmHiIdL9r4Btsc9WVMsy1Y9HUUeXacM3dLLIzCpQ5dDbjIlAZWA8Rm3ZOQ==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/node-config-provider': 3.47.2
      '@aws-sdk/types': 3.47.1
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-user-agent-node/3.49.0:
    resolution: {integrity: sha512-ixUkF6kcDfsWO0kivyOKAnBITJm7InGa04ALbgAfuuE7RU1cVkXVMFIn5vux7QkziK7+JwozM9SNPIwNukElDw==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/node-config-provider': 3.49.0
      '@aws-sdk/types': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-user-agent-node/3.6.1:
    resolution: {integrity: sha512-PWwL5EDRwhkXX40m5jjgttlBmLA7vDhHBen1Jcle0RPIDFRVPSE7GgvLF3y4r3SNH0WD6hxqadT50bHQynXW6w==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/node-config-provider': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/util-utf8-browser/1.0.0-rc.8:
    resolution: {integrity: sha512-clncPMJ23rxCIkZ9LoUC8SowwZGxWyN2TwRb0XvW/Cv9EavkRgRCOrCpneGyC326lqtMKx36onnpaSRHxErUYw==}
    dependencies:
      tslib: 1.14.1
    dev: false

  /@aws-sdk/util-utf8-browser/3.47.1:
    resolution: {integrity: sha512-PzHEdiBhfnZbHvZ+dIlIPodDbpgrpKDYslHe9A+tH8ZfuAxxmZEqnukp7QEkFr6mBcmq3H2thcPdNT45/5pA7Q==}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-utf8-browser/3.49.0:
    resolution: {integrity: sha512-u9ZgAiTWX9yZFQ/ptlnVpYJ/rXF7aE2Wagar1IjhZrnxXbpVJvcX1EeRayxI1P5AAp2y2fiEKHZzX9ugTwOcEg==}
    dependencies:
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-utf8-browser/3.6.1:
    resolution: {integrity: sha512-gZPySY6JU5gswnw3nGOEHl3tYE7vPKvtXGYoS2NRabfDKRejFvu+4/nNW6SSpoOxk6LSXsrWB39NO51k+G4PVA==}
    dependencies:
      tslib: 1.14.1
    dev: false

  /@aws-sdk/util-utf8-node/3.47.2:
    resolution: {integrity: sha512-itgWlytqhbD/pRiGxX7XY7RF8k15ScV816FUlZtOKeRpAphliFT07TGWKmiZcFxEbHpi9r8A5H1FOoPmyU635Q==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/util-buffer-from': 3.47.2
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-utf8-node/3.49.0:
    resolution: {integrity: sha512-QTF5b5OT2y6xsQl8sDiiXqg2n/VtgqFA+tP3WMooOSFd/ZFBbT6HoiSHXHMeTjpB/L9ZT+eUaCoBz8Jq09lBDg==}
    engines: {node: '>= 12.0.0'}
    dependencies:
      '@aws-sdk/util-buffer-from': 3.49.0
      tslib: 2.3.1
    dev: false

  /@aws-sdk/util-utf8-node/3.6.1:
    resolution: {integrity: sha512-4s0vYfMUn74XLn13rUUhNsmuPMh0j1d4rF58wXtjlVUU78THxonnN8mbCLC48fI3fKDHTmDDkeEqy7+IWP9VyA==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/util-buffer-from': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/util-waiter/3.6.1:
    resolution: {integrity: sha512-CQMRteoxW1XZSzPBVrTsOTnfzsEGs8N/xZ8BuBnXLBjoIQmRKVxIH9lgphm1ohCtVHoSWf28XH/KoOPFULQ4Tg==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      '@aws-sdk/abort-controller': 3.6.1
      '@aws-sdk/types': 3.6.1
      tslib: 1.14.1
    dev: false

  /@aws-sdk/xml-builder/3.6.1:
    resolution: {integrity: sha512-+HOCH4a0XO+I09okd0xdVP5Q5c9ZsEsDvnogiOcBQxoMivWhPUCo9pjXP3buCvVKP2oDHXQplBKSjGHvGaKFdg==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      tslib: 1.14.1
    dev: false

  /@babel/code-frame/7.16.7:
    resolution: {integrity: sha512-iAXqUn8IIeBTNd72xsFlgaXHkMBMt6y4HJp1tIaK465CWLT/fG1aqB7ykr95gHHmlBdGbFeWWfyB4NJJ0nmeIg==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/highlight': 7.16.7
    dev: true

  /@babel/compat-data/7.16.8:
    resolution: {integrity: sha512-m7OkX0IdKLKPpBlJtF561YJal5y/jyI5fNfWbPxh2D/nbzzGI4qRyrD8xO2jB24u7l+5I2a43scCG2IrfjC50Q==}
    engines: {node: '>=6.9.0'}
    dev: true

  /@babel/core/7.16.7:
    resolution: {integrity: sha512-aeLaqcqThRNZYmbMqtulsetOQZ/5gbR/dWruUCJcpas4Qoyy+QeagfDsPdMrqwsPRDNxJvBlRiZxxX7THO7qtA==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/code-frame': 7.16.7
      '@babel/generator': 7.16.8
      '@babel/helper-compilation-targets': 7.16.7_@babel+core@7.16.7
      '@babel/helper-module-transforms': 7.16.7
      '@babel/helpers': 7.16.7
      '@babel/parser': 7.16.8
      '@babel/template': 7.16.7
      '@babel/traverse': 7.16.8
      '@babel/types': 7.16.8
      convert-source-map: 1.8.0
      debug: 4.3.3
      gensync: 1.0.0-beta.2
      json5: 2.2.0
      semver: 6.3.0
      source-map: 0.5.7
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/eslint-parser/7.16.5_@babel+core@7.16.7+eslint@8.8.0:
    resolution: {integrity: sha512-mUqYa46lgWqHKQ33Q6LNCGp/wPR3eqOYTUixHFsfrSQqRxH0+WOzca75iEjFr5RDGH1dDz622LaHhLOzOuQRUA==}
    engines: {node: ^10.13.0 || ^12.13.0 || >=14.0.0}
    peerDependencies:
      '@babel/core': '>=7.11.0'
      eslint: ^7.5.0 || ^8.0.0
    dependencies:
      '@babel/core': 7.16.7
      eslint: 8.8.0
      eslint-scope: 5.1.1
      eslint-visitor-keys: 2.1.0
      semver: 6.3.0
    dev: true

  /@babel/generator/7.16.8:
    resolution: {integrity: sha512-1ojZwE9+lOXzcWdWmO6TbUzDfqLD39CmEhN8+2cX9XkDo5yW1OpgfejfliysR2AWLpMamTiOiAp/mtroaymhpw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.16.8
      jsesc: 2.5.2
      source-map: 0.5.7
    dev: true

  /@babel/helper-annotate-as-pure/7.16.7:
    resolution: {integrity: sha512-s6t2w/IPQVTAET1HitoowRGXooX8mCgtuP5195wD/QJPV6wYjpujCGF7JuMODVX2ZAJOf1GT6DT9MHEZvLOFSw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.16.8
    dev: true

  /@babel/helper-builder-binary-assignment-operator-visitor/7.16.7:
    resolution: {integrity: sha512-C6FdbRaxYjwVu/geKW4ZeQ0Q31AftgRcdSnZ5/jsH6BzCJbtvXvhpfkbkThYSuutZA7nCXpPR6AD9zd1dprMkA==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-explode-assignable-expression': 7.16.7
      '@babel/types': 7.16.8
    dev: true

  /@babel/helper-compilation-targets/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-mGojBwIWcwGD6rfqgRXVlVYmPAv7eOpIemUG3dGnDdCY4Pae70ROij3XmfrH6Fa1h1aiDylpglbZyktfzyo/hA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/compat-data': 7.16.8
      '@babel/core': 7.16.7
      '@babel/helper-validator-option': 7.16.7
      browserslist: 4.19.1
      semver: 6.3.0
    dev: true

  /@babel/helper-create-class-features-plugin/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-kIFozAvVfK05DM4EVQYKK+zteWvY85BFdGBRQBytRyY3y+6PX0DkDOn/CZ3lEuczCfrCxEzwt0YtP/87YPTWSw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-annotate-as-pure': 7.16.7
      '@babel/helper-environment-visitor': 7.16.7
      '@babel/helper-function-name': 7.16.7
      '@babel/helper-member-expression-to-functions': 7.16.7
      '@babel/helper-optimise-call-expression': 7.16.7
      '@babel/helper-replace-supers': 7.16.7
      '@babel/helper-split-export-declaration': 7.16.7
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/helper-create-regexp-features-plugin/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-fk5A6ymfp+O5+p2yCkXAu5Kyj6v0xh0RBeNcAkYUMDvvAAoxvSKXn+Jb37t/yWFiQVDFK1ELpUTD8/aLhCPu+g==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-annotate-as-pure': 7.16.7
      regexpu-core: 4.8.0
    dev: true

  /@babel/helper-define-polyfill-provider/0.3.1_@babel+core@7.16.7:
    resolution: {integrity: sha512-J9hGMpJQmtWmj46B3kBHmL38UhJGhYX7eqkcq+2gsstyYt341HmPeWspihX43yVRA0mS+8GGk2Gckc7bY/HCmA==}
    peerDependencies:
      '@babel/core': ^7.4.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-compilation-targets': 7.16.7_@babel+core@7.16.7
      '@babel/helper-module-imports': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/traverse': 7.16.8
      debug: 4.3.3
      lodash.debounce: 4.0.8
      resolve: 1.21.0
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/helper-environment-visitor/7.16.7:
    resolution: {integrity: sha512-SLLb0AAn6PkUeAfKJCCOl9e1R53pQlGAfc4y4XuMRZfqeMYLE0dM1LMhqbGAlGQY0lfw5/ohoYWAe9V1yibRag==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.16.8
    dev: true

  /@babel/helper-explode-assignable-expression/7.16.7:
    resolution: {integrity: sha512-KyUenhWMC8VrxzkGP0Jizjo4/Zx+1nNZhgocs+gLzyZyB8SHidhoq9KK/8Ato4anhwsivfkBLftky7gvzbZMtQ==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.16.8
    dev: true

  /@babel/helper-function-name/7.16.7:
    resolution: {integrity: sha512-QfDfEnIUyyBSR3HtrtGECuZ6DAyCkYFp7GHl75vFtTnn6pjKeK0T1DB5lLkFvBea8MdaiUABx3osbgLyInoejA==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-get-function-arity': 7.16.7
      '@babel/template': 7.16.7
      '@babel/types': 7.16.8
    dev: true

  /@babel/helper-get-function-arity/7.16.7:
    resolution: {integrity: sha512-flc+RLSOBXzNzVhcLu6ujeHUrD6tANAOU5ojrRx/as+tbzf8+stUCj7+IfRRoAbEZqj/ahXEMsjhOhgeZsrnTw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.16.8
    dev: true

  /@babel/helper-hoist-variables/7.16.7:
    resolution: {integrity: sha512-m04d/0Op34H5v7pbZw6pSKP7weA6lsMvfiIAMeIvkY/R4xQtBSMFEigu9QTZ2qB/9l22vsxtM8a+Q8CzD255fg==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.16.8
    dev: true

  /@babel/helper-member-expression-to-functions/7.16.7:
    resolution: {integrity: sha512-VtJ/65tYiU/6AbMTDwyoXGPKHgTsfRarivm+YbB5uAzKUyuPjgZSgAFeG87FCigc7KNHu2Pegh1XIT3lXjvz3Q==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.16.8
    dev: true

  /@babel/helper-module-imports/7.16.7:
    resolution: {integrity: sha512-LVtS6TqjJHFc+nYeITRo6VLXve70xmq7wPhWTqDJusJEgGmkAACWwMiTNrvfoQo6hEhFwAIixNkvB0jPXDL8Wg==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.16.8
    dev: true

  /@babel/helper-module-transforms/7.16.7:
    resolution: {integrity: sha512-gaqtLDxJEFCeQbYp9aLAefjhkKdjKcdh6DB7jniIGU3Pz52WAmP268zK0VgPz9hUNkMSYeH976K2/Y6yPadpng==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-environment-visitor': 7.16.7
      '@babel/helper-module-imports': 7.16.7
      '@babel/helper-simple-access': 7.16.7
      '@babel/helper-split-export-declaration': 7.16.7
      '@babel/helper-validator-identifier': 7.16.7
      '@babel/template': 7.16.7
      '@babel/traverse': 7.16.8
      '@babel/types': 7.16.8
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/helper-optimise-call-expression/7.16.7:
    resolution: {integrity: sha512-EtgBhg7rd/JcnpZFXpBy0ze1YRfdm7BnBX4uKMBd3ixa3RGAE002JZB66FJyNH7g0F38U05pXmA5P8cBh7z+1w==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.16.8
    dev: true

  /@babel/helper-plugin-utils/7.16.7:
    resolution: {integrity: sha512-Qg3Nk7ZxpgMrsox6HreY1ZNKdBq7K72tDSliA6dCl5f007jR4ne8iD5UzuNnCJH2xBf2BEEVGr+/OL6Gdp7RxA==}
    engines: {node: '>=6.9.0'}
    dev: true

  /@babel/helper-remap-async-to-generator/7.16.8:
    resolution: {integrity: sha512-fm0gH7Flb8H51LqJHy3HJ3wnE1+qtYR2A99K06ahwrawLdOFsCEWjZOrYricXJHoPSudNKxrMBUPEIPxiIIvBw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-annotate-as-pure': 7.16.7
      '@babel/helper-wrap-function': 7.16.8
      '@babel/types': 7.16.8
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/helper-replace-supers/7.16.7:
    resolution: {integrity: sha512-y9vsWilTNaVnVh6xiJfABzsNpgDPKev9HnAgz6Gb1p6UUwf9NepdlsV7VXGCftJM+jqD5f7JIEubcpLjZj5dBw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-environment-visitor': 7.16.7
      '@babel/helper-member-expression-to-functions': 7.16.7
      '@babel/helper-optimise-call-expression': 7.16.7
      '@babel/traverse': 7.16.8
      '@babel/types': 7.16.8
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/helper-simple-access/7.16.7:
    resolution: {integrity: sha512-ZIzHVyoeLMvXMN/vok/a4LWRy8G2v205mNP0XOuf9XRLyX5/u9CnVulUtDgUTama3lT+bf/UqucuZjqiGuTS1g==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.16.8
    dev: true

  /@babel/helper-skip-transparent-expression-wrappers/7.16.0:
    resolution: {integrity: sha512-+il1gTy0oHwUsBQZyJvukbB4vPMdcYBrFHa0Uc4AizLxbq6BOYC51Rv4tWocX9BLBDLZ4kc6qUFpQ6HRgL+3zw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.16.8
    dev: true

  /@babel/helper-split-export-declaration/7.16.7:
    resolution: {integrity: sha512-xbWoy/PFoxSWazIToT9Sif+jJTlrMcndIsaOKvTA6u7QEo7ilkRZpjew18/W3c7nm8fXdUDXh02VXTbZ0pGDNw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/types': 7.16.8
    dev: true

  /@babel/helper-validator-identifier/7.16.7:
    resolution: {integrity: sha512-hsEnFemeiW4D08A5gUAZxLBTXpZ39P+a+DGDsHw1yxqyQ/jzFEnxf5uTEGp+3bzAbNOxU1paTgYS4ECU/IgfDw==}
    engines: {node: '>=6.9.0'}
    dev: true

  /@babel/helper-validator-option/7.16.7:
    resolution: {integrity: sha512-TRtenOuRUVo9oIQGPC5G9DgK4743cdxvtOw0weQNpZXaS16SCBi5MNjZF8vba3ETURjZpTbVn7Vvcf2eAwFozQ==}
    engines: {node: '>=6.9.0'}
    dev: true

  /@babel/helper-wrap-function/7.16.8:
    resolution: {integrity: sha512-8RpyRVIAW1RcDDGTA+GpPAwV22wXCfKOoM9bet6TLkGIFTkRQSkH1nMQ5Yet4MpoXe1ZwHPVtNasc2w0uZMqnw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-function-name': 7.16.7
      '@babel/template': 7.16.7
      '@babel/traverse': 7.16.8
      '@babel/types': 7.16.8
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/helpers/7.16.7:
    resolution: {integrity: sha512-9ZDoqtfY7AuEOt3cxchfii6C7GDyyMBffktR5B2jvWv8u2+efwvpnVKXMWzNehqy68tKgAfSwfdw/lWpthS2bw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/template': 7.16.7
      '@babel/traverse': 7.16.8
      '@babel/types': 7.16.8
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/highlight/7.16.7:
    resolution: {integrity: sha512-aKpPMfLvGO3Q97V0qhw/V2SWNWlwfJknuwAunU7wZLSfrM4xTBvg7E5opUVi1kJTBKihE38CPg4nBiqX83PWYw==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-validator-identifier': 7.16.7
      chalk: 2.4.2
      js-tokens: 4.0.0
    dev: true

  /@babel/parser/7.16.8:
    resolution: {integrity: sha512-i7jDUfrVBWc+7OKcBzEe5n7fbv3i2fWtxKzzCvOjnzSxMfWMigAhtfJ7qzZNGFNMsCCd67+uz553dYKWXPvCKw==}
    engines: {node: '>=6.0.0'}
    hasBin: true
    dev: true

  /@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-anv/DObl7waiGEnC24O9zqL0pSuI9hljihqiDuFHC8d7/bjr/4RLGPWuc8rYOff/QPzbEPSkzG8wGG9aDuhHRg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-di8vUHRdf+4aJ7ltXhaDbPoszdkh59AQtJM5soLsuHpQJdFQZOA4uGj0V2u/CZ8bJ/u8ULDL5yq6FO/bCXnKHw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.13.0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/helper-skip-transparent-expression-wrappers': 7.16.0
      '@babel/plugin-proposal-optional-chaining': 7.16.7_@babel+core@7.16.7
    dev: true

  /@babel/plugin-proposal-async-generator-functions/7.16.8_@babel+core@7.16.7:
    resolution: {integrity: sha512-71YHIvMuiuqWJQkebWJtdhQTfd4Q4mF76q2IX37uZPkG9+olBxsX+rH1vkhFto4UeJZ9dPY2s+mDvhDm1u2BGQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/helper-remap-async-to-generator': 7.16.8
      '@babel/plugin-syntax-async-generators': 7.8.4_@babel+core@7.16.7
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-proposal-class-properties/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-IobU0Xme31ewjYOShSIqd/ZGM/r/cuOz2z0MDbNrhF5FW+ZVgi0f2lyeoj9KFPDOAqsYxmLWZte1WOwlvY9aww==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-create-class-features-plugin': 7.16.7_@babel+core@7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-proposal-class-static-block/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-dgqJJrcZoG/4CkMopzhPJjGxsIe9A8RlkQLnL/Vhhx8AA9ZuaRwGSlscSh42hazc7WSrya/IK7mTeoF0DP9tEw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.12.0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-create-class-features-plugin': 7.16.7_@babel+core@7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/plugin-syntax-class-static-block': 7.14.5_@babel+core@7.16.7
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-proposal-decorators/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-DoEpnuXK14XV9btI1k8tzNGCutMclpj4yru8aXKoHlVmbO1s+2A+g2+h4JhcjrxkFJqzbymnLG6j/niOf3iFXQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-create-class-features-plugin': 7.16.7_@babel+core@7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/plugin-syntax-decorators': 7.16.7_@babel+core@7.16.7
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-proposal-dynamic-import/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-I8SW9Ho3/8DRSdmDdH3gORdyUuYnk1m4cMxUAdu5oy4n3OfN8flDEH+d60iG7dUfi0KkYwSvoalHzzdRzpWHTg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/plugin-syntax-dynamic-import': 7.8.3_@babel+core@7.16.7
    dev: true

  /@babel/plugin-proposal-export-namespace-from/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-ZxdtqDXLRGBL64ocZcs7ovt71L3jhC1RGSyR996svrCi3PYqHNkb3SwPJCs8RIzD86s+WPpt2S73+EHCGO+NUA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/plugin-syntax-export-namespace-from': 7.8.3_@babel+core@7.16.7
    dev: true

  /@babel/plugin-proposal-json-strings/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-lNZ3EEggsGY78JavgbHsK9u5P3pQaW7k4axlgFLYkMd7UBsiNahCITShLjNQschPyjtO6dADrL24757IdhBrsQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/plugin-syntax-json-strings': 7.8.3_@babel+core@7.16.7
    dev: true

  /@babel/plugin-proposal-logical-assignment-operators/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-K3XzyZJGQCr00+EtYtrDjmwX7o7PLK6U9bi1nCwkQioRFVUv6dJoxbQjtWVtP+bCPy82bONBKG8NPyQ4+i6yjg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/plugin-syntax-logical-assignment-operators': 7.10.4_@babel+core@7.16.7
    dev: true

  /@babel/plugin-proposal-nullish-coalescing-operator/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-aUOrYU3EVtjf62jQrCj63pYZ7k6vns2h/DQvHPWGmsJRYzWXZ6/AsfgpiRy6XiuIDADhJzP2Q9MwSMKauBQ+UQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/plugin-syntax-nullish-coalescing-operator': 7.8.3_@babel+core@7.16.7
    dev: true

  /@babel/plugin-proposal-numeric-separator/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-vQgPMknOIgiuVqbokToyXbkY/OmmjAzr/0lhSIbG/KmnzXPGwW/AdhdKpi+O4X/VkWiWjnkKOBiqJrTaC98VKw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/plugin-syntax-numeric-separator': 7.10.4_@babel+core@7.16.7
    dev: true

  /@babel/plugin-proposal-object-rest-spread/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-3O0Y4+dw94HA86qSg9IHfyPktgR7q3gpNVAeiKQd+8jBKFaU5NQS1Yatgo4wY+UFNuLjvxcSmzcsHqrhgTyBUA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/compat-data': 7.16.8
      '@babel/core': 7.16.7
      '@babel/helper-compilation-targets': 7.16.7_@babel+core@7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/plugin-syntax-object-rest-spread': 7.8.3_@babel+core@7.16.7
      '@babel/plugin-transform-parameters': 7.16.7_@babel+core@7.16.7
    dev: true

  /@babel/plugin-proposal-optional-catch-binding/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-eMOH/L4OvWSZAE1VkHbr1vckLG1WUcHGJSLqqQwl2GaUqG6QjddvrOaTUMNYiv77H5IKPMZ9U9P7EaHwvAShfA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/plugin-syntax-optional-catch-binding': 7.8.3_@babel+core@7.16.7
    dev: true

  /@babel/plugin-proposal-optional-chaining/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-eC3xy+ZrUcBtP7x+sq62Q/HYd674pPTb/77XZMb5wbDPGWIdUbSr4Agr052+zaUPSb+gGRnjxXfKFvx5iMJ+DA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/helper-skip-transparent-expression-wrappers': 7.16.0
      '@babel/plugin-syntax-optional-chaining': 7.8.3_@babel+core@7.16.7
    dev: true

  /@babel/plugin-proposal-private-methods/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-7twV3pzhrRxSwHeIvFE6coPgvo+exNDOiGUMg39o2LiLo1Y+4aKpfkcLGcg1UHonzorCt7SNXnoMyCnnIOA8Sw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-create-class-features-plugin': 7.16.7_@babel+core@7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-proposal-private-property-in-object/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-rMQkjcOFbm+ufe3bTZLyOfsOUOxyvLXZJCTARhJr+8UMSoZmqTe1K1BgkFcrW37rAchWg57yI69ORxiWvUINuQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-annotate-as-pure': 7.16.7
      '@babel/helper-create-class-features-plugin': 7.16.7_@babel+core@7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/plugin-syntax-private-property-in-object': 7.14.5_@babel+core@7.16.7
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-proposal-unicode-property-regex/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-QRK0YI/40VLhNVGIjRNAAQkEHws0cswSdFFjpFyt943YmJIU1da9uW63Iu6NFV6CxTZW5eTDCrwZUstBWgp/Rg==}
    engines: {node: '>=4'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-create-regexp-features-plugin': 7.16.7_@babel+core@7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-async-generators/7.8.4_@babel+core@7.16.7:
    resolution: {integrity: sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-bigint/7.8.3_@babel+core@7.16.7:
    resolution: {integrity: sha512-wnTnFlG+YxQm3vDxpGE57Pj0srRU4sHE/mDkt1qv2YJJSeUAec2ma4WLUnUPeKjyrfntVwe/N6dCXpU+zL3Npg==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-class-properties/7.12.13_@babel+core@7.16.7:
    resolution: {integrity: sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-class-static-block/7.14.5_@babel+core@7.16.7:
    resolution: {integrity: sha512-b+YyPmr6ldyNnM6sqYeMWE+bgJcJpO6yS4QD7ymxgH34GBPNDM/THBh8iunyvKIZztiwLH4CJZ0RxTk9emgpjw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-decorators/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-vQ+PxL+srA7g6Rx6I1e15m55gftknl2X8GCUW1JTlkTaXZLJOS0UcaY0eK9jYT7IYf4awn6qwyghVHLDz1WyMw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-dynamic-import/7.8.3_@babel+core@7.16.7:
    resolution: {integrity: sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-export-namespace-from/7.8.3_@babel+core@7.16.7:
    resolution: {integrity: sha512-MXf5laXo6c1IbEbegDmzGPwGNTsHZmEy6QGznu5Sh2UCWvueywb2ee+CCE4zQiZstxU9BMoQO9i6zUFSY0Kj0Q==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-flow/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-UDo3YGQO0jH6ytzVwgSLv9i/CzMcUjbKenL67dTrAZPPv6GFAtDhe6jqnvmoKzC/7htNTohhos+onPtDMqJwaQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-import-meta/7.10.4_@babel+core@7.16.7:
    resolution: {integrity: sha512-Yqfm+XDx0+Prh3VSeEQCPU81yC+JWZ2pDPFSS4ZdpfZhp4MkFMaDC1UqseovEKwSUpnIL7+vK+Clp7bfh0iD7g==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-json-strings/7.8.3_@babel+core@7.16.7:
    resolution: {integrity: sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-jsx/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-Esxmk7YjA8QysKeT3VhTXvF6y77f/a91SIs4pWb4H2eWGQkCKFgQaG6hdoEVZtGsrAcb2K5BW66XsOErD4WU3Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-logical-assignment-operators/7.10.4_@babel+core@7.16.7:
    resolution: {integrity: sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-nullish-coalescing-operator/7.8.3_@babel+core@7.16.7:
    resolution: {integrity: sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-numeric-separator/7.10.4_@babel+core@7.16.7:
    resolution: {integrity: sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-object-rest-spread/7.8.3_@babel+core@7.16.7:
    resolution: {integrity: sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-optional-catch-binding/7.8.3_@babel+core@7.16.7:
    resolution: {integrity: sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-optional-chaining/7.8.3_@babel+core@7.16.7:
    resolution: {integrity: sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-private-property-in-object/7.14.5_@babel+core@7.16.7:
    resolution: {integrity: sha512-0wVnp9dxJ72ZUJDV27ZfbSj6iHLoytYZmh3rFcxNnvsJF3ktkzLDZPy/mA17HGsaQT3/DQsWYX1f1QGWkCoVUg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-top-level-await/7.14.5_@babel+core@7.16.7:
    resolution: {integrity: sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-syntax-typescript/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-YhUIJHHGkqPgEcMYkPCKTyGUdoGKWtopIycQyjJH8OjvRgOYsXsaKehLVPScKJWAULPxMa4N1vCe6szREFlZ7A==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-arrow-functions/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-9ffkFFMbvzTvv+7dTp/66xvZAWASuPD5Tl9LK3Z9vhOmANo6j94rik+5YMBt4CwHVMWLWpMsriIc2zsa3WW3xQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-async-to-generator/7.16.8_@babel+core@7.16.7:
    resolution: {integrity: sha512-MtmUmTJQHCnyJVrScNzNlofQJ3dLFuobYn3mwOTKHnSCMtbNsqvF71GQmJfFjdrXSsAA7iysFmYWw4bXZ20hOg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-module-imports': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/helper-remap-async-to-generator': 7.16.8
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-transform-block-scoped-functions/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-JUuzlzmF40Z9cXyytcbZEZKckgrQzChbQJw/5PuEHYeqzCsvebDx0K0jWnIIVcmmDOAVctCgnYs0pMcrYj2zJg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-block-scoping/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-ObZev2nxVAYA4bhyusELdo9hb3H+A56bxH3FZMbEImZFiEDYVHXQSJ1hQKFlDnlt8G9bBrCZ5ZpURZUrV4G5qQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-classes/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-WY7og38SFAGYRe64BrjKf8OrE6ulEHtr5jEYaZMwox9KebgqPi67Zqz8K53EKk1fFEJgm96r32rkKZ3qA2nCWQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-annotate-as-pure': 7.16.7
      '@babel/helper-environment-visitor': 7.16.7
      '@babel/helper-function-name': 7.16.7
      '@babel/helper-optimise-call-expression': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/helper-replace-supers': 7.16.7
      '@babel/helper-split-export-declaration': 7.16.7
      globals: 11.12.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-transform-computed-properties/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-gN72G9bcmenVILj//sv1zLNaPyYcOzUho2lIJBMh/iakJ9ygCo/hEF9cpGb61SCMEDxbbyBoVQxrt+bWKu5KGw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-destructuring/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-VqAwhTHBnu5xBVDCvrvqJbtLUa++qZaWC0Fgr2mqokBlulZARGyIvZDoqbPlPaKImQ9dKAcCzbv+ul//uqu70A==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-dotall-regex/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-Lyttaao2SjZF6Pf4vk1dVKv8YypMpomAbygW+mU5cYP3S5cWTfCJjG8xV6CFdzGFlfWK81IjL9viiTvpb6G7gQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-create-regexp-features-plugin': 7.16.7_@babel+core@7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-duplicate-keys/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-03DvpbRfvWIXyK0/6QiR1KMTWeT6OcQ7tbhjrXyFS02kjuX/mu5Bvnh5SDSWHxyawit2g5aWhKwI86EE7GUnTw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-exponentiation-operator/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-8UYLSlyLgRixQvlYH3J2ekXFHDFLQutdy7FfFAMm3CPZ6q9wHCwnUyiXpQCe3gVVnQlHc5nsuiEVziteRNTXEA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-builder-binary-assignment-operator-visitor': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-flow-strip-types/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-mzmCq3cNsDpZZu9FADYYyfZJIOrSONmHcop2XEKPdBNMa4PDC4eEvcOvzZaCNcjKu72v0XQlA5y1g58aLRXdYg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/plugin-syntax-flow': 7.16.7_@babel+core@7.16.7
    dev: true

  /@babel/plugin-transform-for-of/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-/QZm9W92Ptpw7sjI9Nx1mbcsWz33+l8kuMIQnDwgQBG5s3fAfQvkRjQ7NqXhtNcKOnPkdICmUHyCaWW06HCsqg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-function-name/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-SU/C68YVwTRxqWj5kgsbKINakGag0KTgq9f2iZEXdStoAbOzLHEBRYzImmA6yFo8YZhJVflvXmIHUO7GWHmxxA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-compilation-targets': 7.16.7_@babel+core@7.16.7
      '@babel/helper-function-name': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-literals/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-6tH8RTpTWI0s2sV6uq3e/C9wPo4PTqqZps4uF0kzQ9/xPLFQtipynvmT1g/dOfEJ+0EQsHhkQ/zyRId8J2b8zQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-member-expression-literals/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-mBruRMbktKQwbxaJof32LT9KLy2f3gH+27a5XSuXo6h7R3vqltl0PgZ80C8ZMKw98Bf8bqt6BEVi3svOh2PzMw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-modules-amd/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-KaaEtgBL7FKYwjJ/teH63oAmE3lP34N3kshz8mm4VMAw7U3PxjVwwUmxEFksbgsNUaO3wId9R2AVQYSEGRa2+g==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-module-transforms': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      babel-plugin-dynamic-import-node: 2.3.3
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-transform-modules-commonjs/7.16.8_@babel+core@7.16.7:
    resolution: {integrity: sha512-oflKPvsLT2+uKQopesJt3ApiaIS2HW+hzHFcwRNtyDGieAeC/dIHZX8buJQ2J2X1rxGPy4eRcUijm3qcSPjYcA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-module-transforms': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/helper-simple-access': 7.16.7
      babel-plugin-dynamic-import-node: 2.3.3
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-transform-modules-systemjs/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-DuK5E3k+QQmnOqBR9UkusByy5WZWGRxfzV529s9nPra1GE7olmxfqO2FHobEOYSPIjPBTr4p66YDcjQnt8cBmw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-hoist-variables': 7.16.7
      '@babel/helper-module-transforms': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/helper-validator-identifier': 7.16.7
      babel-plugin-dynamic-import-node: 2.3.3
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-transform-modules-umd/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-EMh7uolsC8O4xhudF2F6wedbSHm1HHZ0C6aJ7K67zcDNidMzVcxWdGr+htW9n21klm+bOn+Rx4CBsAntZd3rEQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-module-transforms': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-transform-named-capturing-groups-regex/7.16.8_@babel+core@7.16.7:
    resolution: {integrity: sha512-j3Jw+n5PvpmhRR+mrgIh04puSANCk/T/UA3m3P1MjJkhlK906+ApHhDIqBQDdOgL/r1UYpz4GNclTXxyZrYGSw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-create-regexp-features-plugin': 7.16.7_@babel+core@7.16.7
    dev: true

  /@babel/plugin-transform-new-target/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-xiLDzWNMfKoGOpc6t3U+etCE2yRnn3SM09BXqWPIZOBpL2gvVrBWUKnsJx0K/ADi5F5YC5f8APFfWrz25TdlGg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-object-super/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-14J1feiQVWaGvRxj2WjyMuXS2jsBkgB3MdSN5HuC2G5nRspa5RK9COcs82Pwy5BuGcjb+fYaUj94mYcOj7rCvw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/helper-replace-supers': 7.16.7
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-transform-parameters/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-AT3MufQ7zZEhU2hwOA11axBnExW0Lszu4RL/tAlUJBuNoRak+wehQW8h6KcXOcgjY42fHtDxswuMhMjFEuv/aw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-property-literals/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-z4FGr9NMGdoIl1RqavCqGG+ZuYjfZ/hkCIeuH6Do7tXmSm0ls11nYVSJqFEUOSJbDab5wC6lRE/w6YjVcr6Hqw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-react-display-name/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-qgIg8BcZgd0G/Cz916D5+9kqX0c7nPZyXaP8R2tLNN5tkyIZdG5fEwBrxwplzSnjC1jvQmyMNVwUCZPcbGY7Pg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-react-jsx-development/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-RMvQWvpla+xy6MlBpPlrKZCMRs2AGiHOGHY3xRwl0pEeim348dDyxeH4xBsMPbIMhujeq7ihE702eM2Ew0Wo+A==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/plugin-transform-react-jsx': 7.16.7_@babel+core@7.16.7
    dev: true

  /@babel/plugin-transform-react-jsx-self/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-oe5VuWs7J9ilH3BCCApGoYjHoSO48vkjX2CbA5bFVhIuO2HKxA3vyF7rleA4o6/4rTDbk6r8hBW7Ul8E+UZrpA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-react-jsx-source/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-rONFiQz9vgbsnaMtQlZCjIRwhJvlrPET8TabIUK2hzlXw9B9s2Ieaxte1SCOOXMbWRHodbKixNf3BLcWVOQ8Bw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-react-jsx/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-8D16ye66fxiE8m890w0BpPpngG9o9OVBBy0gH2E+2AR7qMR2ZpTYJEqLxAsoroenMId0p/wMW+Blc0meDgu0Ag==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-annotate-as-pure': 7.16.7
      '@babel/helper-module-imports': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/plugin-syntax-jsx': 7.16.7_@babel+core@7.16.7
      '@babel/types': 7.16.8
    dev: true

  /@babel/plugin-transform-react-pure-annotations/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-hs71ToC97k3QWxswh2ElzMFABXHvGiJ01IB1TbYQDGeWRKWz/MPUTh5jGExdHvosYKpnJW5Pm3S4+TA3FyX+GA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-annotate-as-pure': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-regenerator/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-mF7jOgGYCkSJagJ6XCujSQg+6xC1M77/03K2oBmVJWoFGNUtnVJO4WHKJk3dnPC8HCcj4xBQP1Egm8DWh3Pb3Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      regenerator-transform: 0.14.5
    dev: true

  /@babel/plugin-transform-reserved-words/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-KQzzDnZ9hWQBjwi5lpY5v9shmm6IVG0U9pB18zvMu2i4H90xpT4gmqwPYsn8rObiadYe2M0gmgsiOIF5A/2rtg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-runtime/7.16.8_@babel+core@7.16.7:
    resolution: {integrity: sha512-6Kg2XHPFnIarNweZxmzbgYnnWsXxkx9WQUVk2sksBRL80lBC1RAQV3wQagWxdCHiYHqPN+oenwNIuttlYgIbQQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-module-imports': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      babel-plugin-polyfill-corejs2: 0.3.1_@babel+core@7.16.7
      babel-plugin-polyfill-corejs3: 0.5.1_@babel+core@7.16.7
      babel-plugin-polyfill-regenerator: 0.3.1_@babel+core@7.16.7
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-transform-shorthand-properties/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-hah2+FEnoRoATdIb05IOXf+4GzXYTq75TVhIn1PewihbpyrNWUt2JbudKQOETWw6QpLe+AIUpJ5MVLYTQbeeUg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-spread/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-+pjJpgAngb53L0iaA5gU/1MLXJIfXcYepLgXB3esVRf4fqmj8f2cxM3/FKaHsZms08hFQJkFccEWuIpm429TXg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/helper-skip-transparent-expression-wrappers': 7.16.0
    dev: true

  /@babel/plugin-transform-sticky-regex/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-NJa0Bd/87QV5NZZzTuZG5BPJjLYadeSZ9fO6oOUoL4iQx+9EEuw/eEM92SrsT19Yc2jgB1u1hsjqDtH02c3Drw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-template-literals/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-VwbkDDUeenlIjmfNeDX/V0aWrQH2QiVyJtwymVQSzItFDTpxfyJh3EVaQiS0rIN/CqbLGr0VcGmuwyTdZtdIsA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-typeof-symbol/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-p2rOixCKRJzpg9JB4gjnG4gjWkWa89ZoYUnl9snJ1cWIcTH/hvxZqfO+WjG6T8DRBpctEol5jw1O5rA8gkCokQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-typescript/7.16.8_@babel+core@7.16.7:
    resolution: {integrity: sha512-bHdQ9k7YpBDO2d0NVfkj51DpQcvwIzIusJ7mEUaMlbZq3Kt/U47j24inXZHQ5MDiYpCs+oZiwnXyKedE8+q7AQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-create-class-features-plugin': 7.16.7_@babel+core@7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/plugin-syntax-typescript': 7.16.7_@babel+core@7.16.7
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/plugin-transform-unicode-escapes/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-TAV5IGahIz3yZ9/Hfv35TV2xEm+kaBDaZQCn2S/hG9/CZ0DktxJv9eKfPc7yYCvOYR4JGx1h8C+jcSOvgaaI/Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/plugin-transform-unicode-regex/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-oC5tYYKw56HO75KZVLQ+R/Nl3Hro9kf8iG0hXoaHP7tjAyCpvqBiSNe6vGrZni1Z6MggmUOC6A7VP7AVmw225Q==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-create-regexp-features-plugin': 7.16.7_@babel+core@7.16.7
      '@babel/helper-plugin-utils': 7.16.7
    dev: true

  /@babel/preset-env/7.16.8_@babel+core@7.16.7:
    resolution: {integrity: sha512-9rNKgVCdwHb3z1IlbMyft6yIXIeP3xz6vWvGaLHrJThuEIqWfHb0DNBH9VuTgnDfdbUDhkmkvMZS/YMCtP7Elg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/compat-data': 7.16.8
      '@babel/core': 7.16.7
      '@babel/helper-compilation-targets': 7.16.7_@babel+core@7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/helper-validator-option': 7.16.7
      '@babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-async-generator-functions': 7.16.8_@babel+core@7.16.7
      '@babel/plugin-proposal-class-properties': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-class-static-block': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-dynamic-import': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-export-namespace-from': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-json-strings': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-logical-assignment-operators': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-nullish-coalescing-operator': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-numeric-separator': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-object-rest-spread': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-optional-catch-binding': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-optional-chaining': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-private-methods': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-private-property-in-object': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-unicode-property-regex': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-syntax-async-generators': 7.8.4_@babel+core@7.16.7
      '@babel/plugin-syntax-class-properties': 7.12.13_@babel+core@7.16.7
      '@babel/plugin-syntax-class-static-block': 7.14.5_@babel+core@7.16.7
      '@babel/plugin-syntax-dynamic-import': 7.8.3_@babel+core@7.16.7
      '@babel/plugin-syntax-export-namespace-from': 7.8.3_@babel+core@7.16.7
      '@babel/plugin-syntax-json-strings': 7.8.3_@babel+core@7.16.7
      '@babel/plugin-syntax-logical-assignment-operators': 7.10.4_@babel+core@7.16.7
      '@babel/plugin-syntax-nullish-coalescing-operator': 7.8.3_@babel+core@7.16.7
      '@babel/plugin-syntax-numeric-separator': 7.10.4_@babel+core@7.16.7
      '@babel/plugin-syntax-object-rest-spread': 7.8.3_@babel+core@7.16.7
      '@babel/plugin-syntax-optional-catch-binding': 7.8.3_@babel+core@7.16.7
      '@babel/plugin-syntax-optional-chaining': 7.8.3_@babel+core@7.16.7
      '@babel/plugin-syntax-private-property-in-object': 7.14.5_@babel+core@7.16.7
      '@babel/plugin-syntax-top-level-await': 7.14.5_@babel+core@7.16.7
      '@babel/plugin-transform-arrow-functions': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-async-to-generator': 7.16.8_@babel+core@7.16.7
      '@babel/plugin-transform-block-scoped-functions': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-block-scoping': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-classes': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-computed-properties': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-destructuring': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-dotall-regex': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-duplicate-keys': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-exponentiation-operator': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-for-of': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-function-name': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-literals': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-member-expression-literals': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-modules-amd': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-modules-commonjs': 7.16.8_@babel+core@7.16.7
      '@babel/plugin-transform-modules-systemjs': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-modules-umd': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-named-capturing-groups-regex': 7.16.8_@babel+core@7.16.7
      '@babel/plugin-transform-new-target': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-object-super': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-parameters': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-property-literals': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-regenerator': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-reserved-words': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-shorthand-properties': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-spread': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-sticky-regex': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-template-literals': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-typeof-symbol': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-unicode-escapes': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-unicode-regex': 7.16.7_@babel+core@7.16.7
      '@babel/preset-modules': 0.1.5_@babel+core@7.16.7
      '@babel/types': 7.16.8
      babel-plugin-polyfill-corejs2: 0.3.1_@babel+core@7.16.7
      babel-plugin-polyfill-corejs3: 0.5.1_@babel+core@7.16.7
      babel-plugin-polyfill-regenerator: 0.3.1_@babel+core@7.16.7
      core-js-compat: 3.20.3
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/preset-modules/0.1.5_@babel+core@7.16.7:
    resolution: {integrity: sha512-A57th6YRG7oR3cq/yt/Y84MvGgE0eJG2F1JLhKuyG+jFxEgrd/HAMJatiFtmOiZurz+0DkrvbheCLaV5f2JfjA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/plugin-proposal-unicode-property-regex': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-dotall-regex': 7.16.7_@babel+core@7.16.7
      '@babel/types': 7.16.8
      esutils: 2.0.3
    dev: true

  /@babel/preset-react/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-fWpyI8UM/HE6DfPBzD8LnhQ/OcH8AgTaqcqP2nGOXEUV+VKBR5JRN9hCk9ai+zQQ57vtm9oWeXguBCPNUjytgA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/helper-validator-option': 7.16.7
      '@babel/plugin-transform-react-display-name': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-react-jsx': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-react-jsx-development': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-react-pure-annotations': 7.16.7_@babel+core@7.16.7
    dev: true

  /@babel/preset-typescript/7.16.7_@babel+core@7.16.7:
    resolution: {integrity: sha512-WbVEmgXdIyvzB77AQjGBEyYPZx+8tTsO50XtfozQrkW8QB2rLJpH2lgx0TRw5EJrBxOZQ+wCcyPVQvS8tjEHpQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-plugin-utils': 7.16.7
      '@babel/helper-validator-option': 7.16.7
      '@babel/plugin-transform-typescript': 7.16.8_@babel+core@7.16.7
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/runtime-corejs3/7.16.8:
    resolution: {integrity: sha512-3fKhuICS1lMz0plI5ktOE/yEtBRMVxplzRkdn6mJQ197XiY0JnrzYV0+Mxozq3JZ8SBV9Ecurmw1XsGbwOf+Sg==}
    engines: {node: '>=6.9.0'}
    dependencies:
      core-js-pure: 3.20.3
      regenerator-runtime: 0.13.9
    dev: true

  /@babel/runtime/7.16.7:
    resolution: {integrity: sha512-9E9FJowqAsytyOY6LG+1KuueckRL+aQW+mKvXRXnuFGyRAyepJPmEo9vgMfXUA6O9u3IeEdv9MAkppFcaQwogQ==}
    engines: {node: '>=6.9.0'}
    dependencies:
      regenerator-runtime: 0.13.9

  /@babel/template/7.16.7:
    resolution: {integrity: sha512-I8j/x8kHUrbYRTUxXrrMbfCa7jxkE7tZre39x3kjr9hvI82cK1FfqLygotcWN5kdPGWcLdWMHpSBavse5tWw3w==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/code-frame': 7.16.7
      '@babel/parser': 7.16.8
      '@babel/types': 7.16.8
    dev: true

  /@babel/traverse/7.16.8:
    resolution: {integrity: sha512-xe+H7JlvKsDQwXRsBhSnq1/+9c+LlQcCK3Tn/l5sbx02HYns/cn7ibp9+RV1sIUqu7hKg91NWsgHurO9dowITQ==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/code-frame': 7.16.7
      '@babel/generator': 7.16.8
      '@babel/helper-environment-visitor': 7.16.7
      '@babel/helper-function-name': 7.16.7
      '@babel/helper-hoist-variables': 7.16.7
      '@babel/helper-split-export-declaration': 7.16.7
      '@babel/parser': 7.16.8
      '@babel/types': 7.16.8
      debug: 4.3.3
      globals: 11.12.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@babel/types/7.16.8:
    resolution: {integrity: sha512-smN2DQc5s4M7fntyjGtyIPbRJv6wW4rU/94fmYJ7PKQuZkC0qGMHXJbg6sNGt12JmVr4k5YaptI/XtiLJBnmIg==}
    engines: {node: '>=6.9.0'}
    dependencies:
      '@babel/helper-validator-identifier': 7.16.7
      to-fast-properties: 2.0.0
    dev: true

  /@bcoe/v8-coverage/0.2.3:
    resolution: {integrity: sha512-0hYQ8SB4Db5zvZB4axdMHGwEaQjkZzFjQiN9LVYvIFB2nSUHW9tYpxWriPrWDASIxiaXax83REcLxuSdnGPZtw==}
    dev: true

  /@cspotcode/source-map-consumer/0.8.0:
    resolution: {integrity: sha512-41qniHzTU8yAGbCp04ohlmSrZf8bkf/iJsl3V0dRGsQN/5GFfx+LbCSsCpp2gqrqjTVg/K6O8ycoV35JIwAzAg==}
    engines: {node: '>= 12'}
    dev: true

  /@cspotcode/source-map-support/0.7.0:
    resolution: {integrity: sha512-X4xqRHqN8ACt2aHVe51OxeA2HjbcL4MqFqXkrmQszJ1NOUuUu5u6Vqx/0lZSVNku7velL5FC/s5uEAj1lsBMhA==}
    engines: {node: '>=12'}
    dependencies:
      '@cspotcode/source-map-consumer': 0.8.0
    dev: true

  /@cush/relative/1.0.0:
    resolution: {integrity: sha512-RpfLEtTlyIxeNPGKcokS+p3BZII/Q3bYxryFRglh5H3A3T8q9fsLYm72VYAMEOOIBLEa8o93kFLiBDUWKrwXZA==}
    dev: true

  /@eslint/eslintrc/1.0.5:
    resolution: {integrity: sha512-BLxsnmK3KyPunz5wmCCpqy0YelEoxxGmH73Is+Z74oOTMtExcjkr3dDR6quwrjh1YspA8DH9gnX1o069KiS9AQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    dependencies:
      ajv: 6.12.6
      debug: 4.3.3
      espree: 9.3.0
      globals: 13.12.0
      ignore: 4.0.6
      import-fresh: 3.3.0
      js-yaml: 4.1.0
      minimatch: 3.0.4
      strip-json-comments: 3.1.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@foliojs-fork/fontkit/1.9.1:
    resolution: {integrity: sha512-U589voc2/ROnvx1CyH9aNzOQWJp127JGU1QAylXGQ7LoEAF6hMmahZLQ4eqAcgHUw+uyW4PjtCItq9qudPkK3A==}
    dependencies:
      '@foliojs-fork/restructure': 2.0.2
      brfs: 2.0.2
      brotli: 1.3.2
      browserify-optional: 1.0.1
      clone: 1.0.4
      deep-equal: 1.1.1
      dfa: 1.2.0
      tiny-inflate: 1.0.3
      unicode-properties: 1.3.1
      unicode-trie: 2.0.0
    dev: false

  /@foliojs-fork/linebreak/1.1.1:
    resolution: {integrity: sha512-pgY/+53GqGQI+mvDiyprvPWgkTlVBS8cxqee03ejm6gKAQNsR1tCYCIvN9FHy7otZajzMqCgPOgC4cHdt4JPig==}
    dependencies:
      base64-js: 1.3.1
      brfs: 2.0.2
      unicode-trie: 2.0.0
    dev: false

  /@foliojs-fork/pdfkit/0.12.3:
    resolution: {integrity: sha512-WAMiL5Dp1EdHyuEeVphiqVeFEaccGShS5wLcuOXFF0wlBE5agkvTEk3sJ2OfAn87FaStpkuiaiSKNRexMlNHUA==}
    dependencies:
      '@foliojs-fork/fontkit': 1.9.1
      '@foliojs-fork/linebreak': 1.1.1
      crypto-js: 4.1.1
      png-js: 1.0.0
    dev: false

  /@foliojs-fork/restructure/2.0.2:
    resolution: {integrity: sha512-59SgoZ3EXbkfSX7b63tsou/SDGzwUEK6MuB5sKqgVK1/XE0fxmpsOb9DQI8LXW3KfGnAjImCGhhEb7uPPAUVNA==}
    dev: false

  /@fontsource/inter/4.5.2:
    resolution: {integrity: sha512-4LLfZYr5dRsobtC9JNkATL5OwOqrxs2tF29eNljjogxWXm4tlHxRo4dgOFTlWxQOxcj5Zv7dM8IMiSoOqMGy3g==}
    dev: false

  /@humanwhocodes/config-array/0.9.2:
    resolution: {integrity: sha512-UXOuFCGcwciWckOpmfKDq/GyhlTf9pN/BzG//x8p8zTOFEcGuA68ANXheFS0AGvy3qgZqLBUkMs7hqzqCKOVwA==}
    engines: {node: '>=10.10.0'}
    dependencies:
      '@humanwhocodes/object-schema': 1.2.1
      debug: 4.3.3
      minimatch: 3.0.4
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@humanwhocodes/object-schema/1.2.1:
    resolution: {integrity: sha512-ZnQMnLV4e7hDlUvw8H+U8ASL02SS2Gn6+9Ac3wGGLIe7+je2AeAOxPY+izIPJDfFDb7eDjev0Us8MO1iFRN8hA==}
    dev: true

  /@istanbuljs/load-nyc-config/1.1.0:
    resolution: {integrity: sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==}
    engines: {node: '>=8'}
    dependencies:
      camelcase: 5.3.1
      find-up: 4.1.0
      get-package-type: 0.1.0
      js-yaml: 3.14.1
      resolve-from: 5.0.0
    dev: true

  /@istanbuljs/schema/0.1.3:
    resolution: {integrity: sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA==}
    engines: {node: '>=8'}
    dev: true

  /@jest/console/27.4.6:
    resolution: {integrity: sha512-jauXyacQD33n47A44KrlOVeiXHEXDqapSdfb9kTekOchH/Pd18kBIO1+xxJQRLuG+LUuljFCwTG92ra4NW7SpA==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.4.2
      '@types/node': 14.18.10
      chalk: 4.1.2
      jest-message-util: 27.4.6
      jest-util: 27.4.2
      slash: 3.0.0
    dev: true

  /@jest/core/27.4.7:
    resolution: {integrity: sha512-n181PurSJkVMS+kClIFSX/LLvw9ExSb+4IMtD6YnfxZVerw9ANYtW0bPrm0MJu2pfe9SY9FJ9FtQ+MdZkrZwjg==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true
    dependencies:
      '@jest/console': 27.4.6
      '@jest/reporters': 27.4.6
      '@jest/test-result': 27.4.6
      '@jest/transform': 27.4.6
      '@jest/types': 27.4.2
      '@types/node': 14.18.10
      ansi-escapes: 4.3.2
      chalk: 4.1.2
      emittery: 0.8.1
      exit: 0.1.2
      graceful-fs: 4.2.9
      jest-changed-files: 27.4.2
      jest-config: 27.4.7
      jest-haste-map: 27.4.6
      jest-message-util: 27.4.6
      jest-regex-util: 27.4.0
      jest-resolve: 27.4.6
      jest-resolve-dependencies: 27.4.6
      jest-runner: 27.4.6
      jest-runtime: 27.4.6
      jest-snapshot: 27.4.6
      jest-util: 27.4.2
      jest-validate: 27.4.6
      jest-watcher: 27.4.6
      micromatch: 4.0.4
      rimraf: 3.0.2
      slash: 3.0.0
      strip-ansi: 6.0.1
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - ts-node
      - utf-8-validate
    dev: true

  /@jest/core/27.4.7_ts-node@10.4.0:
    resolution: {integrity: sha512-n181PurSJkVMS+kClIFSX/LLvw9ExSb+4IMtD6YnfxZVerw9ANYtW0bPrm0MJu2pfe9SY9FJ9FtQ+MdZkrZwjg==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true
    dependencies:
      '@jest/console': 27.4.6
      '@jest/reporters': 27.4.6
      '@jest/test-result': 27.4.6
      '@jest/transform': 27.4.6
      '@jest/types': 27.4.2
      '@types/node': 14.18.10
      ansi-escapes: 4.3.2
      chalk: 4.1.2
      emittery: 0.8.1
      exit: 0.1.2
      graceful-fs: 4.2.9
      jest-changed-files: 27.4.2
      jest-config: 27.4.7_ts-node@10.4.0
      jest-haste-map: 27.4.6
      jest-message-util: 27.4.6
      jest-regex-util: 27.4.0
      jest-resolve: 27.4.6
      jest-resolve-dependencies: 27.4.6
      jest-runner: 27.4.6
      jest-runtime: 27.4.6
      jest-snapshot: 27.4.6
      jest-util: 27.4.2
      jest-validate: 27.4.6
      jest-watcher: 27.4.6
      micromatch: 4.0.4
      rimraf: 3.0.2
      slash: 3.0.0
      strip-ansi: 6.0.1
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - ts-node
      - utf-8-validate
    dev: true

  /@jest/environment/27.4.6:
    resolution: {integrity: sha512-E6t+RXPfATEEGVidr84WngLNWZ8ffCPky8RqqRK6u1Bn0LK92INe0MDttyPl/JOzaq92BmDzOeuqk09TvM22Sg==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/fake-timers': 27.4.6
      '@jest/types': 27.4.2
      '@types/node': 14.18.10
      jest-mock: 27.4.6
    dev: true

  /@jest/fake-timers/27.4.6:
    resolution: {integrity: sha512-mfaethuYF8scV8ntPpiVGIHQgS0XIALbpY2jt2l7wb/bvq4Q5pDLk4EP4D7SAvYT1QrPOPVZAtbdGAOOyIgs7A==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.4.2
      '@sinonjs/fake-timers': 8.1.0
      '@types/node': 14.18.10
      jest-message-util: 27.4.6
      jest-mock: 27.4.6
      jest-util: 27.4.2
    dev: true

  /@jest/globals/27.4.6:
    resolution: {integrity: sha512-kAiwMGZ7UxrgPzu8Yv9uvWmXXxsy0GciNejlHvfPIfWkSxChzv6bgTS3YqBkGuHcis+ouMFI2696n2t+XYIeFw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/environment': 27.4.6
      '@jest/types': 27.4.2
      expect: 27.4.6
    dev: true

  /@jest/reporters/27.4.6:
    resolution: {integrity: sha512-+Zo9gV81R14+PSq4wzee4GC2mhAN9i9a7qgJWL90Gpx7fHYkWpTBvwWNZUXvJByYR9tAVBdc8VxDWqfJyIUrIQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true
    dependencies:
      '@bcoe/v8-coverage': 0.2.3
      '@jest/console': 27.4.6
      '@jest/test-result': 27.4.6
      '@jest/transform': 27.4.6
      '@jest/types': 27.4.2
      '@types/node': 14.18.10
      chalk: 4.1.2
      collect-v8-coverage: 1.0.1
      exit: 0.1.2
      glob: 7.2.0
      graceful-fs: 4.2.9
      istanbul-lib-coverage: 3.2.0
      istanbul-lib-instrument: 5.1.0
      istanbul-lib-report: 3.0.0
      istanbul-lib-source-maps: 4.0.1
      istanbul-reports: 3.1.3
      jest-haste-map: 27.4.6
      jest-resolve: 27.4.6
      jest-util: 27.4.2
      jest-worker: 27.4.6
      slash: 3.0.0
      source-map: 0.6.1
      string-length: 4.0.2
      terminal-link: 2.1.1
      v8-to-istanbul: 8.1.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@jest/source-map/27.4.0:
    resolution: {integrity: sha512-Ntjx9jzP26Bvhbm93z/AKcPRj/9wrkI88/gK60glXDx1q+IeI0rf7Lw2c89Ch6ofonB0On/iRDreQuQ6te9pgQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      callsites: 3.1.0
      graceful-fs: 4.2.9
      source-map: 0.6.1
    dev: true

  /@jest/test-result/27.4.6:
    resolution: {integrity: sha512-fi9IGj3fkOrlMmhQqa/t9xum8jaJOOAi/lZlm6JXSc55rJMXKHxNDN1oCP39B0/DhNOa2OMupF9BcKZnNtXMOQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/console': 27.4.6
      '@jest/types': 27.4.2
      '@types/istanbul-lib-coverage': 2.0.4
      collect-v8-coverage: 1.0.1
    dev: true

  /@jest/test-sequencer/27.4.6:
    resolution: {integrity: sha512-3GL+nsf6E1PsyNsJuvPyIz+DwFuCtBdtvPpm/LMXVkBJbdFvQYCDpccYT56qq5BGniXWlE81n2qk1sdXfZebnw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/test-result': 27.4.6
      graceful-fs: 4.2.9
      jest-haste-map: 27.4.6
      jest-runtime: 27.4.6
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@jest/transform/27.4.6:
    resolution: {integrity: sha512-9MsufmJC8t5JTpWEQJ0OcOOAXaH5ioaIX6uHVBLBMoCZPfKKQF+EqP8kACAvCZ0Y1h2Zr3uOccg8re+Dr5jxyw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@babel/core': 7.16.7
      '@jest/types': 27.4.2
      babel-plugin-istanbul: 6.1.1
      chalk: 4.1.2
      convert-source-map: 1.8.0
      fast-json-stable-stringify: 2.1.0
      graceful-fs: 4.2.9
      jest-haste-map: 27.4.6
      jest-regex-util: 27.4.0
      jest-util: 27.4.2
      micromatch: 4.0.4
      pirates: 4.0.4
      slash: 3.0.0
      source-map: 0.6.1
      write-file-atomic: 3.0.3
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@jest/types/27.4.2:
    resolution: {integrity: sha512-j35yw0PMTPpZsUoOBiuHzr1zTYoad1cVIE0ajEjcrJONxxrko/IRGKkXx3os0Nsi4Hu3+5VmDbVfq5WhG/pWAg==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@types/istanbul-lib-coverage': 2.0.4
      '@types/istanbul-reports': 3.0.1
      '@types/node': 14.18.10
      '@types/yargs': 16.0.4
      chalk: 4.1.2
    dev: true

  /@jsii/check-node/1.52.1:
    resolution: {integrity: sha512-B+vpPwXrKTWA1dBHuStp0sg+YpFZ9APjS6qeDiknMHPMatlT7VA0RVk/LmCLaPZhsfNzByJ+zhRFs0R83zTr1Q==}
    engines: {node: '>= 10.3.0'}
    dependencies:
      chalk: 4.1.2
      semver: 7.3.5
    dev: false

  /@mantine/hooks/3.6.5_react@17.0.2:
    resolution: {integrity: sha512-GiSM3n9XnIeuLBNmdG75gAYh6aXn7J6yxvKGLTF1lM/l8ImsUNFVsBe6sNu/yINBQR8X9NZuylAeh/9KMnAO4w==}
    peerDependencies:
      react: '>=16.8.0'
    dependencies:
      react: 17.0.2
    dev: false

  /@nodelib/fs.scandir/2.1.5:
    resolution: {integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==}
    engines: {node: '>= 8'}
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      run-parallel: 1.2.0
    dev: true

  /@nodelib/fs.stat/2.0.5:
    resolution: {integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==}
    engines: {node: '>= 8'}
    dev: true

  /@nodelib/fs.walk/1.2.8:
    resolution: {integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==}
    engines: {node: '>= 8'}
    dependencies:
      '@nodelib/fs.scandir': 2.1.5
      fastq: 1.13.0
    dev: true

  /@radix-ui/colors/0.1.8:
    resolution: {integrity: sha512-jwRMXYwC0hUo0mv6wGpuw254Pd9p/R6Td5xsRpOmaWkUHlooNWqVcadgyzlRumMq3xfOTXwJReU0Jv+EIy4Jbw==}
    dev: false

  /@radix-ui/number/0.1.0:
    resolution: {integrity: sha512-rpf6QiOWLHAkM4FEMYu9i+5Jr8cKT893+R4mPpcdsy4LD7omr9JfdOqj/h/xPA5+EcVrpMMlU6rrRYpUB5UI8g==}
    dependencies:
      '@babel/runtime': 7.16.7
    dev: false

  /@radix-ui/popper/0.1.0:
    resolution: {integrity: sha512-uzYeElL3w7SeNMuQpXiFlBhTT+JyaNMCwDfjKkrzugEcYrf5n52PHqncNdQPUtR42hJh8V9FsqyEDbDxkeNjJQ==}
    dependencies:
      '@babel/runtime': 7.16.7
      csstype: 3.0.10
    dev: false

  /@radix-ui/primitive/0.1.0:
    resolution: {integrity: sha512-tqxZKybwN5Fa3VzZry4G6mXAAb9aAqKmPtnVbZpL0vsBwvOHTBwsjHVPXylocYLwEtBY9SCe665bYnNB515uoA==}
    dependencies:
      '@babel/runtime': 7.16.7
    dev: false

  /@radix-ui/react-accordion/0.1.1_react@17.0.2:
    resolution: {integrity: sha512-FGxV2QcCtQRBmcGle5TppSDcIzTgecLoXL7G5yM/YJVdcW+cw4LqPF2VnHcjIv2BGvvHi9087abp9jQxoJzUNA==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/primitive': 0.1.0
      '@radix-ui/react-collapsible': 0.1.1_react@17.0.2
      '@radix-ui/react-compose-refs': 0.1.0_react@17.0.2
      '@radix-ui/react-context': 0.1.1_react@17.0.2
      '@radix-ui/react-id': 0.1.1_react@17.0.2
      '@radix-ui/react-primitive': 0.1.1_react@17.0.2
      '@radix-ui/react-use-controllable-state': 0.1.0_react@17.0.2
      react: 17.0.2
    dev: false

  /@radix-ui/react-arrow/0.1.1_react@17.0.2:
    resolution: {integrity: sha512-layhfVIJE/mahiHUi9YZ/k2Of41TO20y1kEynUEq3j+KLUy/pi0mjb+jrPYRqmlznEl8/jye2jwilyGs2Uyx/g==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/react-primitive': 0.1.1_react@17.0.2
      react: 17.0.2
    dev: false

  /@radix-ui/react-collapsible/0.1.1_react@17.0.2:
    resolution: {integrity: sha512-GIiCo8wYz53ZZEbp4LOkSysK8B+gZSi8/X/5NotBvyZpKntnf93i+NXPmtPPr+l0uPBr4EnEG1aZnItnrJpSEQ==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/primitive': 0.1.0
      '@radix-ui/react-compose-refs': 0.1.0_react@17.0.2
      '@radix-ui/react-context': 0.1.1_react@17.0.2
      '@radix-ui/react-id': 0.1.1_react@17.0.2
      '@radix-ui/react-presence': 0.1.1_react@17.0.2
      '@radix-ui/react-primitive': 0.1.1_react@17.0.2
      '@radix-ui/react-use-controllable-state': 0.1.0_react@17.0.2
      '@radix-ui/react-use-layout-effect': 0.1.0_react@17.0.2
      react: 17.0.2
    dev: false

  /@radix-ui/react-collection/0.1.1_react@17.0.2:
    resolution: {integrity: sha512-WabFzfkvG1uCMHVQd8V++W6qnDqvr+QrbCAXhzzWheKbiXSrwsvA2lTthMn1L6aPn1wyXlX56Xvbzz7Z3nOJAQ==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/react-compose-refs': 0.1.0_react@17.0.2
      '@radix-ui/react-context': 0.1.1_react@17.0.2
      '@radix-ui/react-primitive': 0.1.1_react@17.0.2
      '@radix-ui/react-slot': 0.1.1_react@17.0.2
      react: 17.0.2
    dev: false

  /@radix-ui/react-compose-refs/0.1.0_react@17.0.2:
    resolution: {integrity: sha512-eyclbh+b77k+69Dk72q3694OHrn9B3QsoIRx7ywX341U9RK1ThgQjMFZoPtmZNQTksXHLNEiefR8hGVeFyInGg==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      react: 17.0.2
    dev: false

  /@radix-ui/react-context/0.1.1_react@17.0.2:
    resolution: {integrity: sha512-PkyVX1JsLBioeu0jB9WvRpDBBLtLZohVDT3BB5CTSJqActma8S8030P57mWZb4baZifMvN7KKWPAA40UmWKkQg==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      react: 17.0.2
    dev: false

  /@radix-ui/react-dismissable-layer/0.1.1_react@17.0.2:
    resolution: {integrity: sha512-OrwRfYE3dqX6nbCnAcIaxsTg6QrLu/HT1GwzxpX0Mbx+AxFNBvE6czBTM5/a7D1CfK8jxORNZ/WsjoOTLudY+A==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/primitive': 0.1.0
      '@radix-ui/react-context': 0.1.1_react@17.0.2
      '@radix-ui/react-primitive': 0.1.1_react@17.0.2
      '@radix-ui/react-use-body-pointer-events': 0.1.0_react@17.0.2
      '@radix-ui/react-use-callback-ref': 0.1.0_react@17.0.2
      '@radix-ui/react-use-escape-keydown': 0.1.0_react@17.0.2
      react: 17.0.2
    dev: false

  /@radix-ui/react-dropdown-menu/0.1.1_b8fdba992ce7d797017dc07106486496:
    resolution: {integrity: sha512-YxnGI/SpukCYFMzP8ZbOeaaba7tVv3YNmEOaUK8lymVm2mOb+bKpjYWgvm0DMHgkhvLAU1tcb18CDEjSaQnyfQ==}
    peerDependencies:
      react: ^16.8 || ^17.0
      react-dom: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/primitive': 0.1.0
      '@radix-ui/react-compose-refs': 0.1.0_react@17.0.2
      '@radix-ui/react-context': 0.1.1_react@17.0.2
      '@radix-ui/react-id': 0.1.1_react@17.0.2
      '@radix-ui/react-menu': 0.1.1_b8fdba992ce7d797017dc07106486496
      '@radix-ui/react-primitive': 0.1.1_react@17.0.2
      '@radix-ui/react-use-controllable-state': 0.1.0_react@17.0.2
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
    transitivePeerDependencies:
      - '@types/react'
    dev: false

  /@radix-ui/react-focus-guards/0.1.0_react@17.0.2:
    resolution: {integrity: sha512-kRx/swAjEfBpQ3ns7J3H4uxpXuWCqN7MpALiSDOXiyo2vkWv0L9sxvbpZeTulINuE3CGMzicVMuNc/VWXjFKOg==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      react: 17.0.2
    dev: false

  /@radix-ui/react-focus-scope/0.1.1_react@17.0.2:
    resolution: {integrity: sha512-0b9MwvHwhuIhD46lrf4G2j53/oYzPa2hN9Ylu+4Jg0Qa0kW04/vpKCX2Gh8M8fTlI0YaGVQsN40sYc5fe8RBSA==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/react-compose-refs': 0.1.0_react@17.0.2
      '@radix-ui/react-primitive': 0.1.1_react@17.0.2
      '@radix-ui/react-use-callback-ref': 0.1.0_react@17.0.2
      react: 17.0.2
    dev: false

  /@radix-ui/react-id/0.1.1_react@17.0.2:
    resolution: {integrity: sha512-Vlg5me65+NUgxPBuA0Lk6FerNe+Mq4EuJ8xzpskGxS2t8p1puI3IkyLZ2wWtDSb1KXazoaHn8adBypagt+1P0g==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/react-context': 0.1.1_react@17.0.2
      react: 17.0.2
    dev: false

  /@radix-ui/react-menu/0.1.1_b8fdba992ce7d797017dc07106486496:
    resolution: {integrity: sha512-j9ptTx6aNYbuc7ygNzl8ou5z010HLXgEKZQE5EAiTrdTOCrwullDDLvQR1M0+VGYQkfRvD5Y1MnJEp6ISQDEVg==}
    peerDependencies:
      react: ^16.8 || ^17.0
      react-dom: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/primitive': 0.1.0
      '@radix-ui/react-collection': 0.1.1_react@17.0.2
      '@radix-ui/react-compose-refs': 0.1.0_react@17.0.2
      '@radix-ui/react-context': 0.1.1_react@17.0.2
      '@radix-ui/react-dismissable-layer': 0.1.1_react@17.0.2
      '@radix-ui/react-focus-guards': 0.1.0_react@17.0.2
      '@radix-ui/react-focus-scope': 0.1.1_react@17.0.2
      '@radix-ui/react-id': 0.1.1_react@17.0.2
      '@radix-ui/react-popper': 0.1.1_react@17.0.2
      '@radix-ui/react-portal': 0.1.1_react-dom@17.0.2+react@17.0.2
      '@radix-ui/react-presence': 0.1.1_react@17.0.2
      '@radix-ui/react-primitive': 0.1.1_react@17.0.2
      '@radix-ui/react-roving-focus': 0.1.1_react@17.0.2
      '@radix-ui/react-use-callback-ref': 0.1.0_react@17.0.2
      '@radix-ui/react-use-direction': 0.1.0_react@17.0.2
      aria-hidden: 1.1.3
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      react-remove-scroll: 2.4.3_a0c521d4794c7ad97f5f4c1c4a7d5818
    transitivePeerDependencies:
      - '@types/react'
    dev: false

  /@radix-ui/react-popper/0.1.1_react@17.0.2:
    resolution: {integrity: sha512-LsjeV9MEdikDHi+uBvMpPyLHrDa7A8UlX2s7c9GPgqU9non7kjcijO4NERaoXvhEu6E7NTqApb5axhZxB23R4w==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/popper': 0.1.0
      '@radix-ui/react-arrow': 0.1.1_react@17.0.2
      '@radix-ui/react-compose-refs': 0.1.0_react@17.0.2
      '@radix-ui/react-context': 0.1.1_react@17.0.2
      '@radix-ui/react-primitive': 0.1.1_react@17.0.2
      '@radix-ui/react-use-rect': 0.1.1_react@17.0.2
      '@radix-ui/react-use-size': 0.1.0_react@17.0.2
      '@radix-ui/rect': 0.1.1
      react: 17.0.2
    dev: false

  /@radix-ui/react-portal/0.1.1_react-dom@17.0.2+react@17.0.2:
    resolution: {integrity: sha512-ZJFgUBsaFS4cryONfRZXuYxtv87ziRGqFu+wP91rVKF8TpkeQgvPP2QBLIfIGzotr3G1n8t7gHaNJkZtKVeXvw==}
    peerDependencies:
      react: ^16.8 || ^17.0
      react-dom: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/react-primitive': 0.1.1_react@17.0.2
      '@radix-ui/react-use-layout-effect': 0.1.0_react@17.0.2
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
    dev: false

  /@radix-ui/react-presence/0.1.1_react@17.0.2:
    resolution: {integrity: sha512-LsL+NcWDpFUAYCmXeH02o4pgqcSLpwxP84UIjCtpIKrsPe2vLuhcp79KC/jZJeXz+of2lUpMAxpM+eCpxFZtlg==}
    peerDependencies:
      react: '>=16.8'
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/react-compose-refs': 0.1.0_react@17.0.2
      '@radix-ui/react-use-layout-effect': 0.1.0_react@17.0.2
      react: 17.0.2
    dev: false

  /@radix-ui/react-primitive/0.1.1_react@17.0.2:
    resolution: {integrity: sha512-65GCHeDV/ikicXKR2rLSO6w+dyUQwSG2J1JD2qm4suK1259nTuRvPsPBrbhZpoXWQKj2drMZfhhclXVfzwW1Kw==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/react-slot': 0.1.1_react@17.0.2
      react: 17.0.2
    dev: false

  /@radix-ui/react-roving-focus/0.1.1_react@17.0.2:
    resolution: {integrity: sha512-JK60DVpLjn0RsvJ4DnmuKTJGHuqfBID0/xaJ9tTM5DZ9WqHHhMBtaAi+68yZLSfTfQFajXjN7vaKD3UtmAmavA==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/primitive': 0.1.0
      '@radix-ui/react-collection': 0.1.1_react@17.0.2
      '@radix-ui/react-compose-refs': 0.1.0_react@17.0.2
      '@radix-ui/react-context': 0.1.1_react@17.0.2
      '@radix-ui/react-id': 0.1.1_react@17.0.2
      '@radix-ui/react-primitive': 0.1.1_react@17.0.2
      '@radix-ui/react-use-callback-ref': 0.1.0_react@17.0.2
      '@radix-ui/react-use-controllable-state': 0.1.0_react@17.0.2
      react: 17.0.2
    dev: false

  /@radix-ui/react-slider/0.1.1_react@17.0.2:
    resolution: {integrity: sha512-4OK46wlX2BmVsYbVYw3gml6CitQSTohkOP6mJEXVVlGAAJXgRWt5GmC35cMNpQFdmmQ5vj1oqTEDEB/8dZAQEA==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/number': 0.1.0
      '@radix-ui/primitive': 0.1.0
      '@radix-ui/react-collection': 0.1.1_react@17.0.2
      '@radix-ui/react-compose-refs': 0.1.0_react@17.0.2
      '@radix-ui/react-context': 0.1.1_react@17.0.2
      '@radix-ui/react-primitive': 0.1.1_react@17.0.2
      '@radix-ui/react-use-controllable-state': 0.1.0_react@17.0.2
      '@radix-ui/react-use-direction': 0.1.0_react@17.0.2
      '@radix-ui/react-use-layout-effect': 0.1.0_react@17.0.2
      '@radix-ui/react-use-previous': 0.1.0_react@17.0.2
      '@radix-ui/react-use-size': 0.1.0_react@17.0.2
      react: 17.0.2
    dev: false

  /@radix-ui/react-slot/0.1.1_react@17.0.2:
    resolution: {integrity: sha512-deq3K7cCXQ+tWMZF2GKl3zGMcwVbyQDiMY/UcPI0Q1DDudRG2dWrEwcYbYajEelc07oOxzNyKpaXZLOpNxquuA==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/react-compose-refs': 0.1.0_react@17.0.2
      react: 17.0.2
    dev: false

  /@radix-ui/react-tabs/0.1.1_react@17.0.2:
    resolution: {integrity: sha512-JCIquq7yBwteL1/iepc++hVyH5EnSicDXLrU4IrIkCy6W+RKi73htx6K7nRpinhaQL22MbTLDYXo9Rr9X/5bjg==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/primitive': 0.1.0
      '@radix-ui/react-context': 0.1.1_react@17.0.2
      '@radix-ui/react-id': 0.1.1_react@17.0.2
      '@radix-ui/react-primitive': 0.1.1_react@17.0.2
      '@radix-ui/react-roving-focus': 0.1.1_react@17.0.2
      '@radix-ui/react-use-callback-ref': 0.1.0_react@17.0.2
      '@radix-ui/react-use-controllable-state': 0.1.0_react@17.0.2
      react: 17.0.2
    dev: false

  /@radix-ui/react-use-body-pointer-events/0.1.0_react@17.0.2:
    resolution: {integrity: sha512-svPyoHCcwOq/vpWNEvdH/yD91vN9p8BtiozNQbjVmJRxQ/vS12zqk70AxTGWe+2ZKHq2sggpEQNTv1JHyVFlnQ==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/react-use-layout-effect': 0.1.0_react@17.0.2
      react: 17.0.2
    dev: false

  /@radix-ui/react-use-callback-ref/0.1.0_react@17.0.2:
    resolution: {integrity: sha512-Va041McOFFl+aV+sejvl0BS2aeHx86ND9X/rVFmEFQKTXCp6xgUK0NGUAGcgBlIjnJSbMYPGEk1xKSSlVcN2Aw==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      react: 17.0.2
    dev: false

  /@radix-ui/react-use-controllable-state/0.1.0_react@17.0.2:
    resolution: {integrity: sha512-zv7CX/PgsRl46a52Tl45TwqwVJdmqnlQEQhaYMz/yBOD2sx2gCkCFSoF/z9mpnYWmS6DTLNTg5lIps3fV6EnXg==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/react-use-callback-ref': 0.1.0_react@17.0.2
      react: 17.0.2
    dev: false

  /@radix-ui/react-use-direction/0.1.0_react@17.0.2:
    resolution: {integrity: sha512-NajpY/An9TCPSfOVkgWIdXJV+VuWl67PxB6kOKYmtNAFHvObzIoh8o0n9sAuwSAyFCZVq211FEf9gvVDRhOyiA==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      react: 17.0.2
    dev: false

  /@radix-ui/react-use-escape-keydown/0.1.0_react@17.0.2:
    resolution: {integrity: sha512-tDLZbTGFmvXaazUXXv8kYbiCcbAE8yKgng9s95d8fCO+Eundv0Jngbn/hKPhDDs4jj9ChwRX5cDDnlaN+ugYYQ==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/react-use-callback-ref': 0.1.0_react@17.0.2
      react: 17.0.2
    dev: false

  /@radix-ui/react-use-layout-effect/0.1.0_react@17.0.2:
    resolution: {integrity: sha512-+wdeS51Y+E1q1Wmd+1xSSbesZkpVj4jsg0BojCbopWvgq5iBvixw5vgemscdh58ep98BwUbsFYnrywFhV9yrVg==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      react: 17.0.2
    dev: false

  /@radix-ui/react-use-previous/0.1.0_react@17.0.2:
    resolution: {integrity: sha512-0fxNc33rYnCzDMPSiSnfS8YklnxQo8WqbAQXPAgIaaA1jRu2qFB916PL4qCIW+avcAAqFD38vWhqDqcVmBharA==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      react: 17.0.2
    dev: false

  /@radix-ui/react-use-rect/0.1.1_react@17.0.2:
    resolution: {integrity: sha512-kHNNXAsP3/PeszEmM/nxBBS9Jbo93sO+xuMTcRfwzXsmxT5gDXQzAiKbZQ0EecCPtJIzqvr7dlaQi/aP1PKYqQ==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      '@radix-ui/rect': 0.1.1
      react: 17.0.2
    dev: false

  /@radix-ui/react-use-size/0.1.0_react@17.0.2:
    resolution: {integrity: sha512-TcZAsR+BYI46w/RbaSFCRACl+Jh6mDqhu6GS2r0iuJpIVrj8atff7qtTjmMmfGtEDNEjhl7DxN3pr1nTS/oruQ==}
    peerDependencies:
      react: ^16.8 || ^17.0
    dependencies:
      '@babel/runtime': 7.16.7
      react: 17.0.2
    dev: false

  /@radix-ui/rect/0.1.1:
    resolution: {integrity: sha512-g3hnE/UcOg7REdewduRPAK88EPuLZtaq7sA9ouu8S+YEtnyFRI16jgv6GZYe3VMoQLL1T171ebmEPtDjyxWLzw==}
    dependencies:
      '@babel/runtime': 7.16.7
    dev: false

  /@rollup/pluginutils/4.1.2:
    resolution: {integrity: sha512-ROn4qvkxP9SyPeHaf7uQC/GPFY6L/OWy9+bd9AwcjOAWQwxRscoEyAUD8qCY5o5iL4jqQwoLk2kaTKJPb/HwzQ==}
    engines: {node: '>= 8.0.0'}
    dependencies:
      estree-walker: 2.0.2
      picomatch: 2.3.1
    dev: true

  /@rushstack/eslint-patch/1.1.0:
    resolution: {integrity: sha512-JLo+Y592QzIE+q7Dl2pMUtt4q8SKYI5jDrZxrozEQxnGVOyYE+GWK9eLkwTaeN9DDctlaRAQ3TBmzZ1qdLE30A==}
    dev: true

  /@sinonjs/commons/1.8.3:
    resolution: {integrity: sha512-xkNcLAn/wZaX14RPlwizcKicDk9G3F8m2nU3L7Ukm5zBgTwiT0wsoFAHx9Jq56fJA1z/7uKGtCRu16sOUCLIHQ==}
    dependencies:
      type-detect: 4.0.8

  /@sinonjs/fake-timers/8.1.0:
    resolution: {integrity: sha512-OAPJUAtgeINhh/TAlUID4QTs53Njm7xzddaVlEs/SXwgtiD1tW22zAB/W1wdqfrpmikgaWQ9Fw6Ws+hsiRm5Vg==}
    dependencies:
      '@sinonjs/commons': 1.8.3
    dev: true

  /@sinonjs/formatio/3.2.2:
    resolution: {integrity: sha512-B8SEsgd8gArBLMD6zpRw3juQ2FVSsmdd7qlevyDqzS9WTCtvF55/gAL+h6gue8ZvPYcdiPdvueM/qm//9XzyTQ==}
    dependencies:
      '@sinonjs/commons': 1.8.3
      '@sinonjs/samsam': 3.3.3
    dev: false

  /@sinonjs/samsam/3.3.3:
    resolution: {integrity: sha512-bKCMKZvWIjYD0BLGnNrxVuw4dkWCYsLqFOUWw8VgKF/+5Y+mE7LfHWPIYoDXowH+3a9LsWDMo0uAP8YDosPvHQ==}
    dependencies:
      '@sinonjs/commons': 1.8.3
      array-from: 2.1.1
      lodash: 4.17.21
    dev: false

  /@sinonjs/text-encoding/0.7.1:
    resolution: {integrity: sha512-+iTbntw2IZPb/anVDbypzfQa+ay64MW0Zo8aJ8gZPWMMK6/OubMVb6lUPMagqjOPnmtauXnFCACVl3O7ogjeqQ==}
    dev: false

  /@stitches/react/1.2.6_react@17.0.2:
    resolution: {integrity: sha512-gRVITYj8W4jJmoiVxWDv72yCvd12VvtUUAnTzs07EqmtvGCVgKZu3Dx0x5KVCcb0b6tfgvvNH2L84YrzdM4Mag==}
    peerDependencies:
      react: '>= 16.3.0'
    dependencies:
      react: 17.0.2
    dev: false

  /@tootallnate/once/1.1.2:
    resolution: {integrity: sha512-RbzJvlNzmRq5c3O09UipeuXno4tA1FE6ikOjxZK0tuxVv3412l64l5t1W5pj4+rJq9vpkm/kwiR07aZXnsKPxw==}
    engines: {node: '>= 6'}

  /@tsconfig/node10/1.0.8:
    resolution: {integrity: sha512-6XFfSQmMgq0CFLY1MslA/CPUfhIL919M1rMsa5lP2P097N2Wd1sSX0tx1u4olM16fLNhtHZpRhedZJphNJqmZg==}
    dev: true

  /@tsconfig/node12/1.0.9:
    resolution: {integrity: sha512-/yBMcem+fbvhSREH+s14YJi18sp7J9jpuhYByADT2rypfajMZZN4WQ6zBGgBKp53NKmqI36wFYDb3yaMPurITw==}
    dev: true

  /@tsconfig/node14/1.0.1:
    resolution: {integrity: sha512-509r2+yARFfHHE7T6Puu2jjkoycftovhXRqW328PDXTVGKihlb1P8Z9mMZH04ebyajfRY7dedfGynlrFHJUQCg==}
    dev: true

  /@tsconfig/node16/1.0.2:
    resolution: {integrity: sha512-eZxlbI8GZscaGS7kkc/trHTT5xgrjH3/1n2JDwusC9iahPKWMRvRjJSAN5mCXviuTGQ/lHnhvv8Q1YTpnfz9gA==}
    dev: true

  /@types/aws-lambda/8.10.92:
    resolution: {integrity: sha512-dB14TltT1SNq73z3MaZfKyyBZ37NAgAFl8jze59bisR4fJ6pB6AYGxItHFkooZbN7UcVJX/cFudM4p8wp1W4rA==}
    dev: true

  /@types/babel__core/7.1.18:
    resolution: {integrity: sha512-S7unDjm/C7z2A2R9NzfKCK1I+BAALDtxEmsJBwlB3EzNfb929ykjL++1CK9LO++EIp2fQrC8O+BwjKvz6UeDyQ==}
    dependencies:
      '@babel/parser': 7.16.8
      '@babel/types': 7.16.8
      '@types/babel__generator': 7.6.4
      '@types/babel__template': 7.4.1
      '@types/babel__traverse': 7.14.2
    dev: true

  /@types/babel__generator/7.6.4:
    resolution: {integrity: sha512-tFkciB9j2K755yrTALxD44McOrk+gfpIpvC3sxHjRawj6PfnQxrse4Clq5y/Rq+G3mrBurMax/lG8Qn2t9mSsg==}
    dependencies:
      '@babel/types': 7.16.8
    dev: true

  /@types/babel__template/7.4.1:
    resolution: {integrity: sha512-azBFKemX6kMg5Io+/rdGT0dkGreboUVR0Cdm3fz9QJWpaQGJRQXl7C+6hOTCZcMll7KFyEQpgbYI2lHdsS4U7g==}
    dependencies:
      '@babel/parser': 7.16.8
      '@babel/types': 7.16.8
    dev: true

  /@types/babel__traverse/7.14.2:
    resolution: {integrity: sha512-K2waXdXBi2302XUdcHcR1jCeU0LL4TD9HRs/gk0N2Xvrht+G/BfJa4QObBQZfhMdxiCpV3COl5Nfq4uKTeTnJA==}
    dependencies:
      '@babel/types': 7.16.8
    dev: true

  /@types/cookie/0.3.3:
    resolution: {integrity: sha512-LKVP3cgXBT9RYj+t+9FDKwS5tdI+rPBXaNSkma7hvqy35lc7mAokC2zsqWJH0LaqIt3B962nuYI77hsJoT1gow==}
    dev: false

  /@types/d3-array/2.12.3:
    resolution: {integrity: sha512-hN879HLPTVqZV3FQEXy7ptt083UXwguNbnxdTGzVW4y4KjX5uyNKljrQixZcSJfLyFirbpUokxpXtvR+N5+KIg==}
    dev: false

  /@types/d3-axis/2.1.3:
    resolution: {integrity: sha512-QjXjwZ0xzyrW2ndkmkb09ErgWDEYtbLBKGui73QLMFm3woqWpxptfD5Y7vqQdybMcu7WEbjZ5q+w2w5+uh2IjA==}
    dependencies:
      '@types/d3-selection': 2.0.1
    dev: false

  /@types/d3-brush/2.1.2:
    resolution: {integrity: sha512-DnZmjdK1ycX1CMiW9r5E3xSf1tL+bp3yob1ON8bf0xB0/odfmGXeYOTafU+2SmU1F0/dvcqaO4SMjw62onOu6A==}
    dependencies:
      '@types/d3-selection': 2.0.1
    dev: false

  /@types/d3-chord/2.0.3:
    resolution: {integrity: sha512-koIqSNQLPRQPXt7c55hgRF6Lr9Ps72r1+Biv55jdYR+SHJ463MsB2lp4ktzttFNmrQw/9yWthf/OmSUj5dNXKw==}
    dev: false

  /@types/d3-color/2.0.3:
    resolution: {integrity: sha512-+0EtEjBfKEDtH9Rk3u3kLOUXM5F+iZK+WvASPb0MhIZl8J8NUvGeZRwKCXl+P3HkYx5TdU4YtcibpqHkSR9n7w==}
    dev: false

  /@types/d3-contour/2.0.4:
    resolution: {integrity: sha512-WMac1xV/mXAgkgr5dUvzsBV5OrgNZDBDpJk9s3v2SadTqGgDRirKABb2Ek2H1pFlYVH4Oly9XJGnuzxKDduqWA==}
    dependencies:
      '@types/d3-array': 2.12.3
      '@types/geojson': 7946.0.8
    dev: false

  /@types/d3-delaunay/5.3.1:
    resolution: {integrity: sha512-F6itHi2DxdatHil1rJ2yEFUNhejj8+0Acd55LZ6Ggwbdoks0+DxVY2cawNj16sjCBiWvubVlh6eBMVsYRNGLew==}
    dev: false

  /@types/d3-dispatch/2.0.1:
    resolution: {integrity: sha512-eT2K8uG3rXkmRiCpPn0rNrekuSLdBfV83vbTvfZliA5K7dbeaqWS/CBHtJ9SQoF8aDTsWSY4A0RU67U/HcKdJQ==}
    dev: false

  /@types/d3-drag/2.0.2:
    resolution: {integrity: sha512-m9USoFaTgVw2mmE7vLjWTApT9dMxMlql/dl3Gj503x+1a2n6K455iDWydqy2dfCpkUBCoF82yRGDgcSk9FUEyQ==}
    dependencies:
      '@types/d3-selection': 2.0.1
    dev: false

  /@types/d3-dsv/2.0.2:
    resolution: {integrity: sha512-T4aL2ZzaILkLGKbxssipYVRs8334PSR9FQzTGftZbc3jIPGkiXXS7qUCh8/q8UWFzxBZQ92dvR0v7+AM9wL2PA==}
    dev: false

  /@types/d3-ease/2.0.2:
    resolution: {integrity: sha512-29Y73Tg6o6aL+3/S/kEun84m5BO4bjRNau6pMWv9N9rZHcJv/O/07mW6EjqxrePZZS64fj0wiB5LMHr4Jzf3eQ==}
    dev: false

  /@types/d3-fetch/2.0.2:
    resolution: {integrity: sha512-sllsCSWrNdSvzOJWN5RnxkmtvW9pCttONGajSxHX9FUQ9kOkGE391xlz6VDBdZxLnpwjp3I+mipbwsaCjq4m5A==}
    dependencies:
      '@types/d3-dsv': 2.0.2
    dev: false

  /@types/d3-force/2.1.4:
    resolution: {integrity: sha512-1XVRc2QbeUSL1FRVE53Irdz7jY+drTwESHIMVirCwkAAMB/yVC8ezAfx/1Alq0t0uOnphoyhRle1ht5CuPgSJQ==}
    dev: false

  /@types/d3-format/2.0.2:
    resolution: {integrity: sha512-OhQPuTeeMhD9A0Ksqo4q1S9Z1Q57O/t4tTPBxBQxRB4IERnxeoEYLPe72fA/GYpPSUrfKZVOgLHidkxwbzLdJA==}
    dev: false

  /@types/d3-geo/2.0.3:
    resolution: {integrity: sha512-kFwLEMXq1mGJ2Eho7KrOUYvLcc2YTDeKj+kTFt87JlEbRQ0rgo8ZENNb5vTYmZrJ2xL/vVM5M7yqVZGOPH2JFg==}
    dependencies:
      '@types/geojson': 7946.0.8
    dev: false

  /@types/d3-hierarchy/2.0.2:
    resolution: {integrity: sha512-6PlBRwbjUPPt0ZFq/HTUyOAdOF3p73EUYots74lHMUyAVtdFSOS/hAeNXtEIM9i7qRDntuIblXxHGUMb9MuNRA==}
    dev: false

  /@types/d3-interpolate/2.0.2:
    resolution: {integrity: sha512-lElyqlUfIPyWG/cD475vl6msPL4aMU7eJvx1//Q177L8mdXoVPFl1djIESF2FKnc0NyaHvQlJpWwKJYwAhUoCw==}
    dependencies:
      '@types/d3-color': 2.0.3
    dev: false

  /@types/d3-path/1.0.9:
    resolution: {integrity: sha512-NaIeSIBiFgSC6IGUBjZWcscUJEq7vpVu7KthHN8eieTV9d9MqkSOZLH4chq1PmcKy06PNe3axLeKmRIyxJ+PZQ==}
    dev: false

  /@types/d3-path/2.0.1:
    resolution: {integrity: sha512-6K8LaFlztlhZO7mwsZg7ClRsdLg3FJRzIIi6SZXDWmmSJc2x8dd2VkESbLXdk3p8cuvz71f36S0y8Zv2AxqvQw==}
    dev: false

  /@types/d3-polygon/2.0.1:
    resolution: {integrity: sha512-X3XTIwBxlzRIWe4yaD1KsmcfItjSPLTGL04QDyP08jyHDVsnz3+NZJMwtD4vCaTAVpGSjbqS+jrBo8cO2V/xMA==}
    dev: false

  /@types/d3-quadtree/2.0.2:
    resolution: {integrity: sha512-KgWL4jlz8QJJZX01E4HKXJ9FLU94RTuObsAYqsPp8YOAcYDmEgJIQJ+ojZcnKUAnrUb78ik8JBKWas5XZPqJnQ==}
    dev: false

  /@types/d3-random/2.2.1:
    resolution: {integrity: sha512-5vvxn6//poNeOxt1ZwC7QU//dG9QqABjy1T7fP/xmFHY95GnaOw3yABf29hiu5SR1Oo34XcpyHFbzod+vemQjA==}
    dev: false

  /@types/d3-sankey/0.11.2:
    resolution: {integrity: sha512-U6SrTWUERSlOhnpSrgvMX64WblX1AxX6nEjI2t3mLK2USpQrnbwYYK+AS9SwiE7wgYmOsSSKoSdr8aoKBH0HgQ==}
    dependencies:
      '@types/d3-shape': 1.3.8
    dev: false

  /@types/d3-scale-chromatic/2.0.1:
    resolution: {integrity: sha512-3EuZlbPu+pvclZcb1DhlymTWT2W+lYsRKBjvkH2ojDbCWDYavifqu1vYX9WGzlPgCgcS4Alhk1+zapXbGEGylQ==}
    dev: false

  /@types/d3-scale/3.3.2:
    resolution: {integrity: sha512-gGqr7x1ost9px3FvIfUMi5XA/F/yAf4UkUDtdQhpH92XCT0Oa7zkkRzY61gPVJq+DxpHn/btouw5ohWkbBsCzQ==}
    dependencies:
      '@types/d3-time': 2.1.1
    dev: false

  /@types/d3-selection/2.0.1:
    resolution: {integrity: sha512-3mhtPnGE+c71rl/T5HMy+ykg7migAZ4T6gzU0HxpgBFKcasBrSnwRbYV1/UZR6o5fkpySxhWxAhd7yhjj8jL7g==}
    dev: false

  /@types/d3-shape/1.3.8:
    resolution: {integrity: sha512-gqfnMz6Fd5H6GOLYixOZP/xlrMtJms9BaS+6oWxTKHNqPGZ93BkWWupQSCYm6YHqx6h9wjRupuJb90bun6ZaYg==}
    dependencies:
      '@types/d3-path': 1.0.9
    dev: false

  /@types/d3-shape/2.1.3:
    resolution: {integrity: sha512-HAhCel3wP93kh4/rq+7atLdybcESZ5bRHDEZUojClyZWsRuEMo3A52NGYJSh48SxfxEU6RZIVbZL2YFZ2OAlzQ==}
    dependencies:
      '@types/d3-path': 2.0.1
    dev: false

  /@types/d3-time-format/3.0.1:
    resolution: {integrity: sha512-5GIimz5IqaRsdnxs4YlyTZPwAMfALu/wA4jqSiuqgdbCxUZ2WjrnwANqOtoBJQgeaUTdYNfALJO0Yb0YrDqduA==}
    dev: false

  /@types/d3-time/2.1.1:
    resolution: {integrity: sha512-9MVYlmIgmRR31C5b4FVSWtuMmBHh2mOWQYfl7XAYOa8dsnb7iEmUmRSWSFgXFtkjxO65d7hTUHQC+RhR/9IWFg==}
    dev: false

  /@types/d3-timer/2.0.1:
    resolution: {integrity: sha512-TF8aoF5cHcLO7W7403blM7L1T+6NF3XMyN3fxyUolq2uOcFeicG/khQg/dGxiCJWoAcmYulYN7LYSRKO54IXaA==}
    dev: false

  /@types/d3-transition/2.0.2:
    resolution: {integrity: sha512-376TICEykdXOEA9uUIYpjshEkxfGwCPnkHUl8+6gphzKbf5NMnUhKT7wR59Yxrd9wtJ/rmE3SVLx6/8w4eY6Zg==}
    dependencies:
      '@types/d3-selection': 2.0.1
    dev: false

  /@types/d3-zoom/2.0.3:
    resolution: {integrity: sha512-9X9uDYKk2U8w775OHj36s9Q7GkNAnJKGw6+sbkP5DpHSjELwKvTGzEK6+IISYfLpJRL/V3mRXMhgDnnJ5LkwJg==}
    dependencies:
      '@types/d3-interpolate': 2.0.2
      '@types/d3-selection': 2.0.1
    dev: false

  /@types/d3/6.7.5:
    resolution: {integrity: sha512-TUZ6zuT/KIvbHSv81kwAiO5gG5aTuoiLGnWR/KxHJ15Idy/xmGUXaaF5zMG+UMIsndcGlSHTmrvwRgdvZlNKaA==}
    dependencies:
      '@types/d3-array': 2.12.3
      '@types/d3-axis': 2.1.3
      '@types/d3-brush': 2.1.2
      '@types/d3-chord': 2.0.3
      '@types/d3-color': 2.0.3
      '@types/d3-contour': 2.0.4
      '@types/d3-delaunay': 5.3.1
      '@types/d3-dispatch': 2.0.1
      '@types/d3-drag': 2.0.2
      '@types/d3-dsv': 2.0.2
      '@types/d3-ease': 2.0.2
      '@types/d3-fetch': 2.0.2
      '@types/d3-force': 2.1.4
      '@types/d3-format': 2.0.2
      '@types/d3-geo': 2.0.3
      '@types/d3-hierarchy': 2.0.2
      '@types/d3-interpolate': 2.0.2
      '@types/d3-path': 2.0.1
      '@types/d3-polygon': 2.0.1
      '@types/d3-quadtree': 2.0.2
      '@types/d3-random': 2.2.1
      '@types/d3-scale': 3.3.2
      '@types/d3-scale-chromatic': 2.0.1
      '@types/d3-selection': 2.0.1
      '@types/d3-shape': 2.1.3
      '@types/d3-time': 2.1.1
      '@types/d3-time-format': 3.0.1
      '@types/d3-timer': 2.0.1
      '@types/d3-transition': 2.0.2
      '@types/d3-zoom': 2.0.3
    dev: false

  /@types/geojson/7946.0.8:
    resolution: {integrity: sha512-1rkryxURpr6aWP7R786/UQOkJ3PcpQiWkAXBmdWc7ryFWqN6a4xfK7BtjXvFBKO9LjQ+MWQSWxYeZX1OApnArA==}
    dev: false

  /@types/graceful-fs/4.1.5:
    resolution: {integrity: sha512-anKkLmZZ+xm4p8JWBf4hElkM4XR+EZeA2M9BAkkTldmcyDY4mbdIJnRghDJH3Ov5ooY7/UAoENtmdMSkaAd7Cw==}
    dependencies:
      '@types/node': 14.18.10
    dev: true

  /@types/istanbul-lib-coverage/2.0.4:
    resolution: {integrity: sha512-z/QT1XN4K4KYuslS23k62yDIDLwLFkzxOuMplDtObz0+y7VqJCaO2o+SPwHCvLFZh7xazvvoor2tA/hPz9ee7g==}
    dev: true

  /@types/istanbul-lib-report/3.0.0:
    resolution: {integrity: sha512-plGgXAPfVKFoYfa9NpYDAkseG+g6Jr294RqeqcqDixSbU34MZVJRi/P+7Y8GDpzkEwLaGZZOpKIEmeVZNtKsrg==}
    dependencies:
      '@types/istanbul-lib-coverage': 2.0.4
    dev: true

  /@types/istanbul-reports/3.0.1:
    resolution: {integrity: sha512-c3mAZEuK0lvBp8tmuL74XRKn1+y2dcwOUpH7x4WrF6gk1GIgiluDRgMYQtw2OFcBvAJWlt6ASU3tSqxp0Uu0Aw==}
    dependencies:
      '@types/istanbul-lib-report': 3.0.0
    dev: true

  /@types/jest/27.4.0:
    resolution: {integrity: sha512-gHl8XuC1RZ8H2j5sHv/JqsaxXkDDM9iDOgu0Wp8sjs4u/snb2PVehyWXJPr+ORA0RPpgw231mnutWI1+0hgjIQ==}
    dependencies:
      jest-diff: 27.4.6
      pretty-format: 27.4.6
    dev: true

  /@types/json-schema/7.0.9:
    resolution: {integrity: sha512-qcUXuemtEu+E5wZSJHNxUXeCZhAfXKQ41D+duX+VYPde7xyEVZci+/oXKJL13tnRs9lR2pr4fod59GT6/X1/yQ==}
    dev: true

  /@types/json5/0.0.29:
    resolution: {integrity: sha1-7ihweulOEdK4J7y+UnC86n8+ce4=}
    dev: true

  /@types/node/10.17.60:
    resolution: {integrity: sha512-F0KIgDJfy2nA3zMLmWGKxcH2ZVEtCZXHHdOQs2gSaQ27+lNeEfGxzkIw90aXswATX7AZ33tahPbzy6KAfUreVw==}
    dev: false

  /@types/node/14.18.10:
    resolution: {integrity: sha512-6iihJ/Pp5fsFJ/aEDGyvT4pHGmCpq7ToQ/yf4bl5SbVAvwpspYJ+v3jO7n8UyjhQVHTy+KNszOozDdv+O6sovQ==}
    dev: true

  /@types/parse-json/4.0.0:
    resolution: {integrity: sha512-//oorEZjL6sbPcKUaCdIGlIUeH26mgzimjBB77G6XRgnDl/L5wOnpyBGRe/Mmf5CVW3PwEBE1NjiMZ/ssFh4wA==}
    dev: true

  /@types/polylabel/1.0.5:
    resolution: {integrity: sha512-gnaNmo1OJiYNBFAZMZdqLZ3hKx2ee4ksAzqhKWBxuQ61PmhINHMcvIqsGmyCD1WFKCkwRt9NFhMSmKE6AgYY+w==}
    dev: false

  /@types/prettier/2.4.3:
    resolution: {integrity: sha512-QzSuZMBuG5u8HqYz01qtMdg/Jfctlnvj1z/lYnIDXs/golxw0fxtRAHd9KrzjR7Yxz1qVeI00o0kiO3PmVdJ9w==}
    dev: true

  /@types/prop-types/15.7.4:
    resolution: {integrity: sha512-rZ5drC/jWjrArrS8BR6SIr4cWpW09RNTYt9AMZo3Jwwif+iacXAqgVjm0B0Bv/S1jhDXKHqRVNCbACkJ89RAnQ==}
    dev: true

  /@types/react-dom/17.0.11:
    resolution: {integrity: sha512-f96K3k+24RaLGVu/Y2Ng3e1EbZ8/cVJvypZWd7cy0ofCBaf2lcM46xNhycMZ2xGwbBjRql7hOlZ+e2WlJ5MH3Q==}
    dependencies:
      '@types/react': 17.0.39
    dev: true

  /@types/react/17.0.39:
    resolution: {integrity: sha512-UVavlfAxDd/AgAacMa60Azl7ygyQNRwC/DsHZmKgNvPmRR5p70AJ5Q9EAmL2NWOJmeV+vVUI4IAP7GZrN8h8Ug==}
    dependencies:
      '@types/prop-types': 15.7.4
      '@types/scheduler': 0.16.2
      csstype: 3.0.10
    dev: true

  /@types/scheduler/0.16.2:
    resolution: {integrity: sha512-hppQEBDmlwhFAXKJX2KnWLYu5yMfi91yazPb2l+lbJiwW+wdo1gNeRA+3RgNSO39WYX2euey41KEwnqesU2Jew==}
    dev: true

  /@types/stack-utils/2.0.1:
    resolution: {integrity: sha512-Hl219/BT5fLAaz6NDkSuhzasy49dwQS/DSdu4MdggFB8zcXv7vflBI3xp7FEmkmdDkBUI2bPUNeMttp2knYdxw==}
    dev: true

  /@types/svg-arc-to-cubic-bezier/3.2.0:
    resolution: {integrity: sha512-3h04sJhF2rjOq8zUhyomORyKdr0RUts7FAz/JajBKGpTF0JSXjaj9fjWtAqj+pU1fwsGsHzcm3Neew3t/McUXA==}
    dev: false

  /@types/yargs-parser/20.2.1:
    resolution: {integrity: sha512-7tFImggNeNBVMsn0vLrpn1H1uPrUBdnARPTpZoitY37ZrdJREzf7I16tMrlK3hen349gr1NYh8CmZQa7CTG6Aw==}
    dev: true

  /@types/yargs/16.0.4:
    resolution: {integrity: sha512-T8Yc9wt/5LbJyCaLiHPReJa0kApcIgJ7Bn735GjItUfh08Z1pJvu8QZqb9s+mMvKV6WUQRV7K2R46YbjMXTTJw==}
    dependencies:
      '@types/yargs-parser': 20.2.1
    dev: true

  /@typescript-eslint/eslint-plugin/5.10.2_2595c2126aec4d4b6e944b931dabb4c2:
    resolution: {integrity: sha512-4W/9lLuE+v27O/oe7hXJKjNtBLnZE8tQAFpapdxwSVHqtmIoPB1gph3+ahNwVuNL37BX7YQHyGF9Xv6XCnIX2Q==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      '@typescript-eslint/parser': ^5.0.0
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@typescript-eslint/parser': 5.10.2_eslint@8.8.0+typescript@4.5.5
      '@typescript-eslint/scope-manager': 5.10.2
      '@typescript-eslint/type-utils': 5.10.2_eslint@8.8.0+typescript@4.5.5
      '@typescript-eslint/utils': 5.10.2_eslint@8.8.0+typescript@4.5.5
      debug: 4.3.3
      eslint: 8.8.0
      functional-red-black-tree: 1.0.1
      ignore: 5.2.0
      regexpp: 3.2.0
      semver: 7.3.5
      tsutils: 3.21.0_typescript@4.5.5
      typescript: 4.5.5
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@typescript-eslint/experimental-utils/5.10.0_eslint@8.8.0+typescript@4.5.5:
    resolution: {integrity: sha512-GeQAPqQMI5DVMGOUwGbSR+NdsirryyKOgUFRTWInhlsKUArns/MVnXmPpzxfrzB1nU36cT5WJAwmfCsjoaVBWg==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      '@typescript-eslint/utils': 5.10.0_eslint@8.8.0+typescript@4.5.5
      eslint: 8.8.0
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: true

  /@typescript-eslint/parser/5.10.2_eslint@8.8.0+typescript@4.5.5:
    resolution: {integrity: sha512-JaNYGkaQVhP6HNF+lkdOr2cAs2wdSZBoalE22uYWq8IEv/OVH0RksSGydk+sW8cLoSeYmC+OHvRyv2i4AQ7Czg==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@typescript-eslint/scope-manager': 5.10.2
      '@typescript-eslint/types': 5.10.2
      '@typescript-eslint/typescript-estree': 5.10.2_typescript@4.5.5
      debug: 4.3.3
      eslint: 8.8.0
      typescript: 4.5.5
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@typescript-eslint/scope-manager/5.10.0:
    resolution: {integrity: sha512-tgNgUgb4MhqK6DoKn3RBhyZ9aJga7EQrw+2/OiDk5hKf3pTVZWyqBi7ukP+Z0iEEDMF5FDa64LqODzlfE4O/Dg==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    dependencies:
      '@typescript-eslint/types': 5.10.0
      '@typescript-eslint/visitor-keys': 5.10.0
    dev: true

  /@typescript-eslint/scope-manager/5.10.2:
    resolution: {integrity: sha512-39Tm6f4RoZoVUWBYr3ekS75TYgpr5Y+X0xLZxXqcZNDWZdJdYbKd3q2IR4V9y5NxxiPu/jxJ8XP7EgHiEQtFnw==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    dependencies:
      '@typescript-eslint/types': 5.10.2
      '@typescript-eslint/visitor-keys': 5.10.2
    dev: true

  /@typescript-eslint/type-utils/5.10.2_eslint@8.8.0+typescript@4.5.5:
    resolution: {integrity: sha512-uRKSvw/Ccs5FYEoXW04Z5VfzF2iiZcx8Fu7DGIB7RHozuP0VbKNzP1KfZkHBTM75pCpsWxIthEH1B33dmGBKHw==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: '*'
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@typescript-eslint/utils': 5.10.2_eslint@8.8.0+typescript@4.5.5
      debug: 4.3.3
      eslint: 8.8.0
      tsutils: 3.21.0_typescript@4.5.5
      typescript: 4.5.5
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@typescript-eslint/types/5.10.0:
    resolution: {integrity: sha512-wUljCgkqHsMZbw60IbOqT/puLfyqqD5PquGiBo1u1IS3PLxdi3RDGlyf032IJyh+eQoGhz9kzhtZa+VC4eWTlQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    dev: true

  /@typescript-eslint/types/5.10.2:
    resolution: {integrity: sha512-Qfp0qk/5j2Rz3p3/WhWgu4S1JtMcPgFLnmAKAW061uXxKSa7VWKZsDXVaMXh2N60CX9h6YLaBoy9PJAfCOjk3w==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    dev: true

  /@typescript-eslint/typescript-estree/5.10.0_typescript@4.5.5:
    resolution: {integrity: sha512-x+7e5IqfwLwsxTdliHRtlIYkgdtYXzE0CkFeV6ytAqq431ZyxCFzNMNR5sr3WOlIG/ihVZr9K/y71VHTF/DUQA==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@typescript-eslint/types': 5.10.0
      '@typescript-eslint/visitor-keys': 5.10.0
      debug: 4.3.3
      globby: 11.1.0
      is-glob: 4.0.3
      semver: 7.3.5
      tsutils: 3.21.0_typescript@4.5.5
      typescript: 4.5.5
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@typescript-eslint/typescript-estree/5.10.2_typescript@4.5.5:
    resolution: {integrity: sha512-WHHw6a9vvZls6JkTgGljwCsMkv8wu8XU8WaYKeYhxhWXH/atZeiMW6uDFPLZOvzNOGmuSMvHtZKd6AuC8PrwKQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true
    dependencies:
      '@typescript-eslint/types': 5.10.2
      '@typescript-eslint/visitor-keys': 5.10.2
      debug: 4.3.3
      globby: 11.1.0
      is-glob: 4.0.3
      semver: 7.3.5
      tsutils: 3.21.0_typescript@4.5.5
      typescript: 4.5.5
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@typescript-eslint/utils/5.10.0_eslint@8.8.0+typescript@4.5.5:
    resolution: {integrity: sha512-IGYwlt1CVcFoE2ueW4/ioEwybR60RAdGeiJX/iDAw0t5w0wK3S7QncDwpmsM70nKgGTuVchEWB8lwZwHqPAWRg==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      '@types/json-schema': 7.0.9
      '@typescript-eslint/scope-manager': 5.10.0
      '@typescript-eslint/types': 5.10.0
      '@typescript-eslint/typescript-estree': 5.10.0_typescript@4.5.5
      eslint: 8.8.0
      eslint-scope: 5.1.1
      eslint-utils: 3.0.0_eslint@8.8.0
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: true

  /@typescript-eslint/utils/5.10.2_eslint@8.8.0+typescript@4.5.5:
    resolution: {integrity: sha512-vuJaBeig1NnBRkf7q9tgMLREiYD7zsMrsN1DA3wcoMDvr3BTFiIpKjGiYZoKPllfEwN7spUjv7ZqD+JhbVjEPg==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      '@types/json-schema': 7.0.9
      '@typescript-eslint/scope-manager': 5.10.2
      '@typescript-eslint/types': 5.10.2
      '@typescript-eslint/typescript-estree': 5.10.2_typescript@4.5.5
      eslint: 8.8.0
      eslint-scope: 5.1.1
      eslint-utils: 3.0.0_eslint@8.8.0
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: true

  /@typescript-eslint/visitor-keys/5.10.0:
    resolution: {integrity: sha512-GMxj0K1uyrFLPKASLmZzCuSddmjZVbVj3Ouy5QVuIGKZopxvOr24JsS7gruz6C3GExE01mublZ3mIBOaon9zuQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    dependencies:
      '@typescript-eslint/types': 5.10.0
      eslint-visitor-keys: 3.2.0
    dev: true

  /@typescript-eslint/visitor-keys/5.10.2:
    resolution: {integrity: sha512-zHIhYGGGrFJvvyfwHk5M08C5B5K4bewkm+rrvNTKk1/S15YHR+SA/QUF8ZWscXSfEaB8Nn2puZj+iHcoxVOD/Q==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    dependencies:
      '@typescript-eslint/types': 5.10.2
      eslint-visitor-keys: 3.2.0
    dev: true

  /@vitejs/plugin-react/1.1.4:
    resolution: {integrity: sha512-cMUBDonNY8PPeHWjIrYKbRn6bLSunh/Ixo2XLLBd3DM0uYBZft+c+04zkGhhN1lAwvoRKJ2FdtvhGhPgViHc6w==}
    engines: {node: '>=12.0.0'}
    dependencies:
      '@babel/core': 7.16.7
      '@babel/plugin-transform-react-jsx': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-react-jsx-development': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-react-jsx-self': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-react-jsx-source': 7.16.7_@babel+core@7.16.7
      '@rollup/pluginutils': 4.1.2
      react-refresh: 0.11.0
      resolve: 1.21.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /@xstate/react/1.6.3_a0c521d4794c7ad97f5f4c1c4a7d5818:
    resolution: {integrity: sha512-NCUReRHPGvvCvj2yLZUTfR0qVp6+apc8G83oXSjN4rl89ZjyujiKrTff55bze/HrsvCsP/sUJASf2n0nzMF1KQ==}
    peerDependencies:
      '@xstate/fsm': ^1.0.0
      react: ^16.8.0 || ^17.0.0
      xstate: ^4.11.0
    peerDependenciesMeta:
      '@xstate/fsm':
        optional: true
      xstate:
        optional: true
    dependencies:
      react: 17.0.2
      use-isomorphic-layout-effect: 1.1.1_a0c521d4794c7ad97f5f4c1c4a7d5818
      use-subscription: 1.5.1_react@17.0.2
    transitivePeerDependencies:
      - '@types/react'
    dev: false

  /abab/2.0.5:
    resolution: {integrity: sha512-9IK9EadsbHo6jLWIpxpR6pL0sazTXV6+SQv25ZB+F7Bj9mJNaOc4nCRabwd5M/JwmUa8idz6Eci6eKfJryPs6Q==}
    dev: true

  /acorn-globals/6.0.0:
    resolution: {integrity: sha512-ZQl7LOWaF5ePqqcX4hLuv/bLXYQNfNWw2c0/yX/TsPRKamzHcTGQnlCjHT3TsmkOUVEPS3crCxiPfdzE/Trlhg==}
    dependencies:
      acorn: 7.4.1
      acorn-walk: 7.2.0
    dev: true

  /acorn-jsx/5.3.2_acorn@8.7.0:
    resolution: {integrity: sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==}
    peerDependencies:
      acorn: ^6.0.0 || ^7.0.0 || ^8.0.0
    dependencies:
      acorn: 8.7.0
    dev: true

  /acorn-node/1.8.2:
    resolution: {integrity: sha512-8mt+fslDufLYntIoPAaIMUe/lrbrehIiwmR3t2k9LljIzoigEPF27eLk2hy8zSGzmR/ogr7zbRKINMo1u0yh5A==}
    dependencies:
      acorn: 7.4.1
      acorn-walk: 7.2.0
      xtend: 4.0.2
    dev: false

  /acorn-walk/7.2.0:
    resolution: {integrity: sha512-OPdCF6GsMIP+Az+aWfAAOEt2/+iVDKE7oy6lJ098aoe59oAmK76qV6Gw60SbZ8jHuG2wH058GF4pLFbYamYrVA==}
    engines: {node: '>=0.4.0'}

  /acorn-walk/8.2.0:
    resolution: {integrity: sha512-k+iyHEuPgSw6SbuDpGQM+06HQUa04DZ3o+F6CSzXMvvI5KMvnaEqXe+YVe555R9nn6GPt404fos4wcgpw12SDA==}
    engines: {node: '>=0.4.0'}
    dev: true

  /acorn/7.4.1:
    resolution: {integrity: sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A==}
    engines: {node: '>=0.4.0'}
    hasBin: true

  /acorn/8.7.0:
    resolution: {integrity: sha512-V/LGr1APy+PXIwKebEWrkZPwoeoF+w1jiOBUmuxuiUIaOHtob8Qc9BTrYo7VuI5fR8tqsy+buA2WFooR5olqvQ==}
    engines: {node: '>=0.4.0'}
    hasBin: true
    dev: true

  /adler-32/1.2.0:
    resolution: {integrity: sha1-aj5r8KY5ALoVZSgIyxXGgT0aXyU=}
    engines: {node: '>=0.8'}
    hasBin: true
    dependencies:
      exit-on-epipe: 1.0.1
      printj: 1.1.2
    dev: false

  /adler-32/1.3.0:
    resolution: {integrity: sha512-f5nltvjl+PRUh6YNfUstRaXwJxtfnKEWhAWWlmKvh+Y3J2+98a0KKVYDEhz6NdKGqswLhjNGznxfSsZGOvOd9g==}
    engines: {node: '>=0.8'}
    dependencies:
      printj: 1.2.3
    dev: false

  /agent-base/6.0.2:
    resolution: {integrity: sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==}
    engines: {node: '>= 6.0.0'}
    dependencies:
      debug: 4.3.3
    transitivePeerDependencies:
      - supports-color

  /ajv/6.12.6:
    resolution: {integrity: sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==}
    dependencies:
      fast-deep-equal: 3.1.3
      fast-json-stable-stringify: 2.1.0
      json-schema-traverse: 0.4.1
      uri-js: 4.4.1
    dev: true

  /ajv/8.9.0:
    resolution: {integrity: sha512-qOKJyNj/h+OWx7s5DePL6Zu1KeM9jPZhwBqs+7DzP6bGOvqzVCSf0xueYmVuaC/oQ/VtS2zLMLHdQFbkka+XDQ==}
    dependencies:
      fast-deep-equal: 3.1.3
      json-schema-traverse: 1.0.0
      require-from-string: 2.0.2
      uri-js: 4.4.1
    dev: false

  /amazon-cognito-identity-js/5.2.6:
    resolution: {integrity: sha512-gtYLuhwDy8Badp9q5JB2Ad4/tMFo5JtbjoldFtgd0YXyiMjop4B5f0V/uYw3zhRwk5weZ2LZjfe2XPwhNhEebg==}
    dependencies:
      buffer: 4.9.2
      crypto-js: 4.1.1
      fast-base64-decode: 1.0.0
      isomorphic-unfetch: 3.1.0
      js-cookie: 2.2.1
    transitivePeerDependencies:
      - encoding
    dev: false

  /amdefine/1.0.1:
    resolution: {integrity: sha1-SlKCrBZHKek2Gbz9OtFR+BfOkfU=}
    engines: {node: '>=0.4.2'}
    dev: false
    optional: true

  /ansi-escapes/4.3.2:
    resolution: {integrity: sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==}
    engines: {node: '>=8'}
    dependencies:
      type-fest: 0.21.3
    dev: true

  /ansi-regex/5.0.1:
    resolution: {integrity: sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==}
    engines: {node: '>=8'}

  /ansi-styles/3.2.1:
    resolution: {integrity: sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==}
    engines: {node: '>=4'}
    dependencies:
      color-convert: 1.9.3
    dev: true

  /ansi-styles/4.3.0:
    resolution: {integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==}
    engines: {node: '>=8'}
    dependencies:
      color-convert: 2.0.1

  /ansi-styles/5.2.0:
    resolution: {integrity: sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA==}
    engines: {node: '>=10'}
    dev: true

  /anymatch/3.1.2:
    resolution: {integrity: sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==}
    engines: {node: '>= 8'}
    dependencies:
      normalize-path: 3.0.0
      picomatch: 2.3.1

  /archiver-utils/2.1.0:
    resolution: {integrity: sha512-bEL/yUb/fNNiNTuUz979Z0Yg5L+LzLxGJz8x79lYmR54fmTIb6ob/hNQgkQnIUDWIFjZVQwl9Xs356I6BAMHfw==}
    engines: {node: '>= 6'}
    dependencies:
      glob: 7.2.0
      graceful-fs: 4.2.9
      lazystream: 1.0.1
      lodash.defaults: 4.2.0
      lodash.difference: 4.5.0
      lodash.flatten: 4.4.0
      lodash.isplainobject: 4.0.6
      lodash.union: 4.6.0
      normalize-path: 3.0.0
      readable-stream: 2.3.7
    dev: false

  /archiver/5.3.0:
    resolution: {integrity: sha512-iUw+oDwK0fgNpvveEsdQ0Ase6IIKztBJU2U0E9MzszMfmVVUyv1QJhS2ITW9ZCqx8dktAxVAjWWkKehuZE8OPg==}
    engines: {node: '>= 10'}
    dependencies:
      archiver-utils: 2.1.0
      async: 3.2.3
      buffer-crc32: 0.2.13
      readable-stream: 3.6.0
      readdir-glob: 1.1.1
      tar-stream: 2.2.0
      zip-stream: 4.1.0
    dev: false

  /arg/4.1.3:
    resolution: {integrity: sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==}
    dev: true

  /argparse/1.0.10:
    resolution: {integrity: sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==}
    dependencies:
      sprintf-js: 1.0.3
    dev: true

  /argparse/2.0.1:
    resolution: {integrity: sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==}
    dev: true

  /aria-hidden/1.1.3:
    resolution: {integrity: sha512-RhVWFtKH5BiGMycI72q2RAFMLQi8JP9bLuQXgR5a8Znp7P5KOIADSJeyfI8PCVxLEp067B2HbP5JIiI/PXIZeA==}
    engines: {node: '>=8.5.0'}
    dependencies:
      tslib: 1.14.1
    dev: false

  /aria-query/4.2.2:
    resolution: {integrity: sha512-o/HelwhuKpTj/frsOsbNLNgnNGVIFsVP/SW2BSF14gVl7kAfMOJ6/8wUAUvG1R1NHKrfG+2sHZTu0yauT1qBrA==}
    engines: {node: '>=6.0'}
    dependencies:
      '@babel/runtime': 7.16.7
      '@babel/runtime-corejs3': 7.16.8
    dev: true

  /array-from/2.1.1:
    resolution: {integrity: sha1-z+nYwmYoudxa7MYqn12PHzUsEZU=}
    dev: false

  /array-includes/3.1.4:
    resolution: {integrity: sha512-ZTNSQkmWumEbiHO2GF4GmWxYVTiQyJy2XOTa15sdQSrvKn7l+180egQMqlrMOUMCyLMD7pmyQe4mMDUT6Behrw==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.3
      es-abstract: 1.19.1
      get-intrinsic: 1.1.1
      is-string: 1.0.7
    dev: true

  /array-union/2.1.0:
    resolution: {integrity: sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==}
    engines: {node: '>=8'}
    dev: true

  /array.prototype.flat/1.2.5:
    resolution: {integrity: sha512-KaYU+S+ndVqyUnignHftkwc58o3uVU1jzczILJ1tN2YaIZpFIKBiP/x/j97E5MVPsaCloPbqWLB/8qCTVvT2qg==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.3
      es-abstract: 1.19.1
    dev: true

  /array.prototype.flatmap/1.2.5:
    resolution: {integrity: sha512-08u6rVyi1Lj7oqWbS9nUxliETrtIROT4XGTA4D/LWGten6E3ocm7cy9SIrmNHOL5XVbVuckUp3X6Xyg8/zpvHA==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.3
      es-abstract: 1.19.1
    dev: true

  /ast-transform/0.0.0:
    resolution: {integrity: sha1-dJRAWIh9goPhidlUYAlHvJj+AGI=}
    dependencies:
      escodegen: 1.2.0
      esprima: 1.0.4
      through: 2.3.8
    dev: false

  /ast-types-flow/0.0.7:
    resolution: {integrity: sha1-9wtzXGvKGlycItmCw+Oef+ujva0=}
    dev: true

  /ast-types/0.13.4:
    resolution: {integrity: sha512-x1FCFnFifvYDDzTaLII71vG5uvDwgtmDTEVWAxrgeiR8VjMONcCXJx7E+USjDtHlwFmt9MysbqgF9b9Vjr6w+w==}
    engines: {node: '>=4'}
    dependencies:
      tslib: 2.3.1
    dev: false

  /ast-types/0.7.8:
    resolution: {integrity: sha1-kC0uDWDQcb3NRtwRXhgJ7RHBOKk=}
    engines: {node: '>= 0.6'}
    dev: false

  /astral-regex/2.0.0:
    resolution: {integrity: sha512-Z7tMw1ytTXt5jqMcOP+OQteU1VuNK9Y02uuJtKQ1Sv69jXQKKg5cibLwGJow8yzZP+eAc18EmLGPal0bp36rvQ==}
    engines: {node: '>=8'}
    dev: false

  /async/0.9.2:
    resolution: {integrity: sha1-rqdNXmHB+JlhO/ZL2mbUx48v0X0=}
    dev: true

  /async/3.2.3:
    resolution: {integrity: sha512-spZRyzKL5l5BZQrr/6m/SqFdBN0q3OCI0f9rjfBzCMBIP4p75P620rR3gTmaksNOhmzgdxcaxdNfMy6anrbM0g==}
    dev: false

  /asynckit/0.4.0:
    resolution: {integrity: sha1-x57Zf380y48robyXkLzDZkdLS3k=}
    dev: true

  /at-least-node/1.0.0:
    resolution: {integrity: sha512-+q/t7Ekv1EDY2l6Gda6LLiX14rU9TV20Wa3ofeQmwPFZbOMo9DXrLbOjFaaclkXKWidIaopwAObQDqwWtGUjqg==}
    engines: {node: '>= 4.0.0'}
    dev: false

  /aws-amplify/4.3.14:
    resolution: {integrity: sha512-pTIlYlo63cJ7TMqWOow6+1ADiRCf3HAGgqqT8t7gvYBIeWd7gscwF3VYxEhd0xEjp7rJgO+LgiZcKm4IiLmX1Q==}
    dependencies:
      '@aws-amplify/analytics': 5.1.12
      '@aws-amplify/api': 4.0.32
      '@aws-amplify/auth': 4.4.1
      '@aws-amplify/cache': 4.0.34
      '@aws-amplify/core': 4.3.14
      '@aws-amplify/datastore': 3.7.6
      '@aws-amplify/geo': 1.2.0
      '@aws-amplify/interactions': 4.0.32
      '@aws-amplify/predictions': 4.0.32
      '@aws-amplify/pubsub': 4.2.8
      '@aws-amplify/storage': 4.4.15
      '@aws-amplify/ui': 2.0.5
      '@aws-amplify/xr': 3.0.32
    transitivePeerDependencies:
      - debug
      - encoding
      - react-native
    dev: false

  /aws-cdk-lib/2.10.0_constructs@10.0.51:
    resolution: {integrity: sha512-sMQvQzDqfHumbDOwH2nnyu/sKl7HMi4LkIDRlhW/dLZhYiLvEbwA8ZUclY9g5NuSihF+3G9x1uOjBETBGp+rTg==}
    engines: {node: '>= 14.15.0'}
    peerDependencies:
      constructs: ^10.0.0
    dependencies:
      constructs: 10.0.51
    dev: false
    bundledDependencies:
      - '@balena/dockerignore'
      - case
      - fs-extra
      - ignore
      - jsonschema
      - minimatch
      - punycode
      - semver
      - yaml

  /aws-cdk/2.10.0:
    resolution: {integrity: sha512-abLruZeyj9+1Uc+1u0cN+5c7PWl4Y6yC30/nFnRD6fCxu06Ad4mXujkaow5Vh/ROAOpaRUcNMdfbbx/dNyMZ5g==}
    engines: {node: '>= 14.15.0'}
    hasBin: true
    dependencies:
      '@aws-cdk/cloud-assembly-schema': 2.10.0
      '@aws-cdk/cloudformation-diff': 2.10.0
      '@aws-cdk/cx-api': 2.10.0
      '@aws-cdk/region-info': 2.10.0
      '@jsii/check-node': 1.52.1
      archiver: 5.3.0
      aws-sdk: 2.1058.0
      camelcase: 6.3.0
      cdk-assets: 2.10.0
      chalk: 4.1.2
      chokidar: 3.5.3
      decamelize: 5.0.1
      fs-extra: 9.1.0
      glob: 7.2.0
      json-diff: 0.7.1
      minimatch: 3.0.4
      promptly: 3.2.0
      proxy-agent: 5.0.0
      semver: 7.3.5
      source-map-support: 0.5.21
      strip-ansi: 6.0.1
      table: 6.8.0
      uuid: 8.3.2
      wrap-ansi: 7.0.0
      yaml: 1.10.2
      yargs: 16.2.0
    transitivePeerDependencies:
      - supports-color
    dev: false

  /aws-sdk/2.1058.0:
    resolution: {integrity: sha512-q6bTq1DBBeBaU6GKKoTHmJj16WOQHhOoK7jwV93IT8pO0P1XH99gesFofhew3eT0h8Ev7quVKutk4B1kfnIXPQ==}
    engines: {node: '>= 10.0.0'}
    dependencies:
      buffer: 4.9.2
      events: 1.1.1
      ieee754: 1.1.13
      jmespath: 0.15.0
      querystring: 0.2.0
      sax: 1.2.1
      url: 0.10.3
      uuid: 3.3.2
      xml2js: 0.4.19
    dev: false

  /axe-core/4.3.5:
    resolution: {integrity: sha512-WKTW1+xAzhMS5dJsxWkliixlO/PqC4VhmO9T4juNYcaTg9jzWiJsou6m5pxWYGfigWbwzJWeFY6z47a+4neRXA==}
    engines: {node: '>=4'}
    dev: true

  /axios/0.21.4:
    resolution: {integrity: sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==}
    dependencies:
      follow-redirects: 1.14.7
    transitivePeerDependencies:
      - debug
    dev: false

  /axobject-query/2.2.0:
    resolution: {integrity: sha512-Td525n+iPOOyUQIeBfcASuG6uJsDOITl7Mds5gFyerkWiX7qhUTdYUBlSgNMyVqtSJqwpt1kXGLdUt6SykLMRA==}
    dev: true

  /babel-jest/27.4.6_@babel+core@7.16.7:
    resolution: {integrity: sha512-qZL0JT0HS1L+lOuH+xC2DVASR3nunZi/ozGhpgauJHgmI7f8rudxf6hUjEHympdQ/J64CdKmPkgfJ+A3U6QCrg==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    peerDependencies:
      '@babel/core': ^7.8.0
    dependencies:
      '@babel/core': 7.16.7
      '@jest/transform': 27.4.6
      '@jest/types': 27.4.2
      '@types/babel__core': 7.1.18
      babel-plugin-istanbul: 6.1.1
      babel-preset-jest: 27.4.0_@babel+core@7.16.7
      chalk: 4.1.2
      graceful-fs: 4.2.9
      slash: 3.0.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /babel-plugin-dynamic-import-node/2.3.3:
    resolution: {integrity: sha512-jZVI+s9Zg3IqA/kdi0i6UDCybUI3aSBLnglhYbSSjKlV7yF1F/5LWv8MakQmvYpnbJDS6fcBL2KzHSxNCMtWSQ==}
    dependencies:
      object.assign: 4.1.2
    dev: true

  /babel-plugin-istanbul/6.1.1:
    resolution: {integrity: sha512-Y1IQok9821cC9onCx5otgFfRm7Lm+I+wwxOx738M/WLPZ9Q42m4IG5W0FNX8WLL2gYMZo3JkuXIH2DOpWM+qwA==}
    engines: {node: '>=8'}
    dependencies:
      '@babel/helper-plugin-utils': 7.16.7
      '@istanbuljs/load-nyc-config': 1.1.0
      '@istanbuljs/schema': 0.1.3
      istanbul-lib-instrument: 5.1.0
      test-exclude: 6.0.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /babel-plugin-jest-hoist/27.4.0:
    resolution: {integrity: sha512-Jcu7qS4OX5kTWBc45Hz7BMmgXuJqRnhatqpUhnzGC3OBYpOmf2tv6jFNwZpwM7wU7MUuv2r9IPS/ZlYOuburVw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@babel/template': 7.16.7
      '@babel/types': 7.16.8
      '@types/babel__core': 7.1.18
      '@types/babel__traverse': 7.14.2
    dev: true

  /babel-plugin-macros/3.1.0:
    resolution: {integrity: sha512-Cg7TFGpIr01vOQNODXOOaGz2NpCU5gl8x1qJFbb6hbZxR7XrcE2vtbAsTAbJ7/xwJtUuJEw8K8Zr/AE0LHlesg==}
    engines: {node: '>=10', npm: '>=6'}
    dependencies:
      '@babel/runtime': 7.16.7
      cosmiconfig: 7.0.1
      resolve: 1.21.0
    dev: true

  /babel-plugin-polyfill-corejs2/0.3.1_@babel+core@7.16.7:
    resolution: {integrity: sha512-v7/T6EQcNfVLfcN2X8Lulb7DjprieyLWJK/zOWH5DUYcAgex9sP3h25Q+DLsX9TloXe3y1O8l2q2Jv9q8UVB9w==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/compat-data': 7.16.8
      '@babel/core': 7.16.7
      '@babel/helper-define-polyfill-provider': 0.3.1_@babel+core@7.16.7
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /babel-plugin-polyfill-corejs3/0.5.1_@babel+core@7.16.7:
    resolution: {integrity: sha512-TihqEe4sQcb/QcPJvxe94/9RZuLQuF1+To4WqQcRvc+3J3gLCPIPgDKzGLG6zmQLfH3nn25heRuDNkS2KR4I8A==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-define-polyfill-provider': 0.3.1_@babel+core@7.16.7
      core-js-compat: 3.20.3
    transitivePeerDependencies:
      - supports-color
    dev: true

  /babel-plugin-polyfill-regenerator/0.3.1_@babel+core@7.16.7:
    resolution: {integrity: sha512-Y2B06tvgHYt1x0yz17jGkGeeMr5FeKUu+ASJ+N6nB5lQ8Dapfg42i0OVrf8PNGJ3zKL4A23snMi1IRwrqqND7A==}
    peerDependencies:
      '@babel/core': ^7.0.0-0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/helper-define-polyfill-provider': 0.3.1_@babel+core@7.16.7
    transitivePeerDependencies:
      - supports-color
    dev: true

  /babel-plugin-transform-react-remove-prop-types/0.4.24:
    resolution: {integrity: sha512-eqj0hVcJUR57/Ug2zE1Yswsw4LhuqqHhD+8v120T1cl3kjg76QwtyBrdIk4WVwK+lAhBJVYCd/v+4nc4y+8JsA==}
    dev: true

  /babel-preset-current-node-syntax/1.0.1_@babel+core@7.16.7:
    resolution: {integrity: sha512-M7LQ0bxarkxQoN+vz5aJPsLBn77n8QgTFmo8WK0/44auK2xlCXrYcUxHFxgU7qW5Yzw/CjmLRK2uJzaCd7LvqQ==}
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/plugin-syntax-async-generators': 7.8.4_@babel+core@7.16.7
      '@babel/plugin-syntax-bigint': 7.8.3_@babel+core@7.16.7
      '@babel/plugin-syntax-class-properties': 7.12.13_@babel+core@7.16.7
      '@babel/plugin-syntax-import-meta': 7.10.4_@babel+core@7.16.7
      '@babel/plugin-syntax-json-strings': 7.8.3_@babel+core@7.16.7
      '@babel/plugin-syntax-logical-assignment-operators': 7.10.4_@babel+core@7.16.7
      '@babel/plugin-syntax-nullish-coalescing-operator': 7.8.3_@babel+core@7.16.7
      '@babel/plugin-syntax-numeric-separator': 7.10.4_@babel+core@7.16.7
      '@babel/plugin-syntax-object-rest-spread': 7.8.3_@babel+core@7.16.7
      '@babel/plugin-syntax-optional-catch-binding': 7.8.3_@babel+core@7.16.7
      '@babel/plugin-syntax-optional-chaining': 7.8.3_@babel+core@7.16.7
      '@babel/plugin-syntax-top-level-await': 7.14.5_@babel+core@7.16.7
    dev: true

  /babel-preset-jest/27.4.0_@babel+core@7.16.7:
    resolution: {integrity: sha512-NK4jGYpnBvNxcGo7/ZpZJr51jCGT+3bwwpVIDY2oNfTxJJldRtB4VAcYdgp1loDE50ODuTu+yBjpMAswv5tlpg==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    peerDependencies:
      '@babel/core': ^7.0.0
    dependencies:
      '@babel/core': 7.16.7
      babel-plugin-jest-hoist: 27.4.0
      babel-preset-current-node-syntax: 1.0.1_@babel+core@7.16.7
    dev: true

  /babel-preset-react-app/10.0.1:
    resolution: {integrity: sha512-b0D9IZ1WhhCWkrTXyFuIIgqGzSkRIH5D5AmB0bXbzYAB1OBAwHcUeyWW2LorutLWF5btNo/N7r/cIdmvvKJlYg==}
    dependencies:
      '@babel/core': 7.16.7
      '@babel/plugin-proposal-class-properties': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-decorators': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-nullish-coalescing-operator': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-numeric-separator': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-optional-chaining': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-proposal-private-methods': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-flow-strip-types': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-react-display-name': 7.16.7_@babel+core@7.16.7
      '@babel/plugin-transform-runtime': 7.16.8_@babel+core@7.16.7
      '@babel/preset-env': 7.16.8_@babel+core@7.16.7
      '@babel/preset-react': 7.16.7_@babel+core@7.16.7
      '@babel/preset-typescript': 7.16.7_@babel+core@7.16.7
      '@babel/runtime': 7.16.7
      babel-plugin-macros: 3.1.0
      babel-plugin-transform-react-remove-prop-types: 0.4.24
    transitivePeerDependencies:
      - supports-color
    dev: true

  /babel-runtime/6.26.0:
    resolution: {integrity: sha1-llxwWGaOgrVde/4E/yM3vItWR/4=}
    dependencies:
      core-js: 2.6.12
      regenerator-runtime: 0.11.1
    dev: false

  /balanced-match/1.0.2:
    resolution: {integrity: sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==}

  /base64-js/0.0.8:
    resolution: {integrity: sha1-EQHpVE9KdrG8OybUUsqW16NeeXg=}
    engines: {node: '>= 0.4'}
    dev: false

  /base64-js/1.3.1:
    resolution: {integrity: sha512-mLQ4i2QO1ytvGWFWmcngKO//JXAQueZvwEKtjgQFM4jIK0kU+ytMfplL8j+n5mspOfjHwoAg+9yhb7BwAHm36g==}
    dev: false

  /base64-js/1.5.1:
    resolution: {integrity: sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==}
    dev: false

  /binary-extensions/2.2.0:
    resolution: {integrity: sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==}
    engines: {node: '>=8'}
    dev: false

  /bl/4.1.0:
    resolution: {integrity: sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==}
    dependencies:
      buffer: 5.7.1
      inherits: 2.0.4
      readable-stream: 3.6.0
    dev: false

  /bowser/2.11.0:
    resolution: {integrity: sha512-AlcaJBi/pqqJBIQ8U9Mcpc9i8Aqxn88Skv5d+xBX006BY5u8N3mGLHa5Lgppa7L/HfwgwLgZ6NYs+Ag6uUmJRA==}
    dev: false

  /brace-expansion/1.1.11:
    resolution: {integrity: sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==}
    dependencies:
      balanced-match: 1.0.2
      concat-map: 0.0.1

  /braces/3.0.2:
    resolution: {integrity: sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==}
    engines: {node: '>=8'}
    dependencies:
      fill-range: 7.0.1

  /brfs/2.0.2:
    resolution: {integrity: sha512-IrFjVtwu4eTJZyu8w/V2gxU7iLTtcHih67sgEdzrhjLBMHp2uYefUBfdM4k2UvcuWMgV7PQDZHSLeNWnLFKWVQ==}
    hasBin: true
    dependencies:
      quote-stream: 1.0.2
      resolve: 1.21.0
      static-module: 3.0.4
      through2: 2.0.5
    dev: false

  /brotli/1.3.2:
    resolution: {integrity: sha1-UlqcrU/LqWR119OI9q7LE+7VL0Y=}
    dependencies:
      base64-js: 1.5.1
    dev: false

  /browser-process-hrtime/1.0.0:
    resolution: {integrity: sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow==}
    dev: true

  /browser-resolve/1.11.3:
    resolution: {integrity: sha512-exDi1BYWB/6raKHmDTCicQfTkqwN5fioMFV4j8BsfMU4R2DK/QfZfK7kOVkmWCNANf0snkBzqGqAJBao9gZMdQ==}
    dependencies:
      resolve: 1.1.7
    dev: false

  /browserify-optional/1.0.1:
    resolution: {integrity: sha1-HhNyLP3g2F8SFnbCpyztUzoBiGk=}
    dependencies:
      ast-transform: 0.0.0
      ast-types: 0.7.8
      browser-resolve: 1.11.3
    dev: false

  /browserslist/4.19.1:
    resolution: {integrity: sha512-u2tbbG5PdKRTUoctO3NBD8FQ5HdPh1ZXPHzp1rwaa5jTc+RV9/+RlWiAIKmjRPQF+xbGM9Kklj5bZQFa2s/38A==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true
    dependencies:
      caniuse-lite: 1.0.30001300
      electron-to-chromium: 1.4.48
      escalade: 3.1.1
      node-releases: 2.0.1
      picocolors: 1.0.0
    dev: true

  /bs-logger/0.2.6:
    resolution: {integrity: sha512-pd8DCoxmbgc7hyPKOvxtqNcjYoOsABPQdcCUjGp3d42VR2CX1ORhk2A87oqqu5R1kk+76nsxZupkmyd+MVtCog==}
    engines: {node: '>= 6'}
    dependencies:
      fast-json-stable-stringify: 2.1.0
    dev: true

  /bser/2.1.1:
    resolution: {integrity: sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==}
    dependencies:
      node-int64: 0.4.0
    dev: true

  /buffer-crc32/0.2.13:
    resolution: {integrity: sha1-DTM+PwDqxQqhRUq9MO+MKl2ackI=}
    dev: false

  /buffer-equal/0.0.1:
    resolution: {integrity: sha1-kbx0sR6kBbyRa8aqkI+q+ltKrEs=}
    engines: {node: '>=0.4.0'}
    dev: false

  /buffer-from/1.1.2:
    resolution: {integrity: sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==}

  /buffer/4.9.2:
    resolution: {integrity: sha512-xq+q3SRMOxGivLhBNaUdC64hDTQwejJ+H0T/NB1XMtTVEwNTrfFF3gAxiyW0Bu/xWEGhjVKgUcMhCrUy2+uCWg==}
    dependencies:
      base64-js: 1.5.1
      ieee754: 1.2.1
      isarray: 1.0.0
    dev: false

  /buffer/5.7.1:
    resolution: {integrity: sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==}
    dependencies:
      base64-js: 1.5.1
      ieee754: 1.2.1
    dev: false

  /bytes/3.1.1:
    resolution: {integrity: sha512-dWe4nWO/ruEOY7HkUJ5gFt1DCFV9zPRoJr8pV0/ASQermOZjtq8jMjOprC0Kd10GLN+l7xaUPvxzJFWtxGu8Fg==}
    engines: {node: '>= 0.8'}
    dev: false

  /call-bind/1.0.2:
    resolution: {integrity: sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==}
    dependencies:
      function-bind: 1.1.1
      get-intrinsic: 1.1.1

  /callsites/3.1.0:
    resolution: {integrity: sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==}
    engines: {node: '>=6'}
    dev: true

  /camel-case/4.1.2:
    resolution: {integrity: sha512-gxGWBrTT1JuMx6R+o5PTXMmUnhnVzLQ9SNutD4YqKtI6ap897t3tKECYla6gCWEkplXnlNybEkZg9GEGxKFCgw==}
    dependencies:
      pascal-case: 3.1.2
      tslib: 2.3.1

  /camelcase-keys/6.2.2:
    resolution: {integrity: sha512-YrwaA0vEKazPBkn0ipTiMpSajYDSe+KjQfrjhcBMxJt/znbvlHd8Pw/Vamaz5EB4Wfhs3SUR3Z9mwRu/P3s3Yg==}
    engines: {node: '>=8'}
    dependencies:
      camelcase: 5.3.1
      map-obj: 4.3.0
      quick-lru: 4.0.1
    dev: false

  /camelcase/5.3.1:
    resolution: {integrity: sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==}
    engines: {node: '>=6'}

  /camelcase/6.3.0:
    resolution: {integrity: sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==}
    engines: {node: '>=10'}

  /caniuse-lite/1.0.30001300:
    resolution: {integrity: sha512-cVjiJHWGcNlJi8TZVKNMnvMid3Z3TTdDHmLDzlOdIiZq138Exvo0G+G0wTdVYolxKb4AYwC+38pxodiInVtJSA==}
    dev: true

  /capital-case/1.0.4:
    resolution: {integrity: sha512-ds37W8CytHgwnhGGTi88pcPyR15qoNkOpYwmMMfnWqqWgESapLqvDx6huFjQ5vqWSn2Z06173XNA7LtMOeUh1A==}
    dependencies:
      no-case: 3.0.4
      tslib: 2.3.1
      upper-case-first: 2.0.2
    dev: false

  /cdk-assets/2.10.0:
    resolution: {integrity: sha512-ykF6KPABMRYExkiHLR+LIwxSchptKdi2O1T+225bCCIUFmf6S/JmgQYnW0jFlNpxMRzlpK1FmcaOUcrDbs4rrQ==}
    engines: {node: '>= 14.15.0'}
    hasBin: true
    dependencies:
      '@aws-cdk/cloud-assembly-schema': 2.10.0
      '@aws-cdk/cx-api': 2.10.0
      archiver: 5.3.0
      aws-sdk: 2.1058.0
      glob: 7.2.0
      mime: 2.6.0
      yargs: 16.2.0
    dev: false

  /cdk-nag/2.4.47_44c61fbecc635138459f3a222c73def8:
    resolution: {integrity: sha512-ezJ9cxc3CBT/Ge6Cyj9Ugyl8iKRxhJiSHB52Az3p0CMfB7tIGw0uVc0oRyNcaO0UMStbm11/NF2sJJBk4es/Fw==}
    peerDependencies:
      aws-cdk-lib: ^2.1.0
      constructs: ^10.0.5
    dependencies:
      aws-cdk-lib: 2.10.0_constructs@10.0.51
      constructs: 10.0.51
    dev: true

  /cfb/1.2.1:
    resolution: {integrity: sha512-wT2ScPAFGSVy7CY+aauMezZBnNrfnaLSrxHUHdea+Td/86vrk6ZquggV+ssBR88zNs0OnBkL2+lf9q0K+zVGzQ==}
    engines: {node: '>=0.8'}
    dependencies:
      adler-32: 1.3.0
      crc-32: 1.2.0
      printj: 1.3.1
    dev: false

  /chalk/2.4.2:
    resolution: {integrity: sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==}
    engines: {node: '>=4'}
    dependencies:
      ansi-styles: 3.2.1
      escape-string-regexp: 1.0.5
      supports-color: 5.5.0
    dev: true

  /chalk/4.1.2:
    resolution: {integrity: sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==}
    engines: {node: '>=10'}
    dependencies:
      ansi-styles: 4.3.0
      supports-color: 7.2.0

  /change-case/4.1.2:
    resolution: {integrity: sha512-bSxY2ws9OtviILG1EiY5K7NNxkqg/JnRnFxLtKQ96JaviiIxi7djMrSd0ECT9AC+lttClmYwKw53BWpOMblo7A==}
    dependencies:
      camel-case: 4.1.2
      capital-case: 1.0.4
      constant-case: 3.0.4
      dot-case: 3.0.4
      header-case: 2.0.4
      no-case: 3.0.4
      param-case: 3.0.4
      pascal-case: 3.1.2
      path-case: 3.0.4
      sentence-case: 3.0.4
      snake-case: 3.0.4
      tslib: 2.3.1
    dev: false

  /char-regex/1.0.2:
    resolution: {integrity: sha512-kWWXztvZ5SBQV+eRgKFeh8q5sLuZY2+8WUIzlxWVTg+oGwY14qylx1KbKzHd8P6ZYkAg0xyIDU9JMHhyJMZ1jw==}
    engines: {node: '>=10'}
    dev: true

  /charenc/0.0.2:
    resolution: {integrity: sha1-wKHS86cJLgN3S/qD8UwPxXkKhmc=}
    dev: false

  /chokidar/3.5.3:
    resolution: {integrity: sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==}
    engines: {node: '>= 8.10.0'}
    dependencies:
      anymatch: 3.1.2
      braces: 3.0.2
      glob-parent: 5.1.2
      is-binary-path: 2.1.0
      is-glob: 4.0.3
      normalize-path: 3.0.0
      readdirp: 3.6.0
    optionalDependencies:
      fsevents: 2.3.2
    dev: false

  /ci-info/3.3.0:
    resolution: {integrity: sha512-riT/3vI5YpVH6/qomlDnJow6TBee2PBKSEpx3O32EGPYbWGIRsIlGRms3Sm74wYE1JMo8RnO04Hb12+v1J5ICw==}
    dev: true

  /cjs-module-lexer/1.2.2:
    resolution: {integrity: sha512-cOU9usZw8/dXIXKtwa8pM0OTJQuJkxMN6w30csNRUerHfeQ5R6U3kkU/FtJeIf3M202OHfY2U8ccInBG7/xogA==}
    dev: true

  /classnames/2.3.1:
    resolution: {integrity: sha512-OlQdbZ7gLfGarSqxesMesDa5uz7KFbID8Kpq/SxIoNGDqY8lSYs0D+hhtBXhcdB3rcbXArFr7vlHheLk1voeNA==}
    dev: false

  /clean-css/5.2.2:
    resolution: {integrity: sha512-/eR8ru5zyxKzpBLv9YZvMXgTSSQn7AdkMItMYynsFgGwTveCRVam9IUPFloE85B4vAIj05IuKmmEoV7/AQjT0w==}
    engines: {node: '>= 10.0'}
    dependencies:
      source-map: 0.6.1
    dev: true

  /cli-color/2.0.1:
    resolution: {integrity: sha512-eBbxZF6fqPUNnf7CLAFOersUnyYzv83tHFLSlts+OAHsNendaqv2tHCq+/MO+b3Y+9JeoUlIvobyxG/Z8GNeOg==}
    engines: {node: '>=0.10'}
    dependencies:
      d: 1.0.1
      es5-ext: 0.10.53
      es6-iterator: 2.0.3
      memoizee: 0.4.15
      timers-ext: 0.1.7
    dev: false

  /cliui/6.0.0:
    resolution: {integrity: sha512-t6wbgtoCXvAzst7QgXxJYqPt0usEfbgQdftEPbLL/cvv6HPE5VgvqCuAIDR0NgU52ds6rFwqrgakNLrHEjCbrQ==}
    dependencies:
      string-width: 4.2.3
      strip-ansi: 6.0.1
      wrap-ansi: 6.2.0
    dev: false

  /cliui/7.0.4:
    resolution: {integrity: sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==}
    dependencies:
      string-width: 4.2.3
      strip-ansi: 6.0.1
      wrap-ansi: 7.0.0

  /clone/1.0.4:
    resolution: {integrity: sha1-2jCcwmPfFZlMaIypAheco8fNfH4=}
    engines: {node: '>=0.8'}
    dev: false

  /co/4.6.0:
    resolution: {integrity: sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ=}
    engines: {iojs: '>= 1.0.0', node: '>= 0.12.0'}
    dev: true

  /codepage/1.15.0:
    resolution: {integrity: sha512-3g6NUTPd/YtuuGrhMnOMRjFc+LJw/bnMp3+0r/Wcz3IXUuCosKRJvMphm5+Q+bvTVGcJJuRvVLuYba+WojaFaA==}
    engines: {node: '>=0.8'}
    dev: false

  /collect-v8-coverage/1.0.1:
    resolution: {integrity: sha512-iBPtljfCNcTKNAto0KEtDfZ3qzjJvqE3aTGZsbhjSBlorqpXJlaWWtPO35D+ZImoC3KWejX64o+yPGxhWSTzfg==}
    dev: true

  /color-convert/1.9.3:
    resolution: {integrity: sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==}
    dependencies:
      color-name: 1.1.3
    dev: true

  /color-convert/2.0.1:
    resolution: {integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==}
    engines: {node: '>=7.0.0'}
    dependencies:
      color-name: 1.1.4

  /color-name/1.1.3:
    resolution: {integrity: sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=}
    dev: true

  /color-name/1.1.4:
    resolution: {integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==}

  /combined-stream/1.0.8:
    resolution: {integrity: sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==}
    engines: {node: '>= 0.8'}
    dependencies:
      delayed-stream: 1.0.0
    dev: true

  /commander/2.20.3:
    resolution: {integrity: sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==}

  /commander/5.1.0:
    resolution: {integrity: sha512-P0CysNDQ7rtVw4QIQtm+MRxV66vKFSvlsQvGYXZWR3qFU0jlMKHZZZgw8e+8DSah4UDKMqnknRDQz+xuQXQ/Zg==}
    engines: {node: '>= 6'}
    dev: false

  /commander/8.3.0:
    resolution: {integrity: sha512-OkTL9umf+He2DZkUq8f8J9of7yL6RJKI24dVITBmNfZBmri9zYZQrKkuXiKhyfPSu8tUhnVBB1iKXevvnlR4Ww==}
    engines: {node: '>= 12'}
    dev: true

  /compress-commons/4.1.1:
    resolution: {integrity: sha512-QLdDLCKNV2dtoTorqgxngQCMA+gWXkM/Nwu7FpeBhk/RdkzimqC3jueb/FDmaZeXh+uby1jkBqE3xArsLBE5wQ==}
    engines: {node: '>= 10'}
    dependencies:
      buffer-crc32: 0.2.13
      crc32-stream: 4.0.2
      normalize-path: 3.0.0
      readable-stream: 3.6.0
    dev: false

  /concat-map/0.0.1:
    resolution: {integrity: sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=}

  /concat-stream/1.6.2:
    resolution: {integrity: sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==}
    engines: {'0': node >= 0.8}
    dependencies:
      buffer-from: 1.1.2
      inherits: 2.0.4
      readable-stream: 2.3.7
      typedarray: 0.0.6
    dev: false

  /confusing-browser-globals/1.0.11:
    resolution: {integrity: sha512-JsPKdmh8ZkmnHxDk55FZ1TqVLvEQTvoByJZRN9jzI0UjxK/QgAmsphz7PGtqgPieQZ/CQcHWXCR7ATDNhGe+YA==}
    dev: true

  /constant-case/3.0.4:
    resolution: {integrity: sha512-I2hSBi7Vvs7BEuJDr5dDHfzb/Ruj3FyvFyh7KLilAjNQw3Be+xgqUBA2W6scVEcL0hL1dwPRtIqEPVUCKkSsyQ==}
    dependencies:
      no-case: 3.0.4
      tslib: 2.3.1
      upper-case: 2.0.2
    dev: false

  /constructs/10.0.51:
    resolution: {integrity: sha512-iVpyfdXCvUeGROv6S/+sAh2zKdnTClvPJsLU13rqgObi2aIUNak1sa68bOQLxd2D5XjgEaB511WCFcI6UZSvpQ==}
    engines: {node: '>= 12.7.0'}
    dev: false

  /convert-source-map/1.8.0:
    resolution: {integrity: sha512-+OQdjP49zViI/6i7nIJpA8rAl4sV/JdPfU9nZs3VqOwGIgizICvuN2ru6fMd+4llL0tar18UYJXfZ/TWtmhUjA==}
    dependencies:
      safe-buffer: 5.1.2

  /cookie/0.4.2:
    resolution: {integrity: sha512-aSWTXFzaKWkvHO1Ny/s+ePFpvKsPnjc551iI41v3ny/ow6tBG5Vd+FuqGNhh1LxOmVzOlGUriIlOaokOvhaStA==}
    engines: {node: '>= 0.6'}
    dev: false

  /core-js-compat/3.20.3:
    resolution: {integrity: sha512-c8M5h0IkNZ+I92QhIpuSijOxGAcj3lgpsWdkCqmUTZNwidujF4r3pi6x1DCN+Vcs5qTS2XWWMfWSuCqyupX8gw==}
    dependencies:
      browserslist: 4.19.1
      semver: 7.0.0
    dev: true

  /core-js-pure/3.20.3:
    resolution: {integrity: sha512-Q2H6tQ5MtPtcC7f3HxJ48i4Q7T9ybPKgvWyuH7JXIoNa2pm0KuBnycsET/qw1SLLZYfbsbrZQNMeIOClb+6WIA==}
    requiresBuild: true
    dev: true

  /core-js/2.6.12:
    resolution: {integrity: sha512-Kb2wC0fvsWfQrgk8HU5lW6U/Lcs8+9aaYcy4ZFc6DDlo4nZ7n70dEgE5rtR0oG6ufKDUnrwfWL1mXR5ljDatrQ==}
    deprecated: core-js@<3.4 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.
    requiresBuild: true
    dev: false

  /core-util-is/1.0.3:
    resolution: {integrity: sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==}
    dev: false

  /cosmiconfig/7.0.1:
    resolution: {integrity: sha512-a1YWNUV2HwGimB7dU2s1wUMurNKjpx60HxBB6xUM8Re+2s1g1IIfJvFR0/iCF+XHdE0GMTKTuLR32UQff4TEyQ==}
    engines: {node: '>=10'}
    dependencies:
      '@types/parse-json': 4.0.0
      import-fresh: 3.3.0
      parse-json: 5.2.0
      path-type: 4.0.0
      yaml: 1.10.2
    dev: true

  /crc-32/1.2.0:
    resolution: {integrity: sha512-1uBwHxF+Y/4yF5G48fwnKq6QsIXheor3ZLPT80yGBV1oEUwpPojlEhQbWKVw1VwcTQyMGHK1/XMmTjmlsmTTGA==}
    engines: {node: '>=0.8'}
    hasBin: true
    dependencies:
      exit-on-epipe: 1.0.1
      printj: 1.1.2
    dev: false

  /crc32-stream/4.0.2:
    resolution: {integrity: sha512-DxFZ/Hk473b/muq1VJ///PMNLj0ZMnzye9thBpmjpJKCc5eMgB95aK8zCGrGfQ90cWo561Te6HK9D+j4KPdM6w==}
    engines: {node: '>= 10'}
    dependencies:
      crc-32: 1.2.0
      readable-stream: 3.6.0
    dev: false

  /create-require/1.1.1:
    resolution: {integrity: sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==}
    dev: true

  /cross-spawn/7.0.3:
    resolution: {integrity: sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==}
    engines: {node: '>= 8'}
    dependencies:
      path-key: 3.1.1
      shebang-command: 2.0.0
      which: 2.0.2
    dev: true

  /crypt/0.0.2:
    resolution: {integrity: sha1-iNf/fsDfuG9xPch7u0LQRNPmxBs=}
    dev: false

  /crypto-js/4.1.1:
    resolution: {integrity: sha512-o2JlM7ydqd3Qk9CA0L4NL6mTzU2sdx96a+oOfPu8Mkl/PK51vSyoi8/rQ8NknZtk44vq15lmhAj9CIAGwgeWKw==}
    dev: false

  /cssom/0.3.8:
    resolution: {integrity: sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg==}
    dev: true

  /cssom/0.4.4:
    resolution: {integrity: sha512-p3pvU7r1MyyqbTk+WbNJIgJjG2VmTIaB10rI93LzVPrmDJKkzKYMtxxyAvQXR/NS6otuzveI7+7BBq3SjBS2mw==}
    dev: true

  /cssstyle/2.3.0:
    resolution: {integrity: sha512-AZL67abkUzIuvcHqk7c09cezpGNcxUxU4Ioi/05xHk4DQeTkWmGYftIE6ctU6AEt+Gn4n1lDStOtj7FKycP71A==}
    engines: {node: '>=8'}
    dependencies:
      cssom: 0.3.8
    dev: true

  /csstype/3.0.10:
    resolution: {integrity: sha512-2u44ZG2OcNUO9HDp/Jl8C07x6pU/eTR3ncV91SiK3dhG9TWvRVsCoJw14Ckx5DgWkzGA3waZWO3d7pgqpUI/XA==}

  /d/1.0.1:
    resolution: {integrity: sha512-m62ShEObQ39CfralilEQRjH6oAMtNCV1xJyEx5LpRYUVN+EviphDgUc/F3hnYbADmkiNs67Y+3ylmlG7Lnu+FA==}
    dependencies:
      es5-ext: 0.10.53
      type: 1.2.0
    dev: false

  /d3-array/2.12.1:
    resolution: {integrity: sha512-B0ErZK/66mHtEsR1TkPEEkwdy+WDesimkM5gpZr5Dsg54BiTA5RXtYW5qTLIAcekaS9xfZrzBLF/OAkB3Qn1YQ==}
    dependencies:
      internmap: 1.0.1
    dev: false

  /d3-axis/2.1.0:
    resolution: {integrity: sha512-z/G2TQMyuf0X3qP+Mh+2PimoJD41VOCjViJzT0BHeL/+JQAofkiWZbWxlwFGb1N8EN+Cl/CW+MUKbVzr1689Cw==}
    dev: false

  /d3-brush/2.1.0:
    resolution: {integrity: sha512-cHLLAFatBATyIKqZOkk/mDHUbzne2B3ZwxkzMHvFTCZCmLaXDpZRihQSn8UNXTkGD/3lb/W2sQz0etAftmHMJQ==}
    dependencies:
      d3-dispatch: 2.0.0
      d3-drag: 2.0.0
      d3-interpolate: 2.0.1
      d3-selection: 2.0.0
      d3-transition: 2.0.0_d3-selection@2.0.0
    dev: false

  /d3-chord/2.0.0:
    resolution: {integrity: sha512-D5PZb7EDsRNdGU4SsjQyKhja8Zgu+SHZfUSO5Ls8Wsn+jsAKUUGkcshLxMg9HDFxG3KqavGWaWkJ8EpU8ojuig==}
    dependencies:
      d3-path: 2.0.0
    dev: false

  /d3-color/1.4.1:
    resolution: {integrity: sha512-p2sTHSLCJI2QKunbGb7ocOh7DgTAn8IrLx21QRc/BSnodXM4sv6aLQlnfpvehFMLZEfBc6g9pH9SWQccFYfJ9Q==}
    dev: false

  /d3-color/2.0.0:
    resolution: {integrity: sha512-SPXi0TSKPD4g9tw0NMZFnR95XVgUZiBH+uUTqQuDu1OsE2zomHU7ho0FISciaPvosimixwHFl3WHLGabv6dDgQ==}
    dev: false

  /d3-contour/2.0.0:
    resolution: {integrity: sha512-9unAtvIaNk06UwqBmvsdHX7CZ+NPDZnn8TtNH1myW93pWJkhsV25JcgnYAu0Ck5Veb1DHiCv++Ic5uvJ+h50JA==}
    dependencies:
      d3-array: 2.12.1
    dev: false

  /d3-delaunay/5.3.0:
    resolution: {integrity: sha512-amALSrOllWVLaHTnDLHwMIiz0d1bBu9gZXd1FiLfXf8sHcX9jrcj81TVZOqD4UX7MgBZZ07c8GxzEgBpJqc74w==}
    dependencies:
      delaunator: 4.0.1
    dev: false

  /d3-dispatch/1.0.6:
    resolution: {integrity: sha512-fVjoElzjhCEy+Hbn8KygnmMS7Or0a9sI2UzGwoB7cCtvI1XpVN9GpoYlnb3xt2YV66oXYb1fLJ8GMvP4hdU1RA==}
    dev: false

  /d3-dispatch/2.0.0:
    resolution: {integrity: sha512-S/m2VsXI7gAti2pBoLClFFTMOO1HTtT0j99AuXLoGFKO6deHDdnv6ZGTxSTTUTgO1zVcv82fCOtDjYK4EECmWA==}
    dev: false

  /d3-drag/2.0.0:
    resolution: {integrity: sha512-g9y9WbMnF5uqB9qKqwIIa/921RYWzlUDv9Jl1/yONQwxbOfszAWTCm8u7HOTgJgRDXiRZN56cHT9pd24dmXs8w==}
    dependencies:
      d3-dispatch: 2.0.0
      d3-selection: 2.0.0
    dev: false

  /d3-dsv/2.0.0:
    resolution: {integrity: sha512-E+Pn8UJYx9mViuIUkoc93gJGGYut6mSDKy2+XaPwccwkRGlR+LO97L2VCCRjQivTwLHkSnAJG7yo00BWY6QM+w==}
    hasBin: true
    dependencies:
      commander: 2.20.3
      iconv-lite: 0.4.24
      rw: 1.3.3
    dev: false

  /d3-ease/1.0.7:
    resolution: {integrity: sha512-lx14ZPYkhNx0s/2HX5sLFUI3mbasHjSSpwO/KaaNACweVwxUruKyWVcb293wMv1RqTPZyZ8kSZ2NogUZNcLOFQ==}
    dev: false

  /d3-ease/2.0.0:
    resolution: {integrity: sha512-68/n9JWarxXkOWMshcT5IcjbB+agblQUaIsbnXmrzejn2O82n3p2A9R2zEB9HIEFWKFwPAEDDN8gR0VdSAyyAQ==}
    dev: false

  /d3-fetch/2.0.0:
    resolution: {integrity: sha512-TkYv/hjXgCryBeNKiclrwqZH7Nb+GaOwo3Neg24ZVWA3MKB+Rd+BY84Nh6tmNEMcjUik1CSUWjXYndmeO6F7sw==}
    dependencies:
      d3-dsv: 2.0.0
    dev: false

  /d3-force/2.1.1:
    resolution: {integrity: sha512-nAuHEzBqMvpFVMf9OX75d00OxvOXdxY+xECIXjW6Gv8BRrXu6gAWbv/9XKrvfJ5i5DCokDW7RYE50LRoK092ew==}
    dependencies:
      d3-dispatch: 2.0.0
      d3-quadtree: 2.0.0
      d3-timer: 2.0.0
    dev: false

  /d3-format/2.0.0:
    resolution: {integrity: sha512-Ab3S6XuE/Q+flY96HXT0jOXcM4EAClYFnRGY5zsjRGNy6qCYrQsMffs7cV5Q9xejb35zxW5hf/guKw34kvIKsA==}
    dev: false

  /d3-geo/2.0.2:
    resolution: {integrity: sha512-8pM1WGMLGFuhq9S+FpPURxic+gKzjluCD/CHTuUF3mXMeiCo0i6R0tO1s4+GArRFde96SLcW/kOFRjoAosPsFA==}
    dependencies:
      d3-array: 2.12.1
    dev: false

  /d3-hierarchy/2.0.0:
    resolution: {integrity: sha512-SwIdqM3HxQX2214EG9GTjgmCc/mbSx4mQBn+DuEETubhOw6/U3fmnji4uCVrmzOydMHSO1nZle5gh6HB/wdOzw==}
    dev: false

  /d3-interpolate/1.4.0:
    resolution: {integrity: sha512-V9znK0zc3jOPV4VD2zZn0sDhZU3WAE2bmlxdIwwQPPzPjvyLkd8B3JUVdS1IDUFDkWZ72c9qnv1GK2ZagTZ8EA==}
    dependencies:
      d3-color: 1.4.1
    dev: false

  /d3-interpolate/2.0.1:
    resolution: {integrity: sha512-c5UhwwTs/yybcmTpAVqwSFl6vrQ8JZJoT5F7xNFK9pymv5C0Ymcc9/LIJHtYIggg/yS9YHw8i8O8tgb9pupjeQ==}
    dependencies:
      d3-color: 2.0.0
    dev: false

  /d3-path/1.0.9:
    resolution: {integrity: sha512-VLaYcn81dtHVTjEHd8B+pbe9yHWpXKZUC87PzoFmsFrJqgFwDe/qxfp5MlfsfM1V5E/iVt0MmEbWQ7FVIXh/bg==}
    dev: false

  /d3-path/2.0.0:
    resolution: {integrity: sha512-ZwZQxKhBnv9yHaiWd6ZU4x5BtCQ7pXszEV9CU6kRgwIQVQGLMv1oiL4M+MK/n79sYzsj+gcgpPQSctJUsLN7fA==}
    dev: false

  /d3-polygon/2.0.0:
    resolution: {integrity: sha512-MsexrCK38cTGermELs0cO1d79DcTsQRN7IWMJKczD/2kBjzNXxLUWP33qRF6VDpiLV/4EI4r6Gs0DAWQkE8pSQ==}
    dev: false

  /d3-quadtree/2.0.0:
    resolution: {integrity: sha512-b0Ed2t1UUalJpc3qXzKi+cPGxeXRr4KU9YSlocN74aTzp6R/Ud43t79yLLqxHRWZfsvWXmbDWPpoENK1K539xw==}
    dev: false

  /d3-random/2.2.2:
    resolution: {integrity: sha512-0D9P8TRj6qDAtHhRQn6EfdOtHMfsUWanl3yb/84C4DqpZ+VsgfI5iTVRNRbELCfNvRfpMr8OrqqUTQ6ANGCijw==}
    dev: false

  /d3-sankey/0.12.3:
    resolution: {integrity: sha512-nQhsBRmM19Ax5xEIPLMY9ZmJ/cDvd1BG3UVvt5h3WRxKg5zGRbvnteTyWAbzeSvlh3tW7ZEmq4VwR5mB3tutmQ==}
    dependencies:
      d3-array: 2.12.1
      d3-shape: 1.3.7
    dev: false

  /d3-scale-chromatic/2.0.0:
    resolution: {integrity: sha512-LLqy7dJSL8yDy7NRmf6xSlsFZ6zYvJ4BcWFE4zBrOPnQERv9zj24ohnXKRbyi9YHnYV+HN1oEO3iFK971/gkzA==}
    dependencies:
      d3-color: 2.0.0
      d3-interpolate: 2.0.1
    dev: false

  /d3-scale/3.3.0:
    resolution: {integrity: sha512-1JGp44NQCt5d1g+Yy+GeOnZP7xHo0ii8zsQp6PGzd+C1/dl0KGsp9A7Mxwp+1D1o4unbTTxVdU/ZOIEBoeZPbQ==}
    dependencies:
      d3-array: 2.12.1
      d3-format: 2.0.0
      d3-interpolate: 2.0.1
      d3-time: 2.1.1
      d3-time-format: 3.0.0
    dev: false

  /d3-selection/1.4.2:
    resolution: {integrity: sha512-SJ0BqYihzOjDnnlfyeHT0e30k0K1+5sR3d5fNueCNeuhZTnGw4M4o8mqJchSwgKMXCNFo+e2VTChiSJ0vYtXkg==}
    dev: false

  /d3-selection/2.0.0:
    resolution: {integrity: sha512-XoGGqhLUN/W14NmaqcO/bb1nqjDAw5WtSYb2X8wiuQWvSZUsUVYsOSkOybUrNvcBjaywBdYPy03eXHMXjk9nZA==}
    dev: false

  /d3-shape/1.3.7:
    resolution: {integrity: sha512-EUkvKjqPFUAZyOlhY5gzCxCeI0Aep04LwIRpsZ/mLFelJiUfnK56jo5JMDSE7yyP2kLSb6LtF+S5chMk7uqPqw==}
    dependencies:
      d3-path: 1.0.9
    dev: false

  /d3-shape/2.1.0:
    resolution: {integrity: sha512-PnjUqfM2PpskbSLTJvAzp2Wv4CZsnAgTfcVRTwW03QR3MkXF8Uo7B1y/lWkAsmbKwuecto++4NlsYcvYpXpTHA==}
    dependencies:
      d3-path: 2.0.0
    dev: false

  /d3-time-format/3.0.0:
    resolution: {integrity: sha512-UXJh6EKsHBTjopVqZBhFysQcoXSv/5yLONZvkQ5Kk3qbwiUYkdX17Xa1PT6U1ZWXGGfB1ey5L8dKMlFq2DO0Ag==}
    dependencies:
      d3-time: 2.1.1
    dev: false

  /d3-time/2.1.1:
    resolution: {integrity: sha512-/eIQe/eR4kCQwq7yxi7z4c6qEXf2IYGcjoWB5OOQy4Tq9Uv39/947qlDcN2TLkiTzQWzvnsuYPB9TrWaNfipKQ==}
    dependencies:
      d3-array: 2.12.1
    dev: false

  /d3-timer/1.0.10:
    resolution: {integrity: sha512-B1JDm0XDaQC+uvo4DT79H0XmBskgS3l6Ve+1SBCfxgmtIb1AVrPIoqd+nPSv+loMX8szQ0sVUhGngL7D5QPiXw==}
    dev: false

  /d3-timer/2.0.0:
    resolution: {integrity: sha512-TO4VLh0/420Y/9dO3+f9abDEFYeCUr2WZRlxJvbp4HPTQcSylXNiL6yZa9FIUvV1yRiFufl1bszTCLDqv9PWNA==}
    dev: false

  /d3-transition/1.3.2:
    resolution: {integrity: sha512-sc0gRU4PFqZ47lPVHloMn9tlPcv8jxgOQg+0zjhfZXMQuvppjG6YuwdMBE0TuqCZjeJkLecku/l9R0JPcRhaDA==}
    dependencies:
      d3-color: 1.4.1
      d3-dispatch: 1.0.6
      d3-ease: 1.0.7
      d3-interpolate: 1.4.0
      d3-selection: 1.4.2
      d3-timer: 1.0.10
    dev: false

  /d3-transition/2.0.0_d3-selection@2.0.0:
    resolution: {integrity: sha512-42ltAGgJesfQE3u9LuuBHNbGrI/AJjNL2OAUdclE70UE6Vy239GCBEYD38uBPoLeNsOhFStGpPI0BAOV+HMxog==}
    peerDependencies:
      d3-selection: '2'
    dependencies:
      d3-color: 2.0.0
      d3-dispatch: 2.0.0
      d3-ease: 2.0.0
      d3-interpolate: 2.0.1
      d3-selection: 2.0.0
      d3-timer: 2.0.0
    dev: false

  /d3-zoom/2.0.0:
    resolution: {integrity: sha512-fFg7aoaEm9/jf+qfstak0IYpnesZLiMX6GZvXtUSdv8RH2o4E2qeelgdU09eKS6wGuiGMfcnMI0nTIqWzRHGpw==}
    dependencies:
      d3-dispatch: 2.0.0
      d3-drag: 2.0.0
      d3-interpolate: 2.0.1
      d3-selection: 2.0.0
      d3-transition: 2.0.0_d3-selection@2.0.0
    dev: false

  /d3/6.7.0:
    resolution: {integrity: sha512-hNHRhe+yCDLUG6Q2LwvR/WdNFPOJQ5VWqsJcwIYVeI401+d2/rrCjxSXkiAdIlpx7/73eApFB4Olsmh3YN7a6g==}
    dependencies:
      d3-array: 2.12.1
      d3-axis: 2.1.0
      d3-brush: 2.1.0
      d3-chord: 2.0.0
      d3-color: 2.0.0
      d3-contour: 2.0.0
      d3-delaunay: 5.3.0
      d3-dispatch: 2.0.0
      d3-drag: 2.0.0
      d3-dsv: 2.0.0
      d3-ease: 2.0.0
      d3-fetch: 2.0.0
      d3-force: 2.1.1
      d3-format: 2.0.0
      d3-geo: 2.0.2
      d3-hierarchy: 2.0.0
      d3-interpolate: 2.0.1
      d3-path: 2.0.0
      d3-polygon: 2.0.0
      d3-quadtree: 2.0.0
      d3-random: 2.2.2
      d3-scale: 3.3.0
      d3-scale-chromatic: 2.0.0
      d3-selection: 2.0.0
      d3-shape: 2.1.0
      d3-time: 2.1.1
      d3-time-format: 3.0.0
      d3-timer: 2.0.0
      d3-transition: 2.0.0_d3-selection@2.0.0
      d3-zoom: 2.0.0
    dev: false

  /damerau-levenshtein/1.0.8:
    resolution: {integrity: sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==}
    dev: true

  /dash-ast/2.0.1:
    resolution: {integrity: sha512-5TXltWJGc+RdnabUGzhRae1TRq6m4gr+3K2wQX0is5/F2yS6MJXJvLyI3ErAnsAXuJoGqvfVD5icRgim07DrxQ==}
    dev: false

  /data-uri-to-buffer/3.0.1:
    resolution: {integrity: sha512-WboRycPNsVw3B3TL559F7kuBUM4d8CgMEvk6xEJlOp7OBPjt6G7z8WMWlD2rOFZLk6OYfFIUGsCOWzcQH9K2og==}
    engines: {node: '>= 6'}
    dev: false

  /data-urls/2.0.0:
    resolution: {integrity: sha512-X5eWTSXO/BJmpdIKCRuKUgSCgAN0OwliVK3yPKbwIWU1Tdw5BRajxlzMidvh+gwko9AfQ9zIj52pzF91Q3YAvQ==}
    engines: {node: '>=10'}
    dependencies:
      abab: 2.0.5
      whatwg-mimetype: 2.3.0
      whatwg-url: 8.7.0
    dev: true

  /debug/2.6.9:
    resolution: {integrity: sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==}
    dependencies:
      ms: 2.0.0
    dev: true

  /debug/3.2.7:
    resolution: {integrity: sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==}
    dependencies:
      ms: 2.1.3
    dev: true

  /debug/4.3.3:
    resolution: {integrity: sha512-/zxw5+vh1Tfv+4Qn7a5nsbcJKPaSvCDhojn6FEl9vupwK2VCSDtEiEtqr8DFtzYFOdz63LBkxec7DYuc2jon6Q==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true
    dependencies:
      ms: 2.1.2

  /decamelize/1.2.0:
    resolution: {integrity: sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=}
    engines: {node: '>=0.10.0'}
    dev: false

  /decamelize/5.0.1:
    resolution: {integrity: sha512-VfxadyCECXgQlkoEAjeghAr5gY3Hf+IKjKb+X8tGVDtveCjN+USwprd2q3QXBR9T1+x2DG0XZF5/w+7HAtSaXA==}
    engines: {node: '>=10'}
    dev: false

  /decimal.js/10.3.1:
    resolution: {integrity: sha512-V0pfhfr8suzyPGOx3nmq4aHqabehUZn6Ch9kyFpV79TGDTWFmHqUqXdabR7QHqxzrYolF4+tVmJhUG4OURg5dQ==}
    dev: true

  /dedent/0.7.0:
    resolution: {integrity: sha1-JJXduvbrh0q7Dhvp3yLS5aVEMmw=}
    dev: true

  /deep-equal/1.1.1:
    resolution: {integrity: sha512-yd9c5AdiqVcR+JjcwUQb9DkhJc8ngNr0MahEBGvDiJw8puWab2yZlh+nkasOnZP+EGTAP6rRp2JzJhJZzvNF8g==}
    dependencies:
      is-arguments: 1.1.1
      is-date-object: 1.0.5
      is-regex: 1.1.4
      object-is: 1.1.5
      object-keys: 1.1.1
      regexp.prototype.flags: 1.4.1
    dev: false

  /deep-is/0.1.4:
    resolution: {integrity: sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==}

  /deepmerge/4.2.2:
    resolution: {integrity: sha512-FJ3UgI4gIl+PHZm53knsuSFpE+nESMr7M4v9QcgB7S63Kj/6WqMiFQJpBBYz1Pt+66bZpP3Q7Lye0Oo9MPKEdg==}
    engines: {node: '>=0.10.0'}

  /define-properties/1.1.3:
    resolution: {integrity: sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==}
    engines: {node: '>= 0.4'}
    dependencies:
      object-keys: 1.1.1

  /degenerator/3.0.1:
    resolution: {integrity: sha512-LFsIFEeLPlKvAKXu7j3ssIG6RT0TbI7/GhsqrI0DnHASEQjXQ0LUSYcjJteGgRGmZbl1TnMSxpNQIAiJ7Du5TQ==}
    engines: {node: '>= 6'}
    dependencies:
      ast-types: 0.13.4
      escodegen: 1.14.3
      esprima: 4.0.1
      vm2: 3.9.5
    dev: false

  /delaunator/4.0.1:
    resolution: {integrity: sha512-WNPWi1IRKZfCt/qIDMfERkDp93+iZEmOxN2yy4Jg+Xhv8SLk2UTqqbe1sfiipn0and9QrE914/ihdx82Y/Giag==}
    dev: false

  /delayed-stream/1.0.0:
    resolution: {integrity: sha1-3zrhmayt+31ECqrgsp4icrJOxhk=}
    engines: {node: '>=0.4.0'}
    dev: true

  /depd/1.1.2:
    resolution: {integrity: sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=}
    engines: {node: '>= 0.6'}
    dev: false

  /detect-newline/3.1.0:
    resolution: {integrity: sha512-TLz+x/vEXm/Y7P7wn1EJFNLxYpUD4TgMosxY6fAVJUnJMbupHBOncxyWUG9OpTaH9EBD7uFI5LfEgmMOc54DsA==}
    engines: {node: '>=8'}
    dev: true

  /detect-node-es/1.1.0:
    resolution: {integrity: sha512-ypdmJU/TbBby2Dxibuv7ZLW3Bs1QEmM7nHjEANfohJLvE0XVujisn1qPJcZxg+qDucsr+bP6fLD1rPS3AhJ7EQ==}
    dev: false

  /dfa/1.2.0:
    resolution: {integrity: sha512-ED3jP8saaweFTjeGX8HQPjeC1YYyZs98jGNZx6IiBvxW7JG5v492kamAQB3m2wop07CvU/RQmzcKr6bgcC5D/Q==}
    dev: false

  /diff-sequences/27.4.0:
    resolution: {integrity: sha512-YqiQzkrsmHMH5uuh8OdQFU9/ZpADnwzml8z0O5HvRNda+5UZsaX/xN+AAxfR2hWq1Y7HZnAzO9J5lJXOuDz2Ww==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dev: true

  /diff/3.5.0:
    resolution: {integrity: sha512-A46qtFgd+g7pDZinpnwiRJtxbC1hpgf0uzP3iG89scHk0AUC7A1TGxf5OiiOUv/JMZR8GOt8hL900hV0bOy5xA==}
    engines: {node: '>=0.3.1'}
    dev: false

  /diff/4.0.2:
    resolution: {integrity: sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==}
    engines: {node: '>=0.3.1'}
    dev: true

  /diff/5.0.0:
    resolution: {integrity: sha512-/VTCrvm5Z0JGty/BWHljh+BAiw3IK+2j87NGMu8Nwc/f48WoDAC395uomO9ZD117ZOBaHmkX1oyLvkVM/aIT3w==}
    engines: {node: '>=0.3.1'}
    dev: false

  /difflib/0.2.4:
    resolution: {integrity: sha1-teMDYabbAjF21WKJLbhZQKcY9H4=}
    dependencies:
      heap: 0.2.7
    dev: false

  /dijkstrajs/1.0.2:
    resolution: {integrity: sha512-QV6PMaHTCNmKSeP6QoXhVTw9snc9VD8MulTT0Bd99Pacp4SS1cjcrYPgBPmibqKVtMJJfqC6XvOXgPMEEPH/fg==}
    dev: false

  /dir-glob/3.0.1:
    resolution: {integrity: sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==}
    engines: {node: '>=8'}
    dependencies:
      path-type: 4.0.0
    dev: true

  /doctrine/2.1.0:
    resolution: {integrity: sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==}
    engines: {node: '>=0.10.0'}
    dependencies:
      esutils: 2.0.3
    dev: true

  /doctrine/3.0.0:
    resolution: {integrity: sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==}
    engines: {node: '>=6.0.0'}
    dependencies:
      esutils: 2.0.3
    dev: true

  /domexception/2.0.1:
    resolution: {integrity: sha512-yxJ2mFy/sibVQlu5qHjOkf9J3K6zgmCxgJ94u2EdvDOV09H+32LtRswEcUsmUWN72pVLOEnTSRaIVVzVQgS0dg==}
    engines: {node: '>=8'}
    dependencies:
      webidl-conversions: 5.0.0
    dev: true

  /dot-case/3.0.4:
    resolution: {integrity: sha512-Kv5nKlh6yRrdrGvxeJ2e5y2eRUpkUosIW4A2AS38zwSz27zu7ufDwQPi5Jhs3XAlGNetl3bmnGhQsMtkKJnj3w==}
    dependencies:
      no-case: 3.0.4
      tslib: 2.3.1

  /dotenv-expand/5.1.0:
    resolution: {integrity: sha512-YXQl1DSa4/PQyRfgrv6aoNjhasp/p4qs9FjJ4q4cQk+8m4r6k4ZSiEyytKG8f8W9gi8WsQtIObNmKd+tMzNTmA==}
    dev: true

  /dotenv/10.0.0:
    resolution: {integrity: sha512-rlBi9d8jpv9Sf1klPjNfFAuWDjKLwTIJJ/VxtoTwIR6hnZxcEOQCZg2oIL3MWBYw5GpUDKOEnND7LXTbIpQ03Q==}
    engines: {node: '>=10'}
    dev: true

  /dreamopt/0.8.0:
    resolution: {integrity: sha1-W8yAvnCX5F/EicNCQFq2gUCowdk=}
    engines: {node: '>=0.4.0'}
    dependencies:
      wordwrap: 1.0.0
    dev: false

  /duplexer2/0.1.4:
    resolution: {integrity: sha1-ixLauHjA1p4+eJEFFmKjL8a93ME=}
    dependencies:
      readable-stream: 2.3.7
    dev: false

  /ejs/3.1.6:
    resolution: {integrity: sha512-9lt9Zse4hPucPkoP7FHDF0LQAlGyF9JVpnClFLFH3aSSbxmyoqINRpp/9wePWJTUl4KOQwRL72Iw3InHPDkoGw==}
    engines: {node: '>=0.10.0'}
    hasBin: true
    dependencies:
      jake: 10.8.2
    dev: true

  /electron-to-chromium/1.4.48:
    resolution: {integrity: sha512-RT3SEmpv7XUA+tKXrZGudAWLDpa7f8qmhjcLaM6OD/ERxjQ/zAojT8/Vvo0BSzbArkElFZ1WyZ9FuwAYbkdBNA==}
    dev: true

  /emittery/0.8.1:
    resolution: {integrity: sha512-uDfvUjVrfGJJhymx/kz6prltenw1u7WrCg1oa94zYY8xxVpLLUu045LAT0dhDZdXG58/EpPL/5kA180fQ/qudg==}
    engines: {node: '>=10'}
    dev: true

  /emoji-regex/8.0.0:
    resolution: {integrity: sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==}

  /emoji-regex/9.2.2:
    resolution: {integrity: sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==}
    dev: true

  /encode-utf8/1.0.3:
    resolution: {integrity: sha512-ucAnuBEhUK4boH2HjVYG5Q2mQyPorvv0u/ocS+zhdw0S8AlHYY+GOFhP1Gio5z4icpP2ivFSvhtFjQi8+T9ppw==}
    dev: false

  /end-of-stream/1.4.4:
    resolution: {integrity: sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==}
    dependencies:
      once: 1.4.0
    dev: false

  /entities/2.2.0:
    resolution: {integrity: sha512-p92if5Nz619I0w+akJrLZH0MX0Pb5DX39XOwQTtXSdQQOaYH03S1uIQp4mhOZtAXrxq4ViO67YTiLBo2638o9A==}
    dev: false

  /error-ex/1.3.2:
    resolution: {integrity: sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==}
    dependencies:
      is-arrayish: 0.2.1
    dev: true

  /es-abstract/1.19.1:
    resolution: {integrity: sha512-2vJ6tjA/UfqLm2MPs7jxVybLoB8i1t1Jd9R3kISld20sIxPcTbLuggQOUxeWeAvIUkduv/CfMjuh4WmiXr2v9w==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      es-to-primitive: 1.2.1
      function-bind: 1.1.1
      get-intrinsic: 1.1.1
      get-symbol-description: 1.0.0
      has: 1.0.3
      has-symbols: 1.0.2
      internal-slot: 1.0.3
      is-callable: 1.2.4
      is-negative-zero: 2.0.2
      is-regex: 1.1.4
      is-shared-array-buffer: 1.0.1
      is-string: 1.0.7
      is-weakref: 1.0.2
      object-inspect: 1.12.0
      object-keys: 1.1.1
      object.assign: 4.1.2
      string.prototype.trimend: 1.0.4
      string.prototype.trimstart: 1.0.4
      unbox-primitive: 1.0.1
    dev: true

  /es-to-primitive/1.2.1:
    resolution: {integrity: sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==}
    engines: {node: '>= 0.4'}
    dependencies:
      is-callable: 1.2.4
      is-date-object: 1.0.5
      is-symbol: 1.0.4
    dev: true

  /es5-ext/0.10.53:
    resolution: {integrity: sha512-Xs2Stw6NiNHWypzRTY1MtaG/uJlwCk8kH81920ma8mvN8Xq1gsfhZvpkImLQArw8AHnv8MT2I45J3c0R8slE+Q==}
    dependencies:
      es6-iterator: 2.0.3
      es6-symbol: 3.1.3
      next-tick: 1.0.0
    dev: false

  /es6-iterator/2.0.3:
    resolution: {integrity: sha1-p96IkUGgWpSwhUQDstCg+/qY87c=}
    dependencies:
      d: 1.0.1
      es5-ext: 0.10.53
      es6-symbol: 3.1.3
    dev: false

  /es6-map/0.1.5:
    resolution: {integrity: sha1-kTbgUD3MBqMBaQ8LsU/042TpSfA=}
    dependencies:
      d: 1.0.1
      es5-ext: 0.10.53
      es6-iterator: 2.0.3
      es6-set: 0.1.5
      es6-symbol: 3.1.3
      event-emitter: 0.3.5
    dev: false

  /es6-set/0.1.5:
    resolution: {integrity: sha1-0rPsXU2ADO2BjbU40ol02wpzzLE=}
    dependencies:
      d: 1.0.1
      es5-ext: 0.10.53
      es6-iterator: 2.0.3
      es6-symbol: 3.1.1
      event-emitter: 0.3.5
    dev: false

  /es6-symbol/3.1.1:
    resolution: {integrity: sha1-vwDvT9q2uhtG7Le2KbTH7VcVzHc=}
    dependencies:
      d: 1.0.1
      es5-ext: 0.10.53
    dev: false

  /es6-symbol/3.1.3:
    resolution: {integrity: sha512-NJ6Yn3FuDinBaBRWl/q5X/s4koRHBrgKAu+yGI6JCBeiu3qrcbJhwT2GeR/EXVfylRk8dpQVJoLEFhK+Mu31NA==}
    dependencies:
      d: 1.0.1
      ext: 1.6.0
    dev: false

  /es6-weak-map/2.0.3:
    resolution: {integrity: sha512-p5um32HOTO1kP+w7PRnB+5lQ43Z6muuMuIMffvDN8ZB4GcnjLBV6zGStpbASIMk4DCAvEaamhe2zhyCb/QXXsA==}
    dependencies:
      d: 1.0.1
      es5-ext: 0.10.53
      es6-iterator: 2.0.3
      es6-symbol: 3.1.3
    dev: false

  /esbuild-android-arm64/0.13.15:
    resolution: {integrity: sha512-m602nft/XXeO8YQPUDVoHfjyRVPdPgjyyXOxZ44MK/agewFFkPa8tUo6lAzSWh5Ui5PB4KR9UIFTSBKh/RrCmg==}
    cpu: [arm64]
    os: [android]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-android-arm64/0.14.16:
    resolution: {integrity: sha512-9qRiUXiV0qIa4Dfv+GLKsk/HHOq3U9qh8yZK9iX0awlzLPFb38NJrNTGtb/TeI6AyyZqsGgwLm/JeJ1UtEN9Aw==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [android]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild-darwin-64/0.13.15:
    resolution: {integrity: sha512-ihOQRGs2yyp7t5bArCwnvn2Atr6X4axqPpEdCFPVp7iUj4cVSdisgvEKdNR7yH3JDjW6aQDw40iQFoTqejqxvQ==}
    cpu: [x64]
    os: [darwin]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-darwin-64/0.14.16:
    resolution: {integrity: sha512-1Xa86DpTJFRffA7go0pqUdC0ggxxGxjsrnrvA2nHBVHNf9Ix/cgGuPfxZwf3fRZxDDAT2RdqF5SRZzLYvUCtZQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [darwin]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild-darwin-arm64/0.13.15:
    resolution: {integrity: sha512-i1FZssTVxUqNlJ6cBTj5YQj4imWy3m49RZRnHhLpefFIh0To05ow9DTrXROTE1urGTQCloFUXTX8QfGJy1P8dQ==}
    cpu: [arm64]
    os: [darwin]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-darwin-arm64/0.14.16:
    resolution: {integrity: sha512-a0Tp0tec/s5hYT6OiJ2zvfH/6IfXFCH406yqFfXe5u8Nfo6l6IG33L7nqCYCEPnBLF7oYfZk6Re0VDwpgK18kQ==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [darwin]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild-freebsd-64/0.13.15:
    resolution: {integrity: sha512-G3dLBXUI6lC6Z09/x+WtXBXbOYQZ0E8TDBqvn7aMaOCzryJs8LyVXKY4CPnHFXZAbSwkCbqiPuSQ1+HhrNk7EA==}
    cpu: [x64]
    os: [freebsd]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-freebsd-64/0.14.16:
    resolution: {integrity: sha512-FqEdOphRS5kJ8MFqQ21Y0yducmwcFHmpkceLkup1kpsGChr3PGO7DfzXmF5fECNnMxRpk/jgk7e6nV4zXTau/A==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [freebsd]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild-freebsd-arm64/0.13.15:
    resolution: {integrity: sha512-KJx0fzEDf1uhNOZQStV4ujg30WlnwqUASaGSFPhznLM/bbheu9HhqZ6mJJZM32lkyfGJikw0jg7v3S0oAvtvQQ==}
    cpu: [arm64]
    os: [freebsd]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-freebsd-arm64/0.14.16:
    resolution: {integrity: sha512-4Au4zR0//Df1v6FuWJEMZFRzaF69FvxHgSmKjikq7x6Ect+h4TbJKkblC3eDrfTA8L6l5bB1vhh0dbKq4zBy5Q==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [freebsd]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild-linux-32/0.13.15:
    resolution: {integrity: sha512-ZvTBPk0YWCLMCXiFmD5EUtB30zIPvC5Itxz0mdTu/xZBbbHJftQgLWY49wEPSn2T/TxahYCRDWun5smRa0Tu+g==}
    cpu: [ia32]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-32/0.14.16:
    resolution: {integrity: sha512-HundAiQCa0ut7PXq3lmRZY7H3/OYh27wkJ97S7jjCgWmcd5To6Bs8UBVB7I4Qi9lNk/Yty0INnqq9on1WR8JUA==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild-linux-64/0.13.15:
    resolution: {integrity: sha512-eCKzkNSLywNeQTRBxJRQ0jxRCl2YWdMB3+PkWFo2BBQYC5mISLIVIjThNtn6HUNqua1pnvgP5xX0nHbZbPj5oA==}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-64/0.14.16:
    resolution: {integrity: sha512-fG8MgVmQknIuYCHFOq+9iKLyygjPun+VkNH9ZIdRQrSzb3CFdEkNm+Suq5w8W+WjA/P0OIdrQ/mXXCoHCQTWSQ==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild-linux-arm/0.13.15:
    resolution: {integrity: sha512-wUHttDi/ol0tD8ZgUMDH8Ef7IbDX+/UsWJOXaAyTdkT7Yy9ZBqPg8bgB/Dn3CZ9SBpNieozrPRHm0BGww7W/jA==}
    cpu: [arm]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-arm/0.14.16:
    resolution: {integrity: sha512-0NDVeuvWska0d4Rd8R3+lWEyKaIbAxDuRAeeU6a2xaUXrTG2IPhGNLWc4NbVMbnkGqRqKB4PLdk/YaTUZjKFHQ==}
    engines: {node: '>=12'}
    cpu: [arm]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild-linux-arm64/0.13.15:
    resolution: {integrity: sha512-bYpuUlN6qYU9slzr/ltyLTR9YTBS7qUDymO8SV7kjeNext61OdmqFAzuVZom+OLW1HPHseBfJ/JfdSlx8oTUoA==}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-arm64/0.14.16:
    resolution: {integrity: sha512-7WF1rHsPVXhme2B6ceZZABxFwCiZfMRIJO7yRiLahIdDkwfhSTR6M0a6OwO/NsLJH9fax5GdwBOIBoG5Hkz4gA==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild-linux-mips64le/0.13.15:
    resolution: {integrity: sha512-KlVjIG828uFPyJkO/8gKwy9RbXhCEUeFsCGOJBepUlpa7G8/SeZgncUEz/tOOUJTcWMTmFMtdd3GElGyAtbSWg==}
    cpu: [mips64el]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-mips64le/0.14.16:
    resolution: {integrity: sha512-RLNaTRdcQ81QckeIjbk1hCrgmrL6VoZBsYT8ak9ObNQzXEJNMlxOBixaF6rhW8UUYRpTpFuoYHeNya8xY884/A==}
    engines: {node: '>=12'}
    cpu: [mips64el]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild-linux-ppc64le/0.13.15:
    resolution: {integrity: sha512-h6gYF+OsaqEuBjeesTBtUPw0bmiDu7eAeuc2OEH9S6mV9/jPhPdhOWzdeshb0BskRZxPhxPOjqZ+/OqLcxQwEQ==}
    cpu: [ppc64]
    os: [linux]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-linux-ppc64le/0.14.16:
    resolution: {integrity: sha512-ky0Ii2Jmyc00FzGT2audU0UmnBVrVevYmKW10DXLPcHGhbhzJdFRemXLvvzhDM8WD9IMJK3uV6ifJzkKrv8IQA==}
    engines: {node: '>=12'}
    cpu: [ppc64]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild-linux-s390x/0.14.16:
    resolution: {integrity: sha512-DuW9MPGJAzUUBPI/olMkMMepCasTbPN1Xr2cKZZEEDIibcdRnuFrMYVk3G3I8/Qb6SZBNTSnZMAyhvYFrwAkqw==}
    engines: {node: '>=12'}
    cpu: [s390x]
    os: [linux]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild-netbsd-64/0.13.15:
    resolution: {integrity: sha512-3+yE9emwoevLMyvu+iR3rsa+Xwhie7ZEHMGDQ6dkqP/ndFzRHkobHUKTe+NCApSqG5ce2z4rFu+NX/UHnxlh3w==}
    cpu: [x64]
    os: [netbsd]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-netbsd-64/0.14.16:
    resolution: {integrity: sha512-l8+mnz8iVsV0iL5v5JCuP0UTv2LwO1ORdJ/scMkGUl8WrC6cBmUrrHhg+pwREqjbD8TxjfUJVM1Vvt5E8SaTsg==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [netbsd]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild-openbsd-64/0.13.15:
    resolution: {integrity: sha512-wTfvtwYJYAFL1fSs8yHIdf5GEE4NkbtbXtjLWjM3Cw8mmQKqsg8kTiqJ9NJQe5NX/5Qlo7Xd9r1yKMMkHllp5g==}
    cpu: [x64]
    os: [openbsd]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-openbsd-64/0.14.16:
    resolution: {integrity: sha512-8SbZNAV902FmcGnc+j86HWY8PyTD1H7T39RsPXXS5IC1psi3yzFr2d8NoOxb6cQd5XUVHmHT1naJsbtEAyKIPA==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [openbsd]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild-sunos-64/0.13.15:
    resolution: {integrity: sha512-lbivT9Bx3t1iWWrSnGyBP9ODriEvWDRiweAs69vI+miJoeKwHWOComSRukttbuzjZ8r1q0mQJ8Z7yUsDJ3hKdw==}
    cpu: [x64]
    os: [sunos]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-sunos-64/0.14.16:
    resolution: {integrity: sha512-pMhe4uOaGjA/5YgeNoB0PRZi1V73D8sx876uFzuAxaZcYzLA5BsSbQeEccH182X6cBybE4Pm79kYedTSGOfwog==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [sunos]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild-windows-32/0.13.15:
    resolution: {integrity: sha512-fDMEf2g3SsJ599MBr50cY5ve5lP1wyVwTe6aLJsM01KtxyKkB4UT+fc5MXQFn3RLrAIAZOG+tHC+yXObpSn7Nw==}
    cpu: [ia32]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-windows-32/0.14.16:
    resolution: {integrity: sha512-M68/EFCgji0DI+DgULx2ytUUSxwwODJDpiVc0YsiWKdyB4umKTu1GGxFfdZhXrWtPxB4aZFoIgJyDhsFxnHC4g==}
    engines: {node: '>=12'}
    cpu: [ia32]
    os: [win32]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild-windows-64/0.13.15:
    resolution: {integrity: sha512-9aMsPRGDWCd3bGjUIKG/ZOJPKsiztlxl/Q3C1XDswO6eNX/Jtwu4M+jb6YDH9hRSUflQWX0XKAfWzgy5Wk54JQ==}
    cpu: [x64]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-windows-64/0.14.16:
    resolution: {integrity: sha512-rmSal1Co749CXSNyFJ62J5Fz/nZiFWhwMfYN9SwZazutKZ6s0QDRIhnupa93bJmzMzz4C2dqUV/VL1tqOI3y9g==}
    engines: {node: '>=12'}
    cpu: [x64]
    os: [win32]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild-windows-arm64/0.13.15:
    resolution: {integrity: sha512-zzvyCVVpbwQQATaf3IG8mu1IwGEiDxKkYUdA4FpoCHi1KtPa13jeScYDjlW0Qh+ebWzpKfR2ZwvqAQkSWNcKjA==}
    cpu: [arm64]
    os: [win32]
    requiresBuild: true
    dev: true
    optional: true

  /esbuild-windows-arm64/0.14.16:
    resolution: {integrity: sha512-VMfEf+MDgO+rulAuSeu3HNebSHa1TDn0lJp+QRk7E2WVg9OCSwuXUEkSbqIbkif3ZjASy7h9sTCGyHcqgKQTrg==}
    engines: {node: '>=12'}
    cpu: [arm64]
    os: [win32]
    requiresBuild: true
    dev: false
    optional: true

  /esbuild/0.13.15:
    resolution: {integrity: sha512-raCxt02HBKv8RJxE8vkTSCXGIyKHdEdGfUmiYb8wnabnaEmHzyW7DCHb5tEN0xU8ryqg5xw54mcwnYkC4x3AIw==}
    hasBin: true
    requiresBuild: true
    optionalDependencies:
      esbuild-android-arm64: 0.13.15
      esbuild-darwin-64: 0.13.15
      esbuild-darwin-arm64: 0.13.15
      esbuild-freebsd-64: 0.13.15
      esbuild-freebsd-arm64: 0.13.15
      esbuild-linux-32: 0.13.15
      esbuild-linux-64: 0.13.15
      esbuild-linux-arm: 0.13.15
      esbuild-linux-arm64: 0.13.15
      esbuild-linux-mips64le: 0.13.15
      esbuild-linux-ppc64le: 0.13.15
      esbuild-netbsd-64: 0.13.15
      esbuild-openbsd-64: 0.13.15
      esbuild-sunos-64: 0.13.15
      esbuild-windows-32: 0.13.15
      esbuild-windows-64: 0.13.15
      esbuild-windows-arm64: 0.13.15
    dev: true

  /esbuild/0.14.16:
    resolution: {integrity: sha512-niiWy7nesZFGCiDr0NR9/JLEhtZPYHG/ABYTqveNWvocw/gGI5rKHOj3+5yUv3yH10/geTlZiyVaNvjJWL9Xbw==}
    engines: {node: '>=12'}
    hasBin: true
    requiresBuild: true
    optionalDependencies:
      esbuild-android-arm64: 0.14.16
      esbuild-darwin-64: 0.14.16
      esbuild-darwin-arm64: 0.14.16
      esbuild-freebsd-64: 0.14.16
      esbuild-freebsd-arm64: 0.14.16
      esbuild-linux-32: 0.14.16
      esbuild-linux-64: 0.14.16
      esbuild-linux-arm: 0.14.16
      esbuild-linux-arm64: 0.14.16
      esbuild-linux-mips64le: 0.14.16
      esbuild-linux-ppc64le: 0.14.16
      esbuild-linux-s390x: 0.14.16
      esbuild-netbsd-64: 0.14.16
      esbuild-openbsd-64: 0.14.16
      esbuild-sunos-64: 0.14.16
      esbuild-windows-32: 0.14.16
      esbuild-windows-64: 0.14.16
      esbuild-windows-arm64: 0.14.16
    dev: false

  /escalade/3.1.1:
    resolution: {integrity: sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw==}
    engines: {node: '>=6'}

  /escape-string-regexp/1.0.5:
    resolution: {integrity: sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=}
    engines: {node: '>=0.8.0'}
    dev: true

  /escape-string-regexp/2.0.0:
    resolution: {integrity: sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w==}
    engines: {node: '>=8'}
    dev: true

  /escape-string-regexp/4.0.0:
    resolution: {integrity: sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==}
    engines: {node: '>=10'}
    dev: true

  /escodegen/1.14.3:
    resolution: {integrity: sha512-qFcX0XJkdg+PB3xjZZG/wKSuT1PnQWx57+TVSjIMmILd2yC/6ByYElPwJnslDsuWuSAp4AwJGumarAAmJch5Kw==}
    engines: {node: '>=4.0'}
    hasBin: true
    dependencies:
      esprima: 4.0.1
      estraverse: 4.3.0
      esutils: 2.0.3
      optionator: 0.8.3
    optionalDependencies:
      source-map: 0.6.1
    dev: false

  /escodegen/1.2.0:
    resolution: {integrity: sha1-Cd55Z3kcyVi3+Jot220jRRrzJ+E=}
    engines: {node: '>=0.4.0'}
    hasBin: true
    dependencies:
      esprima: 1.0.4
      estraverse: 1.5.1
      esutils: 1.0.0
    optionalDependencies:
      source-map: 0.1.43
    dev: false

  /escodegen/2.0.0:
    resolution: {integrity: sha512-mmHKys/C8BFUGI+MAWNcSYoORYLMdPzjrknd2Vc+bUsjN5bXcr8EhrNB+UTqfL1y3I9c4fw2ihgtMPQLBRiQxw==}
    engines: {node: '>=6.0'}
    hasBin: true
    dependencies:
      esprima: 4.0.1
      estraverse: 5.3.0
      esutils: 2.0.3
      optionator: 0.8.3
    optionalDependencies:
      source-map: 0.6.1
    dev: true

  /eslint-config-prettier/8.3.0_eslint@8.8.0:
    resolution: {integrity: sha512-BgZuLUSeKzvlL/VUjx/Yb787VQ26RU3gGjA3iiFvdsp/2bMfVIWUVP7tjxtjS0e+HP409cPlPvNkQloz8C91ew==}
    hasBin: true
    peerDependencies:
      eslint: '>=7.0.0'
    dependencies:
      eslint: 8.8.0
    dev: true

  /eslint-config-react-app/7.0.0_ee07baedc10f0b46d30cd9c14bf6940b:
    resolution: {integrity: sha512-xyymoxtIt1EOsSaGag+/jmcywRuieQoA2JbPCjnw9HukFj9/97aGPoZVFioaotzk1K5Qt9sHO5EutZbkrAXS0g==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      eslint: ^8.0.0
    dependencies:
      '@babel/core': 7.16.7
      '@babel/eslint-parser': 7.16.5_@babel+core@7.16.7+eslint@8.8.0
      '@rushstack/eslint-patch': 1.1.0
      '@typescript-eslint/eslint-plugin': 5.10.2_2595c2126aec4d4b6e944b931dabb4c2
      '@typescript-eslint/parser': 5.10.2_eslint@8.8.0+typescript@4.5.5
      babel-preset-react-app: 10.0.1
      confusing-browser-globals: 1.0.11
      eslint: 8.8.0
      eslint-plugin-flowtype: 8.0.3_eslint@8.8.0
      eslint-plugin-import: 2.25.4_eslint@8.8.0
      eslint-plugin-jest: 25.7.0_61d9f6ee10cf520b2c8d6abca813d843
      eslint-plugin-jsx-a11y: 6.5.1_eslint@8.8.0
      eslint-plugin-react: 7.28.0_eslint@8.8.0
      eslint-plugin-react-hooks: 4.3.0_eslint@8.8.0
      eslint-plugin-testing-library: 5.0.3_eslint@8.8.0+typescript@4.5.5
    transitivePeerDependencies:
      - '@babel/plugin-syntax-flow'
      - '@babel/plugin-transform-react-jsx'
      - jest
      - supports-color
      - typescript
    dev: true

  /eslint-define-config/1.2.3:
    resolution: {integrity: sha512-etSYUjXbFzj6SnHV2Abmc2z4yVTMlGiK0WwLvqS5QxFsuRZrgpZPIk6wTAc+R8dDuISWcw07MK6x2OcqDgUFpA==}
    engines: {node: '>= 16.9.0', npm: '>= 7.0.0', pnpm: '>= 6.27.1'}
    dev: true

  /eslint-import-resolver-node/0.3.6:
    resolution: {integrity: sha512-0En0w03NRVMn9Uiyn8YRPDKvWjxCWkslUEhGNTdGx15RvPJYQ+lbOlqrlNI2vEAs4pDYK4f/HN2TbDmk5TP0iw==}
    dependencies:
      debug: 3.2.7
      resolve: 1.21.0
    dev: true

  /eslint-module-utils/2.7.2:
    resolution: {integrity: sha512-zquepFnWCY2ISMFwD/DqzaM++H+7PDzOpUvotJWm/y1BAFt5R4oeULgdrTejKqLkz7MA/tgstsUMNYc7wNdTrg==}
    engines: {node: '>=4'}
    dependencies:
      debug: 3.2.7
      find-up: 2.1.0
    dev: true

  /eslint-plugin-flowtype/8.0.3_eslint@8.8.0:
    resolution: {integrity: sha512-dX8l6qUL6O+fYPtpNRideCFSpmWOUVx5QcaGLVqe/vlDiBSe4vYljDWDETwnyFzpl7By/WVIu6rcrniCgH9BqQ==}
    engines: {node: '>=12.0.0'}
    peerDependencies:
      '@babel/plugin-syntax-flow': ^7.14.5
      '@babel/plugin-transform-react-jsx': ^7.14.9
      eslint: ^8.1.0
    dependencies:
      eslint: 8.8.0
      lodash: 4.17.21
      string-natural-compare: 3.0.1
    dev: true

  /eslint-plugin-import/2.25.4_eslint@8.8.0:
    resolution: {integrity: sha512-/KJBASVFxpu0xg1kIBn9AUa8hQVnszpwgE7Ld0lKAlx7Ie87yzEzCgSkekt+le/YVhiaosO4Y14GDAOc41nfxA==}
    engines: {node: '>=4'}
    peerDependencies:
      eslint: ^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8
    dependencies:
      array-includes: 3.1.4
      array.prototype.flat: 1.2.5
      debug: 2.6.9
      doctrine: 2.1.0
      eslint: 8.8.0
      eslint-import-resolver-node: 0.3.6
      eslint-module-utils: 2.7.2
      has: 1.0.3
      is-core-module: 2.8.1
      is-glob: 4.0.3
      minimatch: 3.0.4
      object.values: 1.1.5
      resolve: 1.21.0
      tsconfig-paths: 3.12.0
    dev: true

  /eslint-plugin-jest/25.7.0_61d9f6ee10cf520b2c8d6abca813d843:
    resolution: {integrity: sha512-PWLUEXeeF7C9QGKqvdSbzLOiLTx+bno7/HC9eefePfEb257QFHg7ye3dh80AZVkaa/RQsBB1Q/ORQvg2X7F0NQ==}
    engines: {node: ^12.13.0 || ^14.15.0 || >=16.0.0}
    peerDependencies:
      '@typescript-eslint/eslint-plugin': ^4.0.0 || ^5.0.0
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
      jest: '*'
    peerDependenciesMeta:
      '@typescript-eslint/eslint-plugin':
        optional: true
      jest:
        optional: true
    dependencies:
      '@typescript-eslint/eslint-plugin': 5.10.2_2595c2126aec4d4b6e944b931dabb4c2
      '@typescript-eslint/experimental-utils': 5.10.0_eslint@8.8.0+typescript@4.5.5
      eslint: 8.8.0
      jest: 27.4.7
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: true

  /eslint-plugin-jest/25.7.0_ee07baedc10f0b46d30cd9c14bf6940b:
    resolution: {integrity: sha512-PWLUEXeeF7C9QGKqvdSbzLOiLTx+bno7/HC9eefePfEb257QFHg7ye3dh80AZVkaa/RQsBB1Q/ORQvg2X7F0NQ==}
    engines: {node: ^12.13.0 || ^14.15.0 || >=16.0.0}
    peerDependencies:
      '@typescript-eslint/eslint-plugin': ^4.0.0 || ^5.0.0
      eslint: ^6.0.0 || ^7.0.0 || ^8.0.0
      jest: '*'
    peerDependenciesMeta:
      '@typescript-eslint/eslint-plugin':
        optional: true
      jest:
        optional: true
    dependencies:
      '@typescript-eslint/experimental-utils': 5.10.0_eslint@8.8.0+typescript@4.5.5
      eslint: 8.8.0
      jest: 27.4.7
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: true

  /eslint-plugin-jsx-a11y/6.5.1_eslint@8.8.0:
    resolution: {integrity: sha512-sVCFKX9fllURnXT2JwLN5Qgo24Ug5NF6dxhkmxsMEUZhXRcGg+X3e1JbJ84YePQKBl5E0ZjAH5Q4rkdcGY99+g==}
    engines: {node: '>=4.0'}
    peerDependencies:
      eslint: ^3 || ^4 || ^5 || ^6 || ^7 || ^8
    dependencies:
      '@babel/runtime': 7.16.7
      aria-query: 4.2.2
      array-includes: 3.1.4
      ast-types-flow: 0.0.7
      axe-core: 4.3.5
      axobject-query: 2.2.0
      damerau-levenshtein: 1.0.8
      emoji-regex: 9.2.2
      eslint: 8.8.0
      has: 1.0.3
      jsx-ast-utils: 3.2.1
      language-tags: 1.0.5
      minimatch: 3.0.4
    dev: true

  /eslint-plugin-prettier/4.0.0_43197c8d12d1d439034cfcf65e1c48c2:
    resolution: {integrity: sha512-98MqmCJ7vJodoQK359bqQWaxOE0CS8paAz/GgjaZLyex4TTk3g9HugoO89EqWCrFiOqn9EVvcoo7gZzONCWVwQ==}
    engines: {node: '>=6.0.0'}
    peerDependencies:
      eslint: '>=7.28.0'
      eslint-config-prettier: '*'
      prettier: '>=2.0.0'
    peerDependenciesMeta:
      eslint-config-prettier:
        optional: true
    dependencies:
      eslint: 8.8.0
      eslint-config-prettier: 8.3.0_eslint@8.8.0
      prettier: 2.5.1
      prettier-linter-helpers: 1.0.0
    dev: true

  /eslint-plugin-react-hooks/4.3.0_eslint@8.8.0:
    resolution: {integrity: sha512-XslZy0LnMn+84NEG9jSGR6eGqaZB3133L8xewQo3fQagbQuGt7a63gf+P1NGKZavEYEC3UXaWEAA/AqDkuN6xA==}
    engines: {node: '>=10'}
    peerDependencies:
      eslint: ^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0
    dependencies:
      eslint: 8.8.0
    dev: true

  /eslint-plugin-react/7.28.0_eslint@8.8.0:
    resolution: {integrity: sha512-IOlFIRHzWfEQQKcAD4iyYDndHwTQiCMcJVJjxempf203jnNLUnW34AXLrV33+nEXoifJE2ZEGmcjKPL8957eSw==}
    engines: {node: '>=4'}
    peerDependencies:
      eslint: ^3 || ^4 || ^5 || ^6 || ^7 || ^8
    dependencies:
      array-includes: 3.1.4
      array.prototype.flatmap: 1.2.5
      doctrine: 2.1.0
      eslint: 8.8.0
      estraverse: 5.3.0
      jsx-ast-utils: 3.2.1
      minimatch: 3.0.4
      object.entries: 1.1.5
      object.fromentries: 2.0.5
      object.hasown: 1.1.0
      object.values: 1.1.5
      prop-types: 15.8.1
      resolve: 2.0.0-next.3
      semver: 6.3.0
      string.prototype.matchall: 4.0.6
    dev: true

  /eslint-plugin-testing-library/5.0.3_eslint@8.8.0+typescript@4.5.5:
    resolution: {integrity: sha512-tKZ9G+HnIOnYAhXeoBCiAT8LOdU3m1VquBTKsBW/5zAaB30vq7gC60DIayPfMJt8EZBlqPVzGqSN57sIFmTunQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0, npm: '>=6'}
    peerDependencies:
      eslint: ^7.5.0 || ^8.0.0
    dependencies:
      '@typescript-eslint/experimental-utils': 5.10.0_eslint@8.8.0+typescript@4.5.5
      eslint: 8.8.0
    transitivePeerDependencies:
      - supports-color
      - typescript
    dev: true

  /eslint-scope/5.1.1:
    resolution: {integrity: sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==}
    engines: {node: '>=8.0.0'}
    dependencies:
      esrecurse: 4.3.0
      estraverse: 4.3.0
    dev: true

  /eslint-scope/7.1.0:
    resolution: {integrity: sha512-aWwkhnS0qAXqNOgKOK0dJ2nvzEbhEvpy8OlJ9kZ0FeZnA6zpjv1/Vei+puGFFX7zkPCkHHXb7IDX3A+7yPrRWg==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    dependencies:
      esrecurse: 4.3.0
      estraverse: 5.3.0
    dev: true

  /eslint-utils/3.0.0_eslint@8.8.0:
    resolution: {integrity: sha512-uuQC43IGctw68pJA1RgbQS8/NP7rch6Cwd4j3ZBtgo4/8Flj4eGE7ZYSZRN3iq5pVUv6GPdW5Z1RFleo84uLDA==}
    engines: {node: ^10.0.0 || ^12.0.0 || >= 14.0.0}
    peerDependencies:
      eslint: '>=5'
    dependencies:
      eslint: 8.8.0
      eslint-visitor-keys: 2.1.0
    dev: true

  /eslint-visitor-keys/2.1.0:
    resolution: {integrity: sha512-0rSmRBzXgDzIsD6mGdJgevzgezI534Cer5L/vyMX0kHzT/jiB43jRhd9YUlMGYLQy2zprNmoT8qasCGtY+QaKw==}
    engines: {node: '>=10'}
    dev: true

  /eslint-visitor-keys/3.2.0:
    resolution: {integrity: sha512-IOzT0X126zn7ALX0dwFiUQEdsfzrm4+ISsQS8nukaJXwEyYKRSnEIIDULYg1mCtGp7UUXgfGl7BIolXREQK+XQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    dev: true

  /eslint/8.8.0:
    resolution: {integrity: sha512-H3KXAzQGBH1plhYS3okDix2ZthuYJlQQEGE5k0IKuEqUSiyu4AmxxlJ2MtTYeJ3xB4jDhcYCwGOg2TXYdnDXlQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    hasBin: true
    dependencies:
      '@eslint/eslintrc': 1.0.5
      '@humanwhocodes/config-array': 0.9.2
      ajv: 6.12.6
      chalk: 4.1.2
      cross-spawn: 7.0.3
      debug: 4.3.3
      doctrine: 3.0.0
      escape-string-regexp: 4.0.0
      eslint-scope: 7.1.0
      eslint-utils: 3.0.0_eslint@8.8.0
      eslint-visitor-keys: 3.2.0
      espree: 9.3.0
      esquery: 1.4.0
      esutils: 2.0.3
      fast-deep-equal: 3.1.3
      file-entry-cache: 6.0.1
      functional-red-black-tree: 1.0.1
      glob-parent: 6.0.2
      globals: 13.12.0
      ignore: 5.2.0
      import-fresh: 3.3.0
      imurmurhash: 0.1.4
      is-glob: 4.0.3
      js-yaml: 4.1.0
      json-stable-stringify-without-jsonify: 1.0.1
      levn: 0.4.1
      lodash.merge: 4.6.2
      minimatch: 3.0.4
      natural-compare: 1.4.0
      optionator: 0.9.1
      regexpp: 3.2.0
      strip-ansi: 6.0.1
      strip-json-comments: 3.1.1
      text-table: 0.2.0
      v8-compile-cache: 2.3.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /espree/9.3.0:
    resolution: {integrity: sha512-d/5nCsb0JcqsSEeQzFZ8DH1RmxPcglRWh24EFTlUEmCKoehXGdpsx0RkHDubqUI8LSAIKMQp4r9SzQ3n+sm4HQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    dependencies:
      acorn: 8.7.0
      acorn-jsx: 5.3.2_acorn@8.7.0
      eslint-visitor-keys: 3.2.0
    dev: true

  /esprima/1.0.4:
    resolution: {integrity: sha1-n1V+CPw7TSbs6d00+Pv0drYlha0=}
    engines: {node: '>=0.4.0'}
    hasBin: true
    dev: false

  /esprima/4.0.1:
    resolution: {integrity: sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==}
    engines: {node: '>=4'}
    hasBin: true

  /esquery/1.4.0:
    resolution: {integrity: sha512-cCDispWt5vHHtwMY2YrAQ4ibFkAL8RbH5YGBnZBc90MolvvfkkQcJro/aZiAQUlQ3qgrYS6D6v8Gc5G5CQsc9w==}
    engines: {node: '>=0.10'}
    dependencies:
      estraverse: 5.3.0
    dev: true

  /esrecurse/4.3.0:
    resolution: {integrity: sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==}
    engines: {node: '>=4.0'}
    dependencies:
      estraverse: 5.3.0
    dev: true

  /estraverse/1.5.1:
    resolution: {integrity: sha1-hno+jlip+EYYr7bC3bzZFrfLr3E=}
    engines: {node: '>=0.4.0'}
    dev: false

  /estraverse/4.3.0:
    resolution: {integrity: sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==}
    engines: {node: '>=4.0'}

  /estraverse/5.3.0:
    resolution: {integrity: sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==}
    engines: {node: '>=4.0'}
    dev: true

  /estree-is-function/1.0.0:
    resolution: {integrity: sha512-nSCWn1jkSq2QAtkaVLJZY2ezwcFO161HVc174zL1KPW3RJ+O6C3eJb8Nx7OXzvhoEv+nLgSR1g71oWUHUDTrJA==}
    dev: false

  /estree-walker/2.0.2:
    resolution: {integrity: sha512-Rfkk/Mp/DL7JVje3u18FxFujQlTNR2q6QfMSMB7AvCBx91NGj/ba3kCfza0f6dVDbw7YlRf/nDrn7pQrCCyQ/w==}
    dev: true

  /esutils/1.0.0:
    resolution: {integrity: sha1-gVHTWOIMisx/t0XnRywAJf5JZXA=}
    engines: {node: '>=0.10.0'}
    dev: false

  /esutils/2.0.3:
    resolution: {integrity: sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==}
    engines: {node: '>=0.10.0'}

  /event-emitter/0.3.5:
    resolution: {integrity: sha1-34xp7vFkeSPHFXuc6DhAYQsCzDk=}
    dependencies:
      d: 1.0.1
      es5-ext: 0.10.53
    dev: false

  /events/1.1.1:
    resolution: {integrity: sha1-nr23Y1rQmccNzEwqH1AEKI6L2SQ=}
    engines: {node: '>=0.4.x'}
    dev: false

  /events/3.3.0:
    resolution: {integrity: sha512-mQw+2fkQbALzQ7V0MY0IqdnXNOeTtP4r0lN9z7AAawCXgqea7bDii20AYrIBrFd/Hx0M2Ocz6S111CaFkUcb0Q==}
    engines: {node: '>=0.8.x'}
    dev: false

  /execa/5.1.1:
    resolution: {integrity: sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==}
    engines: {node: '>=10'}
    dependencies:
      cross-spawn: 7.0.3
      get-stream: 6.0.1
      human-signals: 2.1.0
      is-stream: 2.0.1
      merge-stream: 2.0.0
      npm-run-path: 4.0.1
      onetime: 5.1.2
      signal-exit: 3.0.6
      strip-final-newline: 2.0.0
    dev: true

  /exit-on-epipe/1.0.1:
    resolution: {integrity: sha512-h2z5mrROTxce56S+pnvAV890uu7ls7f1kEvVGJbw1OlFH3/mlJ5bkXu0KRyW94v37zzHPiUd55iLn3DA7TjWpw==}
    engines: {node: '>=0.8'}
    dev: false

  /exit/0.1.2:
    resolution: {integrity: sha1-BjJjj42HfMghB9MKD/8aF8uhzQw=}
    engines: {node: '>= 0.8.0'}
    dev: true

  /expect/27.4.6:
    resolution: {integrity: sha512-1M/0kAALIaj5LaG66sFJTbRsWTADnylly82cu4bspI0nl+pgP4E6Bh/aqdHlTUjul06K7xQnnrAoqfxVU0+/ag==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.4.2
      jest-get-type: 27.4.0
      jest-matcher-utils: 27.4.6
      jest-message-util: 27.4.6
    dev: true

  /ext/1.6.0:
    resolution: {integrity: sha512-sdBImtzkq2HpkdRLtlLWDa6w4DX22ijZLKx8BMPUuKe1c5lbN6xwQDQCxSfxBQnHZ13ls/FH0MQZx/q/gr6FQg==}
    dependencies:
      type: 2.5.0
    dev: false

  /fast-base64-decode/1.0.0:
    resolution: {integrity: sha512-qwaScUgUGBYeDNRnbc/KyllVU88Jk1pRHPStuF/lO7B0/RTRLj7U0lkdTAutlBblY08rwZDff6tNU9cjv6j//Q==}
    dev: false

  /fast-deep-equal/3.1.3:
    resolution: {integrity: sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==}

  /fast-diff/1.2.0:
    resolution: {integrity: sha512-xJuoT5+L99XlZ8twedaRf6Ax2TgQVxvgZOYoPKqZufmJib0tL2tegPBOZb1pVNgIhlqDlA0eO0c3wBvQcmzx4w==}
    dev: true

  /fast-glob/3.2.11:
    resolution: {integrity: sha512-xrO3+1bxSo3ZVHAnqzyuewYT6aMFHRAd4Kcs92MAonjwQZLsK9d0SF1IyQ3k5PoirxTW0Oe/RqFgMQ6TcNE5Ew==}
    engines: {node: '>=8.6.0'}
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.4
    dev: true

  /fast-json-stable-stringify/2.1.0:
    resolution: {integrity: sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==}
    dev: true

  /fast-levenshtein/2.0.6:
    resolution: {integrity: sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc=}

  /fast-xml-parser/3.19.0:
    resolution: {integrity: sha512-4pXwmBplsCPv8FOY1WRakF970TjNGnGnfbOnLqjlYvMiF1SR3yOHyxMR/YCXpPTOspNF5gwudqktIP4VsWkvBg==}
    hasBin: true
    dev: false

  /fast-xml-parser/3.21.1:
    resolution: {integrity: sha512-FTFVjYoBOZTJekiUsawGsSYV9QL0A+zDYCRj7y34IO6Jg+2IMYEtQa+bbictpdpV8dHxXywqU7C0gRDEOFtBFg==}
    hasBin: true
    dependencies:
      strnum: 1.0.5
    dev: false

  /fastq/1.13.0:
    resolution: {integrity: sha512-YpkpUnK8od0o1hmeSc7UUs/eB/vIPWJYjKck2QKIzAf71Vm1AAQ3EbuZB3g2JIy+pg+ERD0vqI79KyZiB2e2Nw==}
    dependencies:
      reusify: 1.0.4
    dev: true

  /fb-watchman/2.0.1:
    resolution: {integrity: sha512-DkPJKQeY6kKwmuMretBhr7G6Vodr7bFwDYTXIkfG1gjvNpaxBTQV3PbXg6bR1c1UP4jPOX0jHUbbHANL9vRjVg==}
    dependencies:
      bser: 2.1.1
    dev: true

  /file-entry-cache/6.0.1:
    resolution: {integrity: sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==}
    engines: {node: ^10.12.0 || >=12.0.0}
    dependencies:
      flat-cache: 3.0.4
    dev: true

  /file-uri-to-path/2.0.0:
    resolution: {integrity: sha512-hjPFI8oE/2iQPVe4gbrJ73Pp+Xfub2+WI2LlXDbsaJBwT5wuMh35WNWVYYTpnz895shtwfyutMFLFywpQAFdLg==}
    engines: {node: '>= 6'}
    dev: false

  /filelist/1.0.2:
    resolution: {integrity: sha512-z7O0IS8Plc39rTCq6i6iHxk43duYOn8uFJiWSewIq0Bww1RNybVHSCjahmcC87ZqAm4OTvFzlzeGu3XAzG1ctQ==}
    dependencies:
      minimatch: 3.0.4
    dev: true

  /fill-range/7.0.1:
    resolution: {integrity: sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==}
    engines: {node: '>=8'}
    dependencies:
      to-regex-range: 5.0.1

  /find-up/2.1.0:
    resolution: {integrity: sha1-RdG35QbHF93UgndaK3eSCjwMV6c=}
    engines: {node: '>=4'}
    dependencies:
      locate-path: 2.0.0
    dev: true

  /find-up/4.1.0:
    resolution: {integrity: sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==}
    engines: {node: '>=8'}
    dependencies:
      locate-path: 5.0.0
      path-exists: 4.0.0

  /flat-cache/3.0.4:
    resolution: {integrity: sha512-dm9s5Pw7Jc0GvMYbshN6zchCA9RgQlzzEZX3vylR9IqFfS8XciblUXOKfW6SiuJ0e13eDYZoZV5wdrev7P3Nwg==}
    engines: {node: ^10.12.0 || >=12.0.0}
    dependencies:
      flatted: 3.2.4
      rimraf: 3.0.2
    dev: true

  /flatted/3.2.4:
    resolution: {integrity: sha512-8/sOawo8tJ4QOBX8YlQBMxL8+RLZfxMQOif9o0KUKTNTjMYElWPE0r/m5VNFxTRd0NSw8qSy8dajrwX4RYI1Hw==}
    dev: true

  /follow-redirects/1.14.7:
    resolution: {integrity: sha512-+hbxoLbFMbRKDwohX8GkTataGqO6Jb7jGwpAlwgy2bIz25XtRm7KEzJM76R1WiNT5SwZkX4Y75SwBolkpmE7iQ==}
    engines: {node: '>=4.0'}
    peerDependencies:
      debug: '*'
    peerDependenciesMeta:
      debug:
        optional: true
    dev: false

  /fontkit/1.8.1:
    resolution: {integrity: sha512-BsNCjDoYRxmNWFdAuK1y9bQt+igIxGtTC9u/jSFjR9MKhmI00rP1fwSvERt+5ddE82544l0XH5mzXozQVUy2Tw==}
    dependencies:
      babel-runtime: 6.26.0
      brfs: 2.0.2
      brotli: 1.3.2
      browserify-optional: 1.0.1
      clone: 1.0.4
      deep-equal: 1.1.1
      dfa: 1.2.0
      restructure: 0.5.4
      tiny-inflate: 1.0.3
      unicode-properties: 1.3.1
      unicode-trie: 0.3.1
    dev: false

  /form-data/3.0.1:
    resolution: {integrity: sha512-RHkBKtLWUVwd7SqRIvCZMEvAMoGUp0XU+seQiZejj0COz3RI3hWP4sCv3gZWWLjJTd7rGwcsF5eKZGii0r/hbg==}
    engines: {node: '>= 6'}
    dependencies:
      asynckit: 0.4.0
      combined-stream: 1.0.8
      mime-types: 2.1.34
    dev: true

  /frac/1.1.2:
    resolution: {integrity: sha512-w/XBfkibaTl3YDqASwfDUqkna4Z2p9cFSr1aHDt0WoMTECnRfBOv2WArlZILlqgWlmdIlALXGpM2AOhEk5W3IA==}
    engines: {node: '>=0.8'}
    dev: false

  /fs-constants/1.0.0:
    resolution: {integrity: sha512-y6OAwoSIf7FyjMIv94u+b5rdheZEjzR63GTyZJm5qh4Bi+2YgwLCcI/fPFZkL5PSixOt6ZNKm+w+Hfp/Bciwow==}
    dev: false

  /fs-extra/10.0.0:
    resolution: {integrity: sha512-C5owb14u9eJwizKGdchcDUQeFtlSHHthBk8pbX9Vc1PFZrLombudjDnNns88aYslCyF6IY5SUw3Roz6xShcEIQ==}
    engines: {node: '>=12'}
    dependencies:
      graceful-fs: 4.2.9
      jsonfile: 6.1.0
      universalify: 2.0.0
    dev: true

  /fs-extra/8.1.0:
    resolution: {integrity: sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==}
    engines: {node: '>=6 <7 || >=8'}
    dependencies:
      graceful-fs: 4.2.9
      jsonfile: 4.0.0
      universalify: 0.1.2
    dev: false

  /fs-extra/9.1.0:
    resolution: {integrity: sha512-hcg3ZmepS30/7BSFqRvoo3DOMQu7IjqxO5nCDt+zM9XWjb33Wg7ziNT+Qvqbuc3+gWpzO02JubVyk2G4Zvo1OQ==}
    engines: {node: '>=10'}
    dependencies:
      at-least-node: 1.0.0
      graceful-fs: 4.2.9
      jsonfile: 6.1.0
      universalify: 2.0.0
    dev: false

  /fs.realpath/1.0.0:
    resolution: {integrity: sha1-FQStJSMVjKpA20onh8sBQRmU6k8=}

  /fsevents/2.3.2:
    resolution: {integrity: sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]
    requiresBuild: true
    optional: true

  /ftp/0.3.10:
    resolution: {integrity: sha1-kZfYYa2BQvPmPVqDv+TFn3MwiF0=}
    engines: {node: '>=0.8.0'}
    dependencies:
      readable-stream: 1.1.14
      xregexp: 2.0.0
    dev: false

  /function-bind/1.1.1:
    resolution: {integrity: sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==}

  /functional-red-black-tree/1.0.1:
    resolution: {integrity: sha1-GwqzvVU7Kg1jmdKcDj6gslIHgyc=}
    dev: true

  /gensync/1.0.0-beta.2:
    resolution: {integrity: sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==}
    engines: {node: '>=6.9.0'}
    dev: true

  /get-assigned-identifiers/1.2.0:
    resolution: {integrity: sha512-mBBwmeGTrxEMO4pMaaf/uUEFHnYtwr8FTe8Y/mer4rcV/bye0qGm6pw1bGZFGStxC5O76c5ZAVBGnqHmOaJpdQ==}
    dev: false

  /get-caller-file/2.0.5:
    resolution: {integrity: sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==}
    engines: {node: 6.* || 8.* || >= 10.*}

  /get-intrinsic/1.1.1:
    resolution: {integrity: sha512-kWZrnVM42QCiEA2Ig1bG8zjoIMOgxWwYCEeNdwY6Tv/cOSeGpcoX4pXHfKUxNKVoArnrEr2e9srnAxxGIraS9Q==}
    dependencies:
      function-bind: 1.1.1
      has: 1.0.3
      has-symbols: 1.0.2

  /get-nonce/1.0.1:
    resolution: {integrity: sha512-FJhYRoDaiatfEkUK8HKlicmu/3SGFD51q3itKDGoSTysQJBnfOcxU5GxnhE1E6soB76MbT0MBtnKJuXyAx+96Q==}
    engines: {node: '>=6'}
    dev: false

  /get-package-type/0.1.0:
    resolution: {integrity: sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q==}
    engines: {node: '>=8.0.0'}
    dev: true

  /get-stream/6.0.1:
    resolution: {integrity: sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==}
    engines: {node: '>=10'}
    dev: true

  /get-symbol-description/1.0.0:
    resolution: {integrity: sha512-2EmdH1YvIQiZpltCNgkuiUnyukzxM/R6NDJX31Ke3BG1Nq5b0S2PhX59UKi9vZpPDQVdqn+1IcaAwnzTT5vCjw==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      get-intrinsic: 1.1.1
    dev: true

  /get-uri/3.0.2:
    resolution: {integrity: sha512-+5s0SJbGoyiJTZZ2JTpFPLMPSch72KEqGOTvQsBqg0RBWvwhWUSYZFAtz3TPW0GXJuLBJPts1E241iHg+VRfhg==}
    engines: {node: '>= 6'}
    dependencies:
      '@tootallnate/once': 1.1.2
      data-uri-to-buffer: 3.0.1
      debug: 4.3.3
      file-uri-to-path: 2.0.0
      fs-extra: 8.1.0
      ftp: 0.3.10
    transitivePeerDependencies:
      - supports-color
    dev: false

  /glob-parent/5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}
    dependencies:
      is-glob: 4.0.3

  /glob-parent/6.0.2:
    resolution: {integrity: sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==}
    engines: {node: '>=10.13.0'}
    dependencies:
      is-glob: 4.0.3
    dev: true

  /glob-regex/0.3.2:
    resolution: {integrity: sha512-m5blUd3/OqDTWwzBBtWBPrGlAzatRywHameHeekAZyZrskYouOGdNB8T/q6JucucvJXtOuyHIn0/Yia7iDasDw==}
    dev: true

  /glob/7.2.0:
    resolution: {integrity: sha512-lmLf6gtyrPq8tTjSmrO94wBeQbFR3HbLHbuyD69wuyQkImp2hWqMGB47OX65FBkPffO641IP9jWa1z4ivqG26Q==}
    dependencies:
      fs.realpath: 1.0.0
      inflight: 1.0.6
      inherits: 2.0.4
      minimatch: 3.0.4
      once: 1.4.0
      path-is-absolute: 1.0.1

  /globals/11.12.0:
    resolution: {integrity: sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==}
    engines: {node: '>=4'}
    dev: true

  /globals/13.12.0:
    resolution: {integrity: sha512-uS8X6lSKN2JumVoXrbUz+uG4BYG+eiawqm3qFcT7ammfbUHeCBoJMlHcec/S3krSk73/AE/f0szYFmgAA3kYZg==}
    engines: {node: '>=8'}
    dependencies:
      type-fest: 0.20.2
    dev: true

  /globby/11.1.0:
    resolution: {integrity: sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==}
    engines: {node: '>=10'}
    dependencies:
      array-union: 2.1.0
      dir-glob: 3.0.1
      fast-glob: 3.2.11
      ignore: 5.2.0
      merge2: 1.4.1
      slash: 3.0.0
    dev: true

  /globrex/0.1.2:
    resolution: {integrity: sha512-uHJgbwAMwNFf5mLst7IWLNg14x1CkeqglJb/K3doi4dw6q2IvAAmM/Y81kevy83wP+Sst+nutFTYOGg3d1lsxg==}
    dev: true

  /graceful-fs/4.2.9:
    resolution: {integrity: sha512-NtNxqUcXgpW2iMrfqSfR73Glt39K+BLwWsPs94yR63v45T0Wbej7eRmL5cWfwEgqXnmjQp3zaJTshdRW/qC2ZQ==}

  /graphql-tag/2.12.6_graphql@15.8.0:
    resolution: {integrity: sha512-FdSNcu2QQcWnM2VNvSCCDCVS5PpPqpzgFT8+GXzqJuoDd0CBncxCY278u4mhRO7tMgo2JjgJA5aZ+nWSQ/Z+xg==}
    engines: {node: '>=10'}
    peerDependencies:
      graphql: ^0.9.0 || ^0.10.0 || ^0.11.0 || ^0.12.0 || ^0.13.0 || ^14.0.0 || ^15.0.0 || ^16.0.0
    dependencies:
      graphql: 15.8.0
      tslib: 2.3.1
    dev: false

  /graphql/15.8.0:
    resolution: {integrity: sha512-5gghUc24tP9HRznNpV2+FIoq3xKkj5dTQqf4v0CpdPbFVwFkWoxOM+o+2OC9ZSvjEMTjfmG9QT+gcvggTwW1zw==}
    engines: {node: '>= 10.x'}
    dev: false

  /has-bigints/1.0.1:
    resolution: {integrity: sha512-LSBS2LjbNBTf6287JEbEzvJgftkF5qFkmCo9hDRpAzKhUOlJ+hx8dd4USs00SgsUNwc4617J9ki5YtEClM2ffA==}
    dev: true

  /has-flag/3.0.0:
    resolution: {integrity: sha1-tdRU3CGZriJWmfNGfloH87lVuv0=}
    engines: {node: '>=4'}

  /has-flag/4.0.0:
    resolution: {integrity: sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==}
    engines: {node: '>=8'}

  /has-symbols/1.0.2:
    resolution: {integrity: sha512-chXa79rL/UC2KlX17jo3vRGz0azaWEx5tGqZg5pO3NUyEJVB17dMruQlzCCOfUvElghKcm5194+BCRvi2Rv/Gw==}
    engines: {node: '>= 0.4'}

  /has-tostringtag/1.0.0:
    resolution: {integrity: sha512-kFjcSNhnlGV1kyoGk7OXKSawH5JOb/LzUc5w9B02hOTO0dfFRjbHQKvg1d6cf3HbeUmtU9VbbV3qzZ2Teh97WQ==}
    engines: {node: '>= 0.4'}
    dependencies:
      has-symbols: 1.0.2

  /has/1.0.3:
    resolution: {integrity: sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==}
    engines: {node: '>= 0.4.0'}
    dependencies:
      function-bind: 1.1.1

  /he/1.2.0:
    resolution: {integrity: sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==}
    hasBin: true
    dev: true

  /header-case/2.0.4:
    resolution: {integrity: sha512-H/vuk5TEEVZwrR0lp2zed9OCo1uAILMlx0JEMgC26rzyJJ3N1v6XkwHHXJQdR2doSjcGPM6OKPYoJgf0plJ11Q==}
    dependencies:
      capital-case: 1.0.4
      tslib: 2.3.1
    dev: false

  /heap/0.2.7:
    resolution: {integrity: sha512-2bsegYkkHO+h/9MGbn6KWcE45cHZgPANo5LXF7EvWdT0yT2EguSVO1nDgU5c8+ZOPwp2vMNa7YFsJhVcDR9Sdg==}
    dev: false

  /history/5.2.0:
    resolution: {integrity: sha512-uPSF6lAJb3nSePJ43hN3eKj1dTWpN9gMod0ZssbFTIsen+WehTmEadgL+kg78xLJFdRfrrC//SavDzmRVdE+Ig==}
    dependencies:
      '@babel/runtime': 7.16.7
    dev: false

  /html-encoding-sniffer/2.0.1:
    resolution: {integrity: sha512-D5JbOMBIR/TVZkubHT+OyT2705QvogUW4IBn6nHd756OwieSF9aDYFj4dv6HHEVGYbHaLETa3WggZYWWMyy3ZQ==}
    engines: {node: '>=10'}
    dependencies:
      whatwg-encoding: 1.0.5
    dev: true

  /html-escaper/2.0.2:
    resolution: {integrity: sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg==}
    dev: true

  /html-minifier-terser/6.1.0:
    resolution: {integrity: sha512-YXxSlJBZTP7RS3tWnQw74ooKa6L9b9i9QYXY21eUEvhZ3u9XLfv6OnFsQq6RxkhHygsaUMvYsZRV5rU/OVNZxw==}
    engines: {node: '>=12'}
    hasBin: true
    dependencies:
      camel-case: 4.1.2
      clean-css: 5.2.2
      commander: 8.3.0
      he: 1.2.0
      param-case: 3.0.4
      relateurl: 0.2.7
      terser: 5.10.0
    transitivePeerDependencies:
      - acorn
    dev: true

  /http-errors/1.8.1:
    resolution: {integrity: sha512-Kpk9Sm7NmI+RHhnj6OIWDI1d6fIoFAtFt9RLaTMRlg/8w49juAStsrBgp0Dp4OdxdVbRIeKhtCUvoi/RuAhO4g==}
    engines: {node: '>= 0.6'}
    dependencies:
      depd: 1.1.2
      inherits: 2.0.4
      setprototypeof: 1.2.0
      statuses: 1.5.0
      toidentifier: 1.0.1
    dev: false

  /http-proxy-agent/4.0.1:
    resolution: {integrity: sha512-k0zdNgqWTGA6aeIRVpvfVob4fL52dTfaehylg0Y4UvSySvOq/Y+BOyPrgpUrA7HylqvU8vIZGsRuXmspskV0Tg==}
    engines: {node: '>= 6'}
    dependencies:
      '@tootallnate/once': 1.1.2
      agent-base: 6.0.2
      debug: 4.3.3
    transitivePeerDependencies:
      - supports-color

  /https-proxy-agent/5.0.0:
    resolution: {integrity: sha512-EkYm5BcKUGiduxzSt3Eppko+PiNWNEpa4ySk9vTC6wDsQJW9rHSa+UhGNJoRYp7bz6Ht1eaRIa6QaJqO5rCFbA==}
    engines: {node: '>= 6'}
    dependencies:
      agent-base: 6.0.2
      debug: 4.3.3
    transitivePeerDependencies:
      - supports-color

  /human-signals/2.1.0:
    resolution: {integrity: sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==}
    engines: {node: '>=10.17.0'}
    dev: true

  /iconv-lite/0.4.24:
    resolution: {integrity: sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==}
    engines: {node: '>=0.10.0'}
    dependencies:
      safer-buffer: 2.1.2

  /iconv-lite/0.6.3:
    resolution: {integrity: sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==}
    engines: {node: '>=0.10.0'}
    dependencies:
      safer-buffer: 2.1.2
    dev: false

  /idb/5.0.6:
    resolution: {integrity: sha512-/PFvOWPzRcEPmlDt5jEvzVZVs0wyd/EvGvkDIcbBpGuMMLQKrTPG0TxvE2UJtgZtCQCmOtM2QD7yQJBVEjKGOw==}
    dev: false

  /ieee754/1.1.13:
    resolution: {integrity: sha512-4vf7I2LYV/HaWerSo3XmlMkp5eZ83i+/CDluXi/IGTs/O1sejBNhTtnxzmRZfvOUqj7lZjqHkeTvpgSFDlWZTg==}
    dev: false

  /ieee754/1.2.1:
    resolution: {integrity: sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==}
    dev: false

  /ignore/4.0.6:
    resolution: {integrity: sha512-cyFDKrqc/YdcWFniJhzI42+AzS+gNwmUzOSFcRCQYwySuBBBy/KjuxWLZ/FHEH6Moq1NizMOBWyTcv8O4OZIMg==}
    engines: {node: '>= 4'}
    dev: true

  /ignore/5.2.0:
    resolution: {integrity: sha512-CmxgYGiEPCLhfLnpPp1MoRmifwEIOgjcHXxOBjv7mY96c+eWScsOP9c112ZyLdWHi0FxHjI+4uVhKYp/gcdRmQ==}
    engines: {node: '>= 4'}
    dev: true

  /immer/9.0.6:
    resolution: {integrity: sha512-G95ivKpy+EvVAnAab4fVa4YGYn24J1SpEktnJX7JJ45Bd7xqME/SCplFzYFmTbrkwZbQ4xJK1xMTUYBkN6pWsQ==}
    dev: false

  /import-fresh/3.3.0:
    resolution: {integrity: sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==}
    engines: {node: '>=6'}
    dependencies:
      parent-module: 1.0.1
      resolve-from: 4.0.0
    dev: true

  /import-local/3.1.0:
    resolution: {integrity: sha512-ASB07uLtnDs1o6EHjKpX34BKYDSqnFerfTOJL2HvMqF70LnxpjkzDB8J44oT9pu4AMPkQwf8jl6szgvNd2tRIg==}
    engines: {node: '>=8'}
    hasBin: true
    dependencies:
      pkg-dir: 4.2.0
      resolve-cwd: 3.0.0
    dev: true

  /imurmurhash/0.1.4:
    resolution: {integrity: sha1-khi5srkoojixPcT7a21XbyMUU+o=}
    engines: {node: '>=0.8.19'}
    dev: true

  /inflight/1.0.6:
    resolution: {integrity: sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=}
    dependencies:
      once: 1.4.0
      wrappy: 1.0.2

  /inherits/2.0.4:
    resolution: {integrity: sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==}

  /internal-slot/1.0.3:
    resolution: {integrity: sha512-O0DB1JC/sPyZl7cIo78n5dR7eUSwwpYPiXRhTzNxZVAMUuB8vlnRFyLxdrVToks6XPLVnFfbzaVd5WLjhgg+vA==}
    engines: {node: '>= 0.4'}
    dependencies:
      get-intrinsic: 1.1.1
      has: 1.0.3
      side-channel: 1.0.4
    dev: true

  /internmap/1.0.1:
    resolution: {integrity: sha512-lDB5YccMydFBtasVtxnZ3MRBHuaoE8GKsppq+EchKL2U4nK/DmEpPHNH8MZe5HkMtpSiTSOZwfN0tzYjO/lJEw==}
    dev: false

  /invariant/2.2.4:
    resolution: {integrity: sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==}
    dependencies:
      loose-envify: 1.4.0
    dev: false

  /ip/1.1.5:
    resolution: {integrity: sha1-vd7XARQpCCjAoDnnLvJfWq7ENUo=}
    dev: false

  /is-arguments/1.1.1:
    resolution: {integrity: sha512-8Q7EARjzEnKpt/PCD7e1cgUS0a6X8u5tdSiMqXhojOdoV9TsMsiO+9VLC5vAmO8N7/GmXn7yjR8qnA6bVAEzfA==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      has-tostringtag: 1.0.0
    dev: false

  /is-arrayish/0.2.1:
    resolution: {integrity: sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=}
    dev: true

  /is-bigint/1.0.4:
    resolution: {integrity: sha512-zB9CruMamjym81i2JZ3UMn54PKGsQzsJeo6xvN3HJJ4CAsQNB6iRutp2To77OfCNuoxspsIhzaPoO1zyCEhFOg==}
    dependencies:
      has-bigints: 1.0.1
    dev: true

  /is-binary-path/2.1.0:
    resolution: {integrity: sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==}
    engines: {node: '>=8'}
    dependencies:
      binary-extensions: 2.2.0
    dev: false

  /is-boolean-object/1.1.2:
    resolution: {integrity: sha512-gDYaKHJmnj4aWxyj6YHyXVpdQawtVLHU5cb+eztPGczf6cjuTdwve5ZIEfgXqH4e57An1D1AKf8CZ3kYrQRqYA==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      has-tostringtag: 1.0.0
    dev: true

  /is-buffer/1.1.6:
    resolution: {integrity: sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==}
    dev: false

  /is-callable/1.2.4:
    resolution: {integrity: sha512-nsuwtxZfMX67Oryl9LCQ+upnC0Z0BgpwntpS89m1H/TLF0zNfzfLMV/9Wa/6MZsj0acpEjAO0KF1xT6ZdLl95w==}
    engines: {node: '>= 0.4'}
    dev: true

  /is-core-module/2.8.1:
    resolution: {integrity: sha512-SdNCUs284hr40hFTFP6l0IfZ/RSrMXF3qgoRHd3/79unUTvrFO/JoXwkGm+5J/Oe3E/b5GsnG330uUNgRpu1PA==}
    dependencies:
      has: 1.0.3

  /is-date-object/1.0.5:
    resolution: {integrity: sha512-9YQaSxsAiSwcvS33MBk3wTCVnWK+HhF8VZR2jRxehM16QcVOdHqPn4VPHmRK4lSr38n9JriurInLcP90xsYNfQ==}
    engines: {node: '>= 0.4'}
    dependencies:
      has-tostringtag: 1.0.0

  /is-extglob/2.1.1:
    resolution: {integrity: sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=}
    engines: {node: '>=0.10.0'}

  /is-fullwidth-code-point/3.0.0:
    resolution: {integrity: sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==}
    engines: {node: '>=8'}

  /is-generator-fn/2.1.0:
    resolution: {integrity: sha512-cTIB4yPYL/Grw0EaSzASzg6bBy9gqCofvWN8okThAYIxKJZC+udlRAmGbM0XLeniEJSs8uEgHPGuHSe1XsOLSQ==}
    engines: {node: '>=6'}
    dev: true

  /is-glob/4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}
    dependencies:
      is-extglob: 2.1.1

  /is-negative-zero/2.0.2:
    resolution: {integrity: sha512-dqJvarLawXsFbNDeJW7zAz8ItJ9cd28YufuuFzh0G8pNHjJMnY08Dv7sYX2uF5UpQOwieAeOExEYAWWfu7ZZUA==}
    engines: {node: '>= 0.4'}
    dev: true

  /is-number-object/1.0.6:
    resolution: {integrity: sha512-bEVOqiRcvo3zO1+G2lVMy+gkkEm9Yh7cDMRusKKu5ZJKPUYSJwICTKZrNKHA2EbSP0Tu0+6B/emsYNHZyn6K8g==}
    engines: {node: '>= 0.4'}
    dependencies:
      has-tostringtag: 1.0.0
    dev: true

  /is-number/7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}

  /is-potential-custom-element-name/1.0.1:
    resolution: {integrity: sha512-bCYeRA2rVibKZd+s2625gGnGF/t7DSqDs4dP7CrLA1m7jKWz6pps0LpYLJN8Q64HtmPKJ1hrN3nzPNKFEKOUiQ==}
    dev: true

  /is-promise/2.2.2:
    resolution: {integrity: sha512-+lP4/6lKUBfQjZ2pdxThZvLUAafmZb8OAxFb8XXtiQmS35INgr85hdOGoEs124ez1FCnZJt6jau/T+alh58QFQ==}
    dev: false

  /is-regex/1.1.4:
    resolution: {integrity: sha512-kvRdxDsxZjhzUX07ZnLydzS1TU/TJlTUHHY4YLL87e37oUA49DfkLqgy+VjFocowy29cKvcSiu+kIv728jTTVg==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      has-tostringtag: 1.0.0

  /is-shared-array-buffer/1.0.1:
    resolution: {integrity: sha512-IU0NmyknYZN0rChcKhRO1X8LYz5Isj/Fsqh8NJOSf+N/hCOTwy29F32Ik7a+QszE63IdvmwdTPDd6cZ5pg4cwA==}
    dev: true

  /is-stream/2.0.1:
    resolution: {integrity: sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==}
    engines: {node: '>=8'}
    dev: true

  /is-string/1.0.7:
    resolution: {integrity: sha512-tE2UXzivje6ofPW7l23cjDOMa09gb7xlAqG6jG5ej6uPV32TlWP3NKPigtaGeHNu9fohccRYvIiZMfOOnOYUtg==}
    engines: {node: '>= 0.4'}
    dependencies:
      has-tostringtag: 1.0.0
    dev: true

  /is-symbol/1.0.4:
    resolution: {integrity: sha512-C/CPBqKWnvdcxqIARxyOh4v1UUEOCHpgDa0WYgpKDFMszcrPcffg5uhwSgPCLD2WWxmq6isisz87tzT01tuGhg==}
    engines: {node: '>= 0.4'}
    dependencies:
      has-symbols: 1.0.2
    dev: true

  /is-typedarray/1.0.0:
    resolution: {integrity: sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=}
    dev: true

  /is-weakref/1.0.2:
    resolution: {integrity: sha512-qctsuLZmIQ0+vSSMfoVvyFe2+GSEvnmZ2ezTup1SBse9+twCCeial6EEi3Nc2KFcf6+qz2FBPnjXsk8xhKSaPQ==}
    dependencies:
      call-bind: 1.0.2
    dev: true

  /isarray/0.0.1:
    resolution: {integrity: sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8=}
    dev: false

  /isarray/1.0.0:
    resolution: {integrity: sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=}
    dev: false

  /isexe/2.0.0:
    resolution: {integrity: sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=}
    dev: true

  /isomorphic-unfetch/3.1.0:
    resolution: {integrity: sha512-geDJjpoZ8N0kWexiwkX8F9NkTsXhetLPVbZFQ+JTW239QNOwvB0gniuR1Wc6f0AMTn7/mFGyXvHTifrCp/GH8Q==}
    dependencies:
      node-fetch: 2.6.7
      unfetch: 4.2.0
    transitivePeerDependencies:
      - encoding
    dev: false

  /istanbul-lib-coverage/3.2.0:
    resolution: {integrity: sha512-eOeJ5BHCmHYvQK7xt9GkdHuzuCGS1Y6g9Gvnx3Ym33fz/HpLRYxiS0wHNr+m/MBC8B647Xt608vCDEvhl9c6Mw==}
    engines: {node: '>=8'}
    dev: true

  /istanbul-lib-instrument/5.1.0:
    resolution: {integrity: sha512-czwUz525rkOFDJxfKK6mYfIs9zBKILyrZQxjz3ABhjQXhbhFsSbo1HW/BFcsDnfJYJWA6thRR5/TUY2qs5W99Q==}
    engines: {node: '>=8'}
    dependencies:
      '@babel/core': 7.16.7
      '@babel/parser': 7.16.8
      '@istanbuljs/schema': 0.1.3
      istanbul-lib-coverage: 3.2.0
      semver: 6.3.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /istanbul-lib-report/3.0.0:
    resolution: {integrity: sha512-wcdi+uAKzfiGT2abPpKZ0hSU1rGQjUQnLvtY5MpQ7QCTahD3VODhcu4wcfY1YtkGaDD5yuydOLINXsfbus9ROw==}
    engines: {node: '>=8'}
    dependencies:
      istanbul-lib-coverage: 3.2.0
      make-dir: 3.1.0
      supports-color: 7.2.0
    dev: true

  /istanbul-lib-source-maps/4.0.1:
    resolution: {integrity: sha512-n3s8EwkdFIJCG3BPKBYvskgXGoy88ARzvegkitk60NxRdwltLOTaH7CUiMRXvwYorl0Q712iEjcWB+fK/MrWVw==}
    engines: {node: '>=10'}
    dependencies:
      debug: 4.3.3
      istanbul-lib-coverage: 3.2.0
      source-map: 0.6.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /istanbul-reports/3.1.3:
    resolution: {integrity: sha512-x9LtDVtfm/t1GFiLl3NffC7hz+I1ragvgX1P/Lg1NlIagifZDKUkuuaAxH/qpwj2IuEfD8G2Bs/UKp+sZ/pKkg==}
    engines: {node: '>=8'}
    dependencies:
      html-escaper: 2.0.2
      istanbul-lib-report: 3.0.0
    dev: true

  /jake/10.8.2:
    resolution: {integrity: sha512-eLpKyrfG3mzvGE2Du8VoPbeSkRry093+tyNjdYaBbJS9v17knImYGNXQCUV0gLxQtF82m3E8iRb/wdSQZLoq7A==}
    hasBin: true
    dependencies:
      async: 0.9.2
      chalk: 2.4.2
      filelist: 1.0.2
      minimatch: 3.0.4
    dev: true

  /jest-changed-files/27.4.2:
    resolution: {integrity: sha512-/9x8MjekuzUQoPjDHbBiXbNEBauhrPU2ct7m8TfCg69ywt1y/N+yYwGh3gCpnqUS3klYWDU/lSNgv+JhoD2k1A==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.4.2
      execa: 5.1.1
      throat: 6.0.1
    dev: true

  /jest-circus/27.4.6:
    resolution: {integrity: sha512-UA7AI5HZrW4wRM72Ro80uRR2Fg+7nR0GESbSI/2M+ambbzVuA63mn5T1p3Z/wlhntzGpIG1xx78GP2YIkf6PhQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/environment': 27.4.6
      '@jest/test-result': 27.4.6
      '@jest/types': 27.4.2
      '@types/node': 14.18.10
      chalk: 4.1.2
      co: 4.6.0
      dedent: 0.7.0
      expect: 27.4.6
      is-generator-fn: 2.1.0
      jest-each: 27.4.6
      jest-matcher-utils: 27.4.6
      jest-message-util: 27.4.6
      jest-runtime: 27.4.6
      jest-snapshot: 27.4.6
      jest-util: 27.4.2
      pretty-format: 27.4.6
      slash: 3.0.0
      stack-utils: 2.0.5
      throat: 6.0.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /jest-cli/27.4.7:
    resolution: {integrity: sha512-zREYhvjjqe1KsGV15mdnxjThKNDgza1fhDT+iUsXWLCq3sxe9w5xnvyctcYVT5PcdLSjv7Y5dCwTS3FCF1tiuw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    hasBin: true
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true
    dependencies:
      '@jest/core': 27.4.7
      '@jest/test-result': 27.4.6
      '@jest/types': 27.4.2
      chalk: 4.1.2
      exit: 0.1.2
      graceful-fs: 4.2.9
      import-local: 3.1.0
      jest-config: 27.4.7
      jest-util: 27.4.2
      jest-validate: 27.4.6
      prompts: 2.4.2
      yargs: 16.2.0
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - ts-node
      - utf-8-validate
    dev: true

  /jest-cli/27.4.7_ts-node@10.4.0:
    resolution: {integrity: sha512-zREYhvjjqe1KsGV15mdnxjThKNDgza1fhDT+iUsXWLCq3sxe9w5xnvyctcYVT5PcdLSjv7Y5dCwTS3FCF1tiuw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    hasBin: true
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true
    dependencies:
      '@jest/core': 27.4.7_ts-node@10.4.0
      '@jest/test-result': 27.4.6
      '@jest/types': 27.4.2
      chalk: 4.1.2
      exit: 0.1.2
      graceful-fs: 4.2.9
      import-local: 3.1.0
      jest-config: 27.4.7_ts-node@10.4.0
      jest-util: 27.4.2
      jest-validate: 27.4.6
      prompts: 2.4.2
      yargs: 16.2.0
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - ts-node
      - utf-8-validate
    dev: true

  /jest-config/27.4.7:
    resolution: {integrity: sha512-xz/o/KJJEedHMrIY9v2ParIoYSrSVY6IVeE4z5Z3i101GoA5XgfbJz+1C8EYPsv7u7f39dS8F9v46BHDhn0vlw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    peerDependencies:
      ts-node: '>=9.0.0'
    peerDependenciesMeta:
      ts-node:
        optional: true
    dependencies:
      '@babel/core': 7.16.7
      '@jest/test-sequencer': 27.4.6
      '@jest/types': 27.4.2
      babel-jest: 27.4.6_@babel+core@7.16.7
      chalk: 4.1.2
      ci-info: 3.3.0
      deepmerge: 4.2.2
      glob: 7.2.0
      graceful-fs: 4.2.9
      jest-circus: 27.4.6
      jest-environment-jsdom: 27.4.6
      jest-environment-node: 27.4.6
      jest-get-type: 27.4.0
      jest-jasmine2: 27.4.6
      jest-regex-util: 27.4.0
      jest-resolve: 27.4.6
      jest-runner: 27.4.6
      jest-util: 27.4.2
      jest-validate: 27.4.6
      micromatch: 4.0.4
      pretty-format: 27.4.6
      slash: 3.0.0
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - utf-8-validate
    dev: true

  /jest-config/27.4.7_ts-node@10.4.0:
    resolution: {integrity: sha512-xz/o/KJJEedHMrIY9v2ParIoYSrSVY6IVeE4z5Z3i101GoA5XgfbJz+1C8EYPsv7u7f39dS8F9v46BHDhn0vlw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    peerDependencies:
      ts-node: '>=9.0.0'
    peerDependenciesMeta:
      ts-node:
        optional: true
    dependencies:
      '@babel/core': 7.16.7
      '@jest/test-sequencer': 27.4.6
      '@jest/types': 27.4.2
      babel-jest: 27.4.6_@babel+core@7.16.7
      chalk: 4.1.2
      ci-info: 3.3.0
      deepmerge: 4.2.2
      glob: 7.2.0
      graceful-fs: 4.2.9
      jest-circus: 27.4.6
      jest-environment-jsdom: 27.4.6
      jest-environment-node: 27.4.6
      jest-get-type: 27.4.0
      jest-jasmine2: 27.4.6
      jest-regex-util: 27.4.0
      jest-resolve: 27.4.6
      jest-runner: 27.4.6
      jest-util: 27.4.2
      jest-validate: 27.4.6
      micromatch: 4.0.4
      pretty-format: 27.4.6
      slash: 3.0.0
      ts-node: 10.4.0_d9704c9be36ede869b5c33ef6688872e
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - utf-8-validate
    dev: true

  /jest-diff/27.4.6:
    resolution: {integrity: sha512-zjaB0sh0Lb13VyPsd92V7HkqF6yKRH9vm33rwBt7rPYrpQvS1nCvlIy2pICbKta+ZjWngYLNn4cCK4nyZkjS/w==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      chalk: 4.1.2
      diff-sequences: 27.4.0
      jest-get-type: 27.4.0
      pretty-format: 27.4.6
    dev: true

  /jest-docblock/27.4.0:
    resolution: {integrity: sha512-7TBazUdCKGV7svZ+gh7C8esAnweJoG+SvcF6Cjqj4l17zA2q1cMwx2JObSioubk317H+cjcHgP+7fTs60paulg==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      detect-newline: 3.1.0
    dev: true

  /jest-each/27.4.6:
    resolution: {integrity: sha512-n6QDq8y2Hsmn22tRkgAk+z6MCX7MeVlAzxmZDshfS2jLcaBlyhpF3tZSJLR+kXmh23GEvS0ojMR8i6ZeRvpQcA==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.4.2
      chalk: 4.1.2
      jest-get-type: 27.4.0
      jest-util: 27.4.2
      pretty-format: 27.4.6
    dev: true

  /jest-environment-jsdom/27.4.6:
    resolution: {integrity: sha512-o3dx5p/kHPbUlRvSNjypEcEtgs6LmvESMzgRFQE6c+Prwl2JLA4RZ7qAnxc5VM8kutsGRTB15jXeeSbJsKN9iA==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/environment': 27.4.6
      '@jest/fake-timers': 27.4.6
      '@jest/types': 27.4.2
      '@types/node': 14.18.10
      jest-mock: 27.4.6
      jest-util: 27.4.2
      jsdom: 16.7.0
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - utf-8-validate
    dev: true

  /jest-environment-node/27.4.6:
    resolution: {integrity: sha512-yfHlZ9m+kzTKZV0hVfhVu6GuDxKAYeFHrfulmy7Jxwsq4V7+ZK7f+c0XP/tbVDMQW7E4neG2u147hFkuVz0MlQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/environment': 27.4.6
      '@jest/fake-timers': 27.4.6
      '@jest/types': 27.4.2
      '@types/node': 14.18.10
      jest-mock: 27.4.6
      jest-util: 27.4.2
    dev: true

  /jest-get-type/27.4.0:
    resolution: {integrity: sha512-tk9o+ld5TWq41DkK14L4wox4s2D9MtTpKaAVzXfr5CUKm5ZK2ExcaFE0qls2W71zE/6R2TxxrK9w2r6svAFDBQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dev: true

  /jest-haste-map/27.4.6:
    resolution: {integrity: sha512-0tNpgxg7BKurZeFkIOvGCkbmOHbLFf4LUQOxrQSMjvrQaQe3l6E8x6jYC1NuWkGo5WDdbr8FEzUxV2+LWNawKQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.4.2
      '@types/graceful-fs': 4.1.5
      '@types/node': 14.18.10
      anymatch: 3.1.2
      fb-watchman: 2.0.1
      graceful-fs: 4.2.9
      jest-regex-util: 27.4.0
      jest-serializer: 27.4.0
      jest-util: 27.4.2
      jest-worker: 27.4.6
      micromatch: 4.0.4
      walker: 1.0.8
    optionalDependencies:
      fsevents: 2.3.2
    dev: true

  /jest-jasmine2/27.4.6:
    resolution: {integrity: sha512-uAGNXF644I/whzhsf7/qf74gqy9OuhvJ0XYp8SDecX2ooGeaPnmJMjXjKt0mqh1Rl5dtRGxJgNrHlBQIBfS5Nw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/environment': 27.4.6
      '@jest/source-map': 27.4.0
      '@jest/test-result': 27.4.6
      '@jest/types': 27.4.2
      '@types/node': 14.18.10
      chalk: 4.1.2
      co: 4.6.0
      expect: 27.4.6
      is-generator-fn: 2.1.0
      jest-each: 27.4.6
      jest-matcher-utils: 27.4.6
      jest-message-util: 27.4.6
      jest-runtime: 27.4.6
      jest-snapshot: 27.4.6
      jest-util: 27.4.2
      pretty-format: 27.4.6
      throat: 6.0.1
    transitivePeerDependencies:
      - supports-color
    dev: true

  /jest-leak-detector/27.4.6:
    resolution: {integrity: sha512-kkaGixDf9R7CjHm2pOzfTxZTQQQ2gHTIWKY/JZSiYTc90bZp8kSZnUMS3uLAfwTZwc0tcMRoEX74e14LG1WapA==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      jest-get-type: 27.4.0
      pretty-format: 27.4.6
    dev: true

  /jest-matcher-utils/27.4.6:
    resolution: {integrity: sha512-XD4PKT3Wn1LQnRAq7ZsTI0VRuEc9OrCPFiO1XL7bftTGmfNF0DcEwMHRgqiu7NGf8ZoZDREpGrCniDkjt79WbA==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      chalk: 4.1.2
      jest-diff: 27.4.6
      jest-get-type: 27.4.0
      pretty-format: 27.4.6
    dev: true

  /jest-message-util/27.4.6:
    resolution: {integrity: sha512-0p5szriFU0U74czRSFjH6RyS7UYIAkn/ntwMuOwTGWrQIOh5NzXXrq72LOqIkJKKvFbPq+byZKuBz78fjBERBA==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@babel/code-frame': 7.16.7
      '@jest/types': 27.4.2
      '@types/stack-utils': 2.0.1
      chalk: 4.1.2
      graceful-fs: 4.2.9
      micromatch: 4.0.4
      pretty-format: 27.4.6
      slash: 3.0.0
      stack-utils: 2.0.5
    dev: true

  /jest-mock/27.4.6:
    resolution: {integrity: sha512-kvojdYRkst8iVSZ1EJ+vc1RRD9llueBjKzXzeCytH3dMM7zvPV/ULcfI2nr0v0VUgm3Bjt3hBCQvOeaBz+ZTHw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.4.2
      '@types/node': 14.18.10
    dev: true

  /jest-pnp-resolver/1.2.2_jest-resolve@27.4.6:
    resolution: {integrity: sha512-olV41bKSMm8BdnuMsewT4jqlZ8+3TCARAXjZGT9jcoSnrfUnRCqnMoF9XEeoWjbzObpqF9dRhHQj0Xb9QdF6/w==}
    engines: {node: '>=6'}
    peerDependencies:
      jest-resolve: '*'
    peerDependenciesMeta:
      jest-resolve:
        optional: true
    dependencies:
      jest-resolve: 27.4.6
    dev: true

  /jest-regex-util/27.4.0:
    resolution: {integrity: sha512-WeCpMpNnqJYMQoOjm1nTtsgbR4XHAk1u00qDoNBQoykM280+/TmgA5Qh5giC1ecy6a5d4hbSsHzpBtu5yvlbEg==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dev: true

  /jest-resolve-dependencies/27.4.6:
    resolution: {integrity: sha512-W85uJZcFXEVZ7+MZqIPCscdjuctruNGXUZ3OHSXOfXR9ITgbUKeHj+uGcies+0SsvI5GtUfTw4dY7u9qjTvQOw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.4.2
      jest-regex-util: 27.4.0
      jest-snapshot: 27.4.6
    transitivePeerDependencies:
      - supports-color
    dev: true

  /jest-resolve/27.4.6:
    resolution: {integrity: sha512-SFfITVApqtirbITKFAO7jOVN45UgFzcRdQanOFzjnbd+CACDoyeX7206JyU92l4cRr73+Qy/TlW51+4vHGt+zw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.4.2
      chalk: 4.1.2
      graceful-fs: 4.2.9
      jest-haste-map: 27.4.6
      jest-pnp-resolver: 1.2.2_jest-resolve@27.4.6
      jest-util: 27.4.2
      jest-validate: 27.4.6
      resolve: 1.21.0
      resolve.exports: 1.1.0
      slash: 3.0.0
    dev: true

  /jest-runner/27.4.6:
    resolution: {integrity: sha512-IDeFt2SG4DzqalYBZRgbbPmpwV3X0DcntjezPBERvnhwKGWTW7C5pbbA5lVkmvgteeNfdd/23gwqv3aiilpYPg==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/console': 27.4.6
      '@jest/environment': 27.4.6
      '@jest/test-result': 27.4.6
      '@jest/transform': 27.4.6
      '@jest/types': 27.4.2
      '@types/node': 14.18.10
      chalk: 4.1.2
      emittery: 0.8.1
      exit: 0.1.2
      graceful-fs: 4.2.9
      jest-docblock: 27.4.0
      jest-environment-jsdom: 27.4.6
      jest-environment-node: 27.4.6
      jest-haste-map: 27.4.6
      jest-leak-detector: 27.4.6
      jest-message-util: 27.4.6
      jest-resolve: 27.4.6
      jest-runtime: 27.4.6
      jest-util: 27.4.2
      jest-worker: 27.4.6
      source-map-support: 0.5.21
      throat: 6.0.1
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - utf-8-validate
    dev: true

  /jest-runtime/27.4.6:
    resolution: {integrity: sha512-eXYeoR/MbIpVDrjqy5d6cGCFOYBFFDeKaNWqTp0h6E74dK0zLHzASQXJpl5a2/40euBmKnprNLJ0Kh0LCndnWQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/environment': 27.4.6
      '@jest/fake-timers': 27.4.6
      '@jest/globals': 27.4.6
      '@jest/source-map': 27.4.0
      '@jest/test-result': 27.4.6
      '@jest/transform': 27.4.6
      '@jest/types': 27.4.2
      chalk: 4.1.2
      cjs-module-lexer: 1.2.2
      collect-v8-coverage: 1.0.1
      execa: 5.1.1
      glob: 7.2.0
      graceful-fs: 4.2.9
      jest-haste-map: 27.4.6
      jest-message-util: 27.4.6
      jest-mock: 27.4.6
      jest-regex-util: 27.4.0
      jest-resolve: 27.4.6
      jest-snapshot: 27.4.6
      jest-util: 27.4.2
      slash: 3.0.0
      strip-bom: 4.0.0
    transitivePeerDependencies:
      - supports-color
    dev: true

  /jest-serializer/27.4.0:
    resolution: {integrity: sha512-RDhpcn5f1JYTX2pvJAGDcnsNTnsV9bjYPU8xcV+xPwOXnUPOQwf4ZEuiU6G9H1UztH+OapMgu/ckEVwO87PwnQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@types/node': 14.18.10
      graceful-fs: 4.2.9
    dev: true

  /jest-snapshot/27.4.6:
    resolution: {integrity: sha512-fafUCDLQfzuNP9IRcEqaFAMzEe7u5BF7mude51wyWv7VRex60WznZIC7DfKTgSIlJa8aFzYmXclmN328aqSDmQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@babel/core': 7.16.7
      '@babel/generator': 7.16.8
      '@babel/plugin-syntax-typescript': 7.16.7_@babel+core@7.16.7
      '@babel/traverse': 7.16.8
      '@babel/types': 7.16.8
      '@jest/transform': 27.4.6
      '@jest/types': 27.4.2
      '@types/babel__traverse': 7.14.2
      '@types/prettier': 2.4.3
      babel-preset-current-node-syntax: 1.0.1_@babel+core@7.16.7
      chalk: 4.1.2
      expect: 27.4.6
      graceful-fs: 4.2.9
      jest-diff: 27.4.6
      jest-get-type: 27.4.0
      jest-haste-map: 27.4.6
      jest-matcher-utils: 27.4.6
      jest-message-util: 27.4.6
      jest-util: 27.4.2
      natural-compare: 1.4.0
      pretty-format: 27.4.6
      semver: 7.3.5
    transitivePeerDependencies:
      - supports-color
    dev: true

  /jest-util/27.4.2:
    resolution: {integrity: sha512-YuxxpXU6nlMan9qyLuxHaMMOzXAl5aGZWCSzben5DhLHemYQxCc4YK+4L3ZrCutT8GPQ+ui9k5D8rUJoDioMnA==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.4.2
      '@types/node': 14.18.10
      chalk: 4.1.2
      ci-info: 3.3.0
      graceful-fs: 4.2.9
      picomatch: 2.3.1
    dev: true

  /jest-validate/27.4.6:
    resolution: {integrity: sha512-872mEmCPVlBqbA5dToC57vA3yJaMRfIdpCoD3cyHWJOMx+SJwLNw0I71EkWs41oza/Er9Zno9XuTkRYCPDUJXQ==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/types': 27.4.2
      camelcase: 6.3.0
      chalk: 4.1.2
      jest-get-type: 27.4.0
      leven: 3.1.0
      pretty-format: 27.4.6
    dev: true

  /jest-watcher/27.4.6:
    resolution: {integrity: sha512-yKQ20OMBiCDigbD0quhQKLkBO+ObGN79MO4nT7YaCuQ5SM+dkBNWE8cZX0FjU6czwMvWw6StWbe+Wv4jJPJ+fw==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      '@jest/test-result': 27.4.6
      '@jest/types': 27.4.2
      '@types/node': 14.18.10
      ansi-escapes: 4.3.2
      chalk: 4.1.2
      jest-util: 27.4.2
      string-length: 4.0.2
    dev: true

  /jest-worker/27.4.6:
    resolution: {integrity: sha512-gHWJF/6Xi5CTG5QCvROr6GcmpIqNYpDJyc8A1h/DyXqH1tD6SnRCM0d3U5msV31D2LB/U+E0M+W4oyvKV44oNw==}
    engines: {node: '>= 10.13.0'}
    dependencies:
      '@types/node': 14.18.10
      merge-stream: 2.0.0
      supports-color: 8.1.1
    dev: true

  /jest/27.4.7:
    resolution: {integrity: sha512-8heYvsx7nV/m8m24Vk26Y87g73Ba6ueUd0MWed/NXMhSZIm62U/llVbS0PJe1SHunbyXjJ/BqG1z9bFjGUIvTg==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    hasBin: true
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true
    dependencies:
      '@jest/core': 27.4.7
      import-local: 3.1.0
      jest-cli: 27.4.7
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - ts-node
      - utf-8-validate
    dev: true

  /jest/27.4.7_ts-node@10.4.0:
    resolution: {integrity: sha512-8heYvsx7nV/m8m24Vk26Y87g73Ba6ueUd0MWed/NXMhSZIm62U/llVbS0PJe1SHunbyXjJ/BqG1z9bFjGUIvTg==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    hasBin: true
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true
    dependencies:
      '@jest/core': 27.4.7_ts-node@10.4.0
      import-local: 3.1.0
      jest-cli: 27.4.7_ts-node@10.4.0
    transitivePeerDependencies:
      - bufferutil
      - canvas
      - supports-color
      - ts-node
      - utf-8-validate
    dev: true

  /jmespath/0.15.0:
    resolution: {integrity: sha1-o/Iiqarp+Wb10nx5ZRDigJF2Qhc=}
    engines: {node: '>= 0.6.0'}
    dev: false

  /js-cookie/2.2.1:
    resolution: {integrity: sha512-HvdH2LzI/EAZcUwA8+0nKNtWHqS+ZmijLA30RwZA0bo7ToCckjK5MkGhjED9KoRcXO6BaGI3I9UIzSA1FKFPOQ==}
    dev: false

  /js-tokens/4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}

  /js-yaml/3.14.1:
    resolution: {integrity: sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==}
    hasBin: true
    dependencies:
      argparse: 1.0.10
      esprima: 4.0.1
    dev: true

  /js-yaml/4.1.0:
    resolution: {integrity: sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==}
    hasBin: true
    dependencies:
      argparse: 2.0.1
    dev: true

  /jsdom/16.7.0:
    resolution: {integrity: sha512-u9Smc2G1USStM+s/x1ru5Sxrl6mPYCbByG1U/hUmqaVsm4tbNyS7CicOSRyuGQYZhTu0h84qkZZQ/I+dzizSVw==}
    engines: {node: '>=10'}
    peerDependencies:
      canvas: ^2.5.0
    peerDependenciesMeta:
      canvas:
        optional: true
    dependencies:
      abab: 2.0.5
      acorn: 8.7.0
      acorn-globals: 6.0.0
      cssom: 0.4.4
      cssstyle: 2.3.0
      data-urls: 2.0.0
      decimal.js: 10.3.1
      domexception: 2.0.1
      escodegen: 2.0.0
      form-data: 3.0.1
      html-encoding-sniffer: 2.0.1
      http-proxy-agent: 4.0.1
      https-proxy-agent: 5.0.0
      is-potential-custom-element-name: 1.0.1
      nwsapi: 2.2.0
      parse5: 6.0.1
      saxes: 5.0.1
      symbol-tree: 3.2.4
      tough-cookie: 4.0.0
      w3c-hr-time: 1.0.2
      w3c-xmlserializer: 2.0.0
      webidl-conversions: 6.1.0
      whatwg-encoding: 1.0.5
      whatwg-mimetype: 2.3.0
      whatwg-url: 8.7.0
      ws: 7.5.6
      xml-name-validator: 3.0.0
    transitivePeerDependencies:
      - bufferutil
      - supports-color
      - utf-8-validate
    dev: true

  /jsesc/0.5.0:
    resolution: {integrity: sha1-597mbjXW/Bb3EP6R1c9p9w8IkR0=}
    hasBin: true
    dev: true

  /jsesc/2.5.2:
    resolution: {integrity: sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==}
    engines: {node: '>=4'}
    hasBin: true
    dev: true

  /json-diff/0.7.1:
    resolution: {integrity: sha512-/LxjcgeDIZwFB1HHTShKAYs2NaxAgwUQjXKvrFLDvw3KqvbffFmy5ZeeamxoSLgQG89tRs9+CFKiR3lJAPPhDw==}
    hasBin: true
    dependencies:
      cli-color: 2.0.1
      difflib: 0.2.4
      dreamopt: 0.8.0
    dev: false

  /json-parse-even-better-errors/2.3.1:
    resolution: {integrity: sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==}
    dev: true

  /json-schema-traverse/0.4.1:
    resolution: {integrity: sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==}
    dev: true

  /json-schema-traverse/1.0.0:
    resolution: {integrity: sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==}
    dev: false

  /json-stable-stringify-without-jsonify/1.0.1:
    resolution: {integrity: sha1-nbe1lJatPzz+8wp1FC0tkwrXJlE=}
    dev: true

  /json5/1.0.1:
    resolution: {integrity: sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==}
    hasBin: true
    dependencies:
      minimist: 1.2.5
    dev: true

  /json5/2.2.0:
    resolution: {integrity: sha512-f+8cldu7X/y7RAJurMEJmdoKXGB/X550w2Nr3tTbezL6RwEE/iMcm+tZnXeoZtKuOq6ft8+CqzEkrIgx1fPoQA==}
    engines: {node: '>=6'}
    hasBin: true
    dependencies:
      minimist: 1.2.5

  /jsonc-parser/3.0.0:
    resolution: {integrity: sha512-fQzRfAbIBnR0IQvftw9FJveWiHp72Fg20giDrHz6TdfB12UH/uue0D3hm57UB5KgAVuniLMCaS8P1IMj9NR7cA==}
    dev: false

  /jsonfile/4.0.0:
    resolution: {integrity: sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=}
    optionalDependencies:
      graceful-fs: 4.2.9
    dev: false

  /jsonfile/6.1.0:
    resolution: {integrity: sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==}
    dependencies:
      universalify: 2.0.0
    optionalDependencies:
      graceful-fs: 4.2.9

  /jsx-ast-utils/3.2.1:
    resolution: {integrity: sha512-uP5vu8xfy2F9A6LGC22KO7e2/vGTS1MhP+18f++ZNlf0Ohaxbc9nIEwHAsejlJKyzfZzU5UIhe5ItYkitcZnZA==}
    engines: {node: '>=4.0'}
    dependencies:
      array-includes: 3.1.4
      object.assign: 4.1.2
    dev: true

  /just-extend/4.2.1:
    resolution: {integrity: sha512-g3UB796vUFIY90VIv/WX3L2c8CS2MdWUww3CNrYmqza1Fg0DURc2K/O4YrnklBdQarSJ/y8JnJYDGc+1iumQjg==}
    dev: false

  /kleur/3.0.3:
    resolution: {integrity: sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w==}
    engines: {node: '>=6'}
    dev: true

  /language-subtag-registry/0.3.21:
    resolution: {integrity: sha512-L0IqwlIXjilBVVYKFT37X9Ih11Um5NEl9cbJIuU/SwP/zEEAbBPOnEeeuxVMf45ydWQRDQN3Nqc96OgbH1K+Pg==}
    dev: true

  /language-tags/1.0.5:
    resolution: {integrity: sha1-0yHbxNowuovzAk4ED6XBRmH5GTo=}
    dependencies:
      language-subtag-registry: 0.3.21
    dev: true

  /lazystream/1.0.1:
    resolution: {integrity: sha512-b94GiNHQNy6JNTrt5w6zNyffMrNkXZb3KTkCZJb2V1xaEGCk093vkZ2jk3tpaeP33/OiXC+WvK9AxUebnf5nbw==}
    engines: {node: '>= 0.6.3'}
    dependencies:
      readable-stream: 2.3.7
    dev: false

  /leven/3.1.0:
    resolution: {integrity: sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A==}
    engines: {node: '>=6'}
    dev: true

  /levn/0.3.0:
    resolution: {integrity: sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=}
    engines: {node: '>= 0.8.0'}
    dependencies:
      prelude-ls: 1.1.2
      type-check: 0.3.2

  /levn/0.4.1:
    resolution: {integrity: sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==}
    engines: {node: '>= 0.8.0'}
    dependencies:
      prelude-ls: 1.2.1
      type-check: 0.4.0
    dev: true

  /linebreak/1.0.2:
    resolution: {integrity: sha512-bJwSRsJeAmaZYnkcwl5sCQNfSDAhBuXxb6L27tb+qkBRtUQSSTUa5bcgCPD6hFEkRNlpWHfK7nFMmcANU7ZP1w==}
    dependencies:
      base64-js: 0.0.8
      brfs: 2.0.2
      unicode-trie: 1.0.0
    dev: false

  /lines-and-columns/1.2.4:
    resolution: {integrity: sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==}
    dev: true

  /locate-path/2.0.0:
    resolution: {integrity: sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=}
    engines: {node: '>=4'}
    dependencies:
      p-locate: 2.0.0
      path-exists: 3.0.0
    dev: true

  /locate-path/5.0.0:
    resolution: {integrity: sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==}
    engines: {node: '>=8'}
    dependencies:
      p-locate: 4.1.0

  /lodash.debounce/4.0.8:
    resolution: {integrity: sha1-gteb/zCmfEAF/9XiUVMArZyk168=}
    dev: true

  /lodash.defaults/4.2.0:
    resolution: {integrity: sha1-0JF4cW/+pN3p5ft7N/bwgCJ0WAw=}
    dev: false

  /lodash.difference/4.5.0:
    resolution: {integrity: sha1-nMtOUF1Ia5FlE0V3KIWi3yf9AXw=}
    dev: false

  /lodash.flatten/4.4.0:
    resolution: {integrity: sha1-8xwiIlqWMtK7+OSt2+8kCqdlph8=}
    dev: false

  /lodash.isplainobject/4.0.6:
    resolution: {integrity: sha1-fFJqUtibRcRcxpC4gWO+BJf1UMs=}
    dev: false

  /lodash.memoize/4.1.2:
    resolution: {integrity: sha1-vMbEmkKihA7Zl/Mj6tpezRguC/4=}
    dev: true

  /lodash.merge/4.6.2:
    resolution: {integrity: sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==}
    dev: true

  /lodash.truncate/4.4.2:
    resolution: {integrity: sha1-WjUNoLERO4N+z//VgSy+WNbq4ZM=}
    dev: false

  /lodash.union/4.6.0:
    resolution: {integrity: sha1-SLtQiECfFvGCFmZkHETdGqrjzYg=}
    dev: false

  /lodash/4.17.21:
    resolution: {integrity: sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==}

  /lolex/4.2.0:
    resolution: {integrity: sha512-gKO5uExCXvSm6zbF562EvM+rd1kQDnB9AZBbiQVzf1ZmdDpxUSvpnAaVOP83N/31mRK8Ml8/VE8DMvsAZQ+7wg==}
    dev: false

  /lolex/5.1.2:
    resolution: {integrity: sha512-h4hmjAvHTmd+25JSwrtTIuwbKdwg5NzZVRMLn9saij4SZaepCrTCxPr35H/3bjwfMJtN+t3CX8672UIkglz28A==}
    dependencies:
      '@sinonjs/commons': 1.8.3
    dev: false

  /loose-envify/1.4.0:
    resolution: {integrity: sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==}
    hasBin: true
    dependencies:
      js-tokens: 4.0.0

  /lower-case/2.0.2:
    resolution: {integrity: sha512-7fm3l3NAF9WfN6W3JOmf5drwpVqX78JtoGJ3A6W0a6ZnldM41w2fV5D490psKFTpMds8TJse/eHLFFsNHHjHgg==}
    dependencies:
      tslib: 2.3.1

  /lru-cache/5.1.1:
    resolution: {integrity: sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==}
    dependencies:
      yallist: 3.1.1
    dev: false

  /lru-cache/6.0.0:
    resolution: {integrity: sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==}
    engines: {node: '>=10'}
    dependencies:
      yallist: 4.0.0

  /lru-queue/0.1.0:
    resolution: {integrity: sha1-Jzi9nw089PhEkMVzbEhpmsYyzaM=}
    dependencies:
      es5-ext: 0.10.53
    dev: false

  /magic-string/0.25.1:
    resolution: {integrity: sha512-sCuTz6pYom8Rlt4ISPFn6wuFodbKMIHUMv4Qko9P17dpxb7s52KJTmRuZZqHdGmLCK9AOcDare039nRIcfdkEg==}
    dependencies:
      sourcemap-codec: 1.4.8
    dev: false

  /make-dir/3.1.0:
    resolution: {integrity: sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==}
    engines: {node: '>=8'}
    dependencies:
      semver: 6.3.0
    dev: true

  /make-error/1.3.6:
    resolution: {integrity: sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==}
    dev: true

  /makeerror/1.0.12:
    resolution: {integrity: sha512-JmqCvUhmt43madlpFzG4BQzG2Z3m6tvQDNKdClZnO3VbIudJYmxsT0FNJMeiB2+JTSlTQTSbU8QdesVmwJcmLg==}
    dependencies:
      tmpl: 1.0.5
    dev: true

  /map-obj/4.3.0:
    resolution: {integrity: sha512-hdN1wVrZbb29eBGiGjJbeP8JbKjq1urkHJ/LIP/NY48MZ1QVXUsQBV1G1zvYFHn1XE06cwjBsOI2K3Ulnj1YXQ==}
    engines: {node: '>=8'}
    dev: false

  /markerjs2/2.19.0:
    resolution: {integrity: sha512-rFIHllZMkSeHeEknASufTRFxbk4d78/+pNq28y7sICcsP6zNydPGUk7oPe+ljBF1MQcFWMv90Zh5u/zXxu5sqg==}
    dev: false

  /md5/2.3.0:
    resolution: {integrity: sha512-T1GITYmFaKuO91vxyoQMFETst+O71VUPEU3ze5GNzDm0OWdP8v1ziTaAEPUr/3kLsY3Sftgz242A1SetQiDL7g==}
    dependencies:
      charenc: 0.0.2
      crypt: 0.0.2
      is-buffer: 1.1.6
    dev: false

  /memoizee/0.4.15:
    resolution: {integrity: sha512-UBWmJpLZd5STPm7PMUlOw/TSy972M+z8gcyQ5veOnSDRREz/0bmpyTfKt3/51DhEBqCZQn1udM/5flcSPYhkdQ==}
    dependencies:
      d: 1.0.1
      es5-ext: 0.10.53
      es6-weak-map: 2.0.3
      event-emitter: 0.3.5
      is-promise: 2.2.2
      lru-queue: 0.1.0
      next-tick: 1.1.0
      timers-ext: 0.1.7
    dev: false

  /merge-source-map/1.0.4:
    resolution: {integrity: sha1-pd5GU42uhNQRTMXqArR3KmNGcB8=}
    dependencies:
      source-map: 0.5.7
    dev: false

  /merge-stream/2.0.0:
    resolution: {integrity: sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==}
    dev: true

  /merge2/1.4.1:
    resolution: {integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==}
    engines: {node: '>= 8'}
    dev: true

  /micromatch/4.0.4:
    resolution: {integrity: sha512-pRmzw/XUcwXGpD9aI9q/0XOwLNygjETJ8y0ao0wdqprrzDa4YnxLcz7fQRZr8voh8V10kGhABbNcHVk5wHgWwg==}
    engines: {node: '>=8.6'}
    dependencies:
      braces: 3.0.2
      picomatch: 2.3.1
    dev: true

  /mime-db/1.51.0:
    resolution: {integrity: sha512-5y8A56jg7XVQx2mbv1lu49NR4dokRnhZYTtL+KGfaa27uq4pSTXkwQkFJl4pkRMyNFz/EtYDSkiiEHx3F7UN6g==}
    engines: {node: '>= 0.6'}
    dev: true

  /mime-types/2.1.34:
    resolution: {integrity: sha512-6cP692WwGIs9XXdOO4++N+7qjqv0rqxxVvJ3VHPh/Sc9mVZcQP+ZGhkKiTvWMQRr2tbHkJP/Yn7Y0npb3ZBs4A==}
    engines: {node: '>= 0.6'}
    dependencies:
      mime-db: 1.51.0
    dev: true

  /mime/2.6.0:
    resolution: {integrity: sha512-USPkMeET31rOMiarsBNIHZKLGgvKc/LrjofAnBlOttf5ajRvqiRA8QsenbcooctK6d6Ts6aqZXBA+XbkKthiQg==}
    engines: {node: '>=4.0.0'}
    hasBin: true
    dev: false

  /mimic-fn/2.1.0:
    resolution: {integrity: sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==}
    engines: {node: '>=6'}
    dev: true

  /minimatch/3.0.4:
    resolution: {integrity: sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==}
    dependencies:
      brace-expansion: 1.1.11

  /minimist/1.2.5:
    resolution: {integrity: sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw==}

  /ms/2.0.0:
    resolution: {integrity: sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=}
    dev: true

  /ms/2.1.2:
    resolution: {integrity: sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==}

  /ms/2.1.3:
    resolution: {integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==}
    dev: true

  /mute-stream/0.0.8:
    resolution: {integrity: sha512-nnbWWOkoWyUsTjKrhgD0dcz22mdkSnpYqbEjIm2nhwhuxlSkpywJmBo8h0ZqJdkp73mb90SssHkN4rsRaBAfAA==}
    dev: false

  /nanoid/3.2.0:
    resolution: {integrity: sha512-fmsZYa9lpn69Ad5eDn7FMcnnSR+8R34W9qJEijxYhTbfOWzr22n1QxCMzXLK+ODyW2973V3Fux959iQoUxzUIA==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true
    dev: true

  /natural-compare/1.4.0:
    resolution: {integrity: sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc=}
    dev: true

  /netmask/2.0.2:
    resolution: {integrity: sha512-dBpDMdxv9Irdq66304OLfEmQ9tbNRFnFTuZiLo+bD+r332bBmMJ8GBLXklIXXgxd3+v9+KUnZaUR5PJMa75Gsg==}
    engines: {node: '>= 0.4.0'}
    dev: false

  /next-tick/1.0.0:
    resolution: {integrity: sha1-yobR/ogoFpsBICCOPchCS524NCw=}
    dev: false

  /next-tick/1.1.0:
    resolution: {integrity: sha512-CXdUiJembsNjuToQvxayPZF9Vqht7hewsvy2sOWafLvi2awflj9mOC6bHIg50orX8IJvWKY9wYQ/zB2kogPslQ==}
    dev: false

  /nise/1.5.3:
    resolution: {integrity: sha512-Ymbac/94xeIrMf59REBPOv0thr+CJVFMhrlAkW/gjCIE58BGQdCj0x7KRCb3yz+Ga2Rz3E9XXSvUyyxqqhjQAQ==}
    dependencies:
      '@sinonjs/formatio': 3.2.2
      '@sinonjs/text-encoding': 0.7.1
      just-extend: 4.2.1
      lolex: 5.1.2
      path-to-regexp: 1.8.0
    dev: false

  /no-case/3.0.4:
    resolution: {integrity: sha512-fgAN3jGAh+RoxUGZHTSOLJIqUc2wmoBwGR4tbpNAKmmovFoWq0OdRkb0VkldReO2a2iBT/OEulG9XSUc10r3zg==}
    dependencies:
      lower-case: 2.0.2
      tslib: 2.3.1

  /node-fetch/2.6.7:
    resolution: {integrity: sha512-ZjMPFEfVx5j+y2yF35Kzx5sF7kDzxuDj6ziH4FFbOp87zKDZNx8yExJIb05OGF4Nlt9IHFIMBkRl41VdvcNdbQ==}
    engines: {node: 4.x || >=6.0.0}
    peerDependencies:
      encoding: ^0.1.0
    peerDependenciesMeta:
      encoding:
        optional: true
    dependencies:
      whatwg-url: 5.0.0
    dev: false

  /node-int64/0.4.0:
    resolution: {integrity: sha1-h6kGXNs1XTGC2PlM4RGIuCXGijs=}
    dev: true

  /node-releases/2.0.1:
    resolution: {integrity: sha512-CqyzN6z7Q6aMeF/ktcMVTzhAHCEpf8SOarwpzpf8pNBY2k5/oM34UHldUwp8VKI7uxct2HxSRdJjBaZeESzcxA==}
    dev: true

  /normalize-path/3.0.0:
    resolution: {integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==}
    engines: {node: '>=0.10.0'}

  /npm-run-path/4.0.1:
    resolution: {integrity: sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==}
    engines: {node: '>=8'}
    dependencies:
      path-key: 3.1.1
    dev: true

  /nwsapi/2.2.0:
    resolution: {integrity: sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ==}
    dev: true

  /object-assign/4.1.1:
    resolution: {integrity: sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=}
    engines: {node: '>=0.10.0'}

  /object-inspect/1.12.0:
    resolution: {integrity: sha512-Ho2z80bVIvJloH+YzRmpZVQe87+qASmBUKZDWgx9cu+KDrX2ZDH/3tMy+gXbZETVGs2M8YdxObOh7XAtim9Y0g==}

  /object-is/1.1.5:
    resolution: {integrity: sha512-3cyDsyHgtmi7I7DfSSI2LDp6SK2lwvtbg0p0R1e0RvTqF5ceGx+K2dfSjm1bKDMVCFEDAQvy+o8c6a7VujOddw==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.3
    dev: false

  /object-keys/1.1.1:
    resolution: {integrity: sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==}
    engines: {node: '>= 0.4'}

  /object.assign/4.1.2:
    resolution: {integrity: sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.3
      has-symbols: 1.0.2
      object-keys: 1.1.1
    dev: true

  /object.entries/1.1.5:
    resolution: {integrity: sha512-TyxmjUoZggd4OrrU1W66FMDG6CuqJxsFvymeyXI51+vQLN67zYfZseptRge703kKQdo4uccgAKebXFcRCzk4+g==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.3
      es-abstract: 1.19.1
    dev: true

  /object.fromentries/2.0.5:
    resolution: {integrity: sha512-CAyG5mWQRRiBU57Re4FKoTBjXfDoNwdFVH2Y1tS9PqCsfUTymAohOkEMSG3aRNKmv4lV3O7p1et7c187q6bynw==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.3
      es-abstract: 1.19.1
    dev: true

  /object.hasown/1.1.0:
    resolution: {integrity: sha512-MhjYRfj3GBlhSkDHo6QmvgjRLXQ2zndabdf3nX0yTyZK9rPfxb6uRpAac8HXNLy1GpqWtZ81Qh4v3uOls2sRAg==}
    dependencies:
      define-properties: 1.1.3
      es-abstract: 1.19.1
    dev: true

  /object.values/1.1.5:
    resolution: {integrity: sha512-QUZRW0ilQ3PnPpbNtgdNV1PDbEqLIiSFB3l+EnGtBQ/8SUTLj1PZwtQHABZtLgwpJZTSZhuGLOGk57Drx2IvYg==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.3
      es-abstract: 1.19.1
    dev: true

  /once/1.4.0:
    resolution: {integrity: sha1-WDsap3WWHUsROsF9nFC6753Xa9E=}
    dependencies:
      wrappy: 1.0.2

  /onetime/5.1.2:
    resolution: {integrity: sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==}
    engines: {node: '>=6'}
    dependencies:
      mimic-fn: 2.1.0
    dev: true

  /optionator/0.8.3:
    resolution: {integrity: sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==}
    engines: {node: '>= 0.8.0'}
    dependencies:
      deep-is: 0.1.4
      fast-levenshtein: 2.0.6
      levn: 0.3.0
      prelude-ls: 1.1.2
      type-check: 0.3.2
      word-wrap: 1.2.3

  /optionator/0.9.1:
    resolution: {integrity: sha512-74RlY5FCnhq4jRxVUPKDaRwrVNXMqsGsiW6AJw4XK8hmtm10wC0ypZBLw5IIp85NZMr91+qd1RvvENwg7jjRFw==}
    engines: {node: '>= 0.8.0'}
    dependencies:
      deep-is: 0.1.4
      fast-levenshtein: 2.0.6
      levn: 0.4.1
      prelude-ls: 1.2.1
      type-check: 0.4.0
      word-wrap: 1.2.3
    dev: true

  /p-limit/1.3.0:
    resolution: {integrity: sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==}
    engines: {node: '>=4'}
    dependencies:
      p-try: 1.0.0
    dev: true

  /p-limit/2.3.0:
    resolution: {integrity: sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==}
    engines: {node: '>=6'}
    dependencies:
      p-try: 2.2.0

  /p-locate/2.0.0:
    resolution: {integrity: sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=}
    engines: {node: '>=4'}
    dependencies:
      p-limit: 1.3.0
    dev: true

  /p-locate/4.1.0:
    resolution: {integrity: sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==}
    engines: {node: '>=8'}
    dependencies:
      p-limit: 2.3.0

  /p-try/1.0.0:
    resolution: {integrity: sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=}
    engines: {node: '>=4'}
    dev: true

  /p-try/2.2.0:
    resolution: {integrity: sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==}
    engines: {node: '>=6'}

  /pac-proxy-agent/5.0.0:
    resolution: {integrity: sha512-CcFG3ZtnxO8McDigozwE3AqAw15zDvGH+OjXO4kzf7IkEKkQ4gxQ+3sdF50WmhQ4P/bVusXcqNE2S3XrNURwzQ==}
    engines: {node: '>= 8'}
    dependencies:
      '@tootallnate/once': 1.1.2
      agent-base: 6.0.2
      debug: 4.3.3
      get-uri: 3.0.2
      http-proxy-agent: 4.0.1
      https-proxy-agent: 5.0.0
      pac-resolver: 5.0.0
      raw-body: 2.4.2
      socks-proxy-agent: 5.0.1
    transitivePeerDependencies:
      - supports-color
    dev: false

  /pac-resolver/5.0.0:
    resolution: {integrity: sha512-H+/A6KitiHNNW+bxBKREk2MCGSxljfqRX76NjummWEYIat7ldVXRU3dhRIE3iXZ0nvGBk6smv3nntxKkzRL8NA==}
    engines: {node: '>= 8'}
    dependencies:
      degenerator: 3.0.1
      ip: 1.1.5
      netmask: 2.0.2
    dev: false

  /paho-mqtt/1.1.0:
    resolution: {integrity: sha512-KPbL9KAB0ASvhSDbOrZBaccXS+/s7/LIofbPyERww8hM5Ko71GUJQ6Nmg0BWqj8phAIT8zdf/Sd/RftHU9i2HA==}
    dev: false

  /pako/0.2.9:
    resolution: {integrity: sha1-8/dSL073gjSNqBYbrZ7P1Rv4OnU=}
    dev: false

  /param-case/3.0.4:
    resolution: {integrity: sha512-RXlj7zCYokReqWpOPH9oYivUzLYZ5vAPIfEmCTNViosC78F8F0H9y7T7gG2M39ymgutxF5gcFEsyZQSph9Bp3A==}
    dependencies:
      dot-case: 3.0.4
      tslib: 2.3.1

  /parent-module/1.0.1:
    resolution: {integrity: sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==}
    engines: {node: '>=6'}
    dependencies:
      callsites: 3.1.0
    dev: true

  /parse-json/5.2.0:
    resolution: {integrity: sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==}
    engines: {node: '>=8'}
    dependencies:
      '@babel/code-frame': 7.16.7
      error-ex: 1.3.2
      json-parse-even-better-errors: 2.3.1
      lines-and-columns: 1.2.4
    dev: true

  /parse5/6.0.1:
    resolution: {integrity: sha512-Ofn/CTFzRGTTxwpNEs9PP93gXShHcTq255nzRYSKe8AkVpZY7e1fpmTfOyoIvjP5HG7Z2ZM7VS9PPhQGW2pOpw==}
    dev: true

  /pascal-case/3.1.2:
    resolution: {integrity: sha512-uWlGT3YSnK9x3BQJaOdcZwrnV6hPpd8jFH1/ucpiLRPh/2zCVJKS19E4GvYHvaCcACn3foXZ0cLB9Wrx1KGe5g==}
    dependencies:
      no-case: 3.0.4
      tslib: 2.3.1

  /path-case/3.0.4:
    resolution: {integrity: sha512-qO4qCFjXqVTrcbPt/hQfhTQ+VhFsqNKOPtytgNKkKxSoEp3XPUQ8ObFuePylOIok5gjn69ry8XiULxCwot3Wfg==}
    dependencies:
      dot-case: 3.0.4
      tslib: 2.3.1
    dev: false

  /path-exists/3.0.0:
    resolution: {integrity: sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=}
    engines: {node: '>=4'}
    dev: true

  /path-exists/4.0.0:
    resolution: {integrity: sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==}
    engines: {node: '>=8'}

  /path-is-absolute/1.0.1:
    resolution: {integrity: sha1-F0uSaHNVNP+8es5r9TpanhtcX18=}
    engines: {node: '>=0.10.0'}

  /path-key/3.1.1:
    resolution: {integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==}
    engines: {node: '>=8'}
    dev: true

  /path-parse/1.0.7:
    resolution: {integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==}

  /path-to-regexp/1.8.0:
    resolution: {integrity: sha512-n43JRhlUKUAlibEJhPeir1ncUID16QnEjNpwzNdO3Lm4ywrBpBZ5oLD0I6br9evr1Y9JTqwRtAh7JLoOzAQdVA==}
    dependencies:
      isarray: 0.0.1
    dev: false

  /path-type/4.0.0:
    resolution: {integrity: sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==}
    engines: {node: '>=8'}
    dev: true

  /pdfkit/0.13.0:
    resolution: {integrity: sha512-AW79eHU5eLd2vgRDS9z3bSoi0FA+gYm+100LLosrQQMLUzOBGVOhG7ABcMFpJu7Bpg+MT74XYHi4k9EuU/9EZw==}
    dependencies:
      crypto-js: 4.1.1
      fontkit: 1.8.1
      linebreak: 1.0.2
      png-js: 1.0.0
    dev: false

  /pdfmake/0.2.2:
    resolution: {integrity: sha512-e1N+iIIf0LXTvfmf/RaxeqtOKX2qFrNxBbcWmMcg2BUsgcye1bLkdxR7PImmRs8OnqT7qd9XonltZgdTFw8qUA==}
    engines: {node: '>=12'}
    dependencies:
      '@foliojs-fork/linebreak': 1.1.1
      '@foliojs-fork/pdfkit': 0.12.3
      iconv-lite: 0.6.3
      svg-to-pdfkit: 0.1.8
      xmldoc: 1.1.2
    dev: false

  /picocolors/1.0.0:
    resolution: {integrity: sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ==}
    dev: true

  /picomatch/2.3.1:
    resolution: {integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==}
    engines: {node: '>=8.6'}

  /pirates/4.0.4:
    resolution: {integrity: sha512-ZIrVPH+A52Dw84R0L3/VS9Op04PuQ2SEoJL6bkshmiTic/HldyW9Tf7oH5mhJZBK7NmDx27vSMrYEXPXclpDKw==}
    engines: {node: '>= 6'}
    dev: true

  /pkg-dir/4.2.0:
    resolution: {integrity: sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==}
    engines: {node: '>=8'}
    dependencies:
      find-up: 4.1.0
    dev: true

  /png-js/1.0.0:
    resolution: {integrity: sha512-k+YsbhpA9e+EFfKjTCH3VW6aoKlyNYI6NYdTfDL4CIvFnvsuO84ttonmZE7rc+v23SLTH8XX+5w/Ak9v0xGY4g==}
    dev: false

  /pngjs/5.0.0:
    resolution: {integrity: sha512-40QW5YalBNfQo5yRYmiw7Yz6TKKVr3h6970B2YE+3fQpsWcrbj1PzJgxeJ19DRQjhMbKPIuMY8rFaXc8moolVw==}
    engines: {node: '>=10.13.0'}
    dev: false

  /polylabel/1.1.0:
    resolution: {integrity: sha512-bxaGcA40sL3d6M4hH72Z4NdLqxpXRsCFk8AITYg6x1rn1Ei3izf00UMLklerBZTO49aPA3CYrIwVulx2Bce2pA==}
    dependencies:
      tinyqueue: 2.0.3
    dev: false

  /postcss/8.4.5:
    resolution: {integrity: sha512-jBDboWM8qpaqwkMwItqTQTiFikhs/67OYVvblFFTM7MrZjt6yMKd6r2kgXizEbTTljacm4NldIlZnhbjr84QYg==}
    engines: {node: ^10 || ^12 || >=14}
    dependencies:
      nanoid: 3.2.0
      picocolors: 1.0.0
      source-map-js: 1.0.2
    dev: true

  /prelude-ls/1.1.2:
    resolution: {integrity: sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ=}
    engines: {node: '>= 0.8.0'}

  /prelude-ls/1.2.1:
    resolution: {integrity: sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==}
    engines: {node: '>= 0.8.0'}
    dev: true

  /prettier-linter-helpers/1.0.0:
    resolution: {integrity: sha512-GbK2cP9nraSSUF9N2XwUwqfzlAFlMNYYl+ShE/V+H8a9uNl/oUqB1w2EL54Jh0OlyRSd8RfWYJ3coVS4TROP2w==}
    engines: {node: '>=6.0.0'}
    dependencies:
      fast-diff: 1.2.0
    dev: true

  /prettier/2.5.1:
    resolution: {integrity: sha512-vBZcPRUR5MZJwoyi3ZoyQlc1rXeEck8KgeC9AwwOn+exuxLxq5toTRDTSaVrXHxelDMHy9zlicw8u66yxoSUFg==}
    engines: {node: '>=10.13.0'}
    hasBin: true
    dev: true

  /pretty-format/27.4.6:
    resolution: {integrity: sha512-NblstegA1y/RJW2VyML+3LlpFjzx62cUrtBIKIWDXEDkjNeleA7Od7nrzcs/VLQvAeV4CgSYhrN39DRN88Qi/g==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    dependencies:
      ansi-regex: 5.0.1
      ansi-styles: 5.2.0
      react-is: 17.0.2
    dev: true

  /printj/1.1.2:
    resolution: {integrity: sha512-zA2SmoLaxZyArQTOPj5LXecR+RagfPSU5Kw1qP+jkWeNlrq+eJZyY2oS68SU1Z/7/myXM4lo9716laOFAVStCQ==}
    engines: {node: '>=0.8'}
    hasBin: true
    dev: false

  /printj/1.2.3:
    resolution: {integrity: sha512-sanczS6xOJOg7IKDvi4sGOUOe7c1tsEzjwlLFH/zgwx/uyImVM9/rgBkc8AfiQa/Vg54nRd8mkm9yI7WV/O+WA==}
    engines: {node: '>=0.8'}
    hasBin: true
    dev: false

  /printj/1.3.1:
    resolution: {integrity: sha512-GA3TdL8szPK4AQ2YnOe/b+Y1jUFwmmGMMK/qbY7VcE3Z7FU8JstbKiKRzO6CIiAKPhTO8m01NoQ0V5f3jc4OGg==}
    engines: {node: '>=0.8'}
    hasBin: true
    dev: false

  /process-nextick-args/2.0.1:
    resolution: {integrity: sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==}
    dev: false

  /promptly/3.2.0:
    resolution: {integrity: sha512-WnR9obtgW+rG4oUV3hSnNGl1pHm3V1H/qD9iJBumGSmVsSC5HpZOLuu8qdMb6yCItGfT7dcRszejr/5P3i9Pug==}
    dependencies:
      read: 1.0.7
    dev: false

  /prompts/2.4.2:
    resolution: {integrity: sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q==}
    engines: {node: '>= 6'}
    dependencies:
      kleur: 3.0.3
      sisteransi: 1.0.5
    dev: true

  /prop-types/15.8.1:
    resolution: {integrity: sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==}
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
      react-is: 16.13.1
    dev: true

  /proxy-agent/5.0.0:
    resolution: {integrity: sha512-gkH7BkvLVkSfX9Dk27W6TyNOWWZWRilRfk1XxGNWOYJ2TuedAv1yFpCaU9QSBmBe716XOTNpYNOzhysyw8xn7g==}
    engines: {node: '>= 8'}
    dependencies:
      agent-base: 6.0.2
      debug: 4.3.3
      http-proxy-agent: 4.0.1
      https-proxy-agent: 5.0.0
      lru-cache: 5.1.1
      pac-proxy-agent: 5.0.0
      proxy-from-env: 1.1.0
      socks-proxy-agent: 5.0.1
    transitivePeerDependencies:
      - supports-color
    dev: false

  /proxy-from-env/1.1.0:
    resolution: {integrity: sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==}
    dev: false

  /psl/1.8.0:
    resolution: {integrity: sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ==}
    dev: true

  /punycode/1.3.2:
    resolution: {integrity: sha1-llOgNvt8HuQjQvIyXM7v6jkmxI0=}
    dev: false

  /punycode/2.1.1:
    resolution: {integrity: sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==}
    engines: {node: '>=6'}

  /qrcode/1.5.0:
    resolution: {integrity: sha512-9MgRpgVc+/+47dFvQeD6U2s0Z92EsKzcHogtum4QB+UNd025WOJSHvn/hjk9xmzj7Stj95CyUAs31mrjxliEsQ==}
    engines: {node: '>=10.13.0'}
    hasBin: true
    dependencies:
      dijkstrajs: 1.0.2
      encode-utf8: 1.0.3
      pngjs: 5.0.0
      yargs: 15.4.1
    dev: false

  /querystring/0.2.0:
    resolution: {integrity: sha1-sgmEkgO7Jd+CDadW50cAWHhSFiA=}
    engines: {node: '>=0.4.x'}
    deprecated: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
    dev: false

  /queue-microtask/1.2.3:
    resolution: {integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==}
    dev: true

  /quick-lru/4.0.1:
    resolution: {integrity: sha512-ARhCpm70fzdcvNQfPoy49IaanKkTlRWF2JMzqhcJbhSFRZv7nPTvZJdcY7301IPmvW+/p0RgIWnQDLJxifsQ7g==}
    engines: {node: '>=8'}
    dev: false

  /quote-stream/1.0.2:
    resolution: {integrity: sha1-hJY/jJwmuULhU/7rU6rnRlK34LI=}
    hasBin: true
    dependencies:
      buffer-equal: 0.0.1
      minimist: 1.2.5
      through2: 2.0.5
    dev: false

  /raw-body/2.4.2:
    resolution: {integrity: sha512-RPMAFUJP19WIet/99ngh6Iv8fzAbqum4Li7AD6DtGaW2RpMB/11xDoalPiJMTbu6I3hkbMVkATvZrqb9EEqeeQ==}
    engines: {node: '>= 0.8'}
    dependencies:
      bytes: 3.1.1
      http-errors: 1.8.1
      iconv-lite: 0.4.24
      unpipe: 1.0.0
    dev: false

  /react-dom/17.0.2_react@17.0.2:
    resolution: {integrity: sha512-s4h96KtLDUQlsENhMn1ar8t2bEa+q/YAtj8pPPdIjPDGBDIVNsrD9aXNWqspUe6AzKCIG0C1HZZLqLV7qpOBGA==}
    peerDependencies:
      react: 17.0.2
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
      react: 17.0.2
      scheduler: 0.20.2
    dev: false

  /react-generate-context/1.0.1_react@17.0.2:
    resolution: {integrity: sha512-rOFGh3KgC2Ot66DmVCcT1p8lVJCmmCjzGE5WK/KsyDFi43wpIbW1PYcr04cQ3mbF4LaIkY6SpK7k1DOgwtpUXA==}
    engines: {node: '>=10'}
    peerDependencies:
      react: '>=16'
    dependencies:
      react: 17.0.2
    dev: false

  /react-icons/4.3.1_react@17.0.2:
    resolution: {integrity: sha512-cB10MXLTs3gVuXimblAdI71jrJx8njrJZmNMEMC+sQu5B/BIOmlsAjskdqpn81y8UBVEGuHODd7/ci5DvoSzTQ==}
    peerDependencies:
      react: '*'
    dependencies:
      react: 17.0.2
    dev: false

  /react-is/16.13.1:
    resolution: {integrity: sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==}
    dev: true

  /react-is/17.0.2:
    resolution: {integrity: sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w==}
    dev: true

  /react-native-get-random-values/1.7.2:
    resolution: {integrity: sha512-28KRYGpIG/upV8+k/qFA+TwGW+yGjmtOHaCduJHpOQK1QUTyhiA6E2IgL4UvvU2dybeCTYFmUi9wcEQ0GiWe5g==}
    peerDependencies:
      react-native: '>=0.56'
    dependencies:
      fast-base64-decode: 1.0.0
    dev: false

  /react-refresh/0.11.0:
    resolution: {integrity: sha512-F27qZr8uUqwhWZboondsPx8tnC3Ct3SxZA3V5WyEvujRyyNv0VYPhoBg1gZ8/MV5tubQp76Trw8lTv9hzRBa+A==}
    engines: {node: '>=0.10.0'}
    dev: true

  /react-remove-scroll-bar/2.2.0_a0c521d4794c7ad97f5f4c1c4a7d5818:
    resolution: {integrity: sha512-UU9ZBP1wdMR8qoUs7owiVcpaPwsQxUDC2lypP6mmixaGlARZa7ZIBx1jcuObLdhMOvCsnZcvetOho0wzPa9PYg==}
    engines: {node: '>=8.5.0'}
    peerDependencies:
      '@types/react': ^16.8.0 || ^17.0.0
      react: ^16.8.0 || ^17.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true
    dependencies:
      '@types/react': 17.0.39
      react: 17.0.2
      react-style-singleton: 2.1.1_a0c521d4794c7ad97f5f4c1c4a7d5818
      tslib: 1.14.1
    dev: false

  /react-remove-scroll/2.4.3_a0c521d4794c7ad97f5f4c1c4a7d5818:
    resolution: {integrity: sha512-lGWYXfV6jykJwbFpsuPdexKKzp96f3RbvGapDSIdcyGvHb7/eqyn46C7/6h+rUzYar1j5mdU+XECITHXCKBk9Q==}
    engines: {node: '>=8.5.0'}
    peerDependencies:
      '@types/react': ^16.8.0 || ^17.0.0
      react: ^16.8.0 || ^17.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true
    dependencies:
      '@types/react': 17.0.39
      react: 17.0.2
      react-remove-scroll-bar: 2.2.0_a0c521d4794c7ad97f5f4c1c4a7d5818
      react-style-singleton: 2.1.1_a0c521d4794c7ad97f5f4c1c4a7d5818
      tslib: 1.14.1
      use-callback-ref: 1.2.5_a0c521d4794c7ad97f5f4c1c4a7d5818
      use-sidecar: 1.0.5_react@17.0.2
    dev: false

  /react-router-dom/6.2.1_react-dom@17.0.2+react@17.0.2:
    resolution: {integrity: sha512-I6Zax+/TH/cZMDpj3/4Fl2eaNdcvoxxHoH1tYOREsQ22OKDYofGebrNm6CTPUcvLvZm63NL/vzCYdjf9CUhqmA==}
    peerDependencies:
      react: '>=16.8'
      react-dom: '>=16.8'
    dependencies:
      history: 5.2.0
      react: 17.0.2
      react-dom: 17.0.2_react@17.0.2
      react-router: 6.2.1_react@17.0.2
    dev: false

  /react-router/6.2.1_react@17.0.2:
    resolution: {integrity: sha512-2fG0udBtxou9lXtK97eJeET2ki5//UWfQSl1rlJ7quwe6jrktK9FCCc8dQb5QY6jAv3jua8bBQRhhDOM/kVRsg==}
    peerDependencies:
      react: '>=16.8'
    dependencies:
      history: 5.2.0
      react: 17.0.2
    dev: false

  /react-style-singleton/2.1.1_a0c521d4794c7ad97f5f4c1c4a7d5818:
    resolution: {integrity: sha512-jNRp07Jza6CBqdRKNgGhT3u9umWvils1xsuMOjZlghBDH2MU0PL2WZor4PGYjXpnRCa9DQSlHMs/xnABWOwYbA==}
    engines: {node: '>=8.5.0'}
    peerDependencies:
      '@types/react': ^16.8.0 || ^17.0.0
      react: ^16.8.0 || ^17.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true
    dependencies:
      '@types/react': 17.0.39
      get-nonce: 1.0.1
      invariant: 2.2.4
      react: 17.0.2
      tslib: 1.14.1
    dev: false

  /react/17.0.2:
    resolution: {integrity: sha512-gnhPt75i/dq/z3/6q/0asP78D0u592D5L1pd7M8P+dck6Fu/jJeL6iVVK23fptSUZj8Vjf++7wXA8UNclGQcbA==}
    engines: {node: '>=0.10.0'}
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
    dev: false

  /read/1.0.7:
    resolution: {integrity: sha1-s9oZvQUkMal2cdRKQmNK33ELQMQ=}
    engines: {node: '>=0.8'}
    dependencies:
      mute-stream: 0.0.8
    dev: false

  /readable-stream/1.1.14:
    resolution: {integrity: sha1-fPTFTvZI44EwhMY23SB54WbAgdk=}
    dependencies:
      core-util-is: 1.0.3
      inherits: 2.0.4
      isarray: 0.0.1
      string_decoder: 0.10.31
    dev: false

  /readable-stream/2.3.7:
    resolution: {integrity: sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==}
    dependencies:
      core-util-is: 1.0.3
      inherits: 2.0.4
      isarray: 1.0.0
      process-nextick-args: 2.0.1
      safe-buffer: 5.1.2
      string_decoder: 1.1.1
      util-deprecate: 1.0.2
    dev: false

  /readable-stream/3.6.0:
    resolution: {integrity: sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==}
    engines: {node: '>= 6'}
    dependencies:
      inherits: 2.0.4
      string_decoder: 1.3.0
      util-deprecate: 1.0.2
    dev: false

  /readdir-glob/1.1.1:
    resolution: {integrity: sha512-91/k1EzZwDx6HbERR+zucygRFfiPl2zkIYZtv3Jjr6Mn7SkKcVct8aVO+sSRiGMc6fLf72du3d92/uY63YPdEA==}
    dependencies:
      minimatch: 3.0.4
    dev: false

  /readdirp/3.6.0:
    resolution: {integrity: sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==}
    engines: {node: '>=8.10.0'}
    dependencies:
      picomatch: 2.3.1
    dev: false

  /recrawl-sync/2.2.1:
    resolution: {integrity: sha512-A2yLDgeXNaduJJMlqyUdIN7fewopnNm/mVeeGytS1d2HLXKpS5EthQ0j8tWeX+as9UXiiwQRwfoslKC+/gjqxg==}
    dependencies:
      '@cush/relative': 1.0.0
      glob-regex: 0.3.2
      slash: 3.0.0
      tslib: 1.14.1
    dev: true

  /regenerate-unicode-properties/9.0.0:
    resolution: {integrity: sha512-3E12UeNSPfjrgwjkR81m5J7Aw/T55Tu7nUyZVQYCKEOs+2dkxEY+DpPtZzO4YruuiPb7NkYLVcyJC4+zCbk5pA==}
    engines: {node: '>=4'}
    dependencies:
      regenerate: 1.4.2
    dev: true

  /regenerate/1.4.2:
    resolution: {integrity: sha512-zrceR/XhGYU/d/opr2EKO7aRHUeiBI8qjtfHqADTwZd6Szfy16la6kqD0MIUs5z5hx6AaKa+PixpPrR289+I0A==}
    dev: true

  /regenerator-runtime/0.11.1:
    resolution: {integrity: sha512-MguG95oij0fC3QV3URf4V2SDYGJhJnJGqvIIgdECeODCT98wSWDAJ94SSuVpYQUoTcGUIL6L4yNB7j1DFFHSBg==}
    dev: false

  /regenerator-runtime/0.13.9:
    resolution: {integrity: sha512-p3VT+cOEgxFsRRA9X4lkI1E+k2/CtnKtU4gcxyaCUreilL/vqI6CdZ3wxVUx3UOUg+gnUOQQcRI7BmSI656MYA==}

  /regenerator-transform/0.14.5:
    resolution: {integrity: sha512-eOf6vka5IO151Jfsw2NO9WpGX58W6wWmefK3I1zEGr0lOD0u8rwPaNqQL1aRxUaxLeKO3ArNh3VYg1KbaD+FFw==}
    dependencies:
      '@babel/runtime': 7.16.7
    dev: true

  /regexp.prototype.flags/1.4.1:
    resolution: {integrity: sha512-pMR7hBVUUGI7PMA37m2ofIdQCsomVnas+Jn5UPGAHQ+/LlwKm/aTLJHdasmHRzlfeZwHiAOaRSo2rbBDm3nNUQ==}
    engines: {node: '>= 0.4'}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.3

  /regexpp/3.2.0:
    resolution: {integrity: sha512-pq2bWo9mVD43nbts2wGv17XLiNLya+GklZ8kaDLV2Z08gDCsGpnKn9BFMepvWuHCbyVvY7J5o5+BVvoQbmlJLg==}
    engines: {node: '>=8'}
    dev: true

  /regexpu-core/4.8.0:
    resolution: {integrity: sha512-1F6bYsoYiz6is+oz70NWur2Vlh9KWtswuRuzJOfeYUrfPX2o8n74AnUVaOGDbUqVGO9fNHu48/pjJO4sNVwsOg==}
    engines: {node: '>=4'}
    dependencies:
      regenerate: 1.4.2
      regenerate-unicode-properties: 9.0.0
      regjsgen: 0.5.2
      regjsparser: 0.7.0
      unicode-match-property-ecmascript: 2.0.0
      unicode-match-property-value-ecmascript: 2.0.0
    dev: true

  /regjsgen/0.5.2:
    resolution: {integrity: sha512-OFFT3MfrH90xIW8OOSyUrk6QHD5E9JOTeGodiJeBS3J6IwlgzJMNE/1bZklWz5oTg+9dCMyEetclvCVXOPoN3A==}
    dev: true

  /regjsparser/0.7.0:
    resolution: {integrity: sha512-A4pcaORqmNMDVwUjWoTzuhwMGpP+NykpfqAsEgI1FSH/EzC7lrN5TMd+kN8YCovX+jMpu8eaqXgXPCa0g8FQNQ==}
    hasBin: true
    dependencies:
      jsesc: 0.5.0
    dev: true

  /relateurl/0.2.7:
    resolution: {integrity: sha1-VNvzd+UUQKypCkzSdGANP/LYiKk=}
    engines: {node: '>= 0.10'}
    dev: true

  /require-directory/2.1.1:
    resolution: {integrity: sha1-jGStX9MNqxyXbiNE/+f3kqam30I=}
    engines: {node: '>=0.10.0'}

  /require-from-string/2.0.2:
    resolution: {integrity: sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==}
    engines: {node: '>=0.10.0'}
    dev: false

  /require-main-filename/2.0.0:
    resolution: {integrity: sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==}
    dev: false

  /resolve-cwd/3.0.0:
    resolution: {integrity: sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==}
    engines: {node: '>=8'}
    dependencies:
      resolve-from: 5.0.0
    dev: true

  /resolve-from/4.0.0:
    resolution: {integrity: sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==}
    engines: {node: '>=4'}
    dev: true

  /resolve-from/5.0.0:
    resolution: {integrity: sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==}
    engines: {node: '>=8'}
    dev: true

  /resolve.exports/1.1.0:
    resolution: {integrity: sha512-J1l+Zxxp4XK3LUDZ9m60LRJF/mAe4z6a4xyabPHk7pvK5t35dACV32iIjJDFeWZFfZlO29w6SZ67knR0tHzJtQ==}
    engines: {node: '>=10'}
    dev: true

  /resolve/1.1.7:
    resolution: {integrity: sha1-IDEU2CrSxe2ejgQRs5ModeiJ6Xs=}
    dev: false

  /resolve/1.21.0:
    resolution: {integrity: sha512-3wCbTpk5WJlyE4mSOtDLhqQmGFi0/TD9VPwmiolnk8U0wRgMEktqCXd3vy5buTO3tljvalNvKrjHEfrd2WpEKA==}
    hasBin: true
    dependencies:
      is-core-module: 2.8.1
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  /resolve/2.0.0-next.3:
    resolution: {integrity: sha512-W8LucSynKUIDu9ylraa7ueVZ7hc0uAgJBxVsQSKOXOyle8a93qXhcz+XAXZ8bIq2d6i4Ehddn6Evt+0/UwKk6Q==}
    dependencies:
      is-core-module: 2.8.1
      path-parse: 1.0.7
    dev: true

  /restructure/0.5.4:
    resolution: {integrity: sha1-9U591WNZD7NP1r9Vh2EJrsyyjeg=}
    dependencies:
      browserify-optional: 1.0.1
    dev: false

  /reusify/1.0.4:
    resolution: {integrity: sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==}
    engines: {iojs: '>=1.0.0', node: '>=0.10.0'}
    dev: true

  /rimraf/3.0.2:
    resolution: {integrity: sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==}
    hasBin: true
    dependencies:
      glob: 7.2.0
    dev: true

  /rollup/2.64.0:
    resolution: {integrity: sha512-+c+lbw1lexBKSMb1yxGDVfJ+vchJH3qLbmavR+awDinTDA2C5Ug9u7lkOzj62SCu0PKUExsW36tpgW7Fmpn3yQ==}
    engines: {node: '>=10.0.0'}
    hasBin: true
    optionalDependencies:
      fsevents: 2.3.2
    dev: true

  /run-parallel/1.2.0:
    resolution: {integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==}
    dependencies:
      queue-microtask: 1.2.3
    dev: true

  /rw/1.3.3:
    resolution: {integrity: sha1-P4Yt+pGrdmsUiF700BEkv9oHT7Q=}
    dev: false

  /safe-buffer/5.1.2:
    resolution: {integrity: sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==}

  /safe-buffer/5.2.1:
    resolution: {integrity: sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==}
    dev: false

  /safer-buffer/2.1.2:
    resolution: {integrity: sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==}

  /sax/1.2.1:
    resolution: {integrity: sha1-e45lYZCyKOgaZq6nSEgNgozS03o=}
    dev: false

  /saxes/5.0.1:
    resolution: {integrity: sha512-5LBh1Tls8c9xgGjw3QrMwETmTMVk0oFgvrFSvWx62llR2hcEInrKNZ2GZCCuuy2lvWrdl5jhbpeqc5hRYKFOcw==}
    engines: {node: '>=10'}
    dependencies:
      xmlchars: 2.2.0
    dev: true

  /scheduler/0.20.2:
    resolution: {integrity: sha512-2eWfGgAqqWFGqtdMmcL5zCMK1U8KlXv8SQFGglL3CEtd0aDVDWgeF/YoCmvln55m5zSk3J/20hTaSBeSObsQDQ==}
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
    dev: false

  /scope-analyzer/2.1.2:
    resolution: {integrity: sha512-5cfCmsTYV/wPaRIItNxatw02ua/MThdIUNnUOCYp+3LSEJvnG804ANw2VLaavNILIfWXF1D1G2KNANkBBvInwQ==}
    dependencies:
      array-from: 2.1.1
      dash-ast: 2.0.1
      es6-map: 0.1.5
      es6-set: 0.1.5
      es6-symbol: 3.1.3
      estree-is-function: 1.0.0
      get-assigned-identifiers: 1.2.0
    dev: false

  /semver/6.3.0:
    resolution: {integrity: sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==}
    hasBin: true
    dev: true

  /semver/7.0.0:
    resolution: {integrity: sha512-+GB6zVA9LWh6zovYQLALHwv5rb2PHGlJi3lfiqIHxR0uuwCgefcOJc59v9fv1w8GbStwxuuqqAjI9NMAOOgq1A==}
    hasBin: true
    dev: true

  /semver/7.3.5:
    resolution: {integrity: sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==}
    engines: {node: '>=10'}
    hasBin: true
    dependencies:
      lru-cache: 6.0.0

  /sentence-case/3.0.4:
    resolution: {integrity: sha512-8LS0JInaQMCRoQ7YUytAo/xUu5W2XnQxV2HI/6uM6U7CITS1RqPElr30V6uIqyMKM9lJGRVFy5/4CuzcixNYSg==}
    dependencies:
      no-case: 3.0.4
      tslib: 2.3.1
      upper-case-first: 2.0.2
    dev: false

  /set-blocking/2.0.0:
    resolution: {integrity: sha1-BF+XgtARrppoA93TgrJDkrPYkPc=}
    dev: false

  /setprototypeof/1.2.0:
    resolution: {integrity: sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==}
    dev: false

  /shallow-copy/0.0.1:
    resolution: {integrity: sha1-QV9CcC1z2BAzApLMXuhurhoRoXA=}
    dev: false

  /shebang-command/2.0.0:
    resolution: {integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==}
    engines: {node: '>=8'}
    dependencies:
      shebang-regex: 3.0.0
    dev: true

  /shebang-regex/3.0.0:
    resolution: {integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==}
    engines: {node: '>=8'}
    dev: true

  /side-channel/1.0.4:
    resolution: {integrity: sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==}
    dependencies:
      call-bind: 1.0.2
      get-intrinsic: 1.1.1
      object-inspect: 1.12.0
    dev: true

  /signal-exit/3.0.6:
    resolution: {integrity: sha512-sDl4qMFpijcGw22U5w63KmD3cZJfBuFlVNbVMKje2keoKML7X2UzWbc4XrmEbDwg0NXJc3yv4/ox7b+JWb57kQ==}
    dev: true

  /sinon/7.5.0:
    resolution: {integrity: sha512-AoD0oJWerp0/rY9czP/D6hDTTUYGpObhZjMpd7Cl/A6+j0xBE+ayL/ldfggkBXUs0IkvIiM1ljM8+WkOc5k78Q==}
    dependencies:
      '@sinonjs/commons': 1.8.3
      '@sinonjs/formatio': 3.2.2
      '@sinonjs/samsam': 3.3.3
      diff: 3.5.0
      lolex: 4.2.0
      nise: 1.5.3
      supports-color: 5.5.0
    dev: false

  /sisteransi/1.0.5:
    resolution: {integrity: sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg==}
    dev: true

  /slash/3.0.0:
    resolution: {integrity: sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==}
    engines: {node: '>=8'}
    dev: true

  /slice-ansi/4.0.0:
    resolution: {integrity: sha512-qMCMfhY040cVHT43K9BFygqYbUPFZKHOg7K73mtTWJRb8pyP3fzf4Ixd5SzdEJQ6MRUg/WBnOLxghZtKKurENQ==}
    engines: {node: '>=10'}
    dependencies:
      ansi-styles: 4.3.0
      astral-regex: 2.0.0
      is-fullwidth-code-point: 3.0.0
    dev: false

  /smart-buffer/4.2.0:
    resolution: {integrity: sha512-94hK0Hh8rPqQl2xXc3HsaBoOXKV20MToPkcXvwbISWLEs+64sBq5kFgn2kJDHb1Pry9yrP0dxrCI9RRci7RXKg==}
    engines: {node: '>= 6.0.0', npm: '>= 3.0.0'}
    dev: false

  /snake-case/3.0.4:
    resolution: {integrity: sha512-LAOh4z89bGQvl9pFfNF8V146i7o7/CqFPbqzYgP+yYzDIDeS9HaNFtXABamRW+AQzEVODcvE79ljJ+8a9YSdMg==}
    dependencies:
      dot-case: 3.0.4
      tslib: 2.3.1
    dev: false

  /socks-proxy-agent/5.0.1:
    resolution: {integrity: sha512-vZdmnjb9a2Tz6WEQVIurybSwElwPxMZaIc7PzqbJTrezcKNznv6giT7J7tZDZ1BojVaa1jvO/UiUdhDVB0ACoQ==}
    engines: {node: '>= 6'}
    dependencies:
      agent-base: 6.0.2
      debug: 4.3.3
      socks: 2.6.1
    transitivePeerDependencies:
      - supports-color
    dev: false

  /socks/2.6.1:
    resolution: {integrity: sha512-kLQ9N5ucj8uIcxrDwjm0Jsqk06xdpBjGNQtpXy4Q8/QY2k+fY7nZH8CARy+hkbG+SGAovmzzuauCpBlb8FrnBA==}
    engines: {node: '>= 10.13.0', npm: '>= 3.0.0'}
    dependencies:
      ip: 1.1.5
      smart-buffer: 4.2.0
    dev: false

  /source-map-js/1.0.2:
    resolution: {integrity: sha512-R0XvVJ9WusLiqTCEiGCmICCMplcCkIwwR11mOSD9CR5u+IXYdiseeEuXCVAjS54zqwkLcPNnmU4OeJ6tUrWhDw==}
    engines: {node: '>=0.10.0'}
    dev: true

  /source-map-support/0.5.21:
    resolution: {integrity: sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==}
    dependencies:
      buffer-from: 1.1.2
      source-map: 0.6.1

  /source-map/0.1.43:
    resolution: {integrity: sha1-wkvBRspRfBRx9drL4lcbK3+eM0Y=}
    engines: {node: '>=0.8.0'}
    requiresBuild: true
    dependencies:
      amdefine: 1.0.1
    dev: false
    optional: true

  /source-map/0.5.7:
    resolution: {integrity: sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=}
    engines: {node: '>=0.10.0'}

  /source-map/0.6.1:
    resolution: {integrity: sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==}
    engines: {node: '>=0.10.0'}

  /source-map/0.7.3:
    resolution: {integrity: sha512-CkCj6giN3S+n9qrYiBTX5gystlENnRW5jZeNLHpe6aue+SrHcG5VYwujhW9s4dY31mEGsxBDrHR6oI69fTXsaQ==}
    engines: {node: '>= 8'}
    dev: true

  /sourcemap-codec/1.4.8:
    resolution: {integrity: sha512-9NykojV5Uih4lgo5So5dtw+f0JgJX30KCNI8gwhz2J9A15wD0Ml6tjHKwf6fTSa6fAdVBdZeNOs9eJ71qCk8vA==}
    dev: false

  /sprintf-js/1.0.3:
    resolution: {integrity: sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw=}
    dev: true

  /ssf/0.11.2:
    resolution: {integrity: sha512-+idbmIXoYET47hH+d7dfm2epdOMUDjqcB4648sTZ+t2JwoyBFL/insLfB/racrDmsKB3diwsDA696pZMieAC5g==}
    engines: {node: '>=0.8'}
    dependencies:
      frac: 1.1.2
    dev: false

  /stack-utils/2.0.5:
    resolution: {integrity: sha512-xrQcmYhOsn/1kX+Vraq+7j4oE2j/6BFscZ0etmYg81xuM8Gq0022Pxb8+IqgOFUIaxHs0KaSb7T1+OegiNrNFA==}
    engines: {node: '>=10'}
    dependencies:
      escape-string-regexp: 2.0.0
    dev: true

  /static-eval/2.1.0:
    resolution: {integrity: sha512-agtxZ/kWSsCkI5E4QifRwsaPs0P0JmZV6dkLz6ILYfFYQGn+5plctanRN+IC8dJRiFkyXHrwEE3W9Wmx67uDbw==}
    dependencies:
      escodegen: 1.14.3
    dev: false

  /static-module/3.0.4:
    resolution: {integrity: sha512-gb0v0rrgpBkifXCa3yZXxqVmXDVE+ETXj6YlC/jt5VzOnGXR2C15+++eXuMDUYsePnbhf+lwW0pE1UXyOLtGCw==}
    dependencies:
      acorn-node: 1.8.2
      concat-stream: 1.6.2
      convert-source-map: 1.8.0
      duplexer2: 0.1.4
      escodegen: 1.14.3
      has: 1.0.3
      magic-string: 0.25.1
      merge-source-map: 1.0.4
      object-inspect: 1.12.0
      readable-stream: 2.3.7
      scope-analyzer: 2.1.2
      shallow-copy: 0.0.1
      static-eval: 2.1.0
      through2: 2.0.5
    dev: false

  /statuses/1.5.0:
    resolution: {integrity: sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow=}
    engines: {node: '>= 0.6'}
    dev: false

  /string-length/4.0.2:
    resolution: {integrity: sha512-+l6rNN5fYHNhZZy41RXsYptCjA2Igmq4EG7kZAYFQI1E1VTXarr6ZPXBg6eq7Y6eK4FEhY6AJlyuFIb/v/S0VQ==}
    engines: {node: '>=10'}
    dependencies:
      char-regex: 1.0.2
      strip-ansi: 6.0.1
    dev: true

  /string-natural-compare/3.0.1:
    resolution: {integrity: sha512-n3sPwynL1nwKi3WJ6AIsClwBMa0zTi54fn2oLU6ndfTSIO05xaznjSf15PcBZU6FNWbmN5Q6cxT4V5hGvB4taw==}
    dev: true

  /string-width/4.2.3:
    resolution: {integrity: sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==}
    engines: {node: '>=8'}
    dependencies:
      emoji-regex: 8.0.0
      is-fullwidth-code-point: 3.0.0
      strip-ansi: 6.0.1

  /string.prototype.matchall/4.0.6:
    resolution: {integrity: sha512-6WgDX8HmQqvEd7J+G6VtAahhsQIssiZ8zl7zKh1VDMFyL3hRTJP4FTNA3RbIp2TOQ9AYNDcc7e3fH0Qbup+DBg==}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.3
      es-abstract: 1.19.1
      get-intrinsic: 1.1.1
      has-symbols: 1.0.2
      internal-slot: 1.0.3
      regexp.prototype.flags: 1.4.1
      side-channel: 1.0.4
    dev: true

  /string.prototype.trimend/1.0.4:
    resolution: {integrity: sha512-y9xCjw1P23Awk8EvTpcyL2NIr1j7wJ39f+k6lvRnSMz+mz9CGz9NYPelDk42kOz6+ql8xjfK8oYzy3jAP5QU5A==}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.3
    dev: true

  /string.prototype.trimstart/1.0.4:
    resolution: {integrity: sha512-jh6e984OBfvxS50tdY2nRZnoC5/mLFKOREQfw8t5yytkoUsJRNxvI/E39qu1sD0OtWI3OC0XgKSmcWwziwYuZw==}
    dependencies:
      call-bind: 1.0.2
      define-properties: 1.1.3
    dev: true

  /string_decoder/0.10.31:
    resolution: {integrity: sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ=}
    dev: false

  /string_decoder/1.1.1:
    resolution: {integrity: sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==}
    dependencies:
      safe-buffer: 5.1.2
    dev: false

  /string_decoder/1.3.0:
    resolution: {integrity: sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==}
    dependencies:
      safe-buffer: 5.2.1
    dev: false

  /strip-ansi/6.0.1:
    resolution: {integrity: sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==}
    engines: {node: '>=8'}
    dependencies:
      ansi-regex: 5.0.1

  /strip-bom/3.0.0:
    resolution: {integrity: sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=}
    engines: {node: '>=4'}
    dev: true

  /strip-bom/4.0.0:
    resolution: {integrity: sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w==}
    engines: {node: '>=8'}
    dev: true

  /strip-final-newline/2.0.0:
    resolution: {integrity: sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==}
    engines: {node: '>=6'}
    dev: true

  /strip-json-comments/3.1.1:
    resolution: {integrity: sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==}
    engines: {node: '>=8'}
    dev: true

  /strnum/1.0.5:
    resolution: {integrity: sha512-J8bbNyKKXl5qYcR36TIO8W3mVGVHrmmxsd5PAItGkmyzwJvybiw2IVq5nqd0i4LSNSkB/sx9VHllbfFdr9k1JA==}
    dev: false

  /style-dictionary/3.1.1:
    resolution: {integrity: sha512-Dpugx2wH3ElMvq1GOaSsfUChr8dwujx2/eBUUd0vaSFkP16LRp5XOJMTHF0f8QuPGkpBfVPXDWCkb3oJ3oJjxg==}
    engines: {node: '>=12.0.0'}
    hasBin: true
    dependencies:
      chalk: 4.1.2
      change-case: 4.1.2
      commander: 5.1.0
      fs-extra: 8.1.0
      glob: 7.2.0
      json5: 2.2.0
      jsonc-parser: 3.0.0
      lodash: 4.17.21
      tinycolor2: 1.4.2
    dev: false

  /supports-color/5.5.0:
    resolution: {integrity: sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==}
    engines: {node: '>=4'}
    dependencies:
      has-flag: 3.0.0

  /supports-color/7.2.0:
    resolution: {integrity: sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==}
    engines: {node: '>=8'}
    dependencies:
      has-flag: 4.0.0

  /supports-color/8.1.1:
    resolution: {integrity: sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==}
    engines: {node: '>=10'}
    dependencies:
      has-flag: 4.0.0
    dev: true

  /supports-hyperlinks/2.2.0:
    resolution: {integrity: sha512-6sXEzV5+I5j8Bmq9/vUphGRM/RJNT9SCURJLjwfOg51heRtguGWDzcaBlgAzKhQa0EVNpPEKzQuBwZ8S8WaCeQ==}
    engines: {node: '>=8'}
    dependencies:
      has-flag: 4.0.0
      supports-color: 7.2.0
    dev: true

  /supports-preserve-symlinks-flag/1.0.0:
    resolution: {integrity: sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==}
    engines: {node: '>= 0.4'}

  /svg-arc-to-cubic-bezier/3.2.0:
    resolution: {integrity: sha512-djbJ/vZKZO+gPoSDThGNpKDO+o+bAeA4XQKovvkNCqnIS2t+S4qnLAGQhyyrulhCFRl1WWzAp0wUDV8PpTVU3g==}
    dev: false

  /svg-to-pdfkit/0.1.8:
    resolution: {integrity: sha512-QItiGZBy5TstGy+q8mjQTMGRlDDOARXLxH+sgVm1n/LYeo0zFcQlcCh8m4zi8QxctrxB9Kue/lStc/RD5iLadQ==}
    dependencies:
      pdfkit: 0.13.0
    dev: false

  /symbol-tree/3.2.4:
    resolution: {integrity: sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==}
    dev: true

  /table/6.8.0:
    resolution: {integrity: sha512-s/fitrbVeEyHKFa7mFdkuQMWlH1Wgw/yEXMt5xACT4ZpzWFluehAxRtUUQKPuWhaLAWhFcVx6w3oC8VKaUfPGA==}
    engines: {node: '>=10.0.0'}
    dependencies:
      ajv: 8.9.0
      lodash.truncate: 4.4.2
      slice-ansi: 4.0.0
      string-width: 4.2.3
      strip-ansi: 6.0.1
    dev: false

  /tar-stream/2.2.0:
    resolution: {integrity: sha512-ujeqbceABgwMZxEJnk2HDY2DlnUZ+9oEcb1KzTVfYHio0UE6dG71n60d8D2I4qNvleWrrXpmjpt7vZeF1LnMZQ==}
    engines: {node: '>=6'}
    dependencies:
      bl: 4.1.0
      end-of-stream: 1.4.4
      fs-constants: 1.0.0
      inherits: 2.0.4
      readable-stream: 3.6.0
    dev: false

  /terminal-link/2.1.1:
    resolution: {integrity: sha512-un0FmiRUQNr5PJqy9kP7c40F5BOfpGlYTrxonDChEZB7pzZxRNp/bt+ymiy9/npwXya9KH99nJ/GXFIiUkYGFQ==}
    engines: {node: '>=8'}
    dependencies:
      ansi-escapes: 4.3.2
      supports-hyperlinks: 2.2.0
    dev: true

  /terser/5.10.0:
    resolution: {integrity: sha512-AMmF99DMfEDiRJfxfY5jj5wNH/bYO09cniSqhfoyxc8sFoYIgkJy86G04UoZU5VjlpnplVu0K6Tx6E9b5+DlHA==}
    engines: {node: '>=10'}
    hasBin: true
    peerDependencies:
      acorn: ^8.5.0
    peerDependenciesMeta:
      acorn:
        optional: true
    dependencies:
      commander: 2.20.3
      source-map: 0.7.3
      source-map-support: 0.5.21
    dev: true

  /test-exclude/6.0.0:
    resolution: {integrity: sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==}
    engines: {node: '>=8'}
    dependencies:
      '@istanbuljs/schema': 0.1.3
      glob: 7.2.0
      minimatch: 3.0.4
    dev: true

  /text-table/0.2.0:
    resolution: {integrity: sha1-f17oI66AUgfACvLfSoTsP8+lcLQ=}
    dev: true

  /throat/6.0.1:
    resolution: {integrity: sha512-8hmiGIJMDlwjg7dlJ4yKGLK8EsYqKgPWbG3b4wjJddKNwc7N7Dpn08Df4szr/sZdMVeOstrdYSsqzX6BYbcB+w==}
    dev: true

  /through/2.3.8:
    resolution: {integrity: sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU=}
    dev: false

  /through2/2.0.5:
    resolution: {integrity: sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==}
    dependencies:
      readable-stream: 2.3.7
      xtend: 4.0.2
    dev: false

  /timers-ext/0.1.7:
    resolution: {integrity: sha512-b85NUNzTSdodShTIbky6ZF02e8STtVVfD+fu4aXXShEELpozH+bCpJLYMPZbsABN2wDH7fJpqIoXxJpzbf0NqQ==}
    dependencies:
      es5-ext: 0.10.53
      next-tick: 1.1.0
    dev: false

  /tiny-inflate/1.0.3:
    resolution: {integrity: sha512-pkY1fj1cKHb2seWDy0B16HeWyczlJA9/WW3u3c4z/NiWDsO3DOU5D7nhTLE9CF0yXv/QZFY7sEJmj24dK+Rrqw==}
    dev: false

  /tinycolor2/1.4.2:
    resolution: {integrity: sha512-vJhccZPs965sV/L2sU4oRQVAos0pQXwsvTLkWYdqJ+a8Q5kPFzJTuOFwy7UniPli44NKQGAglksjvOcpo95aZA==}
    dev: false

  /tinyqueue/2.0.3:
    resolution: {integrity: sha512-ppJZNDuKGgxzkHihX8v9v9G5f+18gzaTfrukGrq6ueg0lmH4nqVnA2IPG0AEH3jKEk2GRJCUhDoqpoiw3PHLBA==}
    dev: false

  /tmpl/1.0.5:
    resolution: {integrity: sha512-3f0uOEAQwIqGuWW2MVzYg8fV/QNnc/IpuJNG837rLuczAaLVHslWHZQj4IGiEl5Hs3kkbhwL9Ab7Hrsmuj+Smw==}
    dev: true

  /to-fast-properties/2.0.0:
    resolution: {integrity: sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4=}
    engines: {node: '>=4'}
    dev: true

  /to-regex-range/5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}
    dependencies:
      is-number: 7.0.0

  /toidentifier/1.0.1:
    resolution: {integrity: sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==}
    engines: {node: '>=0.6'}
    dev: false

  /tough-cookie/4.0.0:
    resolution: {integrity: sha512-tHdtEpQCMrc1YLrMaqXXcj6AxhYi/xgit6mZu1+EDWUn+qhUf8wMQoFIy9NXuq23zAwtcB0t/MjACGR18pcRbg==}
    engines: {node: '>=6'}
    dependencies:
      psl: 1.8.0
      punycode: 2.1.1
      universalify: 0.1.2
    dev: true

  /tr46/0.0.3:
    resolution: {integrity: sha1-gYT9NH2snNwYWZLzpmIuFLnZq2o=}
    dev: false

  /tr46/2.1.0:
    resolution: {integrity: sha512-15Ih7phfcdP5YxqiB+iDtLoaTz4Nd35+IiAv0kQ5FNKHzXgdWqPoTIqEDDJmXceQt4JZk6lVPT8lnDlPpGDppw==}
    engines: {node: '>=8'}
    dependencies:
      punycode: 2.1.1
    dev: true

  /ts-jest/27.1.3_5809fbb6725b4aac8c31bd5088ddb062:
    resolution: {integrity: sha512-6Nlura7s6uM9BVUAoqLH7JHyMXjz8gluryjpPXxr3IxZdAXnU6FhjvVLHFtfd1vsE1p8zD1OJfskkc0jhTSnkA==}
    engines: {node: ^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0}
    hasBin: true
    peerDependencies:
      '@babel/core': '>=7.0.0-beta.0 <8'
      '@types/jest': ^27.0.0
      babel-jest: '>=27.0.0 <28'
      esbuild: ~0.14.0
      jest: ^27.0.0
      typescript: '>=3.8 <5.0'
    peerDependenciesMeta:
      '@babel/core':
        optional: true
      '@types/jest':
        optional: true
      babel-jest:
        optional: true
      esbuild:
        optional: true
    dependencies:
      '@types/jest': 27.4.0
      bs-logger: 0.2.6
      esbuild: 0.14.16
      fast-json-stable-stringify: 2.1.0
      jest: 27.4.7
      jest-util: 27.4.2
      json5: 2.2.0
      lodash.memoize: 4.1.2
      make-error: 1.3.6
      semver: 7.3.5
      typescript: 4.5.5
      yargs-parser: 20.2.9
    dev: true

  /ts-node/10.4.0_d9704c9be36ede869b5c33ef6688872e:
    resolution: {integrity: sha512-g0FlPvvCXSIO1JDF6S232P5jPYqBkRL9qly81ZgAOSU7rwI0stphCgd2kLiCrU9DjQCrJMWEqcNSjQL02s6d8A==}
    hasBin: true
    peerDependencies:
      '@swc/core': '>=1.2.50'
      '@swc/wasm': '>=1.2.50'
      '@types/node': '*'
      typescript: '>=2.7'
    peerDependenciesMeta:
      '@swc/core':
        optional: true
      '@swc/wasm':
        optional: true
    dependencies:
      '@cspotcode/source-map-support': 0.7.0
      '@tsconfig/node10': 1.0.8
      '@tsconfig/node12': 1.0.9
      '@tsconfig/node14': 1.0.1
      '@tsconfig/node16': 1.0.2
      '@types/node': 14.18.10
      acorn: 8.7.0
      acorn-walk: 8.2.0
      arg: 4.1.3
      create-require: 1.1.1
      diff: 4.0.2
      make-error: 1.3.6
      typescript: 4.5.5
      yn: 3.1.1
    dev: true

  /tsconfig-paths/3.12.0:
    resolution: {integrity: sha512-e5adrnOYT6zqVnWqZu7i/BQ3BnhzvGbjEjejFXO20lKIKpwTaupkCPgEfv4GZK1IBciJUEhYs3J3p75FdaTFVg==}
    dependencies:
      '@types/json5': 0.0.29
      json5: 1.0.1
      minimist: 1.2.5
      strip-bom: 3.0.0
    dev: true

  /tslib/1.14.1:
    resolution: {integrity: sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg==}

  /tslib/2.3.1:
    resolution: {integrity: sha512-77EbyPPpMz+FRFRuAFlWMtmgUWGe9UOG2Z25NqCwiIjRhOf5iKGuzSe5P2w1laq+FkRy4p+PCuVkJSGkzTEKVw==}

  /tsutils/3.21.0_typescript@4.5.5:
    resolution: {integrity: sha512-mHKK3iUXL+3UF6xL5k0PEhKRUBKPBCv/+RkEOpjRWxxx27KKRBmmA60A9pgOUvMi8GKhRMPEmjBRPzs2W7O1OA==}
    engines: {node: '>= 6'}
    peerDependencies:
      typescript: '>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta'
    dependencies:
      tslib: 1.14.1
      typescript: 4.5.5
    dev: true

  /type-check/0.3.2:
    resolution: {integrity: sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=}
    engines: {node: '>= 0.8.0'}
    dependencies:
      prelude-ls: 1.1.2

  /type-check/0.4.0:
    resolution: {integrity: sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==}
    engines: {node: '>= 0.8.0'}
    dependencies:
      prelude-ls: 1.2.1
    dev: true

  /type-detect/4.0.8:
    resolution: {integrity: sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g==}
    engines: {node: '>=4'}

  /type-fest/0.20.2:
    resolution: {integrity: sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==}
    engines: {node: '>=10'}
    dev: true

  /type-fest/0.21.3:
    resolution: {integrity: sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w==}
    engines: {node: '>=10'}
    dev: true

  /type/1.2.0:
    resolution: {integrity: sha512-+5nt5AAniqsCnu2cEQQdpzCAh33kVx8n0VoFidKpB1dVVLAN/F+bgVOqOJqOnEnrhp222clB5p3vUlD+1QAnfg==}
    dev: false

  /type/2.5.0:
    resolution: {integrity: sha512-180WMDQaIMm3+7hGXWf12GtdniDEy7nYcyFMKJn/eZz/6tSLXrUN9V0wKSbMjej0I1WHWbpREDEKHtqPQa9NNw==}
    dev: false

  /typedarray-to-buffer/3.1.5:
    resolution: {integrity: sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==}
    dependencies:
      is-typedarray: 1.0.0
    dev: true

  /typedarray/0.0.6:
    resolution: {integrity: sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c=}
    dev: false

  /typescript/4.5.5:
    resolution: {integrity: sha512-TCTIul70LyWe6IJWT8QSYeA54WQe8EjQFU4wY52Fasj5UKx88LNYKCgBEHcOMOrFF1rKGbD8v/xcNWVUq9SymA==}
    engines: {node: '>=4.2.0'}
    hasBin: true
    dev: true

  /ulid/2.3.0:
    resolution: {integrity: sha512-keqHubrlpvT6G2wH0OEfSW4mquYRcbe/J8NMmveoQOjUqmo+hXtO+ORCpWhdbZ7k72UtY61BL7haGxW6enBnjw==}
    hasBin: true
    dev: false

  /unbox-primitive/1.0.1:
    resolution: {integrity: sha512-tZU/3NqK3dA5gpE1KtyiJUrEB0lxnGkMFHptJ7q6ewdZ8s12QrODwNbhIJStmJkd1QDXa1NRA8aF2A1zk/Ypyw==}
    dependencies:
      function-bind: 1.1.1
      has-bigints: 1.0.1
      has-symbols: 1.0.2
      which-boxed-primitive: 1.0.2
    dev: true

  /unfetch/4.2.0:
    resolution: {integrity: sha512-F9p7yYCn6cIW9El1zi0HI6vqpeIvBsr3dSuRO6Xuppb1u5rXpCPmMvLSyECLhybr9isec8Ohl0hPekMVrEinDA==}
    dev: false

  /unicode-canonical-property-names-ecmascript/2.0.0:
    resolution: {integrity: sha512-yY5PpDlfVIU5+y/BSCxAJRBIS1Zc2dDG3Ujq+sR0U+JjUevW2JhocOF+soROYDSaAezOzOKuyyixhD6mBknSmQ==}
    engines: {node: '>=4'}
    dev: true

  /unicode-match-property-ecmascript/2.0.0:
    resolution: {integrity: sha512-5kaZCrbp5mmbz5ulBkDkbY0SsPOjKqVS35VpL9ulMPfSl0J0Xsm+9Evphv9CoIZFwre7aJoa94AY6seMKGVN5Q==}
    engines: {node: '>=4'}
    dependencies:
      unicode-canonical-property-names-ecmascript: 2.0.0
      unicode-property-aliases-ecmascript: 2.0.0
    dev: true

  /unicode-match-property-value-ecmascript/2.0.0:
    resolution: {integrity: sha512-7Yhkc0Ye+t4PNYzOGKedDhXbYIBe1XEQYQxOPyhcXNMJ0WCABqqj6ckydd6pWRZTHV4GuCPKdBAUiMc60tsKVw==}
    engines: {node: '>=4'}
    dev: true

  /unicode-properties/1.3.1:
    resolution: {integrity: sha512-nIV3Tf3LcUEZttY/2g4ZJtGXhWwSkuLL+rCu0DIAMbjyVPj+8j5gNVz4T/sVbnQybIsd5SFGkPKg/756OY6jlA==}
    dependencies:
      base64-js: 1.5.1
      unicode-trie: 2.0.0
    dev: false

  /unicode-property-aliases-ecmascript/2.0.0:
    resolution: {integrity: sha512-5Zfuy9q/DFr4tfO7ZPeVXb1aPoeQSdeFMLpYuFebehDAhbuevLs5yxSZmIFN1tP5F9Wl4IpJrYojg85/zgyZHQ==}
    engines: {node: '>=4'}
    dev: true

  /unicode-trie/0.3.1:
    resolution: {integrity: sha1-1nHd3YkQGgi6w3tqUWEBBgIFIIU=}
    dependencies:
      pako: 0.2.9
      tiny-inflate: 1.0.3
    dev: false

  /unicode-trie/1.0.0:
    resolution: {integrity: sha512-v5raLKsobbFbWLMoX9+bChts/VhPPj3XpkNr/HbqkirXR1DPk8eo9IYKyvk0MQZFkaoRsFj2Rmaqgi2rfAZYtA==}
    dependencies:
      pako: 0.2.9
      tiny-inflate: 1.0.3
    dev: false

  /unicode-trie/2.0.0:
    resolution: {integrity: sha512-x7bc76x0bm4prf1VLg79uhAzKw8DVboClSN5VxJuQ+LKDOVEW9CdH+VY7SP+vX7xCYQqzzgQpFqz15zeLvAtZQ==}
    dependencies:
      pako: 0.2.9
      tiny-inflate: 1.0.3
    dev: false

  /universal-cookie/4.0.4:
    resolution: {integrity: sha512-lbRVHoOMtItjWbM7TwDLdl8wug7izB0tq3/YVKhT/ahB4VDvWMyvnADfnJI8y6fSvsjh51Ix7lTGC6Tn4rMPhw==}
    dependencies:
      '@types/cookie': 0.3.3
      cookie: 0.4.2
    dev: false

  /universalify/0.1.2:
    resolution: {integrity: sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==}
    engines: {node: '>= 4.0.0'}

  /universalify/2.0.0:
    resolution: {integrity: sha512-hAZsKq7Yy11Zu1DE0OzWjw7nnLZmJZYTDZZyEFHZdUhV8FkH5MCfoU1XMaxXovpyW5nq5scPqq0ZDP9Zyl04oQ==}
    engines: {node: '>= 10.0.0'}

  /unpipe/1.0.0:
    resolution: {integrity: sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw=}
    engines: {node: '>= 0.8'}
    dev: false

  /upper-case-first/2.0.2:
    resolution: {integrity: sha512-514ppYHBaKwfJRK/pNC6c/OxfGa0obSnAl106u97Ed0I625Nin96KAjttZF6ZL3e1XLtphxnqrOi9iWgm+u+bg==}
    dependencies:
      tslib: 2.3.1
    dev: false

  /upper-case/2.0.2:
    resolution: {integrity: sha512-KgdgDGJt2TpuwBUIjgG6lzw2GWFRCW9Qkfkiv0DxqHHLYJHmtmdUIKcZd8rHgFSjopVTlw6ggzCm1b8MFQwikg==}
    dependencies:
      tslib: 2.3.1
    dev: false

  /uri-js/4.4.1:
    resolution: {integrity: sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==}
    dependencies:
      punycode: 2.1.1

  /url/0.10.3:
    resolution: {integrity: sha1-Ah5NnHcF8hu/N9A861h2dAJ3TGQ=}
    dependencies:
      punycode: 1.3.2
      querystring: 0.2.0
    dev: false

  /url/0.11.0:
    resolution: {integrity: sha1-ODjpfPxgUh63PFJajlW/3Z4uKPE=}
    dependencies:
      punycode: 1.3.2
      querystring: 0.2.0
    dev: false

  /use-callback-ref/1.2.5_a0c521d4794c7ad97f5f4c1c4a7d5818:
    resolution: {integrity: sha512-gN3vgMISAgacF7sqsLPByqoePooY3n2emTH59Ur5d/M8eg4WTWu1xp8i8DHjohftIyEx0S08RiYxbffr4j8Peg==}
    engines: {node: '>=8.5.0'}
    peerDependencies:
      '@types/react': ^16.8.0 || ^17.0.0
      react: ^16.8.0 || ^17.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true
    dependencies:
      '@types/react': 17.0.39
      react: 17.0.2
    dev: false

  /use-isomorphic-layout-effect/1.1.1_a0c521d4794c7ad97f5f4c1c4a7d5818:
    resolution: {integrity: sha512-L7Evj8FGcwo/wpbv/qvSfrkHFtOpCzvM5yl2KVyDJoylVuSvzphiiasmjgQPttIGBAy2WKiBNR98q8w7PiNgKQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true
    dependencies:
      '@types/react': 17.0.39
      react: 17.0.2
    dev: false

  /use-sidecar/1.0.5_react@17.0.2:
    resolution: {integrity: sha512-k9jnrjYNwN6xYLj1iaGhonDghfvmeTmYjAiGvOr7clwKfPjMXJf4/HOr7oT5tJwYafgp2tG2l3eZEOfoELiMcA==}
    engines: {node: '>=8.5.0'}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
    dependencies:
      detect-node-es: 1.1.0
      react: 17.0.2
      tslib: 1.14.1
    dev: false

  /use-subscription/1.5.1_react@17.0.2:
    resolution: {integrity: sha512-Xv2a1P/yReAjAbhylMfFplFKj9GssgTwN7RlcTxBujFQcloStWNDQdc4g4NRWH9xS4i/FDk04vQBptAXoF3VcA==}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0
    dependencies:
      object-assign: 4.1.1
      react: 17.0.2
    dev: false

  /util-deprecate/1.0.2:
    resolution: {integrity: sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=}
    dev: false

  /uuid/3.3.2:
    resolution: {integrity: sha512-yXJmeNaw3DnnKAOKJE51sL/ZaYfWJRl1pK9dr19YFCu0ObS231AB1/LbqTKRAQ5kw8A90rA6fr4riOUpTZvQZA==}
    deprecated: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
    hasBin: true
    dev: false

  /uuid/3.4.0:
    resolution: {integrity: sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==}
    deprecated: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
    hasBin: true
    dev: false

  /uuid/8.3.2:
    resolution: {integrity: sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==}
    hasBin: true
    dev: false

  /v8-compile-cache/2.3.0:
    resolution: {integrity: sha512-l8lCEmLcLYZh4nbunNZvQCJc5pv7+RCwa8q/LdUx8u7lsWvPDKmpodJAJNwkAhJC//dFY48KuIEmjtd4RViDrA==}
    dev: true

  /v8-to-istanbul/8.1.1:
    resolution: {integrity: sha512-FGtKtv3xIpR6BYhvgH8MI/y78oT7d8Au3ww4QIxymrCtZEh5b8gCw2siywE+puhEmuWKDtmfrvF5UlB298ut3w==}
    engines: {node: '>=10.12.0'}
    dependencies:
      '@types/istanbul-lib-coverage': 2.0.4
      convert-source-map: 1.8.0
      source-map: 0.7.3
    dev: true

  /vite-plugin-html/2.1.2_vite@2.7.13:
    resolution: {integrity: sha512-7HXkL6n7M2qDEaUV4Vnz8yM2glW4gV36d5HSBIM5gOoAG1PkuQb4Vv9FTPgPiQxq4sPRf/6IgABX0MeLVW+CyQ==}
    peerDependencies:
      vite: '>=2.0.0'
    dependencies:
      '@rollup/pluginutils': 4.1.2
      dotenv: 10.0.0
      dotenv-expand: 5.1.0
      ejs: 3.1.6
      fs-extra: 10.0.0
      html-minifier-terser: 6.1.0
      vite: 2.7.13
    transitivePeerDependencies:
      - acorn
    dev: true

  /vite-tsconfig-paths/3.3.17_vite@2.7.13:
    resolution: {integrity: sha512-wx+rfC53moVLxMBj2EApJZgY6HtvWUFVZ4dBxNGYBxSSqU6UaHdKlcOxrfGDxyTGtYEr9beWCryHn18C4EtZkg==}
    peerDependencies:
      vite: '>2.0.0-0'
    dependencies:
      debug: 4.3.3
      globrex: 0.1.2
      recrawl-sync: 2.2.1
      tsconfig-paths: 3.12.0
      vite: 2.7.13
    transitivePeerDependencies:
      - supports-color
    dev: true

  /vite/2.7.13:
    resolution: {integrity: sha512-Mq8et7f3aK0SgSxjDNfOAimZGW9XryfHRa/uV0jseQSilg+KhYDSoNb9h1rknOy6SuMkvNDLKCYAYYUMCE+IgQ==}
    engines: {node: '>=12.2.0'}
    hasBin: true
    peerDependencies:
      less: '*'
      sass: '*'
      stylus: '*'
    peerDependenciesMeta:
      less:
        optional: true
      sass:
        optional: true
      stylus:
        optional: true
    dependencies:
      esbuild: 0.13.15
      postcss: 8.4.5
      resolve: 1.21.0
      rollup: 2.64.0
    optionalDependencies:
      fsevents: 2.3.2
    dev: true

  /vm2/3.9.5:
    resolution: {integrity: sha512-LuCAHZN75H9tdrAiLFf030oW7nJV5xwNMuk1ymOZwopmuK3d2H4L1Kv4+GFHgarKiLfXXLFU+7LDABHnwOkWng==}
    engines: {node: '>=6.0'}
    hasBin: true
    dev: false

  /w3c-hr-time/1.0.2:
    resolution: {integrity: sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ==}
    dependencies:
      browser-process-hrtime: 1.0.0
    dev: true

  /w3c-xmlserializer/2.0.0:
    resolution: {integrity: sha512-4tzD0mF8iSiMiNs30BiLO3EpfGLZUT2MSX/G+o7ZywDzliWQ3OPtTZ0PTC3B3ca1UAf4cJMHB+2Bf56EriJuRA==}
    engines: {node: '>=10'}
    dependencies:
      xml-name-validator: 3.0.0
    dev: true

  /walker/1.0.8:
    resolution: {integrity: sha512-ts/8E8l5b7kY0vlWLewOkDXMmPdLcVV4GmOQLyxuSswIJsweeFZtAsMF7k1Nszz+TYBQrlYRmzOnr398y1JemQ==}
    dependencies:
      makeerror: 1.0.12
    dev: true

  /webidl-conversions/3.0.1:
    resolution: {integrity: sha1-JFNCdeKnvGvnvIZhHMFq4KVlSHE=}
    dev: false

  /webidl-conversions/5.0.0:
    resolution: {integrity: sha512-VlZwKPCkYKxQgeSbH5EyngOmRp7Ww7I9rQLERETtf5ofd9pGeswWiOtogpEO850jziPRarreGxn5QIiTqpb2wA==}
    engines: {node: '>=8'}
    dev: true

  /webidl-conversions/6.1.0:
    resolution: {integrity: sha512-qBIvFLGiBpLjfwmYAaHPXsn+ho5xZnGvyGvsarywGNc8VyQJUMHJ8OBKGGrPER0okBeMDaan4mNBlgBROxuI8w==}
    engines: {node: '>=10.4'}
    dev: true

  /whatwg-encoding/1.0.5:
    resolution: {integrity: sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw==}
    dependencies:
      iconv-lite: 0.4.24
    dev: true

  /whatwg-mimetype/2.3.0:
    resolution: {integrity: sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g==}
    dev: true

  /whatwg-url/5.0.0:
    resolution: {integrity: sha1-lmRU6HZUYuN2RNNib2dCzotwll0=}
    dependencies:
      tr46: 0.0.3
      webidl-conversions: 3.0.1
    dev: false

  /whatwg-url/8.7.0:
    resolution: {integrity: sha512-gAojqb/m9Q8a5IV96E3fHJM70AzCkgt4uXYX2O7EmuyOnLrViCQlsEBmF9UQIu3/aeAIp2U17rtbpZWNntQqdg==}
    engines: {node: '>=10'}
    dependencies:
      lodash: 4.17.21
      tr46: 2.1.0
      webidl-conversions: 6.1.0
    dev: true

  /which-boxed-primitive/1.0.2:
    resolution: {integrity: sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==}
    dependencies:
      is-bigint: 1.0.4
      is-boolean-object: 1.1.2
      is-number-object: 1.0.6
      is-string: 1.0.7
      is-symbol: 1.0.4
    dev: true

  /which-module/2.0.0:
    resolution: {integrity: sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho=}
    dev: false

  /which/2.0.2:
    resolution: {integrity: sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==}
    engines: {node: '>= 8'}
    hasBin: true
    dependencies:
      isexe: 2.0.0
    dev: true

  /wmf/1.0.2:
    resolution: {integrity: sha512-/p9K7bEh0Dj6WbXg4JG0xvLQmIadrner1bi45VMJTfnbVHsc7yIajZyoSoK60/dtVBs12Fm6WkUI5/3WAVsNMw==}
    engines: {node: '>=0.8'}
    dev: false

  /word-wrap/1.2.3:
    resolution: {integrity: sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==}
    engines: {node: '>=0.10.0'}

  /word/0.3.0:
    resolution: {integrity: sha512-OELeY0Q61OXpdUfTp+oweA/vtLVg5VDOXh+3he3PNzLGG/y0oylSOC1xRVj0+l4vQ3tj/bB1HVHv1ocXkQceFA==}
    engines: {node: '>=0.8'}
    dev: false

  /wordwrap/1.0.0:
    resolution: {integrity: sha1-J1hIEIkUVqQXHI0CJkQa3pDLyus=}
    dev: false

  /wrap-ansi/6.2.0:
    resolution: {integrity: sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==}
    engines: {node: '>=8'}
    dependencies:
      ansi-styles: 4.3.0
      string-width: 4.2.3
      strip-ansi: 6.0.1
    dev: false

  /wrap-ansi/7.0.0:
    resolution: {integrity: sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==}
    engines: {node: '>=10'}
    dependencies:
      ansi-styles: 4.3.0
      string-width: 4.2.3
      strip-ansi: 6.0.1

  /wrappy/1.0.2:
    resolution: {integrity: sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=}

  /write-file-atomic/3.0.3:
    resolution: {integrity: sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==}
    dependencies:
      imurmurhash: 0.1.4
      is-typedarray: 1.0.0
      signal-exit: 3.0.6
      typedarray-to-buffer: 3.1.5
    dev: true

  /ws/7.5.6:
    resolution: {integrity: sha512-6GLgCqo2cy2A2rjCNFlxQS6ZljG/coZfZXclldI8FB/1G3CCI36Zd8xy2HrFVACi8tfk5XrgLQEk+P0Tnz9UcA==}
    engines: {node: '>=8.3.0'}
    peerDependencies:
      bufferutil: ^4.0.1
      utf-8-validate: ^5.0.2
    peerDependenciesMeta:
      bufferutil:
        optional: true
      utf-8-validate:
        optional: true
    dev: true

  /xlsx/0.17.5:
    resolution: {integrity: sha512-lXNU0TuYsvElzvtI6O7WIVb9Zar1XYw7Xb3VAx2wn8N/n0whBYrCnHMxtFyIiUU1Wjf09WzmLALDfBO5PqTb1g==}
    engines: {node: '>=0.8'}
    hasBin: true
    dependencies:
      adler-32: 1.2.0
      cfb: 1.2.1
      codepage: 1.15.0
      crc-32: 1.2.0
      ssf: 0.11.2
      wmf: 1.0.2
      word: 0.3.0
    dev: false

  /xml-name-validator/3.0.0:
    resolution: {integrity: sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw==}
    dev: true

  /xml2js/0.4.19:
    resolution: {integrity: sha512-esZnJZJOiJR9wWKMyuvSE1y6Dq5LCuJanqhxslH2bxM6duahNZ+HMpCLhBQGZkbX6xRf8x1Y2eJlgt2q3qo49Q==}
    dependencies:
      sax: 1.2.1
      xmlbuilder: 9.0.7
    dev: false

  /xmlbuilder/9.0.7:
    resolution: {integrity: sha1-Ey7mPS7FVlxVfiD0wi35rKaGsQ0=}
    engines: {node: '>=4.0'}
    dev: false

  /xmlchars/2.2.0:
    resolution: {integrity: sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw==}
    dev: true

  /xmldoc/1.1.2:
    resolution: {integrity: sha512-ruPC/fyPNck2BD1dpz0AZZyrEwMOrWTO5lDdIXS91rs3wtm4j+T8Rp2o+zoOYkkAxJTZRPOSnOGei1egoRmKMQ==}
    dependencies:
      sax: 1.2.1
    dev: false

  /xregexp/2.0.0:
    resolution: {integrity: sha1-UqY+VsoLhKfzpfPWGHLxJq16WUM=}
    dev: false

  /xstate/4.26.1:
    resolution: {integrity: sha512-JLofAEnN26l/1vbODgsDa+Phqa61PwDlxWu8+2pK+YbXf+y9pQSDLRvcYH2H1kkeUBA5fGp+xFL/zfE8jNMw4g==}
    dev: false

  /xtend/4.0.2:
    resolution: {integrity: sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==}
    engines: {node: '>=0.4'}
    dev: false

  /y18n/4.0.3:
    resolution: {integrity: sha512-JKhqTOwSrqNA1NY5lSztJ1GrBiUodLMmIZuLiDaMRJ+itFd+ABVE8XBjOvIWL+rSqNDC74LCSFmlb/U4UZ4hJQ==}
    dev: false

  /y18n/5.0.8:
    resolution: {integrity: sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==}
    engines: {node: '>=10'}

  /yallist/3.1.1:
    resolution: {integrity: sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==}
    dev: false

  /yallist/4.0.0:
    resolution: {integrity: sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==}

  /yaml/1.10.2:
    resolution: {integrity: sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==}
    engines: {node: '>= 6'}

  /yargs-parser/18.1.3:
    resolution: {integrity: sha512-o50j0JeToy/4K6OZcaQmW6lyXXKhq7csREXcDwk2omFPJEwUNOVtJKvmDr9EI1fAJZUyZcRF7kxGBWmRXudrCQ==}
    engines: {node: '>=6'}
    dependencies:
      camelcase: 5.3.1
      decamelize: 1.2.0
    dev: false

  /yargs-parser/20.2.9:
    resolution: {integrity: sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w==}
    engines: {node: '>=10'}

  /yargs/15.4.1:
    resolution: {integrity: sha512-aePbxDmcYW++PaqBsJ+HYUFwCdv4LVvdnhBy78E57PIor8/OVvhMrADFFEDh8DHDFRv/O9i3lPhsENjO7QX0+A==}
    engines: {node: '>=8'}
    dependencies:
      cliui: 6.0.0
      decamelize: 1.2.0
      find-up: 4.1.0
      get-caller-file: 2.0.5
      require-directory: 2.1.1
      require-main-filename: 2.0.0
      set-blocking: 2.0.0
      string-width: 4.2.3
      which-module: 2.0.0
      y18n: 4.0.3
      yargs-parser: 18.1.3
    dev: false

  /yargs/16.2.0:
    resolution: {integrity: sha512-D1mvvtDG0L5ft/jGWkLpG1+m0eQxOfaBvTNELraWj22wSVUMWxZUvYgJYcKh6jGGIkJFhH4IZPQhR4TKpc8mBw==}
    engines: {node: '>=10'}
    dependencies:
      cliui: 7.0.4
      escalade: 3.1.1
      get-caller-file: 2.0.5
      require-directory: 2.1.1
      string-width: 4.2.3
      y18n: 5.0.8
      yargs-parser: 20.2.9

  /yn/3.1.1:
    resolution: {integrity: sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==}
    engines: {node: '>=6'}
    dev: true

  /zen-observable-ts/0.8.19:
    resolution: {integrity: sha512-u1a2rpE13G+jSzrg3aiCqXU5tN2kw41b+cBZGmnc+30YimdkKiDj9bTowcB41eL77/17RF/h+393AuVgShyheQ==}
    dependencies:
      tslib: 1.14.1
      zen-observable: 0.8.15
    dev: false

  /zen-observable/0.7.1:
    resolution: {integrity: sha512-OI6VMSe0yeqaouIXtedC+F55Sr6r9ppS7+wTbSexkYdHbdt4ctTuPNXP/rwm7GTVI63YBc+EBT0b0tl7YnJLRg==}
    dev: false

  /zen-observable/0.8.15:
    resolution: {integrity: sha512-PQ2PC7R9rslx84ndNBZB/Dkv8V8fZEpk83RLgXtYd0fwUgEjseMn1Dgajh2x6S8QbZAFa9p2qVCEuYZNgve0dQ==}
    dev: false

  /zen-push/0.2.1:
    resolution: {integrity: sha512-Qv4qvc8ZIue51B/0zmeIMxpIGDVhz4GhJALBvnKs/FRa2T7jy4Ori9wFwaHVt0zWV7MIFglKAHbgnVxVTw7U1w==}
    dependencies:
      zen-observable: 0.7.1
    dev: false

  /zip-stream/4.1.0:
    resolution: {integrity: sha512-zshzwQW7gG7hjpBlgeQP9RuyPGNxvJdzR8SUM3QhxCnLjWN2E7j3dOvpeDcQoETfHx0urRS7EtmVToql7YpU4A==}
    engines: {node: '>= 10'}
    dependencies:
      archiver-utils: 2.1.0
      compress-commons: 4.1.1
      readable-stream: 3.6.0
    dev: false
