import Dotenv from 'dotenv';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import $ from 'jquery';
// TODO: Need to fix this in order to use jest
// import Foundation from 'foundation-sites';

global.$ = global.jQuery = $;
Dotenv.config({ path: '.env.test' });
Enzyme.configure({ adapter: new Adapter() });
