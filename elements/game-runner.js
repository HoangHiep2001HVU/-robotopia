const html = require('choo/html')
const sf = require('sheetify')
const gameView = require('./game')
const { speedSliderView, playButtonView } = require('./runtime-controls')
const gameStatsView = require('./game-stats')

const gameRunnerPrefix = sf`
  :host {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host > .controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid grey;
  }

  :host > .game {
    position: relative;
    height: calc(100% - 50px);
  }

  @media screen and (max-width: 420px) {
    :host > .controls {
      height: 35px;
    }
  }
`

function gameRunnerView ({
  game, clock,
  onStart, onStop, onChangeSpeed
}) {
  const gameHtml = gameView({
    state: game,
    progress: clock.progress
  })

  const playButtonHtml = playButtonView({
    isRunning: clock.isRunning,
    onStart,
    onStop
  })

  const speedSliderHtml = speedSliderView({
    min: 100,
    max: 1000,
    intervalDuration: clock.intervalDuration,
    onChange: onChangeSpeed
  })

  const gameStatsHtml = gameStatsView({
    game,
    progress: clock.progress
  })

  return html`
    <div class="${gameRunnerPrefix}">
      <div class="controls">
        ${playButtonHtml}
        ${speedSliderHtml}
      </div>
      <div class="game">
         ${gameHtml}
         ${gameStatsHtml}
      </div>      
    </div>
  `
}

module.exports = gameRunnerView
