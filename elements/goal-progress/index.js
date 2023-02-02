const _ = require('lodash')
const html = require('choo/html')
const sf = require('sheetify')
const classNames = require('classnames')
const { checkGoal } = require('./goal-evaluator')

const goalPrefix = sf`
  :host {
    background-color: #DDDDDD;
    color: #404040;
    background-color: rgba(221,221,221,0.85);
    color: #404040;
    margin: 20px;
    padding: 25px;
    border-radius: 3px;
  }

  :host > h2 {
    font-size: 1.2em;
    margin: 0;
  }

  @media screen and (max-width: 820px) {
    :host {
      margin: 0;
      padding: 0px 25px;
    }
    :host .request {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

const goalListPrefix = sf`
  :host {
    padding: 0;
  }
  
  :host > .goal {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  :host > .goal:before {
    content: '';
    width: 25px;
    height: 25px;
    background-size: 25px;
    margin-right: 7px;
    background-image: url('assets/icons/checkbox-empty.svg');
    flex-shrink: 0;
  }
  
  :host > .goal.completed:before {  
    background-size: 25px;
    background-image: url('assets/icons/checkbox-filled.svg');
  }
`

function goalProgressView ({ display, game, goals, workspace }) {
  if (display) {
    const [mandatoryGoals, optionalGoals] = _.partition(goals, (goal) => goal.isMandatory)

    return html`
    <div class="${goalPrefix}">
        <div class="request">
          <h2>Yêu cầu: </h2>
          ${goalListView({ goals: mandatoryGoals, game, workspace })}
        </div>
        <div class="request">
          <h2 style="${optionalGoals.length === 0 ? 'display: none' : ''}">Thưởng: </h2>
          ${goalListView({ goals: optionalGoals, game, workspace })}
        </div>
    </div>
    `
  }
}

function goalListView ({ goals, game, workspace }) {
  if (goals.length === 0) return

  const goalsHtml = _.map(goals, (goal) => {
    const className = classNames('goal', {
      'completed': checkGoal({ goal, workspace, game })
    })

    return html`
      <li class="${className}"><span>${goal.desc}</span></li>
    `
  })

  return html`
    <ul class="${goalListPrefix}">${goalsHtml}</ul>
  `
}

module.exports = {
  goalListView,
  goalProgressView
}
