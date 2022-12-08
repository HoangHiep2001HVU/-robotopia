const { ORIENTATION } = require('../../lib/utils/types')
const entities = require('../../models/game/entities')
const blockColors = require('../../elements/blockly/colors')

module.exports = () => {
  return {
    game: {
      tiles: [
        [1, 1, 1],
        [1, 4, 1],
        [1, 3, 1],
        [1, 3, 1],
        [1, 3, 1],
        [1, 3, 1],
        [1, 1, 1]
      ],

      entities: [
        entities.tutorialRobot({ x: 1, y: 5, id: 'ROBOT', orientation: ORIENTATION.BACK }),
        entities.chest({ x: 1, y: 1, orientation: 'FRONT' })
      ]
    },

    editor: {
      workspace: `<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="start_handler" x="50" y="50" deletable="false">
    <statement name="body">
    <block type="move">
    <next>
        <block type="move"></block>
    </next>
</block>
</statement>
</block>
</xml>`,

      toolbox: `<xml id="toolbox" style="display: none">
                <category name="Code Blocks" colour="${blockColors.EVENT_COLOR}">
                    <block type="move" ></block>
                </category>
              </xml>`
    },

    label: 'Blockly - Kéo và Thả',

    goals: [
      {
        type: 'moveTo',
        params: {position: {x: 1, y: 1}, entity: 'ROBOT'},
        desc: 'Di chuyển robot đến gạch kim loại',
        isMandatory: true
      }
    ],

    storyModal: {
      text: `Chào mừng bạn đến với Robotopia, nơi bạn có thể học những kiến ​​thức cơ bản về lập trình với những rô-bốt nhỏ dễ thương.`,
      hint: 'Bạn có thể sao chép một khối bằng cách sao chép và dán nó bằng CTRL+C và CTRL+V'
    },

    winModal: {
      text: `This block allows you to rotate your robot. The direction can be changed via the dropdown menu inside the block`,
      unlockedBlock: { name: 'Rotate', img: '../../assets/img/tutorials/blocks/rotate-dropdown.png' }
    },

    highlighters: {
      classes: ['play-button']
    }
  }
}
