/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2016
 * @license   CC-BY-NC-SA-4.0
 */

terminalIndent++;
terminal.log('Module „logic/minipong“: loading');

define
(['collision/ball_paddle', 'collision/stage_ball', 'collision/stage_paddle',
    'model/loop'
  ],
  function(collisionBallPaddle, collisionStageBall, collisionStagePaddle,
           ModelLoop
  )
  { "use strict";

    terminal.log('Module „logic/minipong“: loaded');
    terminalIndent--;

    return null;
  }
);