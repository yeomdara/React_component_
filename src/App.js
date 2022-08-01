import React, { Component } from 'react';
import Sky from './components/sky/sky';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'space',
      background: '#2F3939',
      how: 100,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      mode: e.target.value,
      how: e.target.attributes.how.value,
      background: e.target.attributes.background.value,
    });
  }
  render() {
    const { mode, background, how } = this.state;
    const modes = {
      space: {
        0: 'https://c.tenor.com/BdVowvnbXo4AAAAC/space-astronaut.gif',
        1: 'https://i.pinimg.com/originals/39/7e/84/397e84f7b045a4164b044b01ace8e9bb.gif',
        2: 'https://i.pinimg.com/originals/39/7e/84/397e84f7b045a4164b044b01ace8e9bb.gif',
        3: 'https://bestanimations.com/media/earth/726892854earth-spinning-rotating-animation-14.gif',
        4: 'https://cutewallpaper.org/24/sun-gif-transparent/untitled-%F0%9F%91%A8%E2%80%8D%F0%9F%A6%BD-%F0%9F%91%A8%E2%80%8D%F0%9F%8D%BC-%F0%9F%A5%B5-by-serguki.gif',
        5: 'https://cutewallpaper.org/24/sun-gif-transparent/untitled-%F0%9F%91%A8%E2%80%8D%F0%9F%A6%BD-%F0%9F%91%A8%E2%80%8D%F0%9F%8D%BC-%F0%9F%A5%B5-by-serguki.gif',
        6: 'https://24.media.tumblr.com/9b4a3a987d52dec17088a579260a4c88/tumblr_mm7ozcjolf1rdpopao1_500.gif',
        7: 'https://24.media.tumblr.com/9b4a3a987d52dec17088a579260a4c88/tumblr_mm7ozcjolf1rdpopao1_500.gif',
        8: 'https://cutewallpaper.org/24/sun-gif-transparent/untitled-%F0%9F%91%A8%E2%80%8D%F0%9F%A6%BD-%F0%9F%91%A8%E2%80%8D%F0%9F%8D%BC-%F0%9F%A5%B5-by-serguki.gif',
        9: 'https://bestanimations.com/media/earth/726892854earth-spinning-rotating-animation-14.gif',
        10: 'https://bestanimations.com/media/earth/726892854earth-spinning-rotating-animation-14.gif',
        11: 'https://cutewallpaper.org/24/sun-gif-transparent/untitled-%F0%9F%91%A8%E2%80%8D%F0%9F%A6%BD-%F0%9F%91%A8%E2%80%8D%F0%9F%8D%BC-%F0%9F%A5%B5-by-serguki.gif',
        12: 'https://c.tenor.com/BdVowvnbXo4AAAAC/space-astronaut.gif',
        13: 'https://i.pinimg.com/originals/39/7e/84/397e84f7b045a4164b044b01ace8e9bb.gif',
        14: 'https://i.pinimg.com/originals/39/7e/84/397e84f7b045a4164b044b01ace8e9bb.gif',
        15: 'https://bestanimations.com/media/earth/726892854earth-spinning-rotating-animation-14.gif',
        16: 'https://cutewallpaper.org/24/sun-gif-transparent/untitled-%F0%9F%91%A8%E2%80%8D%F0%9F%A6%BD-%F0%9F%91%A8%E2%80%8D%F0%9F%8D%BC-%F0%9F%A5%B5-by-serguki.gif',
        17: 'https://cutewallpaper.org/24/sun-gif-transparent/untitled-%F0%9F%91%A8%E2%80%8D%F0%9F%A6%BD-%F0%9F%91%A8%E2%80%8D%F0%9F%8D%BC-%F0%9F%A5%B5-by-serguki.gif',
        18: 'https://24.media.tumblr.com/9b4a3a987d52dec17088a579260a4c88/tumblr_mm7ozcjolf1rdpopao1_500.gif',
        19: 'https://24.media.tumblr.com/9b4a3a987d52dec17088a579260a4c88/tumblr_mm7ozcjolf1rdpopao1_500.gif',
        20: 'https://cutewallpaper.org/24/sun-gif-transparent/untitled-%F0%9F%91%A8%E2%80%8D%F0%9F%A6%BD-%F0%9F%91%A8%E2%80%8D%F0%9F%8D%BC-%F0%9F%A5%B5-by-serguki.gif',
        21: 'https://bestanimations.com/media/earth/726892854earth-spinning-rotating-animation-14.gif',
        22: 'https://bestanimations.com/media/earth/726892854earth-spinning-rotating-animation-14.gif',
        23: 'https://cutewallpaper.org/24/sun-gif-transparent/untitled-%F0%9F%91%A8%E2%80%8D%F0%9F%A6%BD-%F0%9F%91%A8%E2%80%8D%F0%9F%8D%BC-%F0%9F%A5%B5-by-serguki.gif',
      },
      404: {
        0: 'https://svgshare.com/i/9T5.svg',
      },
      animals: {
        0: 'https://image.flaticon.com/icons/svg/1198/1198051.svg',
        1: 'https://image.flaticon.com/icons/svg/1198/1198052.svg',
        2: 'https://image.flaticon.com/icons/svg/1198/1198053.svg',
        3: 'https://image.flaticon.com/icons/svg/1198/1198053.svg',
        4: 'https://image.flaticon.com/icons/svg/1198/1198056.svg',
        5: 'https://image.flaticon.com/icons/svg/1198/1198057.svg',
        6: 'https://image.flaticon.com/icons/svg/1198/1198059.svg',
        7: 'https://image.flaticon.com/icons/svg/1198/1198060.svg',
        8: 'https://image.flaticon.com/icons/svg/1198/1198062.svg',
        9: 'https://image.flaticon.com/icons/svg/1198/1198063.svg',
        10: 'https://image.flaticon.com/icons/svg/1198/1198065.svg',
        11: 'https://image.flaticon.com/icons/svg/1198/1198053.svg',
        12: 'https://image.flaticon.com/icons/svg/1198/1198068.svg',
        13: 'https://image.flaticon.com/icons/svg/1198/1198069.svg',
        14: 'https://image.flaticon.com/icons/svg/1198/1198070.svg',
        15: 'https://image.flaticon.com/icons/svg/1198/1198073.svg',
        16: 'https://image.flaticon.com/icons/svg/1198/1198075.svg',
        17: 'https://image.flaticon.com/icons/svg/1198/1198076.svg',
        18: 'https://image.flaticon.com/icons/svg/1198/1198079.svg',
      },
      gif: {
        0: 'http://static.vibe.com/uploads/2013/08/VIBE-Vixen-Michael-Jackson-Gif21.gif',
        1: 'https://media.giphy.com/media/otnqsqqzmsw7K/giphy.gif',
        2: 'https://33.media.tumblr.com/ef95f99ce3222e912037af845e52ed6b/tumblr_nhcohan9qL1u2jwbho1_400.gif',
        3: 'https://media.giphy.com/media/TSn2zVInxOm2c/giphy.gif',
        4: 'http://www.reactiongifs.com/r/gj1.gif',
        5: 'https://media2.giphy.com/media/HjPbLbmep2aJO/200.gif',
        6: 'http://i.imgur.com/CsEGVc8.gif',
        7: 'https://media.giphy.com/media/iPTTjEt19igne/giphy.gif',
        8: 'http://www.reactiongifs.com/wp-content/uploads/2013/04/tip-hat.gif',
        9: 'http://0.media.collegehumor.cvcdn.com/82/38/32771b4d97dd7d087187ec99e4f443e1-tina-fey-self-five.gif',
        10: 'https://media0.giphy.com/media/vnnoqBjIrJ73y/200.gif',
        
      },
      403: {
        0: 'https://image.flaticon.com/icons/svg/1244/1244031.svg',
      },
      500: {
        0: 'https://image.flaticon.com/icons/svg/155/155275.svg',
      },
      503: {
        0: 'https://image.flaticon.com/icons/svg/1234/1234292.svg',
      },
     
  
      autumn: {
        0: 'https://image.flaticon.com/icons/svg/1230/1230864.svg',
        1: 'https://image.flaticon.com/icons/svg/1230/1230865.svg',
        2: 'https://image.flaticon.com/icons/svg/1230/1230867.svg',
        3: 'https://image.flaticon.com/icons/svg/1230/1230868.svg',
        4: 'https://image.flaticon.com/icons/svg/1230/1230869.svg',
        5: 'https://image.flaticon.com/icons/svg/1230/1230871.svg',
        6: 'https://image.flaticon.com/icons/svg/1230/1230882.svg',
        7: 'https://image.flaticon.com/icons/svg/1230/1230875.svg',
      },
      social: {
        0: 'https://image.flaticon.com/icons/svg/174/174855.svg',
        1: 'https://image.flaticon.com/icons/svg/174/174848.svg',
        2: 'https://image.flaticon.com/icons/svg/174/174883.svg',
        3: 'https://image.flaticon.com/icons/svg/174/174879.svg',
        4: 'https://image.flaticon.com/icons/svg/174/174857.svg',
        5: 'https://image.flaticon.com/icons/svg/174/174870.svg',
        6: 'https://image.flaticon.com/icons/svg/174/174869.svg',
        7: 'https://image.flaticon.com/icons/svg/174/174872.svg',
        8: 'https://image.flaticon.com/icons/svg/174/174875.svg',
        9: 'https://image.flaticon.com/icons/svg/174/174845.svg',
        10: 'https://image.flaticon.com/icons/svg/174/174837.svg',
        11: 'https://image.flaticon.com/icons/svg/174/174858.svg',
        12: 'https://image.flaticon.com/icons/svg/174/174844.svg',
        13: 'https://image.flaticon.com/icons/svg/174/174865.svg',
        14: 'https://image.flaticon.com/icons/svg/174/174874.svg',
      },
      react: {
        0: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png',
      }
    }
    return (
      <div className="App">
        <div className="title">
          <div className="git">
            <h1>Reak</h1>
            <a className="github-button" href="https://github.com/yeomdara" data-icon="github-button" data-size="github-button" data-show-count="true" aria-label="github-button">Github</a>
          </div>
          <button how={35} background={'#2F3939'} value={'gif'} onClick={this.handleClick}>Gif 🤣</button>
          <button how={100} background={'#2F3939'} value={'404'} onClick={this.handleClick}>404 💩</button>
          <button how={50} background={'#2F3939'} value={'space'} onClick={this.handleClick}>Space 🚀</button>
          <button how={50} background={'#2F3939'} value={'react'} onClick={this.handleClick}>React 😍</button>
        </div>
        <Sky
          images={modes[mode]}
          how={how}
          size="100px"
          time={30}
          background={background}
        />
      </div>
    );
  }
}

export default App;
