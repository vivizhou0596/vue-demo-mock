import Mock from 'mockjs';
const Users = [];

for (let i = 0; i < 10; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),//id
    name: Mock.Random.cname(),//姓名
    'age|18-60': 1,//年龄
    birth: Mock.Random.date(),//生日
    sex: Mock.Random.integer(0, 1),//性别
    icon:Mock.Random.image('20x20', '#894FC4', '#FFF', 'png', '!'),//照片
    "subName|1-5":[{//社交平台信息
      name:'@name',
      icon:"@image('20x20','#4A7BF7', '#FFF', 'png', '!')"
    }],
    addr: Mock.mock('@county(true)')//地址
  }));
}

export { Users };