import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header, HeaderProps } from './components/header/header';
import { Intro, IntroProps} from './components/intro/intro';
import { Pose, PoseProps } from './components/pose/pose';

console.log('funguju!');

document.querySelector('#root').innerHTML = render(
  <div id="app" className="app container">
    <Header title={HeaderProps.title} />
    <Intro heading={IntroProps.heading} text={IntroProps.text} />
    <Pose src={PoseProps.src} />
  </div>
);
