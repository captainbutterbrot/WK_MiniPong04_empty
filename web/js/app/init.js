/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2016
 * @license   CC-BY-NC-SA-4.0
 */

terminalIndent++;
terminal.log('Module „init“: loading');

define
( ['model/button', 'view/button',
   'model/ball',   'view/ball',
   'model/paddle', 'view/paddle',
   'model/text',   'view/text',
   'view/loop',
   'control/keyboard',
   'logic/minipong'
  ],
  function(ModelButton, ViewButton,
           ModelBall,   ViewBall,
           ModelPaddle, ViewPaddle,
           ModelText,   ViewText,
           ViewLoop,
           controlKeyboard,
           minipong
          )
  { "use strict";

    terminal.log('Module „init“: loaded');
    terminalIndent--;

    return null;
  }
);
