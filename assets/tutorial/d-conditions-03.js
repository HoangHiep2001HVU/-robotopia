const { ORIENTATION } = require('../../lib/utils/types')
const entities = require('../../models/game/entities')
const blockColors = require('../../elements/blockly/colors')

module.exports = () => {
  return {
    game: {
      tiles: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 3, 2, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 3, 3, 3, 3, 2, 1],
        [1, 1, 2, 1, 3, 1, 1, 3, 1, 1],
        [1, 3, 3, 3, 3, 5, 1, 3, 1, 1],
        [1, 1, 3, 1, 1, 1, 1, 3, 1, 1],
        [1, 1, 3, 1, 5, 1, 1, 3, 4, 1],
        [1, 2, 3, 3, 3, 3, 1, 5, 1, 1],
        [1, 1, 1, 1, 3, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      ],

      entities: [
        entities.tutorialRobot({ x: 4, y: 8, id: 'ROBOT', orientation: ORIENTATION.BACK })
      ]
    },

    editor: {
      workspace: `<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="start_handler" x="50" y="50" deletable="false">
    <statement name="body">
    <block type="move" deletable="false"></block>
</statement>
</block>
</xml>`,

      toolbox: `<xml id="toolbox" style="display: none">
                <category name="Code Blocks" colour="${blockColors.EVENT_COLOR}">
                    <block type="rotate"></block>
                    <block type="controls_repeat"></block>
                    <block type="controls_if"></block>
                    <block type="is_next_field"></block>
                </category>
              </xml>`
    },

    label: 'Điều kiện - Tránh vật cản',

    goals: [
      {
        type: 'touchTile',
        params: { tileID: 4 },
        desc: 'Di chuyển đến gạch kim loại',
        isMandatory: true
      }
    ],

    storyModal: {
      text: `Bây giờ bạn đã biết sức mạnh của khối điều kiện... Lần này, bạn phải giải quyết cấp độ bằng một khối di chuyển duy nhất`,
      hint: 'Cố gắng xem mô hình, các khối đưa ra chỉ dẫn về nơi cần đi.'
    },

    winModal: {
      text: `Hãy lấy một số tài nguyên`,
      unlockedBlock: { name: 'Collect Block', img: '../../assets/img/tutorials/blocks/collect-resource.png' }
    }
  }
}
