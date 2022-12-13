const { ORIENTATION } = require('../../lib/utils/types')
const entities = require('../../models/game/entities')
const blockColors = require('../../elements/blockly/colors')

module.exports = () => {
  return {
    game: {
      tiles: [
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 3, 4, 1],
        [1, 1, 3, 3, 2, 1],
        [1, 3, 3, 2, 1, 1],
        [1, 3, 2, 1, 1, 1],
        [1, 1, 1, 1, 1, 1]
      ],

      entities: [
        entities.tutorialRobot({ x: 1, y: 4, id: 'ROBOT', orientation: ORIENTATION.BACK }),
        entities.chest({ x: 4, y: 1, orientation: 'FRONT' })
      ]
    },

    editor: {
      workspace: `<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="start_handler" x="50" y="50" deletable="false">
</block>
</xml>`,

      toolbox: `<xml id="toolbox" style="display: none">
                <category name="Code Blocks" colour="${blockColors.EVENT_COLOR}">
                    <block type="move"></block>
                    <block type="rotate"></block>
                </category>
              </xml>`
    },

    label: 'Rẽ - ZigZag',

    goals: [
      {
        type: 'moveTo',
        params: {position: {x: 4, y: 1}, entity: 'ROBOT'},
        desc: 'Di chuyển robot đến gạch kim loại',
        isMandatory: true
      },
      {
        type: 'dontTouchTileType',
        params: {tileID: 2, entity: 'ROBOT'},
        desc: 'Do not get your robot dirty',
        isMandatory: false
      }
    ],

    storyModal: {
      text: `Được rồi, tôi thấy bạn đã tìm ra cách rẽ trái. Nhưng bạn cũng có thể rẽ phải. Điên, tôi biết.`,
      hint: ''
    },

    winModal: {
      text: `Mọi thứ bên trong khối này sẽ được lặp lại nhiều lần như được xác định bởi số`,
      unlockedBlock: { name: 'Repeat', img: '../../assets/img/tutorials/blocks/repeat-10-block.png' }
    }

  }
}
