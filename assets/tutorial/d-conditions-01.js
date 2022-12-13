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
        [1, 3, 1, 3, 3, 3, 1, 3, 1],
        [1, 3, 1, 3, 1, 3, 1, 3, 1],
        [1, 3, 1, 3, 1, 4, 1, 3, 1],
        [1, 3, 1, 3, 1, 1, 1, 3, 1],
        [1, 3, 1, 3, 3, 3, 3, 3, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1]
      ],

      entities: [
        entities.tutorialRobot({ x: 1, y: 7, id: 'ROBOT', orientation: ORIENTATION.BACK })
      ]
    },

    editor: {
      workspace: `
        <xml xmlns="http://www.w3.org/1999/xhtml">
          <block type="start_handler" x="50" y="50" deletable="false">
            <statement name="body">
              <block type="controls_repeat"/>
              <field name="TIMES">3</field>
              <statement name="DO">
                <block type="controls_if"/>
              </statement>
            </statement>
          </block>
        </xml>
      `,

      toolbox: `
        <xml id="toolbox" style="display: none">
          <category name="Code Blocks" colour="${blockColors.EVENT_COLOR}">
            <block type="move"></block>
            <block type="rotate"></block>
            <block type="controls_repeat"></block>
            <block type="controls_if"></block>
            <block type="is_next_field"></block>
          </category>
        </xml>
      `
    },

    label: 'Điều kiện - Vòng bên phải',

    goals: [
      {
        type: 'touchTile',
        params: { tileID: 4 },
        desc: 'Di chuyển đến gạch kim loại',
        isMandatory: true
      },
      {
        type: 'maxBlocks',
        params: { amount: 5 },
        desc: 'Sử dụng tối đa 5 khối',
        isMandatory: false
      }
    ],

    storyModal: {
      text: `Câu đố này có vẻ khá khó, điều tốt là bạn vừa có khối điều kiện. Với khối này, mức này sẽ không có vấn đề gì cả`,
      hint: 'Trông có vẻ khó, nhưng bạn có thể chỉ cần kiểm tra xem ô tiếp theo có phải là nước hay không'
    },

    winModal: {
      text: `Bạn là một con thú!`
    }
  }
}
