const { ORIENTATION } = require('../../lib/utils/types')
const entities = require('../../models/game/entities')
const blockColors = require('../../elements/blockly/colors')

module.exports = () => {
  return {
    game: {
      tiles: [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 4, 3, 3, 3, 3, 1],
        [1, 1, 1, 1, 3, 1, 1],
        [1, 1, 1, 3, 3, 1, 1],
        [1, 1, 1, 3, 1, 1, 1],
        [1, 1, 3, 3, 1, 1, 1],
        [1, 1, 3, 1, 1, 1, 1],
        [1, 3, 3, 1, 1, 1, 1],
        [1, 3, 1, 1, 1, 1, 1],
        [1, 3, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1]
      ],

      entities: [
        entities.tutorialRobot({ x: 1, y: 9, id: 'ROBOT', orientation: ORIENTATION.BACK })
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

    label: 'Vòng lặp - Cấu trúc tốt',

    goals: [
      {
        type: 'moveTo',
        params: {position: {x: 1, y: 1}, entity: 'ROBOT'},
        desc: 'Di chuyển robot đến gạch kim loại',
        isMandatory: true
      }
    ],

    storyModal: {
      text: 'Bạn đang làm một công việc tuyệt vời. Cấp độ này sẽ khó hơn một chút.',
      hint: ''
    },

    winModal: {
      text: 'Bạn đã làm rất tốt!'
    }
  }
}
