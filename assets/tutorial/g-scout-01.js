/* globals localStorage */
const { ORIENTATION } = require('../../lib/utils/types')
const entities = require('../../models/game/entities')
const blockColors = require('../../elements/blockly/colors')

const timeLimit = 10

module.exports = () => {
  return {
    game: {
      tiles: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1],
        [1, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 1, 1, 1, 1, 1, 3, 3, 3, 3, 2, 3, 3, 1],
        [1, 3, 3, 3, 2, 2, 2, 2, 2, 2, 3, 3, 1, 1, 1, 1, 3, 3, 3, 2, 2, 2, 3, 3, 1],
        [1, 3, 3, 2, 2, 2, 2, 3, 2, 3, 3, 3, 3, 1, 1, 1, 3, 3, 3, 2, 2, 3, 3, 3, 1],
        [1, 3, 3, 3, 2, 2, 3, 3, 2, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1],
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1],
        [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 1],
        [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1],
        [1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1],
        [1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1, 1, 1],
        [1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1],
        [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 4, 5, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1],
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1],
        [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1],
        [1, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1],
        [1, 1, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1],
        [1, 1, 1, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 1, 1],
        [1, 1, 1, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 1],
        [1, 1, 1, 1, 3, 3, 3, 3, 2, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 1],
        [1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 3, 3, 3, 2, 2, 2, 2, 3, 3, 1],
        [1, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 2, 3, 2, 3, 1],
        [1, 3, 3, 3, 3, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1],
        [1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      ],

      entities: [
        entities.tutorialRobot({ x: 12, y: 12, id: 'ROBOT', orientation: ORIENTATION.BACK, teamId: 1, discoverRange: 2 }),
        entities.tutorialBase({ x: 12, y: 12, id: 'BASE', teamId: 1 })
      ],

      teams: {
        1: { resources: 0, points: 0 }
      }
    },

    resources: { numberOfSpots: 10, value: 100, chunks: 10, color: 'BLUE' },

    editor: {
      workspace: `<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="start_handler" x="50" y="50" deletable="false">
  <statement name="body">
    <block type="controls_repeat">
      <field name="TIMES">3</field>
      <statement name="DO">
      <block type="move">
        <field name="move">FORWARD</field>
          <next>
            <block type="controls_if">
              <value name="IF0">
                <block type="logic_compare">
                  <field name="OP">EQ</field>
                  <value name="A">
                    <block type="random_number" id="/2hWV!Bsg{eIiMHNaQm6">
                      <field name="min">1</field>
                      <field name="max">2</field>
                    </block>
                  </value>
                  <value name="B">
                    <block type="math_number" id="nL#iBs7tFzsRy}-I%z3a">
                      <field name="NUM">1</field>
                    </block>
                  </value>
                </block>
              </value>
            <statement name="DO0">
              <block type="rotate">
                <field name="direction">LEFT</field>
              </block>
            </statement>
            </block>
          </next>
        </block>
      </statement>
    </block>
  </statement>
</block>
</xml>`,

      toolbox: `<xml id="toolbox" style="display: none">
                <category name="Code Blocks" colour="${blockColors.EVENT_COLOR}">
                    <block type="move"></block>
                    <block type="rotate"></block>
                    <block type="controls_repeat"></block>
                    <block type="controls_if"></block>
                    <block type="logic_compare"></block>
                    <block type="math_number"></block>
                    <block type="random_number"></block>
                </category>
              </xml>`
    },

    label: 'Trinh s??t - Ho???c... ??i loanh quanh kh??ng m???c ????ch',

    goals: [
      {
        type: 'discoverEntityOfType',
        params: {type: 'resource'},
        desc: 'L??m cho Robot trinh s??t b???n ????? ????? t??m th??? g?? ???? th?? v???',
        isMandatory: true
      },
      {
        type: 'gameTimeLimit',
        params: {timeInS: timeLimit},
        desc: 'T??m m???t c??i g?? ???? b??n trong ' + timeLimit + ' gi??y',
        isMandatory: false
      }
    ],

    storyModal: {
      text: `Do th??m b???n ?????. Hya!`,
      hint: 'Khi b???n b???t ?????u tr?? ch??i, nh???ng vi??n kim c????ng ng???u nhi??n s??? xu???t hi???n tr??n b???n ?????.'
    },

    winModal: {
      text: 'M???t s??? t??? kh??n ngoan.'
    },

    onFinish: ({gameState, workspace}) => {
      localStorage.setItem('robot04', JSON.stringify({
        workspace: workspace,
        entities: gameState && gameState.current ? JSON.stringify(gameState.current.entities) : null
      }))
    }
  }
}
