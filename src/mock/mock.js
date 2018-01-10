import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {Users} from './data/user'
let _Users = Users
export default{
	bootstrap(){
		let mock = new MockAdapter(axios)
		mock.onGet('/user/list').reply(config => {
	      let {name} = config.params;
	      let mockUsers = _Users.filter(user => {
	        if (name && user.name.indexOf(name) == -1) return false;
	        return true;
	      });
	      return new Promise((resolve, reject) => {
	        setTimeout(() => {
	          resolve([200, {
	            users: mockUsers
	          }]);
	        }, 1000);
	      });
	    });
	}
}