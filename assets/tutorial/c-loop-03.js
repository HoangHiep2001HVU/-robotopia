const { ORIENTATION } = require('../../lib/utils/types')
const entities = require('../../models/game/entities')
const blockColors = require('../../elements/blockly/colors')

module.exports = () => {
  return {
    game: {
      tiles: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 3, 3, 3, 3, 3, 3, 3, 1],
        [1, 3, 1, 1, 1, 1, 1, 3, 1],
        [1, 3, 1, 1, 1, 1, 1, 3, 1],
        [1, 3, 1, 1, 1, 1, 1, 3, 1],
        [1, 3, 1, 1, 1, 1, 1, 3, 1],
        [1, 3, 1, 1, 1, 1, 1, 3, 1],
        [1, 3, 1, 1, 1, 1, 1, 4, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1]
      ],

      entities: [
        entities.tutorialRobot({ x: 1, y: 7, id: 'ROBOT', orientation: ORIENTATION.BACK }),
        entities.chest({ x: 7, y: 7, orientation: 'BACK'})
      ]
    },

    editor: {
      workspace: `<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="start_handler" x="50" y="50" deletable="false">
    <statement name="body">
    <block type="controls_repeat">
    <field name="TIMES">3</field>
    <statement name="DO">
        <block type="move"></block>
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
                </category>
              </xml>`
    },

    label: 'Vòng lặp - Xếp lồng vào nhau',

    goals: [
      {
        type: 'moveTo',
        params: {position: {x: 7, y: 7}, entity: 'ROBOT'},
        desc: 'Di chuyển robot đến gạch kim loại',
        isMandatory: true
      },
      {
        type: 'maxBlocks',
        params: {amount: 4},
        desc: 'Sử dụng tối đa bốn khối',
        isMandatory: false
      },
      {
        type: 'useBlockWithinBlock',
        params: { outerBlock: 'controls_repeat', innerBlock: 'controls_repeat' },
        desc: 'Lồng một khối lặp lại bên trong một khối lặp lại khác',
        isMandatory: false
      }
    ],

    storyModal: {
      text: `Làm tốt! Bây giờ đây là một khó khăn.`,
      hint: 'Bạn có thể sử dụng vòng lặp bên trong vòng lặp.'
    },

    winModal: {
      text: `Tiếp theo là gì? - Chế độ vòng lặp khó hơn!`
    }
  }
}
