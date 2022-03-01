---
id: "index"
title: "gboost-ui"
slug: "/api-ui/"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Interfaces

- [Page](interfaces/Page.md)

## Type aliases

### CSS

Ƭ **CSS**: `Stitches.CSS`<typeof [`config`](#config)\>

#### Defined in

[packages/gboost-ui/src/stitches.config.ts:441](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-ui/src/stitches.config.ts#L441)

## Variables

### config

• **config**: `Object`

___

### darkTheme

• `Const` **darkTheme**: `string` & {} & `ThemeTokens`<{ `colors`: { `error1`: `string` = redDark.red1; `error10`: `string` = redDark.red10; `error11`: `string` = redDark.red11; `error12`: `string` = redDark.red12; `error2`: `string` = redDark.red2; `error3`: `string` = redDark.red3; `error4`: `string` = redDark.red4; `error5`: `string` = redDark.red5; `error6`: `string` = redDark.red6; `error7`: `string` = redDark.red7; `error8`: `string` = redDark.red8; `error9`: `string` = redDark.red9; `errorA1`: `string` = redDarkA.redA1; `errorA10`: `string` = redDarkA.redA10; `errorA11`: `string` = redDarkA.redA11; `errorA12`: `string` = redDarkA.redA12; `errorA2`: `string` = redDarkA.redA2; `errorA3`: `string` = redDarkA.redA3; `errorA4`: `string` = redDarkA.redA4; `errorA5`: `string` = redDarkA.redA5; `errorA6`: `string` = redDarkA.redA6; `errorA7`: `string` = redDarkA.redA7; `errorA8`: `string` = redDarkA.redA8; `errorA9`: `string` = redDarkA.redA9; `gray1`: `string` = sageDark.sage1; `gray10`: `string` = sageDark.sage10; `gray11`: `string` = sageDark.sage11; `gray12`: `string` = sageDark.sage12; `gray2`: `string` = sageDark.sage2; `gray3`: `string` = sageDark.sage3; `gray4`: `string` = sageDark.sage4; `gray5`: `string` = sageDark.sage5; `gray6`: `string` = sageDark.sage6; `gray7`: `string` = sageDark.sage7; `gray8`: `string` = sageDark.sage8; `gray9`: `string` = sageDark.sage9; `grayA1`: `string` = sageDarkA.sageA1; `grayA10`: `string` = sageDarkA.sageA10; `grayA11`: `string` = sageDarkA.sageA11; `grayA12`: `string` = sageDarkA.sageA12; `grayA2`: `string` = sageDarkA.sageA2; `grayA3`: `string` = sageDarkA.sageA3; `grayA4`: `string` = sageDarkA.sageA4; `grayA5`: `string` = sageDarkA.sageA5; `grayA6`: `string` = sageDarkA.sageA6; `grayA7`: `string` = sageDarkA.sageA7; `grayA8`: `string` = sageDarkA.sageA8; `grayA9`: `string` = sageDarkA.sageA9; `info1`: `string` = blueDark.blue1; `info10`: `string` = blueDark.blue10; `info11`: `string` = blueDark.blue11; `info12`: `string` = blueDark.blue12; `info2`: `string` = blueDark.blue2; `info3`: `string` = blueDark.blue3; `info4`: `string` = blueDark.blue4; `info5`: `string` = blueDark.blue5; `info6`: `string` = blueDark.blue6; `info7`: `string` = blueDark.blue7; `info8`: `string` = blueDark.blue8; `info9`: `string` = blueDark.blue9; `infoA1`: `string` = blueDarkA.blueA1; `infoA10`: `string` = blueDarkA.blueA10; `infoA11`: `string` = blueDarkA.blueA11; `infoA12`: `string` = blueDarkA.blueA12; `infoA2`: `string` = blueDarkA.blueA2; `infoA3`: `string` = blueDarkA.blueA3; `infoA4`: `string` = blueDarkA.blueA4; `infoA5`: `string` = blueDarkA.blueA5; `infoA6`: `string` = blueDarkA.blueA6; `infoA7`: `string` = blueDarkA.blueA7; `infoA8`: `string` = blueDarkA.blueA8; `infoA9`: `string` = blueDarkA.blueA9; `primary1`: `string` = greenDark.green1; `primary10`: `string` = greenDark.green10; `primary11`: `string` = greenDark.green11; `primary12`: `string` = greenDark.green12; `primary2`: `string` = greenDark.green2; `primary3`: `string` = greenDark.green3; `primary4`: `string` = greenDark.green4; `primary5`: `string` = greenDark.green5; `primary6`: `string` = greenDark.green6; `primary7`: `string` = greenDark.green7; `primary8`: `string` = greenDark.green8; `primary9`: `string` = greenDark.green9; `primaryA1`: `string` = greenDarkA.greenA1; `primaryA10`: `string` = greenDarkA.greenA10; `primaryA11`: `string` = greenDarkA.greenA11; `primaryA12`: `string` = greenDarkA.greenA12; `primaryA2`: `string` = greenDarkA.greenA2; `primaryA3`: `string` = greenDarkA.greenA3; `primaryA4`: `string` = greenDarkA.greenA4; `primaryA5`: `string` = greenDarkA.greenA5; `primaryA6`: `string` = greenDarkA.greenA6; `primaryA7`: `string` = greenDarkA.greenA7; `primaryA8`: `string` = greenDarkA.greenA8; `primaryA9`: `string` = greenDarkA.greenA9; `secondary1`: `string` = blueDark.blue1; `secondary10`: `string` = blueDark.blue10; `secondary11`: `string` = blueDark.blue11; `secondary12`: `string` = blueDark.blue12; `secondary2`: `string` = blueDark.blue2; `secondary3`: `string` = blueDark.blue3; `secondary4`: `string` = blueDark.blue4; `secondary5`: `string` = blueDark.blue5; `secondary6`: `string` = blueDark.blue6; `secondary7`: `string` = blueDark.blue7; `secondary8`: `string` = blueDark.blue8; `secondary9`: `string` = blueDark.blue9; `secondaryA1`: `string` = blueDarkA.blueA1; `secondaryA10`: `string` = blueDarkA.blueA10; `secondaryA11`: `string` = blueDarkA.blueA11; `secondaryA12`: `string` = blueDarkA.blueA12; `secondaryA2`: `string` = blueDarkA.blueA2; `secondaryA3`: `string` = blueDarkA.blueA3; `secondaryA4`: `string` = blueDarkA.blueA4; `secondaryA5`: `string` = blueDarkA.blueA5; `secondaryA6`: `string` = blueDarkA.blueA6; `secondaryA7`: `string` = blueDarkA.blueA7; `secondaryA8`: `string` = blueDarkA.blueA8; `secondaryA9`: `string` = blueDarkA.blueA9; `success1`: `string` = greenDark.green1; `success10`: `string` = greenDark.green10; `success11`: `string` = greenDark.green11; `success12`: `string` = greenDark.green12; `success2`: `string` = greenDark.green2; `success3`: `string` = greenDark.green3; `success4`: `string` = greenDark.green4; `success5`: `string` = greenDark.green5; `success6`: `string` = greenDark.green6; `success7`: `string` = greenDark.green7; `success8`: `string` = greenDark.green8; `success9`: `string` = greenDark.green9; `successA1`: `string` = greenDarkA.greenA1; `successA10`: `string` = greenDarkA.greenA10; `successA11`: `string` = greenDarkA.greenA11; `successA12`: `string` = greenDarkA.greenA12; `successA2`: `string` = greenDarkA.greenA2; `successA3`: `string` = greenDarkA.greenA3; `successA4`: `string` = greenDarkA.greenA4; `successA5`: `string` = greenDarkA.greenA5; `successA6`: `string` = greenDarkA.greenA6; `successA7`: `string` = greenDarkA.greenA7; `successA8`: `string` = greenDarkA.greenA8; `successA9`: `string` = greenDarkA.greenA9; `warn1`: `string` = yellowDark.yellow1; `warn10`: `string` = yellowDark.yellow10; `warn11`: `string` = yellowDark.yellow11; `warn12`: `string` = yellowDark.yellow12; `warn2`: `string` = yellowDark.yellow2; `warn3`: `string` = yellowDark.yellow3; `warn4`: `string` = yellowDark.yellow4; `warn5`: `string` = yellowDark.yellow5; `warn6`: `string` = yellowDark.yellow6; `warn7`: `string` = yellowDark.yellow7; `warn8`: `string` = yellowDark.yellow8; `warn9`: `string` = yellowDark.yellow9; `warnA1`: `string` = yellowDarkA.yellowA1; `warnA10`: `string` = yellowDarkA.yellowA10; `warnA11`: `string` = yellowDarkA.yellowA11; `warnA12`: `string` = yellowDarkA.yellowA12; `warnA2`: `string` = yellowDarkA.yellowA2; `warnA3`: `string` = yellowDarkA.yellowA3; `warnA4`: `string` = yellowDarkA.yellowA4; `warnA5`: `string` = yellowDarkA.yellowA5; `warnA6`: `string` = yellowDarkA.yellowA6; `warnA7`: `string` = yellowDarkA.yellowA7; `warnA8`: `string` = yellowDarkA.yellowA8; `warnA9`: `string` = yellowDarkA.yellowA9 }  }, ``""``\>

#### Defined in

[packages/gboost-ui/src/stitches.config.ts:443](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-ui/src/stitches.config.ts#L443)

___

### theme

• **theme**: `string` & {} & { `colors`: { `error1`: `Token`<``"error1"``, `string`, ``"colors"``, ``""``\> = red.red1; `error10`: `Token`<``"error10"``, `string`, ``"colors"``, ``""``\> = red.red10; `error11`: `Token`<``"error11"``, `string`, ``"colors"``, ``""``\> = red.red11; `error12`: `Token`<``"error12"``, `string`, ``"colors"``, ``""``\> = red.red12; `error2`: `Token`<``"error2"``, `string`, ``"colors"``, ``""``\> = red.red2; `error3`: `Token`<``"error3"``, `string`, ``"colors"``, ``""``\> = red.red3; `error4`: `Token`<``"error4"``, `string`, ``"colors"``, ``""``\> = red.red4; `error5`: `Token`<``"error5"``, `string`, ``"colors"``, ``""``\> = red.red5; `error6`: `Token`<``"error6"``, `string`, ``"colors"``, ``""``\> = red.red6; `error7`: `Token`<``"error7"``, `string`, ``"colors"``, ``""``\> = red.red7; `error8`: `Token`<``"error8"``, `string`, ``"colors"``, ``""``\> = red.red8; `error9`: `Token`<``"error9"``, `string`, ``"colors"``, ``""``\> = red.red9; `errorA1`: `Token`<``"errorA1"``, `string`, ``"colors"``, ``""``\> = redA.redA1; `errorA10`: `Token`<``"errorA10"``, `string`, ``"colors"``, ``""``\> = redA.redA10; `errorA11`: `Token`<``"errorA11"``, `string`, ``"colors"``, ``""``\> = redA.redA11; `errorA12`: `Token`<``"errorA12"``, `string`, ``"colors"``, ``""``\> = redA.redA12; `errorA2`: `Token`<``"errorA2"``, `string`, ``"colors"``, ``""``\> = redA.redA2; `errorA3`: `Token`<``"errorA3"``, `string`, ``"colors"``, ``""``\> = redA.redA3; `errorA4`: `Token`<``"errorA4"``, `string`, ``"colors"``, ``""``\> = redA.redA4; `errorA5`: `Token`<``"errorA5"``, `string`, ``"colors"``, ``""``\> = redA.redA5; `errorA6`: `Token`<``"errorA6"``, `string`, ``"colors"``, ``""``\> = redA.redA6; `errorA7`: `Token`<``"errorA7"``, `string`, ``"colors"``, ``""``\> = redA.redA7; `errorA8`: `Token`<``"errorA8"``, `string`, ``"colors"``, ``""``\> = redA.redA8; `errorA9`: `Token`<``"errorA9"``, `string`, ``"colors"``, ``""``\> = redA.redA9; `gray1`: `Token`<``"gray1"``, `string`, ``"colors"``, ``""``\> = sage.sage1; `gray10`: `Token`<``"gray10"``, `string`, ``"colors"``, ``""``\> = sage.sage10; `gray11`: `Token`<``"gray11"``, `string`, ``"colors"``, ``""``\> = sage.sage11; `gray12`: `Token`<``"gray12"``, `string`, ``"colors"``, ``""``\> = sage.sage12; `gray2`: `Token`<``"gray2"``, `string`, ``"colors"``, ``""``\> = sage.sage2; `gray3`: `Token`<``"gray3"``, `string`, ``"colors"``, ``""``\> = sage.sage3; `gray4`: `Token`<``"gray4"``, `string`, ``"colors"``, ``""``\> = sage.sage4; `gray5`: `Token`<``"gray5"``, `string`, ``"colors"``, ``""``\> = sage.sage5; `gray6`: `Token`<``"gray6"``, `string`, ``"colors"``, ``""``\> = sage.sage6; `gray7`: `Token`<``"gray7"``, `string`, ``"colors"``, ``""``\> = sage.sage7; `gray8`: `Token`<``"gray8"``, `string`, ``"colors"``, ``""``\> = sage.sage8; `gray9`: `Token`<``"gray9"``, `string`, ``"colors"``, ``""``\> = sage.sage9; `grayA1`: `Token`<``"grayA1"``, `string`, ``"colors"``, ``""``\> = sageA.sageA1; `grayA10`: `Token`<``"grayA10"``, `string`, ``"colors"``, ``""``\> = sageA.sageA10; `grayA11`: `Token`<``"grayA11"``, `string`, ``"colors"``, ``""``\> = sageA.sageA11; `grayA12`: `Token`<``"grayA12"``, `string`, ``"colors"``, ``""``\> = sageA.sageA12; `grayA2`: `Token`<``"grayA2"``, `string`, ``"colors"``, ``""``\> = sageA.sageA2; `grayA3`: `Token`<``"grayA3"``, `string`, ``"colors"``, ``""``\> = sageA.sageA3; `grayA4`: `Token`<``"grayA4"``, `string`, ``"colors"``, ``""``\> = sageA.sageA4; `grayA5`: `Token`<``"grayA5"``, `string`, ``"colors"``, ``""``\> = sageA.sageA5; `grayA6`: `Token`<``"grayA6"``, `string`, ``"colors"``, ``""``\> = sageA.sageA6; `grayA7`: `Token`<``"grayA7"``, `string`, ``"colors"``, ``""``\> = sageA.sageA7; `grayA8`: `Token`<``"grayA8"``, `string`, ``"colors"``, ``""``\> = sageA.sageA8; `grayA9`: `Token`<``"grayA9"``, `string`, ``"colors"``, ``""``\> = sageA.sageA9; `info1`: `Token`<``"info1"``, `string`, ``"colors"``, ``""``\> = blue.blue1; `info10`: `Token`<``"info10"``, `string`, ``"colors"``, ``""``\> = blue.blue10; `info11`: `Token`<``"info11"``, `string`, ``"colors"``, ``""``\> = blue.blue11; `info12`: `Token`<``"info12"``, `string`, ``"colors"``, ``""``\> = blue.blue12; `info2`: `Token`<``"info2"``, `string`, ``"colors"``, ``""``\> = blue.blue2; `info3`: `Token`<``"info3"``, `string`, ``"colors"``, ``""``\> = blue.blue3; `info4`: `Token`<``"info4"``, `string`, ``"colors"``, ``""``\> = blue.blue4; `info5`: `Token`<``"info5"``, `string`, ``"colors"``, ``""``\> = blue.blue5; `info6`: `Token`<``"info6"``, `string`, ``"colors"``, ``""``\> = blue.blue6; `info7`: `Token`<``"info7"``, `string`, ``"colors"``, ``""``\> = blue.blue7; `info8`: `Token`<``"info8"``, `string`, ``"colors"``, ``""``\> = blue.blue8; `info9`: `Token`<``"info9"``, `string`, ``"colors"``, ``""``\> = blue.blue9; `infoA1`: `Token`<``"infoA1"``, `string`, ``"colors"``, ``""``\> = blueA.blueA1; `infoA10`: `Token`<``"infoA10"``, `string`, ``"colors"``, ``""``\> = blueA.blueA10; `infoA11`: `Token`<``"infoA11"``, `string`, ``"colors"``, ``""``\> = blueA.blueA11; `infoA12`: `Token`<``"infoA12"``, `string`, ``"colors"``, ``""``\> = blueA.blueA12; `infoA2`: `Token`<``"infoA2"``, `string`, ``"colors"``, ``""``\> = blueA.blueA2; `infoA3`: `Token`<``"infoA3"``, `string`, ``"colors"``, ``""``\> = blueA.blueA3; `infoA4`: `Token`<``"infoA4"``, `string`, ``"colors"``, ``""``\> = blueA.blueA4; `infoA5`: `Token`<``"infoA5"``, `string`, ``"colors"``, ``""``\> = blueA.blueA5; `infoA6`: `Token`<``"infoA6"``, `string`, ``"colors"``, ``""``\> = blueA.blueA6; `infoA7`: `Token`<``"infoA7"``, `string`, ``"colors"``, ``""``\> = blueA.blueA7; `infoA8`: `Token`<``"infoA8"``, `string`, ``"colors"``, ``""``\> = blueA.blueA8; `infoA9`: `Token`<``"infoA9"``, `string`, ``"colors"``, ``""``\> = blueA.blueA9; `primary1`: `Token`<``"primary1"``, `string`, ``"colors"``, ``""``\> = green.green1; `primary10`: `Token`<``"primary10"``, `string`, ``"colors"``, ``""``\> = green.green10; `primary11`: `Token`<``"primary11"``, `string`, ``"colors"``, ``""``\> = green.green11; `primary12`: `Token`<``"primary12"``, `string`, ``"colors"``, ``""``\> = green.green12; `primary2`: `Token`<``"primary2"``, `string`, ``"colors"``, ``""``\> = green.green2; `primary3`: `Token`<``"primary3"``, `string`, ``"colors"``, ``""``\> = green.green3; `primary4`: `Token`<``"primary4"``, `string`, ``"colors"``, ``""``\> = green.green4; `primary5`: `Token`<``"primary5"``, `string`, ``"colors"``, ``""``\> = green.green5; `primary6`: `Token`<``"primary6"``, `string`, ``"colors"``, ``""``\> = green.green6; `primary7`: `Token`<``"primary7"``, `string`, ``"colors"``, ``""``\> = green.green7; `primary8`: `Token`<``"primary8"``, `string`, ``"colors"``, ``""``\> = green.green8; `primary9`: `Token`<``"primary9"``, `string`, ``"colors"``, ``""``\> = green.green9; `primaryA1`: `Token`<``"primaryA1"``, `string`, ``"colors"``, ``""``\> = greenA.greenA1; `primaryA10`: `Token`<``"primaryA10"``, `string`, ``"colors"``, ``""``\> = greenA.greenA10; `primaryA11`: `Token`<``"primaryA11"``, `string`, ``"colors"``, ``""``\> = greenA.greenA11; `primaryA12`: `Token`<``"primaryA12"``, `string`, ``"colors"``, ``""``\> = greenA.greenA12; `primaryA2`: `Token`<``"primaryA2"``, `string`, ``"colors"``, ``""``\> = greenA.greenA2; `primaryA3`: `Token`<``"primaryA3"``, `string`, ``"colors"``, ``""``\> = greenA.greenA3; `primaryA4`: `Token`<``"primaryA4"``, `string`, ``"colors"``, ``""``\> = greenA.greenA4; `primaryA5`: `Token`<``"primaryA5"``, `string`, ``"colors"``, ``""``\> = greenA.greenA5; `primaryA6`: `Token`<``"primaryA6"``, `string`, ``"colors"``, ``""``\> = greenA.greenA6; `primaryA7`: `Token`<``"primaryA7"``, `string`, ``"colors"``, ``""``\> = greenA.greenA7; `primaryA8`: `Token`<``"primaryA8"``, `string`, ``"colors"``, ``""``\> = greenA.greenA8; `primaryA9`: `Token`<``"primaryA9"``, `string`, ``"colors"``, ``""``\> = greenA.greenA9; `secondary1`: `Token`<``"secondary1"``, `string`, ``"colors"``, ``""``\> = blue.blue1; `secondary10`: `Token`<``"secondary10"``, `string`, ``"colors"``, ``""``\> = blue.blue10; `secondary11`: `Token`<``"secondary11"``, `string`, ``"colors"``, ``""``\> = blue.blue11; `secondary12`: `Token`<``"secondary12"``, `string`, ``"colors"``, ``""``\> = blue.blue12; `secondary2`: `Token`<``"secondary2"``, `string`, ``"colors"``, ``""``\> = blue.blue2; `secondary3`: `Token`<``"secondary3"``, `string`, ``"colors"``, ``""``\> = blue.blue3; `secondary4`: `Token`<``"secondary4"``, `string`, ``"colors"``, ``""``\> = blue.blue4; `secondary5`: `Token`<``"secondary5"``, `string`, ``"colors"``, ``""``\> = blue.blue5; `secondary6`: `Token`<``"secondary6"``, `string`, ``"colors"``, ``""``\> = blue.blue6; `secondary7`: `Token`<``"secondary7"``, `string`, ``"colors"``, ``""``\> = blue.blue7; `secondary8`: `Token`<``"secondary8"``, `string`, ``"colors"``, ``""``\> = blue.blue8; `secondary9`: `Token`<``"secondary9"``, `string`, ``"colors"``, ``""``\> = blue.blue9; `secondaryA1`: `Token`<``"secondaryA1"``, `string`, ``"colors"``, ``""``\> = blueA.blueA1; `secondaryA10`: `Token`<``"secondaryA10"``, `string`, ``"colors"``, ``""``\> = blueA.blueA10; `secondaryA11`: `Token`<``"secondaryA11"``, `string`, ``"colors"``, ``""``\> = blueA.blueA11; `secondaryA12`: `Token`<``"secondaryA12"``, `string`, ``"colors"``, ``""``\> = blueA.blueA12; `secondaryA2`: `Token`<``"secondaryA2"``, `string`, ``"colors"``, ``""``\> = blueA.blueA2; `secondaryA3`: `Token`<``"secondaryA3"``, `string`, ``"colors"``, ``""``\> = blueA.blueA3; `secondaryA4`: `Token`<``"secondaryA4"``, `string`, ``"colors"``, ``""``\> = blueA.blueA4; `secondaryA5`: `Token`<``"secondaryA5"``, `string`, ``"colors"``, ``""``\> = blueA.blueA5; `secondaryA6`: `Token`<``"secondaryA6"``, `string`, ``"colors"``, ``""``\> = blueA.blueA6; `secondaryA7`: `Token`<``"secondaryA7"``, `string`, ``"colors"``, ``""``\> = blueA.blueA7; `secondaryA8`: `Token`<``"secondaryA8"``, `string`, ``"colors"``, ``""``\> = blueA.blueA8; `secondaryA9`: `Token`<``"secondaryA9"``, `string`, ``"colors"``, ``""``\> = blueA.blueA9; `success1`: `Token`<``"success1"``, `string`, ``"colors"``, ``""``\> = green.green1; `success10`: `Token`<``"success10"``, `string`, ``"colors"``, ``""``\> = green.green10; `success11`: `Token`<``"success11"``, `string`, ``"colors"``, ``""``\> = green.green11; `success12`: `Token`<``"success12"``, `string`, ``"colors"``, ``""``\> = green.green12; `success2`: `Token`<``"success2"``, `string`, ``"colors"``, ``""``\> = green.green2; `success3`: `Token`<``"success3"``, `string`, ``"colors"``, ``""``\> = green.green3; `success4`: `Token`<``"success4"``, `string`, ``"colors"``, ``""``\> = green.green4; `success5`: `Token`<``"success5"``, `string`, ``"colors"``, ``""``\> = green.green5; `success6`: `Token`<``"success6"``, `string`, ``"colors"``, ``""``\> = green.green6; `success7`: `Token`<``"success7"``, `string`, ``"colors"``, ``""``\> = green.green7; `success8`: `Token`<``"success8"``, `string`, ``"colors"``, ``""``\> = green.green8; `success9`: `Token`<``"success9"``, `string`, ``"colors"``, ``""``\> = green.green9; `successA1`: `Token`<``"successA1"``, `string`, ``"colors"``, ``""``\> = greenA.greenA1; `successA10`: `Token`<``"successA10"``, `string`, ``"colors"``, ``""``\> = greenA.greenA10; `successA11`: `Token`<``"successA11"``, `string`, ``"colors"``, ``""``\> = greenA.greenA11; `successA12`: `Token`<``"successA12"``, `string`, ``"colors"``, ``""``\> = greenA.greenA12; `successA2`: `Token`<``"successA2"``, `string`, ``"colors"``, ``""``\> = greenA.greenA2; `successA3`: `Token`<``"successA3"``, `string`, ``"colors"``, ``""``\> = greenA.greenA3; `successA4`: `Token`<``"successA4"``, `string`, ``"colors"``, ``""``\> = greenA.greenA4; `successA5`: `Token`<``"successA5"``, `string`, ``"colors"``, ``""``\> = greenA.greenA5; `successA6`: `Token`<``"successA6"``, `string`, ``"colors"``, ``""``\> = greenA.greenA6; `successA7`: `Token`<``"successA7"``, `string`, ``"colors"``, ``""``\> = greenA.greenA7; `successA8`: `Token`<``"successA8"``, `string`, ``"colors"``, ``""``\> = greenA.greenA8; `successA9`: `Token`<``"successA9"``, `string`, ``"colors"``, ``""``\> = greenA.greenA9; `warn1`: `Token`<``"warn1"``, `string`, ``"colors"``, ``""``\> = yellow.yellow1; `warn10`: `Token`<``"warn10"``, `string`, ``"colors"``, ``""``\> = yellow.yellow10; `warn11`: `Token`<``"warn11"``, `string`, ``"colors"``, ``""``\> = yellow.yellow11; `warn12`: `Token`<``"warn12"``, `string`, ``"colors"``, ``""``\> = yellow.yellow12; `warn2`: `Token`<``"warn2"``, `string`, ``"colors"``, ``""``\> = yellow.yellow2; `warn3`: `Token`<``"warn3"``, `string`, ``"colors"``, ``""``\> = yellow.yellow3; `warn4`: `Token`<``"warn4"``, `string`, ``"colors"``, ``""``\> = yellow.yellow4; `warn5`: `Token`<``"warn5"``, `string`, ``"colors"``, ``""``\> = yellow.yellow5; `warn6`: `Token`<``"warn6"``, `string`, ``"colors"``, ``""``\> = yellow.yellow6; `warn7`: `Token`<``"warn7"``, `string`, ``"colors"``, ``""``\> = yellow.yellow7; `warn8`: `Token`<``"warn8"``, `string`, ``"colors"``, ``""``\> = yellow.yellow8; `warn9`: `Token`<``"warn9"``, `string`, ``"colors"``, ``""``\> = yellow.yellow9; `warnA1`: `Token`<``"warnA1"``, `string`, ``"colors"``, ``""``\> = yellowA.yellowA1; `warnA10`: `Token`<``"warnA10"``, `string`, ``"colors"``, ``""``\> = yellowA.yellowA10; `warnA11`: `Token`<``"warnA11"``, `string`, ``"colors"``, ``""``\> = yellowA.yellowA11; `warnA12`: `Token`<``"warnA12"``, `string`, ``"colors"``, ``""``\> = yellowA.yellowA12; `warnA2`: `Token`<``"warnA2"``, `string`, ``"colors"``, ``""``\> = yellowA.yellowA2; `warnA3`: `Token`<``"warnA3"``, `string`, ``"colors"``, ``""``\> = yellowA.yellowA3; `warnA4`: `Token`<``"warnA4"``, `string`, ``"colors"``, ``""``\> = yellowA.yellowA4; `warnA5`: `Token`<``"warnA5"``, `string`, ``"colors"``, ``""``\> = yellowA.yellowA5; `warnA6`: `Token`<``"warnA6"``, `string`, ``"colors"``, ``""``\> = yellowA.yellowA6; `warnA7`: `Token`<``"warnA7"``, `string`, ``"colors"``, ``""``\> = yellowA.yellowA7; `warnA8`: `Token`<``"warnA8"``, `string`, ``"colors"``, ``""``\> = yellowA.yellowA8; `warnA9`: `Token`<``"warnA9"``, `string`, ``"colors"``, ``""``\> = yellowA.yellowA9 } ; `fontSizes`: { `1`: `Token`<``"1"``, `string`, ``"fontSizes"``, ``""``\> = "12px"; `2`: `Token`<``"2"``, `string`, ``"fontSizes"``, ``""``\> = "13px"; `3`: `Token`<``"3"``, `string`, ``"fontSizes"``, ``""``\> = "15px"; `4`: `Token`<``"4"``, `string`, ``"fontSizes"``, ``""``\> = "17px"; `5`: `Token`<``"5"``, `string`, ``"fontSizes"``, ``""``\> = "19px"; `6`: `Token`<``"6"``, `string`, ``"fontSizes"``, ``""``\> = "21px"; `7`: `Token`<``"7"``, `string`, ``"fontSizes"``, ``""``\> = "27px"; `8`: `Token`<``"8"``, `string`, ``"fontSizes"``, ``""``\> = "35px"; `9`: `Token`<``"9"``, `string`, ``"fontSizes"``, ``""``\> = "59px" } ; `fonts`: { `main`: `Token`<``"main"``, `string`, ``"fonts"``, ``""``\> = "'InterVariable'" } ; `radii`: { `1`: `Token`<``"1"``, `string`, ``"radii"``, ``""``\> = "4px"; `2`: `Token`<``"2"``, `string`, ``"radii"``, ``""``\> = "6px"; `3`: `Token`<``"3"``, `string`, ``"radii"``, ``""``\> = "8px"; `4`: `Token`<``"4"``, `string`, ``"radii"``, ``""``\> = "12px"; `pill`: `Token`<``"pill"``, `string`, ``"radii"``, ``""``\> = "9999px"; `round`: `Token`<``"round"``, `string`, ``"radii"``, ``""``\> = "50%" } ; `sizes`: { `1`: `Token`<``"1"``, `string`, ``"sizes"``, ``""``\> = "5px"; `2`: `Token`<``"2"``, `string`, ``"sizes"``, ``""``\> = "10px"; `3`: `Token`<``"3"``, `string`, ``"sizes"``, ``""``\> = "15px"; `4`: `Token`<``"4"``, `string`, ``"sizes"``, ``""``\> = "20px"; `5`: `Token`<``"5"``, `string`, ``"sizes"``, ``""``\> = "25px"; `6`: `Token`<``"6"``, `string`, ``"sizes"``, ``""``\> = "35px"; `7`: `Token`<``"7"``, `string`, ``"sizes"``, ``""``\> = "45px"; `8`: `Token`<``"8"``, `string`, ``"sizes"``, ``""``\> = "65px"; `9`: `Token`<``"9"``, `string`, ``"sizes"``, ``""``\> = "80px" } ; `space`: { `1`: `Token`<``"1"``, `string`, ``"space"``, ``""``\> = "5px"; `2`: `Token`<``"2"``, `string`, ``"space"``, ``""``\> = "10px"; `3`: `Token`<``"3"``, `string`, ``"space"``, ``""``\> = "15px"; `4`: `Token`<``"4"``, `string`, ``"space"``, ``""``\> = "20px"; `5`: `Token`<``"5"``, `string`, ``"space"``, ``""``\> = "25px"; `6`: `Token`<``"6"``, `string`, ``"space"``, ``""``\> = "35px"; `7`: `Token`<``"7"``, `string`, ``"space"``, ``""``\> = "45px"; `8`: `Token`<``"8"``, `string`, ``"space"``, ``""``\> = "65px"; `9`: `Token`<``"9"``, `string`, ``"space"``, ``""``\> = "80px" } ; `transitions`: { `fadeIn`: `Token`<``"fadeIn"``, `string`, ``"transitions"``, ``""``\> = "opacity 0.3s ease, visibility 0.3s ease"; `sidebar`: `Token`<``"sidebar"``, `string`, ``"transitions"``, ``""``\> = "width 225ms ease" } ; `zIndices`: { `1`: `Token`<``"1"``, `string`, ``"zIndices"``, ``""``\> = "100"; `2`: `Token`<``"2"``, `string`, ``"zIndices"``, ``""``\> = "200"; `3`: `Token`<``"3"``, `string`, ``"zIndices"``, ``""``\> = "300"; `4`: `Token`<``"4"``, `string`, ``"zIndices"``, ``""``\> = "400"; `max`: `Token`<``"max"``, `string`, ``"zIndices"``, ``""``\> = "999" }  }

## Functions

### Authenticator

▸ **Authenticator**(`props`): `ReactElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `AuthenticatorProps` |

#### Returns

`ReactElement`

#### Defined in

[packages/gboost-ui/src/Authenticator.tsx:31](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-ui/src/Authenticator.tsx#L31)

___

### BreakpointsProvider

▸ **BreakpointsProvider**(`props`): `ReactElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `BreakpointProviderProps` |

#### Returns

`ReactElement`

#### Defined in

[packages/gboost-ui/src/context/BreakpointsContext.tsx:15](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-ui/src/context/BreakpointsContext.tsx#L15)

___

### Layout

▸ **Layout**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `LayoutProps` |

#### Returns

`Element`

#### Defined in

[packages/gboost-ui/src/Layout/Layout.tsx:22](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-ui/src/Layout/Layout.tsx#L22)

___

### NotificationsProvider

▸ **NotificationsProvider**(`props`): `ReactElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `NotificationsProviderProps` |

#### Returns

`ReactElement`

#### Defined in

[packages/gboost-ui/src/context/NotificationsContext.tsx:39](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-ui/src/context/NotificationsContext.tsx#L39)

___

### UserManagement

▸ **UserManagement**(`props`): `ReactElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `UserManagementProps` |

#### Returns

`ReactElement`

#### Defined in

[packages/gboost-ui/src/UserManagement/UserManagement.tsx:25](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-ui/src/UserManagement/UserManagement.tsx#L25)

___

### createTheme

▸ **createTheme**<`Argument0`, `Argument1`\>(`nameOrScalesArg0`, `nameOrScalesArg1?`): `string` & {} & `Argument0` extends `string` ? `ThemeTokens`<`Argument1`, ``""``\> : `ThemeTokens`<`Argument0`, ``""``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Argument0` | extends `string` \| { `colors`: `undefined` \| { `error1`: `undefined` \| `string` \| `number` \| `boolean` = red.red1; `error10`: `undefined` \| `string` \| `number` \| `boolean` = red.red10; `error11`: `undefined` \| `string` \| `number` \| `boolean` = red.red11; `error12`: `undefined` \| `string` \| `number` \| `boolean` = red.red12; `error2`: `undefined` \| `string` \| `number` \| `boolean` = red.red2; `error3`: `undefined` \| `string` \| `number` \| `boolean` = red.red3; `error4`: `undefined` \| `string` \| `number` \| `boolean` = red.red4; `error5`: `undefined` \| `string` \| `number` \| `boolean` = red.red5; `error6`: `undefined` \| `string` \| `number` \| `boolean` = red.red6; `error7`: `undefined` \| `string` \| `number` \| `boolean` = red.red7; `error8`: `undefined` \| `string` \| `number` \| `boolean` = red.red8; `error9`: `undefined` \| `string` \| `number` \| `boolean` = red.red9; `errorA1`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA1; `errorA10`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA10; `errorA11`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA11; `errorA12`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA12; `errorA2`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA2; `errorA3`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA3; `errorA4`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA4; `errorA5`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA5; `errorA6`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA6; `errorA7`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA7; `errorA8`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA8; `errorA9`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA9; `gray1`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage1; `gray10`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage10; `gray11`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage11; `gray12`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage12; `gray2`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage2; `gray3`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage3; `gray4`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage4; `gray5`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage5; `gray6`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage6; `gray7`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage7; `gray8`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage8; `gray9`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage9; `grayA1`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA1; `grayA10`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA10; `grayA11`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA11; `grayA12`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA12; `grayA2`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA2; `grayA3`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA3; `grayA4`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA4; `grayA5`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA5; `grayA6`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA6; `grayA7`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA7; `grayA8`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA8; `grayA9`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA9; `info1`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue1; `info10`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue10; `info11`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue11; `info12`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue12; `info2`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue2; `info3`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue3; `info4`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue4; `info5`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue5; `info6`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue6; `info7`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue7; `info8`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue8; `info9`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue9; `infoA1`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA1; `infoA10`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA10; `infoA11`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA11; `infoA12`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA12; `infoA2`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA2; `infoA3`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA3; `infoA4`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA4; `infoA5`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA5; `infoA6`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA6; `infoA7`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA7; `infoA8`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA8; `infoA9`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA9; `primary1`: `undefined` \| `string` \| `number` \| `boolean` = green.green1; `primary10`: `undefined` \| `string` \| `number` \| `boolean` = green.green10; `primary11`: `undefined` \| `string` \| `number` \| `boolean` = green.green11; `primary12`: `undefined` \| `string` \| `number` \| `boolean` = green.green12; `primary2`: `undefined` \| `string` \| `number` \| `boolean` = green.green2; `primary3`: `undefined` \| `string` \| `number` \| `boolean` = green.green3; `primary4`: `undefined` \| `string` \| `number` \| `boolean` = green.green4; `primary5`: `undefined` \| `string` \| `number` \| `boolean` = green.green5; `primary6`: `undefined` \| `string` \| `number` \| `boolean` = green.green6; `primary7`: `undefined` \| `string` \| `number` \| `boolean` = green.green7; `primary8`: `undefined` \| `string` \| `number` \| `boolean` = green.green8; `primary9`: `undefined` \| `string` \| `number` \| `boolean` = green.green9; `primaryA1`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA1; `primaryA10`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA10; `primaryA11`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA11; `primaryA12`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA12; `primaryA2`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA2; `primaryA3`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA3; `primaryA4`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA4; `primaryA5`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA5; `primaryA6`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA6; `primaryA7`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA7; `primaryA8`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA8; `primaryA9`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA9; `secondary1`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue1; `secondary10`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue10; `secondary11`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue11; `secondary12`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue12; `secondary2`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue2; `secondary3`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue3; `secondary4`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue4; `secondary5`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue5; `secondary6`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue6; `secondary7`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue7; `secondary8`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue8; `secondary9`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue9; `secondaryA1`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA1; `secondaryA10`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA10; `secondaryA11`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA11; `secondaryA12`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA12; `secondaryA2`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA2; `secondaryA3`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA3; `secondaryA4`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA4; `secondaryA5`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA5; `secondaryA6`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA6; `secondaryA7`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA7; `secondaryA8`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA8; `secondaryA9`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA9; `success1`: `undefined` \| `string` \| `number` \| `boolean` = green.green1; `success10`: `undefined` \| `string` \| `number` \| `boolean` = green.green10; `success11`: `undefined` \| `string` \| `number` \| `boolean` = green.green11; `success12`: `undefined` \| `string` \| `number` \| `boolean` = green.green12; `success2`: `undefined` \| `string` \| `number` \| `boolean` = green.green2; `success3`: `undefined` \| `string` \| `number` \| `boolean` = green.green3; `success4`: `undefined` \| `string` \| `number` \| `boolean` = green.green4; `success5`: `undefined` \| `string` \| `number` \| `boolean` = green.green5; `success6`: `undefined` \| `string` \| `number` \| `boolean` = green.green6; `success7`: `undefined` \| `string` \| `number` \| `boolean` = green.green7; `success8`: `undefined` \| `string` \| `number` \| `boolean` = green.green8; `success9`: `undefined` \| `string` \| `number` \| `boolean` = green.green9; `successA1`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA1; `successA10`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA10; `successA11`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA11; `successA12`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA12; `successA2`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA2; `successA3`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA3; `successA4`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA4; `successA5`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA5; `successA6`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA6; `successA7`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA7; `successA8`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA8; `successA9`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA9; `warn1`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow1; `warn10`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow10; `warn11`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow11; `warn12`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow12; `warn2`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow2; `warn3`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow3; `warn4`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow4; `warn5`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow5; `warn6`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow6; `warn7`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow7; `warn8`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow8; `warn9`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow9; `warnA1`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA1; `warnA10`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA10; `warnA11`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA11; `warnA12`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA12; `warnA2`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA2; `warnA3`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA3; `warnA4`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA4; `warnA5`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA5; `warnA6`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA6; `warnA7`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA7; `warnA8`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA8; `warnA9`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA9 } ; `fontSizes`: `undefined` \| { `1`: `undefined` \| `string` \| `number` \| `boolean` = "12px"; `2`: `undefined` \| `string` \| `number` \| `boolean` = "13px"; `3`: `undefined` \| `string` \| `number` \| `boolean` = "15px"; `4`: `undefined` \| `string` \| `number` \| `boolean` = "17px"; `5`: `undefined` \| `string` \| `number` \| `boolean` = "19px"; `6`: `undefined` \| `string` \| `number` \| `boolean` = "21px"; `7`: `undefined` \| `string` \| `number` \| `boolean` = "27px"; `8`: `undefined` \| `string` \| `number` \| `boolean` = "35px"; `9`: `undefined` \| `string` \| `number` \| `boolean` = "59px" } ; `fonts`: `undefined` \| { `main`: `undefined` \| `string` \| `number` \| `boolean` = "'InterVariable'" } ; `radii`: `undefined` \| { `1`: `undefined` \| `string` \| `number` \| `boolean` = "4px"; `2`: `undefined` \| `string` \| `number` \| `boolean` = "6px"; `3`: `undefined` \| `string` \| `number` \| `boolean` = "8px"; `4`: `undefined` \| `string` \| `number` \| `boolean` = "12px"; `pill`: `undefined` \| `string` \| `number` \| `boolean` = "9999px"; `round`: `undefined` \| `string` \| `number` \| `boolean` = "50%" } ; `sizes`: `undefined` \| { `1`: `undefined` \| `string` \| `number` \| `boolean` = "5px"; `2`: `undefined` \| `string` \| `number` \| `boolean` = "10px"; `3`: `undefined` \| `string` \| `number` \| `boolean` = "15px"; `4`: `undefined` \| `string` \| `number` \| `boolean` = "20px"; `5`: `undefined` \| `string` \| `number` \| `boolean` = "25px"; `6`: `undefined` \| `string` \| `number` \| `boolean` = "35px"; `7`: `undefined` \| `string` \| `number` \| `boolean` = "45px"; `8`: `undefined` \| `string` \| `number` \| `boolean` = "65px"; `9`: `undefined` \| `string` \| `number` \| `boolean` = "80px" } ; `space`: `undefined` \| { `1`: `undefined` \| `string` \| `number` \| `boolean` = "5px"; `2`: `undefined` \| `string` \| `number` \| `boolean` = "10px"; `3`: `undefined` \| `string` \| `number` \| `boolean` = "15px"; `4`: `undefined` \| `string` \| `number` \| `boolean` = "20px"; `5`: `undefined` \| `string` \| `number` \| `boolean` = "25px"; `6`: `undefined` \| `string` \| `number` \| `boolean` = "35px"; `7`: `undefined` \| `string` \| `number` \| `boolean` = "45px"; `8`: `undefined` \| `string` \| `number` \| `boolean` = "65px"; `9`: `undefined` \| `string` \| `number` \| `boolean` = "80px" } ; `transitions`: `undefined` \| { `fadeIn`: `undefined` \| `string` \| `number` \| `boolean` = "opacity 0.3s ease, visibility 0.3s ease"; `sidebar`: `undefined` \| `string` \| `number` \| `boolean` = "width 225ms ease" } ; `zIndices`: `undefined` \| { `1`: `undefined` \| `string` \| `number` \| `boolean` = "100"; `2`: `undefined` \| `string` \| `number` \| `boolean` = "200"; `3`: `undefined` \| `string` \| `number` \| `boolean` = "300"; `4`: `undefined` \| `string` \| `number` \| `boolean` = "400"; `max`: `undefined` \| `string` \| `number` \| `boolean` = "999" }  } & {} |
| `Argument1` | extends `string` \| { `colors`: `undefined` \| { `error1`: `undefined` \| `string` \| `number` \| `boolean` = red.red1; `error10`: `undefined` \| `string` \| `number` \| `boolean` = red.red10; `error11`: `undefined` \| `string` \| `number` \| `boolean` = red.red11; `error12`: `undefined` \| `string` \| `number` \| `boolean` = red.red12; `error2`: `undefined` \| `string` \| `number` \| `boolean` = red.red2; `error3`: `undefined` \| `string` \| `number` \| `boolean` = red.red3; `error4`: `undefined` \| `string` \| `number` \| `boolean` = red.red4; `error5`: `undefined` \| `string` \| `number` \| `boolean` = red.red5; `error6`: `undefined` \| `string` \| `number` \| `boolean` = red.red6; `error7`: `undefined` \| `string` \| `number` \| `boolean` = red.red7; `error8`: `undefined` \| `string` \| `number` \| `boolean` = red.red8; `error9`: `undefined` \| `string` \| `number` \| `boolean` = red.red9; `errorA1`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA1; `errorA10`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA10; `errorA11`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA11; `errorA12`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA12; `errorA2`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA2; `errorA3`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA3; `errorA4`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA4; `errorA5`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA5; `errorA6`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA6; `errorA7`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA7; `errorA8`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA8; `errorA9`: `undefined` \| `string` \| `number` \| `boolean` = redA.redA9; `gray1`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage1; `gray10`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage10; `gray11`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage11; `gray12`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage12; `gray2`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage2; `gray3`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage3; `gray4`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage4; `gray5`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage5; `gray6`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage6; `gray7`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage7; `gray8`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage8; `gray9`: `undefined` \| `string` \| `number` \| `boolean` = sage.sage9; `grayA1`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA1; `grayA10`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA10; `grayA11`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA11; `grayA12`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA12; `grayA2`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA2; `grayA3`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA3; `grayA4`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA4; `grayA5`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA5; `grayA6`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA6; `grayA7`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA7; `grayA8`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA8; `grayA9`: `undefined` \| `string` \| `number` \| `boolean` = sageA.sageA9; `info1`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue1; `info10`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue10; `info11`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue11; `info12`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue12; `info2`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue2; `info3`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue3; `info4`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue4; `info5`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue5; `info6`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue6; `info7`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue7; `info8`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue8; `info9`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue9; `infoA1`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA1; `infoA10`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA10; `infoA11`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA11; `infoA12`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA12; `infoA2`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA2; `infoA3`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA3; `infoA4`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA4; `infoA5`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA5; `infoA6`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA6; `infoA7`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA7; `infoA8`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA8; `infoA9`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA9; `primary1`: `undefined` \| `string` \| `number` \| `boolean` = green.green1; `primary10`: `undefined` \| `string` \| `number` \| `boolean` = green.green10; `primary11`: `undefined` \| `string` \| `number` \| `boolean` = green.green11; `primary12`: `undefined` \| `string` \| `number` \| `boolean` = green.green12; `primary2`: `undefined` \| `string` \| `number` \| `boolean` = green.green2; `primary3`: `undefined` \| `string` \| `number` \| `boolean` = green.green3; `primary4`: `undefined` \| `string` \| `number` \| `boolean` = green.green4; `primary5`: `undefined` \| `string` \| `number` \| `boolean` = green.green5; `primary6`: `undefined` \| `string` \| `number` \| `boolean` = green.green6; `primary7`: `undefined` \| `string` \| `number` \| `boolean` = green.green7; `primary8`: `undefined` \| `string` \| `number` \| `boolean` = green.green8; `primary9`: `undefined` \| `string` \| `number` \| `boolean` = green.green9; `primaryA1`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA1; `primaryA10`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA10; `primaryA11`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA11; `primaryA12`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA12; `primaryA2`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA2; `primaryA3`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA3; `primaryA4`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA4; `primaryA5`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA5; `primaryA6`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA6; `primaryA7`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA7; `primaryA8`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA8; `primaryA9`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA9; `secondary1`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue1; `secondary10`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue10; `secondary11`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue11; `secondary12`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue12; `secondary2`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue2; `secondary3`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue3; `secondary4`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue4; `secondary5`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue5; `secondary6`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue6; `secondary7`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue7; `secondary8`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue8; `secondary9`: `undefined` \| `string` \| `number` \| `boolean` = blue.blue9; `secondaryA1`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA1; `secondaryA10`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA10; `secondaryA11`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA11; `secondaryA12`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA12; `secondaryA2`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA2; `secondaryA3`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA3; `secondaryA4`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA4; `secondaryA5`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA5; `secondaryA6`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA6; `secondaryA7`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA7; `secondaryA8`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA8; `secondaryA9`: `undefined` \| `string` \| `number` \| `boolean` = blueA.blueA9; `success1`: `undefined` \| `string` \| `number` \| `boolean` = green.green1; `success10`: `undefined` \| `string` \| `number` \| `boolean` = green.green10; `success11`: `undefined` \| `string` \| `number` \| `boolean` = green.green11; `success12`: `undefined` \| `string` \| `number` \| `boolean` = green.green12; `success2`: `undefined` \| `string` \| `number` \| `boolean` = green.green2; `success3`: `undefined` \| `string` \| `number` \| `boolean` = green.green3; `success4`: `undefined` \| `string` \| `number` \| `boolean` = green.green4; `success5`: `undefined` \| `string` \| `number` \| `boolean` = green.green5; `success6`: `undefined` \| `string` \| `number` \| `boolean` = green.green6; `success7`: `undefined` \| `string` \| `number` \| `boolean` = green.green7; `success8`: `undefined` \| `string` \| `number` \| `boolean` = green.green8; `success9`: `undefined` \| `string` \| `number` \| `boolean` = green.green9; `successA1`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA1; `successA10`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA10; `successA11`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA11; `successA12`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA12; `successA2`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA2; `successA3`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA3; `successA4`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA4; `successA5`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA5; `successA6`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA6; `successA7`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA7; `successA8`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA8; `successA9`: `undefined` \| `string` \| `number` \| `boolean` = greenA.greenA9; `warn1`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow1; `warn10`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow10; `warn11`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow11; `warn12`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow12; `warn2`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow2; `warn3`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow3; `warn4`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow4; `warn5`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow5; `warn6`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow6; `warn7`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow7; `warn8`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow8; `warn9`: `undefined` \| `string` \| `number` \| `boolean` = yellow.yellow9; `warnA1`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA1; `warnA10`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA10; `warnA11`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA11; `warnA12`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA12; `warnA2`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA2; `warnA3`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA3; `warnA4`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA4; `warnA5`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA5; `warnA6`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA6; `warnA7`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA7; `warnA8`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA8; `warnA9`: `undefined` \| `string` \| `number` \| `boolean` = yellowA.yellowA9 } ; `fontSizes`: `undefined` \| { `1`: `undefined` \| `string` \| `number` \| `boolean` = "12px"; `2`: `undefined` \| `string` \| `number` \| `boolean` = "13px"; `3`: `undefined` \| `string` \| `number` \| `boolean` = "15px"; `4`: `undefined` \| `string` \| `number` \| `boolean` = "17px"; `5`: `undefined` \| `string` \| `number` \| `boolean` = "19px"; `6`: `undefined` \| `string` \| `number` \| `boolean` = "21px"; `7`: `undefined` \| `string` \| `number` \| `boolean` = "27px"; `8`: `undefined` \| `string` \| `number` \| `boolean` = "35px"; `9`: `undefined` \| `string` \| `number` \| `boolean` = "59px" } ; `fonts`: `undefined` \| { `main`: `undefined` \| `string` \| `number` \| `boolean` = "'InterVariable'" } ; `radii`: `undefined` \| { `1`: `undefined` \| `string` \| `number` \| `boolean` = "4px"; `2`: `undefined` \| `string` \| `number` \| `boolean` = "6px"; `3`: `undefined` \| `string` \| `number` \| `boolean` = "8px"; `4`: `undefined` \| `string` \| `number` \| `boolean` = "12px"; `pill`: `undefined` \| `string` \| `number` \| `boolean` = "9999px"; `round`: `undefined` \| `string` \| `number` \| `boolean` = "50%" } ; `sizes`: `undefined` \| { `1`: `undefined` \| `string` \| `number` \| `boolean` = "5px"; `2`: `undefined` \| `string` \| `number` \| `boolean` = "10px"; `3`: `undefined` \| `string` \| `number` \| `boolean` = "15px"; `4`: `undefined` \| `string` \| `number` \| `boolean` = "20px"; `5`: `undefined` \| `string` \| `number` \| `boolean` = "25px"; `6`: `undefined` \| `string` \| `number` \| `boolean` = "35px"; `7`: `undefined` \| `string` \| `number` \| `boolean` = "45px"; `8`: `undefined` \| `string` \| `number` \| `boolean` = "65px"; `9`: `undefined` \| `string` \| `number` \| `boolean` = "80px" } ; `space`: `undefined` \| { `1`: `undefined` \| `string` \| `number` \| `boolean` = "5px"; `2`: `undefined` \| `string` \| `number` \| `boolean` = "10px"; `3`: `undefined` \| `string` \| `number` \| `boolean` = "15px"; `4`: `undefined` \| `string` \| `number` \| `boolean` = "20px"; `5`: `undefined` \| `string` \| `number` \| `boolean` = "25px"; `6`: `undefined` \| `string` \| `number` \| `boolean` = "35px"; `7`: `undefined` \| `string` \| `number` \| `boolean` = "45px"; `8`: `undefined` \| `string` \| `number` \| `boolean` = "65px"; `9`: `undefined` \| `string` \| `number` \| `boolean` = "80px" } ; `transitions`: `undefined` \| { `fadeIn`: `undefined` \| `string` \| `number` \| `boolean` = "opacity 0.3s ease, visibility 0.3s ease"; `sidebar`: `undefined` \| `string` \| `number` \| `boolean` = "width 225ms ease" } ; `zIndices`: `undefined` \| { `1`: `undefined` \| `string` \| `number` \| `boolean` = "100"; `2`: `undefined` \| `string` \| `number` \| `boolean` = "200"; `3`: `undefined` \| `string` \| `number` \| `boolean` = "300"; `4`: `undefined` \| `string` \| `number` \| `boolean` = "400"; `max`: `undefined` \| `string` \| `number` \| `boolean` = "999" }  } & {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrScalesArg0` | `Argument0` |
| `nameOrScalesArg1?` | `Argument1` |

#### Returns

`string` & {} & `Argument0` extends `string` ? `ThemeTokens`<`Argument1`, ``""``\> : `ThemeTokens`<`Argument0`, ``""``\>

#### Defined in

node_modules/.pnpm/@stitches+react@1.2.6_react@17.0.2/node_modules/@stitches/react/types/stitches.d.ts:68

___

### css

▸ **css**<`Composers`, `CSS`\>(...`composers`): `CssComponent`<`StyledComponentType`<`Composers`\>, `StyledComponentProps`<`Composers`\>, `Object`, `CSS`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Composers` | extends (`string` \| `JSXElementConstructor`<`any`\> \| `Function` \| `ExoticComponent`<`any`\> \| { `[name: string]`: `unknown`;  })[] |
| `CSS` | `CSS`<`Object`, `Object`, `DefaultThemeMap`, `Object`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...composers` | { [K in string \| number \| symbol]: Composers[K] extends string \| JSXElementConstructor<any\> \| Function \| ExoticComponent<any\> ? any[any] : RemoveIndex<CSS\> & Object & CSS & { [K2 in string \| number \| symbol]: K2 extends "compoundVariants" \| "defaultVariants" \| "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown } } |

#### Returns

`CssComponent`<`StyledComponentType`<`Composers`\>, `StyledComponentProps`<`Composers`\>, `Object`, `CSS`\>

#### Defined in

node_modules/.pnpm/@stitches+react@1.2.6_react@17.0.2/node_modules/@stitches/react/types/stitches.d.ts:135

___

### getAmplifyTheme

▸ **getAmplifyTheme**(`t`): `ReturnType`<typeof `createTheme`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `StitchesTheme` |

#### Returns

`ReturnType`<typeof `createTheme`\>

#### Defined in

[packages/gboost-ui/src/amplifyTheme.ts:21](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-ui/src/amplifyTheme.ts#L21)

___

### getCssText

▸ **getCssText**(): `string`

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@stitches+react@1.2.6_react@17.0.2/node_modules/@stitches/react/types/stitches.d.ts:132

___

### globalCss

▸ **globalCss**<`Styles`\>(...`styles`): () => `string`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Styles` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...styles` | {} & { [K in string \| number \| symbol]: K extends "@import" ? string \| string[] : K extends "@font-face" ? FontFace \| FontFace[] : K extends \`@keyframes ${string}\` ? Object : K extends \`@property ${string}\` ? Property : CSS<Object, Object, DefaultThemeMap, Object\> }[] |

#### Returns

`fn`

▸ (): `string`

##### Returns

`string`

#### Defined in

node_modules/.pnpm/@stitches+react@1.2.6_react@17.0.2/node_modules/@stitches/react/types/stitches.d.ts:30

___

### globalStyles

▸ **globalStyles**(): `string`

#### Returns

`string`

#### Defined in

[packages/gboost-ui/src/stitches.config.ts:629](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-ui/src/stitches.config.ts#L629)

___

### keyframes

▸ **keyframes**(`style`): () => `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | `Object` |

#### Returns

`fn`

▸ (): `string`

##### Returns

`string`

#### Defined in

node_modules/.pnpm/@stitches+react@1.2.6_react@17.0.2/node_modules/@stitches/react/types/stitches.d.ts:60

___

### styled

▸ **styled**<`Type`, `Composers`, `CSS`\>(`type`, ...`composers`): `StyledComponent`<`Type`, `StyledComponentProps`<`Composers`\>, `Object`, `CSS`<`Object`, `Object`, `DefaultThemeMap`, `Object`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends `Function` \| keyof `IntrinsicElements` \| `ComponentType`<`any`\> |
| `Composers` | extends (`string` \| `Function` \| `ComponentType`<`any`\> \| { `[name: string]`: `unknown`;  })[] |
| `CSS` | `CSS`<`Object`, `Object`, `DefaultThemeMap`, `Object`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Type` |
| `...composers` | { [K in string \| number \| symbol]: Composers[K] extends string \| Function \| ComponentType<any\> ? any[any] : RemoveIndex<CSS\> & Object & CSS & { [K2 in string \| number \| symbol]: K2 extends "compoundVariants" \| "defaultVariants" \| "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown } } |

#### Returns

`StyledComponent`<`Type`, `StyledComponentProps`<`Composers`\>, `Object`, `CSS`<`Object`, `Object`, `DefaultThemeMap`, `Object`\>\>

#### Defined in

node_modules/.pnpm/@stitches+react@1.2.6_react@17.0.2/node_modules/@stitches/react/types/stitches.d.ts:204

___

### useBps

▸ **useBps**(): `Record`<`Breakpoints`, `boolean`\>

#### Returns

`Record`<`Breakpoints`, `boolean`\>

#### Defined in

[packages/gboost-ui/src/context/BreakpointsContext.tsx:28](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-ui/src/context/BreakpointsContext.tsx#L28)

___

### useNotifications

▸ **useNotifications**(): `INotificationsContext`

#### Returns

`INotificationsContext`

#### Defined in

[packages/gboost-ui/src/context/NotificationsContext.tsx:73](https://github.com/awslabs/green-boost/blob/822aaf4/packages/gboost-ui/src/context/NotificationsContext.tsx#L73)
