const { ORIENTATION } = require('../../lib/utils/types')
const entities = require('../../models/game/entities')
const blockColors = require('../../elements/blockly/colors')

module.exports = () => {
  return {
    game: {
      tiles: [
        [1, 1, 1, 1],
        [1, 1, 4, 1],
        [1, 1, 3, 1],
        [1, 3, 3, 1],
        [1, 3, 1, 1],
        [1, 3, 3, 1],
        [1, 1, 1, 1]
      ],

      entities: [
        entities.tutorialRobot({ x: 2, y: 5, id: 'ROBOT', orientation: ORIENTATION.LEFT })
      ]
    },

    editor: {
      workspace: `<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="start_handler" x="50" y="50" deletable="false">
    <statement name="body">
    <block type="move" deletable="false">
    <next>
        <block type="move" deletable="false" />
    </next>
    <next>
        <block type="move" deletable="false" />
    </next>
    <next>
        <block type="move" deletable="false" />
    </next>
    <next>
        <block type="move" deletable="false" />
    </next>
    <next>
        <block type="move" deletable="false" />
    </next>
    <next>
        <block type="rotate" deletable="false" />
    </next>
    <next>
        <block type="rotate" deletable="false" />
    </next>
    <next>
        <block type="rotate" deletable="false" />
    </next>
</block>
</statement>
</block>
</xml>`,

      toolbox: `<xml id="toolbox" style="display: none">
                <category />
              </xml>`
    },

    label: 'Blockly - Sắp xếp lại',

    goals: [
      {
        type: 'moveTo',
        params: {position: {x: 2, y: 1}, entity: 'ROBOT'},
        desc: 'Di chuyển robot đến gạch kim loại',
        isMandatory: true
      }
    ],

    storyModal: {
      text: `Bây giờ bạn đã biết cách kéo các khối mới vào canvas, bạn cần thành thạo việc sắp xếp lại chúng. Xếp các khối theo đúng thứ tự để giành chiến thắng ở cấp độ này.`,
      hint: 'Bạn chỉ có thể sử dụng các khối nhất định để giải quyết cấp độ này'
    },

    winModal: {
      text: `Bạn đã nắm vững những điều cơ bản của giao diện, bây giờ cuộc hành trình của bạn tiếp tục với một số câu đố khó hơn.`
    }
  }
}
